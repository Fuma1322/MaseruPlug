import Footer from '@/components/Frontend/Footer';
import MobileDock from '@/components/Frontend/MobileDock';
import Navbar from '@/components/Frontend/Navbar';
import React, { ReactNode } from 'react';

export default async function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <main className="min-h-screen">{children}</main>

        <div className="pb-12 md:pb-0">
          <Footer />
        </div>

        <MobileDock />
      </body>
    </html>
  );
}
