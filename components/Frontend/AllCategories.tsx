import Link from "next/link";
import prisma from "@/lib/db";
import { ArrowRight } from "lucide-react";
import { getCategoryIcon } from "@/lib/category-icons";

export default async function AllCategories() {
  const [categories, businessesCount] = await Promise.all([
    prisma.category.findMany({
      orderBy: { createdAt: "asc" },
      include: {
        _count: {
          select: {
            businesses: true,
          },
        },
      },
    }),
    prisma.business.count(),
  ]);

  return (
    <div className="py-12">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">

        {/* HERO */}
        <div className="max-w-3xl mx-auto text-center">

          <div className="inline-flex items-center gap-2 rounded-full bg-[#25D366]/10 px-4 py-2 text-sm font-medium text-[#25D366]">
            Discover Local Businesses
          </div>

          <h1 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight text-[#111111]">
            Browse Business Categories
          </h1>

          <p className="mt-4 text-lg text-muted-foreground">
            Explore trusted businesses and service providers across Lesotho.
            Find professionals, artisans, creatives, and local entrepreneurs
            all in one place.
          </p>

          {/* STATS */}
          <div className="flex items-center justify-center gap-10 mt-10">

            <div>
              <p className="text-4xl font-black text-[#25D366]">
                {categories.length}
              </p>
              <p className="text-sm text-muted-foreground">
                Categories
              </p>
            </div>

            <div className="h-12 w-px bg-gray-200" />

            <div>
              <p className="text-4xl font-black text-[#25D366]">
                {businessesCount}
              </p>
              <p className="text-sm text-muted-foreground">
                Businesses
              </p>
            </div>

          </div>
        </div>

        {/* CATEGORY GRID */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

          {categories.map((category) => {
            const Icon = getCategoryIcon(category.icon ?? "");

            return (
              <Link
                key={category.id}
                href={`/categories/${category.slug}`}
                className="group"
              >
                <div
                  className="
                  h-full
                  rounded-3xl
                  border
                  border-neutral-200
                  bg-white
                  p-6
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#25D366]
                  hover:shadow-xl
                "
                >
                  {/* TOP */}
                  <div className="flex items-start gap-4">

                    <div
                      className="
                      rounded-2xl
                      bg-[#25D366]/10
                      p-4
                      flex-shrink-0
                    "
                    >
                      <Icon className="h-8 w-8 text-[#25D366]" />
                    </div>

                    <div className="flex-1">

                      <h2 className="text-xl font-bold text-[#111111] group-hover:text-[#25D366] transition-colors">
                        {category.name}
                      </h2>

                      <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                        {category.description}
                      </p>

                    </div>

                  </div>

                  {/* BOTTOM */}
                  <div className="mt-6 flex items-center justify-between">

                    <span className="inline-flex rounded-full bg-[#25D366]/10 px-3 py-1 text-sm font-semibold text-[#25D366]">
                      {category._count.businesses} businesses
                    </span>

                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#25D366]">
                      Explore
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>

                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}