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
    <section className="relative overflow-hidden bg-white py-16 lg:py-20">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        {/* Green ambient glow */}
        <div className="absolute left-1/2 top-20 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-[#25D366]/[0.035] blur-[130px]" />

        {/* Soft side lights */}
        <div className="absolute -left-40 top-1/2 h-[400px] w-[400px] rounded-full bg-[#25D366]/[0.025] blur-[120px]" />

        <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#25D366]/[0.02] blur-[120px]" />

        {/* Very subtle dot texture */}
        <div className="absolute inset-0 bg-[radial-gradient(#11111108_1px,transparent_1px)] [background-size:28px_28px]" />
      </div>

      <div className="relative mx-auto max-w-screen-xl px-4 md:px-8">
        {/* Title */}
        <div className="mx-auto max-w-xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#25D366]">
            Explore Local
          </span>

          <h3 className="mt-3 text-3xl font-bold tracking-tight text-[#111111] sm:text-4xl">
            Browse Categories
          </h3>

          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-gray-500">
            Discover businesses and services from people building their businesses across Lesotho.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-12 flex justify-center">
          <ul className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
            {categories.map((category) => {
              const Icon = getCategoryIcon(category.icon ?? '');

              return (
                <li key={category.id}>
                  <Link href={`/categories/${category.slug}`} className="group block h-full">
                    <div className="relative flex h-full min-h-[220px] w-full max-w-xs flex-col items-center justify-center overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-[#171717] via-[#111111] to-[#090909] p-6 shadow-[0_20px_60px_rgba(17,17,17,0.18)] transition-all duration-500 hover:-translate-y-2 hover:border-[#25D366]/30 hover:shadow-[0_25px_70px_rgba(17,17,17,0.25)]">
                      {/* Top-right ambient glow */}
                      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#25D366]/[0.07] blur-[55px] transition-all duration-500 group-hover:bg-[#25D366]/[0.14]" />

                      {/* Bottom-left ambient glow */}
                      <div className="pointer-events-none absolute -bottom-24 -left-20 h-44 w-44 rounded-full bg-[#25D366]/[0.035] blur-[50px] transition-all duration-500 group-hover:bg-[#25D366]/[0.08]" />

                      {/* Subtle inner highlight */}
                      <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] bg-gradient-to-b from-white/[0.035] via-transparent to-transparent" />

                      {/* Icon */}
                      <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-[#25D366]/10 bg-[#25D366]/[0.07] shadow-[0_0_35px_rgba(37,211,102,0.06)] transition-all duration-500 group-hover:border-[#25D366]/20 group-hover:bg-[#25D366]/[0.11] group-hover:shadow-[0_0_40px_rgba(37,211,102,0.12)]">
                        <Icon className="h-11 w-11 text-[#25D366] transition-transform duration-500 group-hover:scale-110" />
                      </div>

                      {/* Name */}
                      <p className="relative mt-5 text-center text-lg font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-[#25D366]">
                        {category.name}
                      </p>

                      {/* Business count */}
                      <p className="relative mt-1 text-sm text-white/45">
                        {category._count.businesses}{' '}
                        {category._count.businesses === 1 ? 'business' : 'businesses'}
                      </p>

                      {/* Bottom accent */}
                      <span className="absolute bottom-0 left-1/2 h-[3px] w-8 -translate-x-1/2 rounded-full bg-[#25D366]/40 transition-all duration-500 group-hover:w-14 group-hover:bg-[#25D366] group-hover:shadow-[0_0_12px_rgba(37,211,102,0.5)]" />
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Browse More */}
        <div className="mt-12 flex justify-center">
          <Link href="/categories">
            <DrawOutlineButton>Discover More Businesses →</DrawOutlineButton>
          </Link>
        </div>
      </div>
    </section>
  );
}
