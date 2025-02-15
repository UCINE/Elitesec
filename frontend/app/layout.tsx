import "../styles/globals.css";
import React from "react";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>EliteSec.</title>
      </head>
      <body className="scroll-smooth antialiased [font-feature-settings:'ss01']">
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
