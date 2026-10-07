import prisma from "@/lib/db";
import Link from "next/link";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { MapPin } from "lucide-react";

interface Props {
  searchParams: {
    q?: string;
  };
}

export default async function SearchPage({
  searchParams,
}: Props) {
  const query =
  (searchParams.q || "").trim().slice(0, 100);

  const businesses = await prisma.business.findMany({
    where: {
      OR: [
        {
          name: {
            contains: query,
            mode: "insensitive",
          },
        },
        {
          description: {
            contains: query,
            mode: "insensitive",
          },
        },
        {
          location: {
            contains: query,
            mode: "insensitive",
          },
        },
        {
          category: {
            name: {
              contains: query,
              mode: "insensitive",
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
    <div className="max-w-7xl mx-auto px-4 py-10">

      {/* HEADER */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-black text-[#111111]">
          Search Results
        </h1>

        <p className="mt-4 text-lg text-gray-500">
          Found {businesses.length} result
          {businesses.length !== 1 && "s"} for
          <span className="font-bold text-[#25D366]">
            {" "}“{query}”
          </span>
        </p>
      </div>

      {/* EMPTY STATE */}
      {businesses.length === 0 && (
        <div className="text-center py-10">
          <p className="mt-4 text-lg font-medium text-gray-500 max-w-lg mx-auto">
            We couldn&apos;t find anything matching
            <span className="font-semibold text-[#25D366]">
              {" "}“{query}”
            </span>.
            Try searching by business name, category, service, or location.
          </p>

          <p className="mt-3 text-sm text-muted-foreground">
            Examples: Nail Technician, Carpenter, Tattoo Studio, Maseru West
          </p>

          {/* CTA BUTTON */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link
              href="/categories"
              className="h-12 px-6 rounded-xl border border-[#25D366]
              flex items-center justify-center font-semibold
              hover:bg-[#25D366] hover:text-white transition"
            >
              Browse Categories
            </Link>
          </div>
        </div>
      )}

      {/* RESULTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

        {businesses.map((item) => (
          <Card
            key={item.id}
            className="group overflow-hidden rounded-3xl border border-[#25D366] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* IMAGE */}
            <div className="relative aspect-[16/10] overflow-hidden">

              <Image
                src={item.images?.[0] || "/lelo.jpg"}
                alt={item.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

              {/* LOCATION */}
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
                className="inline-flex w-full h-12 items-center justify-center rounded-xl bg-[#25D366] text-white font-semibold shadow-sm transition hover:bg-[#1ebe5d]"
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