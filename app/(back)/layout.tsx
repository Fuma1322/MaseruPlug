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
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar />
      <div className="flex flex-col">
        <NavBar />
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
}
