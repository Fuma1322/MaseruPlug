'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

import { Activity, Home, MonitorSmartphone, University, Users } from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    {
      title: 'Home',
      path: '/',
      icon: Home,
    },
    {
      title: 'Dashboard',
      path: '/dashboard',
      icon: Activity,
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
  ];

  return (
    <aside className="hidden w-72 flex-col border-r border-neutral-200 bg-white p-6 md:flex">
      {/* BRAND */}

      <div className="mb-10">
        <Link href="/dashboard" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#25D366]/10">
            <MonitorSmartphone className="h-5 w-5 text-[#25D366]" />
          </div>

          <div>
            <h1 className="text-2xl font-extrabold text-[#111111]">
              Maseru<span className="text-[#25D366]">Plug</span>
            </h1>
          </div>
        </Link>
      </div>

      {/* NAVIGATION */}

      <nav className="flex-1 space-y-2">
        {links.map((item) => {
          const Icon = item.icon;

          const active = pathname === item.path || pathname.startsWith(item.path + '/');

          return (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                'group flex items-center gap-3 rounded-xl px-4 py-3 transition-all',

                active
                  ? 'border border-[#25D366] bg-[#25D366]/10 text-[#111111]'
                  : 'text-neutral-600 hover:bg-neutral-100'
              )}
            >
              <Icon
                size={18}
                className={cn(
                  active ? 'text-[#25D366]' : 'text-neutral-500 group-hover:text-[#25D366]'
                )}
              />

              <span className="text-sm font-medium">{item.title}</span>

              {active && <span className="ml-auto h-2 w-2 rounded-full bg-[#25D366]" />}
            </Link>
          );
        })}
      </nav>

      {/* FOOTER */}

      <div className="border-t border-neutral-200 pt-6 text-xs text-neutral-500">
        © {new Date().getFullYear()} MaseruPlug ERP
      </div>
    </aside>
  );
}
