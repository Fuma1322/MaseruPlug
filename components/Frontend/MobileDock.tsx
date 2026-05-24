"use client";

import React from "react";
import Link from "next/link";


import {
  IconHome,
  IconCategory,
  IconBriefcase,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import { FloatingDock } from "../ui/floatingdock";

export default function MobileDock() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500" />
      ),
      href: "/",
    },

    {
      title: "Categories",
      icon: (
        <IconCategory className="h-full w-full text-neutral-500" />
      ),
      href: "/categories",
    },

    {
      title: "Businesses",
      icon: (
        <IconBriefcase className="h-full w-full text-neutral-500" />
      ),
      href: "/businesses",
    },

    {
      title: "WhatsApp",
      icon: (
        <IconBrandWhatsapp className="h-full w-full text-[#25D366]" />
      ),
      href: "https://wa.me/26663272145",
    },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 md:hidden">
      <FloatingDock items={links} />
    </div>
  );
}