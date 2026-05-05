import { motion } from "framer-motion";
import React from "react";
import { NotebookPen, Globe, ChartScatter, Users } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    icon: <NotebookPen className="h-16 w-16" />,
    description: "Blog and Article Writing",
    href: "#",
  },
  {
    icon: <Users className="h-16 w-16" />,
    description: "Website Content",
    href: "#",
  },
  {
    icon: <ChartScatter className="h-16 w-16" />,
    description: "Content Strategy and Consulting",
    href: "#",
  },
  {
    icon: <Globe className="h-16 w-16" />,
    description: "Social Media Management",
    href: "#",
  },
];

export default function Categories() {
  return (
    <div>
      <div className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-[#204E51] text-3xl font-bold sm:text-4xl">
              Our Service
            </h3>
            <p className="mt-3 flex items-center text-center justify-center">
              Li Europan lingues es membres del sam familie. Lor <br /> separat
              existentie es un myth Por scientie, musica.
            </p>
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
        </div>
      </div>
    </div>
  );
}