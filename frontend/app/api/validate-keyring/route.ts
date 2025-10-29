import { NextRequest, NextResponse } from 'next/server';
import { VALID_IDS } from './valid-ids';

// In-memory store for used IDs (in production, use a database)
// This resets on every deployment
const usedIds = new Set<string>();

// Rate limiting storage
interface RateLimitData {
  attempts: number[];
  failedAttempts: number;
  blockedUntil?: number;
}

const rateLimitMap = new Map<string, RateLimitData>();

// Configuration
const RATE_LIMIT_WINDOW = 5 * 60 * 1000; // 5 minutes
const MAX_ATTEMPTS_PER_WINDOW = 5;
const MAX_TOTAL_FAILED_ATTEMPTS = 15;
const FAILED_ATTEMPT_DELAY = 2000; // 2 seconds
const BLOCK_DURATION = 30 * 60 * 1000; // 30 minutes

// Helper function to get client IP
function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  return forwarded?.split(',')[0] || realIP || 'unknown';
}

// Helper function to check rate limit
function checkRateLimit(ip: string): { allowed: boolean; message?: string } {
  const now = Date.now();
  const data = rateLimitMap.get(ip) || { attempts: [], failedAttempts: 0 };

  // Check if IP is blocked
  if (data.blockedUntil && data.blockedUntil > now) {
    const minutesLeft = Math.ceil((data.blockedUntil - now) / 60000);
    return {
      allowed: false,
      message: `Too many failed attempts. Please try again in ${minutesLeft} minute${minutesLeft > 1 ? 's' : ''}.`,
    };
  }

  // Clean up old attempts outside the window
  data.attempts = data.attempts.filter((timestamp) => now - timestamp < RATE_LIMIT_WINDOW);

  // Check if exceeded rate limit
  if (data.attempts.length >= MAX_ATTEMPTS_PER_WINDOW) {
    return {
      allowed: false,
      message: `Too many attempts. Please wait a few minutes and try again.`,
    };
  }

  // Check if exceeded total failed attempts
  if (data.failedAttempts >= MAX_TOTAL_FAILED_ATTEMPTS) {
    data.blockedUntil = now + BLOCK_DURATION;
    rateLimitMap.set(ip, data);
    return {
      allowed: false,
      message: `Account temporarily blocked due to too many failed attempts. Please try again later.`,
    };
  }

  return { allowed: true };
}

// Helper function to record attempt
function recordAttempt(ip: string, success: boolean) {
  const now = Date.now();
  const data = rateLimitMap.get(ip) || { attempts: [], failedAttempts: 0 };

  data.attempts.push(now);
  if (!success) {
    data.failedAttempts += 1;
  }

  rateLimitMap.set(ip, data);
}

// Helper function to add delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function POST(request: NextRequest) {
  const clientIP = getClientIP(request);

  try {
    const { id } = await request.json();

    // Check rate limit first
    const rateLimitCheck = checkRateLimit(clientIP);
    if (!rateLimitCheck.allowed) {
      return NextResponse.json(
        { success: false, message: rateLimitCheck.message },
        { status: 429 }
      );
    }

    if (!id || typeof id !== 'string') {
      recordAttempt(clientIP, false);
      return NextResponse.json(
        { success: false, message: 'Invalid ID format' },
        { status: 400 }
      );
    }

    // Normalize the ID (trim whitespace and convert to uppercase)
    const normalizedId = id.trim().toUpperCase();

    // Check if ID is valid
    if (!VALID_IDS.includes(normalizedId)) {
      recordAttempt(clientIP, false);
      // Add delay to slow down brute force attempts
      await delay(FAILED_ATTEMPT_DELAY);
      return NextResponse.json(
        { success: false, message: 'Invalid ID. Please check your key ring and try again.' },
        { status: 401 }
      );
    }

    // Check if ID has already been used
    if (usedIds.has(normalizedId)) {
      recordAttempt(clientIP, false);
      await delay(FAILED_ATTEMPT_DELAY);
      return NextResponse.json(
        { success: false, message: 'This ID has already been redeemed.' },
        { status: 409 }
      );
    }

    // Mark ID as used
    usedIds.add(normalizedId);

    // Record successful attempt
    recordAttempt(clientIP, true);

    // Return success message
    return NextResponse.json({
      success: true,
      message: 'Congrats! Come to HackerOne booth at Student Center on Friday October 31st at 09:30 PM to get your prize and bring your key ring.',
    });
  } catch (error) {
    console.error('Error validating key ring ID:', error);
    recordAttempt(clientIP, false);
    return NextResponse.json(
      { success: false, message: 'An error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
