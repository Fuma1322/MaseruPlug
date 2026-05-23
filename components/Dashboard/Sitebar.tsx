"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import {
  Activity,
  DiamondPlus,
  Home,
  MonitorSmartphone,
  University,
  Users,
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  const sideBarLinks = [
    { title: "Home", path: "/", icon: Home },
    { title: "Dashboard", path: "/dashboard", icon: Activity },
    { title: "Categories", path: "/dashboard/categories", icon: Users },
    { title: "Businesses", path: "/dashboard/business", icon: University },
    { title: "Create Listing", path: "/dashboard/landlord/create", icon: DiamondPlus },
  ];

  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        {/* Header */}
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <MonitorSmartphone className="text-[#25D366] h-5 w-5" />
            <span>MaseruPlug</span>
          </Link>
        </div>

        {/* Navigation */}
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {sideBarLinks.map((item, i) => {
              const Icon = item.icon;
              return (
                <Link
                  key={i}
                  href={item.path}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                    pathname === item.path && "bg-muted text-primary"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.title}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}