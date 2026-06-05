"use client";

import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

import {
  Activity,
  Home,
  Menu,
  University,
  Users,
} from "lucide-react";

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
      {/* Mobile Menu */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
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
        <div className="mt-auto border-t p-4 text-md text-[#25D366] text-muted-foreground">
          MaseruPlug Admin Panel
        </div>
          </nav>
        </SheetContent>
      </Sheet>

      <div className="flex-1" />

      {/* Static Admin Avatar */}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Avatar className="cursor-pointer">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          <DropdownMenuLabel className="text-center font-bold uppercase">
            Admin
          </DropdownMenuLabel>

          <DropdownMenuSeparator />
          <DropdownMenuItem>Support</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}