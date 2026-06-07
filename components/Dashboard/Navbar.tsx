"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import {
  Activity,
  Home,
  Menu,
  University,
  Users,
  Power,
} from "lucide-react";

import { logoutAdmin } from "@/actions/admin";

export default function NavBar() {
  const pathname = usePathname();

  const sideBarLinks = [
    { title: "Home", path: "/", icon: Home },
    { title: "Dashboard", path: "/dashboard", icon: Activity },
    { title: "Categories", path: "/dashboard/categories", icon: Users },
    { title: "Businesses", path: "/dashboard/business", icon: University },
  ];

  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">

      {/* MOBILE MENU */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>

        <SheetContent
          side="left"
          className="w-72 sm:w-80 bg-white dark:bg-gray-950 p-0 pt-safe"
        >
          <nav className="flex flex-col gap-1 px-3 py-4 text-base font-medium">
            {sideBarLinks.map((item, i) => {
              const Icon = item.icon;
              return (
                <Link
                  key={i}
                  href={item.path}
                  className={cn(
                    "flex items-center gap-3 rounded-xl px-3 py-3 text-muted-foreground transition hover:bg-muted hover:text-primary",
                    pathname === item.path && "bg-muted text-primary"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  {item.title}
                </Link>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>

      <div className="flex-1" />

      {/* POWER LOGOUT BUTTON */}
      <Button
        onClick={() => logoutAdmin()}
        variant="ghost"
        size="icon"
        className="h-10 w-10 rounded-full hover:bg-red-50 hover:text-red-600 transition"
        title="Logout"
      >
        <Power className="h-5 w-5" />
      </Button>
    </header>
  );
}