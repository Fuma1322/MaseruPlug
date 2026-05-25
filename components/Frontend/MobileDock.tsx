"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  IconHome,
  IconCategory,
  IconBriefcase,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

const navItems = [
  {
    label: "Home",
    href: "/",
    icon: IconHome,
  },
  {
    label: "Categories",
    href: "/categories",
    icon: IconCategory,
  },
  {
    label: "Businesses",
    href: "#Featured",
    icon: IconBriefcase,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/26663272145",
    icon: IconBrandWhatsapp,
  },
];

export default function MobileBottomNav() {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full border-t border-neutral-200 bg-white md:hidden">
      <div className="grid h-16 grid-cols-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.label}
              href={item.href}
              target={
                item.href.startsWith("https") ? "_blank" : undefined
              }
              className="flex flex-col items-center justify-center gap-1"
            >
              <item.icon
                className={`h-6 w-6 transition-colors ${
                  isActive
                    ? "text-[#25D366]"
                    : "text-neutral-500"
                }`}
              />

              <span
                className={`text-xs font-medium ${
                  isActive
                    ? "text-[#25D366]"
                    : "text-neutral-500"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}