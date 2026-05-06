import React from "react";
import { ArrowRight, Hammer, Wrench, Scissors, Palette } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    icon: <Palette className="h-24 w-24 text-[#16a34a]" />,
    description: "Nail Techs",
    href: "#",
  },
  {
    icon: <Scissors className="h-24 w-24 text-[#16a34a]" />,
    description: "Salons",
    href: "#",
  },
  {
    icon: <Wrench className="h-24 w-24 text-[#16a34a]" />,
    description: "Plumbers",
    href: "#",
  },
  {
    icon: <Hammer className="h-24 w-24 text-[#16a34a]" />,
    description: "Carpenters",
    href: "#",
  },
];

export default function Categories() {
  return (
    <div>
      <div className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-[#111111] text-3xl font-bold sm:text-4xl">
              Browse Categories
            </h3>
          </div>
          <div className="mt-12 flex justify-center">
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-8">
              {categories.map((category, idx) => (
                <li key={idx}>
                  <div className="h-full w-full max-w-xs rounded-2xl bg-white p-6 border border-neutral-200 shadow-xl flex flex-col items-center justify-center">
                    <Link href={category.href}>
                      <div className="text-xl rounded-full px-4 py-0.5 mt-4 flex justify-center">
                        {category.icon}
                      </div>
                      <p className="text-lg text-center font-bold text-neutral-500 mt-4">
                        {category.description}
                      </p>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 text-center">
            <Link href="/categories" className="inline-flex items-center gap-2 text-[#16a34a] font-bold hover:text-[#0f8b33]">
              Browse More Categories
              <ArrowRight className="h-4 w-4 font-bold" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}