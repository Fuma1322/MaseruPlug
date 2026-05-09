"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

interface FeaturedItem {
  id: string;
  title: string;
  description: string;
  image: string;
  location: string;
  slug: string;
}

const featuredItems: FeaturedItem[] = [
  {
    id: "1",
    title: "Glow Salon",
    description: "Professional hair styling and beauty treatments.",
    image: "/glow.jpg",
    location: "Maseru Central",
    slug: "glow-salon",
  },
  {
    id: "2",
    title: "Nails By Lelo",
    description: "Creative nail designs and premium nail treatments.",
    image: "/lelo.jpg",
    location: "Maseru West",
    slug: "nails-by-lelo",
  },
  {
    id: "3",
    title: "Perfect Woodworks",
    description: "Custom furniture, repairs, and expert carpentry services.",
    image: "/perfect.jpg",
    location: "Maseru North",
    slug: "perfect-woodworks",
  },
];

export default function Featured() {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-flex items-center rounded-full border border-[#25D366]/20 bg-[#25D366]/10 px-4 py-1.5 text-sm font-medium text-[#25D366]">
            Featured Businesses
          </span>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-[#111111]">
            Discover Trusted Local Businesses
          </h2>

          <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
            Explore some of the top-rated businesses in Maseru, carefully
            selected to help you find quality services quickly.
          </p>
        </div>

        {/* Featured Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {featuredItems.map((item) => (
            <Card
              key={item.id}
              className="group overflow-hidden rounded-3xl border border-[#25D366] bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                {/* Location Badge */}
                <div className="absolute bottom-4 left-4 inline-flex items-center gap-1 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-medium text-[#111111] shadow-sm">
                  <MapPin className="h-3.5 w-3.5 text-[#25D366]" />
                  {item.location}
                </div>
              </div>

              {/* Content */}
              <CardHeader className="pb-3">
                <CardTitle className="text-xl font-bold text-[#111111] group-hover:text-[#25D366] transition-colors">
                  {item.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pb-6">
                <p className="text-sm md:text-base leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>

              {/* Footer */}
              <CardFooter>
                <Button
                  asChild
                  className="w-full h-12 rounded-xl border-[#25D366] text-[#25D366] font-semibold shadow-sm hover:text-[#111111]"
                >
                  <Link href={`/business/${item.slug}`}>
                    View Profile
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Optional CTA */}
        <div className="mt-12 text-center">
          <Button
            asChild
            variant="outline"
            className="rounded-xl h-12 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white"
          >
            <Link href="/category/all">Explore All Businesses</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}