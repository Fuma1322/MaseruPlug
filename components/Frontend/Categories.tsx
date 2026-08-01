import Link from 'next/link';
import prisma from '@/lib/db';
import { getCategoryIcon } from '@/lib/category-icons';
import DrawOutlineButton from './MoreBusinessButton';

export default async function Categories() {
  const categories = await prisma.category.findMany({
    take: 4,
    orderBy: {
      createdAt: 'asc',
    },
    include: {
      _count: {
        select: {
          businesses: true,
        },
      },
    },
  });

  return (
    <div className="py-14">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        {/* Title */}
        <div className="mx-auto max-w-xl text-center">
          <h3 className="text-3xl font-bold text-[#111111] sm:text-4xl">Browse Categories</h3>
        </div>

        {/* Grid */}
        <div className="mt-12 flex justify-center">
          <ul className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-4">
            {categories.map((category) => {
              const Icon = getCategoryIcon(category.icon ?? '');

              return (
                <li key={category.id}>
                  <Link href={`/categories/${category.slug}`}>
                    <div className="flex h-full w-full max-w-xs flex-col items-center justify-center rounded-2xl border border-neutral-200 bg-white p-6 shadow-xl transition hover:scale-105">
                      <Icon className="h-20 w-20 text-[#25D366]" />

                      <p className="mt-4 text-center text-lg font-bold text-[#111111]">
                        {category.name}
                      </p>

                      <p className="text-muted-foreground mt-1 text-sm">
                        {category._count.businesses}{' '}
                        {category._count.businesses === 1 ? 'business' : 'businesses'}
                      </p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Browse More */}
        <div className="mt-10 flex justify-center">
          <Link href="/categories" className="bg-[#25D366]/10">
            <DrawOutlineButton>Discover More Businesses →</DrawOutlineButton>
          </Link>
        </div>
      </div>
    </div>
  );
}
