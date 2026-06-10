import Link from "next/link";
import prisma from "@/lib/db";
import { ArrowRight } from "lucide-react";
import { getCategoryIcon } from "@/lib/category-icons";

export default async function Categories() {
  const categories = await prisma.category.findMany({
    orderBy: { createdAt: "asc" },
    take: 4,
  });

  return (
    <div className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">

        {/* Title */}
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-[#111111] text-3xl font-bold sm:text-4xl">
            Browse Categories
          </h3>
        </div>

        {/* Grid */}
        <div className="mt-12 flex justify-center">
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">

            {categories.map((category) => {
              const Icon = getCategoryIcon(category.icon ?? "");

              return (
                <li key={category.id}>
                  <Link href={`/categories/${category.slug}`}>
                    <div className="h-full w-full max-w-xs rounded-2xl bg-white p-6 border border-neutral-200 shadow-xl flex flex-col items-center justify-center hover:scale-105 transition">
                      <Icon className="h-32 w-32 text-[#25D366]" />

                      <p className="text-lg text-center font-bold text-neutral-500 mt-4">
                        {category.name}
                      </p>

                    </div>
                  </Link>
                </li>
              );
            })}

          </ul>
        </div>

        {/* Browse More */}
        <div className="mt-8 text-center">
          <Link
            href="/categories"
            className="inline-flex items-center gap-2 text-[#25D366] font-bold hover:text-[#16a34a]"
          >
            Browse More Categories
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </div>
  );
}