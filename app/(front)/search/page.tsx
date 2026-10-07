import prisma from '@/lib/db';
import Link from 'next/link';
import Image from 'next/image';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

import { MapPin } from 'lucide-react';

interface Props {
  searchParams: {
    q?: string;
  };
}

export default async function SearchPage({ searchParams }: Props) {
  const query = (searchParams.q || '').trim().slice(0, 100);

  const businesses = await prisma.business.findMany({
    where: {
      OR: [
        {
          name: {
            contains: query,
            mode: 'insensitive',
          },
        },
        {
          description: {
            contains: query,
            mode: 'insensitive',
          },
        },
        {
          location: {
            contains: query,
            mode: 'insensitive',
          },
        },
        {
          category: {
            name: {
              contains: query,
              mode: 'insensitive',
            },
          },
        },
      ],
    },

    include: {
      category: true,
    },
  });

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      {/* HEADER */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-black text-[#111111] md:text-5xl">Search Results</h1>

        <p className="mt-4 text-lg text-gray-500">
          Found {businesses.length} result
          {businesses.length !== 1 && 's'} for
          <span className="font-bold text-[#25D366]"> “{query}”</span>
        </p>
      </div>

      {/* EMPTY STATE */}
      {businesses.length === 0 && (
        <div className="py-10 text-center">
          <p className="mx-auto mt-4 max-w-lg text-lg font-medium text-gray-500">
            We couldn&apos;t find anything matching
            <span className="font-semibold text-[#25D366]"> “{query}”</span>. Try searching by
            business name, category, service, or location.
          </p>

          <p className="text-muted-foreground mt-3 text-sm">
            Examples: Nail Technician, Carpenter, Tattoo Studio, Maseru West
          </p>

          {/* CTA BUTTON */}
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/categories"
              className="flex h-12 items-center justify-center rounded-xl border border-[#25D366] px-6 font-semibold transition hover:bg-[#25D366] hover:text-white"
            >
              Browse Categories
            </Link>
          </div>
        </div>
      )}

      {/* RESULTS */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {businesses.map((item) => (
          <Card
            key={item.id}
            className="group overflow-hidden rounded-3xl border border-[#25D366] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* IMAGE */}
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={item.images?.[0] || '/logo.jpg'}
                alt={item.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

              {/* LOCATION */}
              <div className="absolute bottom-4 left-4 inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-[#111111] shadow-sm backdrop-blur-sm">
                <MapPin className="h-3.5 w-3.5 text-[#25D366]" />
                {item.location}
              </div>
            </div>

            {/* CONTENT */}
            <CardHeader className="pb-3">
              <CardTitle className="text-xl font-bold text-[#111111] transition-colors group-hover:text-[#25D366]">
                {item.name}
              </CardTitle>
            </CardHeader>

            <CardContent className="pb-6">
              <p className="text-muted-foreground line-clamp-3 text-sm leading-relaxed md:text-base">
                {item.description}
              </p>
            </CardContent>

            {/* FOOTER */}
            <CardFooter>
              <Link
                href={`/business/${item.slug}`}
                className="inline-flex h-12 w-full items-center justify-center rounded-xl bg-[#25D366] font-semibold text-white shadow-sm transition hover:bg-[#1ebe5d]"
              >
                Visit Business
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
