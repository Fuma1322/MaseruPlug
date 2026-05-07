"use client";

import { Link, MapPin } from "lucide-react";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

interface FeaturedItem {
  id: string;
  title: string;
  description: string;
  image: string;
  location: string;
}

const featuredItems: FeaturedItem[] = [
  {
    id: "1",
    title: "Glow Salon",
    description: "Professional hair styling and beauty treatments",
    image: "/glow.jpg",
    location: "Maseru Central"
  },
  {
    id: "3",
    title: "Nails By Lelo",
    description: "Creative nail designs and treatments",
    image: "/lelo.jpg",
    location: "Maseru West"
  },
  {
    id: "4",
    title: "Perfect Woodworks",
    description: "Custom furniture and home repairs",
    image: "/perfect.jpg",
    location: "Maseru North"
  },
];

export default function Featured() {
  return (
    <div className="space-y-6 p-4">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-[#111111] text-3xl py-4 font-bold sm:text-4xl">
            Featured Business
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredItems.map((item) => (
            <Card
              key={item.id}
              className="relative w-full pt-0 shadow-xl border border-[#25D366] overflow-hidden"
            >
              <div className="absolute inset-0 z-30 aspect-video bg-black/25" />

              <img
                src={item.image}
                alt={item.title}
                className="relative z-20 aspect-video w-full object-cover"
              />

              <CardHeader className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <CardTitle className="font-bold text-xl">
                      {item.title}
                    </CardTitle>

                    <div className="flex items-center gap-1 mt-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 text-[#25D366]" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                <CardDescription className="font-semibold text-[#111111]">
                  {item.description}
                </CardDescription>
              </CardHeader>

              <CardFooter className="flex items-center justify-center">
                <Link href="/business/[slug]" className="w-full">
                <Button className="w-full inline-flex h-12 transform hover:-translate-y-1 transition duration-300 animate-shimmer items-center justify-center rounded-md border-[2px] border-[#25D366] px-6 font-bold text-[#111111]">
                  View Profile
                </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
    </div>
  );
}