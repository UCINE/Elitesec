import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/program') {
    return NextResponse.redirect(new URL('/program/event_program.html', request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/program'],
};
