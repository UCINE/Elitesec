import './globals.css';

import { Analytics } from '@vercel/analytics/react';
import Nav from './nav';
import Toast from './toast';
import React, { Suspense } from 'react';
import {Providers} from "./provider";

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-black">
      <body className="h-full">
          <Suspense>
            <Nav />
          </Suspense>
          <Providers>{children}</Providers>
          <Analytics />
          {/*<Toast />*/}
      </body>
    </html>
  );
}
