import Link from "next/link";
import prisma from "@/lib/db";
import Image from "next/image";
import type { Metadata } from "next";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { MapPin } from "lucide-react";

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

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const category = await prisma.category.findUnique({
    where: { slug: params.slug },
  });

  if (!category) {
    return {
      title: "Category Not Found | MaseruPlug",
      description: "This category does not exist on MaseruPlug.",
    };
  }

  const title = `${category.name} in Maseru | MaseruPlug`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
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
    />
    
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
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
    return (
      <div className="p-10 text-center text-lg font-semibold">
        Category not found
      </div>
    );
  }

  const pageTitle = `${category.name}`;

  return (
    <div className="space-y-10 px-4 py-6 md:px-8 lg:px-12">

      {/* HEADER */}
      <div className="w-full flex flex-col justify-center items-center text-center bg-teal-50/60 rounded-3xl min-h-[220px] sm:min-h-[280px] py-14 px-6 shadow-xl">
        <h1 className="text-4xl text-[#111111] sm:text-6xl font-extrabold tracking-tight">
          {pageTitle}
        </h1>

        <p className="text-lg md:text-xl font-semibold text-[#25D366] mt-5">
          {category.businesses.length} verified businesses available
        </p>
      </div>

      {/* EMPTY STATE */}
      {category.businesses.length === 0 && (
        <div className="max-w-2xl mx-auto text-center py-12">

          <h2 className="text-3xl font-bold text-[#111111]">
            No {category.name.toLowerCase()} businesses found yet
          </h2>

          <p className="mt-4 text-muted-foreground text-lg">
            We&apos;re still growing this category on MaseruPlug.
            Explore other categories or recommend a great business that belongs here.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">

            <Link
              href="/categories"
              className="h-12 px-6 rounded-xl border border-[#25D366]
              flex items-center justify-center font-semibold
              hover:bg-[#25D366] hover:text-white transition"
            >
              Browse Categories
            </Link>

            <Link
              href="/contact"
              className="h-12 px-6 rounded-xl bg-[#25D366]
              text-white flex items-center justify-center
              font-semibold hover:bg-transparent hover:text-[#25D366] hover:border hover:border-[#25D366] transition"
            >
              Recommend a Business
            </Link>

          </div>
        </div>
        )}

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

        {category.businesses.map((item) => (
          <Card
            key={item.id}
            className="group overflow-hidden rounded-3xl border border-[#25D366] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >

            {/* IMAGE */}
            <div className="relative aspect-[16/10] overflow-hidden">

              <Image
                src={item.images?.[0] || "/lelo.jpg"}
                alt={`${item.name} - ${category.name} in Maseru`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
              />

              {/* GRADIENT */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

              {/* LOCATION BADGE */}
              <div className="absolute bottom-4 left-4 inline-flex items-center gap-1 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-[#111111] shadow-sm">
                <MapPin className="h-3.5 w-3.5 text-[#25D366]" />
                {item.location}
              </div>
            </div>

            {/* CONTENT */}
            <CardHeader className="pb-3">
              <CardTitle className="text-xl font-bold text-[#111111] group-hover:text-[#25D366] transition-colors">
                {item.name}
              </CardTitle>
            </CardHeader>

            <CardContent className="pb-6">
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground line-clamp-3">
                {item.description}
              </p>
            </CardContent>

            {/* FOOTER */}
            <CardFooter>
              <Link
                href={`/business/${item.slug}`}
                className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-[#25D366] text-[#25D366] font-semibold shadow-sm hover:text-[#111111]"
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