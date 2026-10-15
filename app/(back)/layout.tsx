import { Metadata } from 'next';
import { cookies } from 'next/headers';
import React, { ReactNode } from 'react';
import { redirect } from 'next/navigation';
import NavBar from '@/components/Dashboard/Navbar';
import Sidebar from '@/components/Dashboard/Sitebar';

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default async function Layout({ children }: { children: ReactNode }) {
  const cookieStore = await cookies();
  const adminAuth = cookieStore.get('admin-auth');

  if (!adminAuth) {
    redirect('/mplug-login');
  }

  return (
    <div className="grid h-screen w-full grid-cols-1 overflow-hidden bg-gray-50 md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[280px_minmax(0,1fr)]">
      {/* FIXED SIDEBAR */}
      <Sidebar />

      {/* MAIN DASHBOARD AREA */}
      <div className="flex h-full min-h-0 min-w-0 flex-col overflow-hidden">
        {/* NAVBAR */}
        <NavBar />

        {/* ONLY THIS SECTION SCROLLS */}
        <main className="min-h-0 min-w-0 flex-1 overflow-y-auto overscroll-contain p-4 md:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
