import "../styles/globals.css";
import React from "react";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from 'next/script';

export const metadata = {
  title: "EliteSec - Morocco's Cybersecurity Student Club at UM6P-1337",
  description: "EliteSec is Morocco's leading student-run cybersecurity club at UM6P-1337, offering workshops, CTF competitions, and training in ethical hacking and digital security for Moroccan students.",
  keywords: ["cybersecurity Morocco", "CTF competitions Morocco", "UM6P security", "1337 cybersecurity club", "Moroccan security club", "ethical hacking training", "digital security Morocco", "cybersecurity workshops", "student security club", "computer security Morocco"],
  openGraph: {
    title: "EliteSec - Cybersecurity Student Club",
    description: "Building a community of cybersecurity enthusiasts and professionals in Morocco",
    url: "https://elites3c.club",
    siteName: "EliteSec",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "EliteSec Cybersecurity Club Logo and Team",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EliteSec - Cybersecurity Student Club at UM6P-1337",
    description: "Building a community of cybersecurity enthusiasts and professionals in Morocco",
    images: ["/images/logo.png"],
  },
  alternates: {
    canonical: 'https://elites3c.club',
  }
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="msvalidate.01" content="F2999D4C07EC7B48249987D285D11B15" />
        <meta name="google-site-verification" content="iGmRq4QDkCrzfhXWYT95XpkhpCfTvLI-b3-cnWv_d1w" />
        <link rel="canonical" href="https://elites3c.club" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="manifest" href="/manifest.json" />
        <Script id="structured-data" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "EliteSec",
              "url": "https://elites3c.club",
              "logo": "https://elites3c.club/images/logo.png",
              "description": "Student-run cybersecurity club at UM6P-1337 focused on providing guidance, awareness, and education in the cybersecurity field.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Morocco"
              },
              "sameAs": [
                "https://github.com/The-Elites-Security",
                "https://linkedin.com/company/elitesec"
              ]
            }
          `}
        </Script>
      </head>
      <body className="scroll-smooth antialiased [font-feature-settings:'ss01']">
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
