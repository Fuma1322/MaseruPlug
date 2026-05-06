"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

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
    description: "Custom furniture and home repairs",
    image: "/lelo.jpg",
    location: "Maseru West"
  },
  {
    id: "4",
    title: "Perfect Woodworks",
    description: "Creative nail designs and treatments",
    image: "/perfect.jpg",
    location: "Maseru North"
  },
];

export default function Featured() {
  return (
    <div className="space-y-6 p-4">
        <div className="max-w-xl mx-auto text-center">
          <h3 className="text-[#111111] text-3xl py-4 font-bold sm:text-4xl">
            Our Featured Product
          </h3>
        </div>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {featuredItems.map((item) => (
          <Card key={item.id} className="w-full max-w-full overflow-hidden p-0 shadow-xl border border-[#16a35a]">
            <div className="relative h-60">
                <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                />
            </div>

            <CardContent className="p-4 space-y-2">
                <h3 className="font-bold text-xl">{item.title}</h3>
                <p className="text-[#111111] font-semibold">{item.description}</p>
                <div className="flex items-center gap-2">
                  <span className="text-[#16a34a]"><MapPin /></span>
                  <h4 className="text-[#111111] font-semibold">{item.location}</h4>
                </div>
                <Button variant="secondary" size="lg" className="w-full border border-[#16a34a] py-2 text-[#16a34a] hover:bg-[#16a34a] hover:text-white transition-colors duration-300 font-bold">
                  View Profile
                </Button>
            </CardContent>
            </Card>
        ))}
      </div>
    </div>
  );
}