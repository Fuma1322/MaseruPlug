import Link from "next/link";
import prisma from "@/lib/db";
import { getCategoryIcon } from "@/lib/category-icons";
import BackButton from "./BackButton";

export default async function CategoriesPage() {
  const categories = await prisma.category.findMany({
    orderBy: { createdAt: "asc" },
  });

  return (
    <div className="py-10">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">

        {/* HEADER */}
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-[#111111] text-3xl font-bold sm:text-4xl">
            All Categories
          </h3>

          <p className="text-gray-500 mt-2">
            Browse all service categories on MaseruPlug
          </p>
        </div>

        {/* GRID */}
        <div className="mt-12 flex justify-center">
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">

            {categories.map((category) => {
              const Icon = getCategoryIcon(category.icon ?? undefined);

              return (
                <li key={category.id}>
                  <Link href={`/categories/${category.slug}`}>
                    <div className="h-full w-full max-w-xs rounded-2xl bg-white p-6 border border-neutral-200 shadow-xl flex flex-col items-center justify-center hover:scale-105 transition">

                      <Icon className="h-24 w-24 text-[#25D366]" />

                      <p className="text-lg text-center font-bold text-neutral-500 mt-4">
                        {category.name}
                      </p>

                      {category.description && (
                        <p className="text-sm text-center text-neutral-400 mt-2">
                          {category.description}
                        </p>
                      )}

                    </div>
                  </Link>
                </li>
              );
            })}

          </ul>
        </div>

      </div>
    </div>
  );
}