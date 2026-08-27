'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

import {
  Activity,
  Home,
  Menu,
  MonitorSmartphone,
  University,
  Users,
  Power,
  LayoutDashboard,
  ClipboardPen,
} from 'lucide-react';

import { logoutAdmin } from '@/actions/admin';

export default function NavBar() {
  const pathname = usePathname();

  const sideBarLinks = [
    {
      title: 'Home',
      path: '/',
      icon: Home,
    },
    {
      title: 'Dashboard',
      path: '/dashboard',
      icon: LayoutDashboard,
    },
    {
      title: 'Categories',
      path: '/dashboard/categories',
      icon: Users,
    },
    {
      title: 'Businesses',
      path: '/dashboard/business',
      icon: University,
    },
    {
      title: 'Analytics',
      path: '/dashboard/analytics',
      icon: Activity,
    },
    {
      title: 'Reviews',
      path: '/dashboard/feedback',
      icon: ClipboardPen,
    },
  ];

  return (
    <header className="sticky top-0 z-50 flex h-16 items-center border-b border-gray-100 bg-white/90 px-5 backdrop-blur lg:px-6">
      {/* MOBILE MENU */}

      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-xl hover:bg-[#25D366]/10 md:hidden"
          >
            <Menu className="h-6 w-6 text-[#111111]" />
          </Button>
        </SheetTrigger>

        <SheetContent side="left" className="w-72 bg-white p-0">
          {/* MOBILE BRAND */}

          <div className="flex h-20 items-center border-b border-gray-100 px-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#25D366]/10">
                <MonitorSmartphone className="h-6 w-6 text-[#25D366]" />
              </div>

              <div>
                <p className="font-bold text-[#111111]">
                  Maseru
                  <span className="text-[#25D366]">Plug</span>
                </p>

                <p className="text-xs text-gray-400">Admin Dashboard</p>
              </div>
            </div>
          </div>

          {/* MOBILE NAVIGATION */}

          <nav className="space-y-2 p-4">
            {sideBarLinks.map((item) => {
              const Icon = item.icon;

              const active = pathname === item.path || pathname.startsWith(item.path + '/');

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    `group relative flex items-center gap-3 rounded-2xl px-4 py-3 text-sm transition-all`,

                    active
                      ? `bg-[#25D366]/10 font-semibold text-[#25D366]`
                      : `text-gray-500 hover:bg-gray-50 hover:text-[#111111]`
                  )}
                >
                  {active && (
                    <span className="absolute left-0 h-6 w-1 rounded-r-full bg-[#25D366]" />
                  )}

                  <Icon
                    className={cn(
                      'h-5 w-5 transition',

                      active ? 'text-[#25D366]' : 'text-gray-400 group-hover:text-[#25D366]'
                    )}
                  />

                  {item.title}
                </Link>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>

      {/* PAGE INFORMATION */}

      <div className="ml-4">
        <h1 className="text-sm font-semibold text-[#111111]">Admin Dashboard</h1>

        <p className="hidden text-xs text-gray-400 sm:block">Manage your MaseruPlug platform</p>
      </div>

      <div className="flex-1" />

      {/* ONLINE STATUS */}

      <div className="mr-4 hidden items-center gap-2 text-xs text-gray-500 sm:flex">
        <span className="h-2 w-2 rounded-full bg-[#25D366]" />
        Online
      </div>

      {/* LOGOUT */}

      <Button
        onClick={() => logoutAdmin()}
        variant="ghost"
        className="rounded-xl text-gray-600 transition hover:bg-red-50 hover:text-red-600"
      >
        <Power className="mr-2 h-4 w-4" />

        <span className="hidden sm:block">Logout</span>
      </Button>
    </header>
  );
}
