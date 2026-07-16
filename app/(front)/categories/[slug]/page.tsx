import Link from 'next/link';
import prisma from '@/lib/db';
import Image from 'next/image';
import type { Metadata } from 'next';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

import { MapPin } from 'lucide-react';
import { SearchInput } from '@/components/Frontend/SearchInput';

interface Props {
  params: {
    slug: string;
  };
}

export const revalidate = 3600;

export async function generateStaticParams() {
  const categories = await prisma.category.findMany({
    select: {
      slug: true,
    },
  });

  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = await prisma.category.findUnique({
    where: { slug: params.slug },
  });

  if (!category) {
    return {
      title: 'Category Not Found | MaseruPlug',
      description: 'This category does not exist on MaseruPlug.',
    };
  }

  const title = `${category.name} in Maseru | MaseruPlug`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: category.name,
    description: category.description,
    url: `https://mplug.com.ls/categories/${category.slug}`,
  };

  const description =
    category.description ||
    `Find trusted ${category.name.toLowerCase()} services in Maseru. Browse verified local businesses on MaseruPlug.`;

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify(structuredData),
    }}
  />;

  return {
    title,
    description,
    alternates: {
      canonical: `https://mplug.com.ls/categories/${category.slug}`,
    },
    openGraph: {
      title,
      description,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const category = await prisma.category.findUnique({
    where: {
      slug: params.slug,
    },
    include: {
      businesses: true,
    },
  });

  if (!category) {
    return <div className="p-10 text-center text-lg font-semibold">Category not found</div>;
  }

  const pageTitle = `${category.name}`;

  return (
    <div className="space-y-10 px-4 py-6 md:px-8 lg:px-12">
      {/* HEADER */}
      <div className="flex min-h-[220px] w-full flex-col items-center justify-center rounded-3xl bg-teal-50/60 px-6 py-14 text-center shadow-xl sm:min-h-[280px]">
        <h1 className="text-4xl font-extrabold tracking-tight text-[#111111] sm:text-6xl">
          {pageTitle}
        </h1>

        <p className="mt-5 text-lg font-semibold text-[#25D366] md:text-xl">
          {category.businesses.length} verified businesses available
        </p>

        {/* SEARCH */}
        {/* <div className="mt-5 w-full">
          <SearchInput />
        </div> */}
      </div>

      {/* EMPTY STATE */}
      {category.businesses.length === 0 && (
        <div className="mx-auto max-w-2xl py-12 text-center">
          <h2 className="text-3xl font-bold text-[#111111]">
            No {category.name.toLowerCase()} businesses found yet
          </h2>

          <p className="text-muted-foreground mt-4 text-lg">
            We&apos;re still growing this category on MaseruPlug. Explore other categories or
            recommend a great business that belongs here.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/categories"
              className="flex h-12 items-center justify-center rounded-xl border border-[#25D366] px-6 font-semibold transition hover:bg-[#25D366] hover:text-white"
            >
              Browse Categories
            </Link>

            <Link
              href="/contact"
              className="flex h-12 items-center justify-center rounded-xl bg-[#25D366] px-6 font-semibold text-white transition hover:border hover:border-[#25D366] hover:bg-transparent hover:text-[#25D366]"
            >
              Recommend a Business
            </Link>
          </div>
        </div>
      )}

      {/* GRID */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {category.businesses.map((item) => (
          <Card
            key={item.id}
            className="group overflow-hidden rounded-3xl border border-[#25D366] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* IMAGE */}
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={item.images?.[0] || '/lelo.jpg'}
                alt={`${item.name} - ${category.name} in Maseru`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
              />

              {/* GRADIENT */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

              {/* LOCATION BADGE */}
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
                className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-[#25D366] font-semibold text-[#25D366] shadow-sm hover:text-[#111111]"
              >
                View Profile
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
