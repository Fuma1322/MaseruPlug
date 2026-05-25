import Image from "next/image";
import Link from "next/link";
import prisma from "@/lib/db";
import { MapPin } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

import { Button } from "../ui/button";

export default async function Featured() {
  const featuredItems = await prisma.business.findMany({
    where: {
      isFeatured: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 6,
  });

  return (
    <section className="py-16 md:py-24 px-4" id="featured">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-flex items-center rounded-full border border-[#25D366]/20 bg-[#25D366]/10 px-4 py-1.5 text-sm font-medium text-[#25D366]">
            Featured Businesses
          </span>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-[#111111]">
            Discover Trusted Local Businesses
          </h2>

          <p className="mt-4 text-base md:text-lg text-muted-foreground">
            Explore top-rated businesses in Maseru
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {featuredItems.map((item) => (
            <Card
              key={item.id}
              className="group overflow-hidden rounded-3xl border border-[#25D366] bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden">

                <Image
                  priority
                  src={item.images?.[0] || "/lelo.jpg"}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                <div className="absolute bottom-4 left-4 inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-medium">
                  <MapPin className="h-3.5 w-3.5 text-[#25D366]" />
                  {item.location}
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-bold group-hover:text-[#25D366]">
                  {item.name}
                </CardTitle>
              </CardHeader>

              <CardContent className="pb-6">
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>

              <CardFooter> 
                <Button asChild className="w-full h-12 rounded-xl 
                 border-[#25D366] text-[#25D366] font-semibold shadow-sm 
                 hover:text-[#111111]" > 
                  <Link href={`/business/${item.slug}`}> 
                  View Profile
                  </Link> 
                </Button> 
                </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}