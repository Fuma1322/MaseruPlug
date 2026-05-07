"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
    title: "Nails By Lelo",
    description: "Creative nail designs and treatments",
    image: "/lelo.jpg",
    location: "Maseru West",
  },
  {
    id: "2",
    title: "Nail Studio M",
    description: "Creative nail designs and treatments",
    image: "/lelo.jpg",
    location: "Maseru West",
  },
  {
    id: "3",
    title: "Pretty Nails",
    description: "Creative nail designs and treatments",
    image: "/lelo.jpg",
    location: "Maseru West",
  },
  {
    id: "4",
    title: "Nail Artistry",
    description: "Creative nail designs and treatments",
    image: "/lelo.jpg",
    location: "Maseru West",
  },
  {
    id: "5",
    title: "The Nail Bar",
    description: "Creative nail designs and treatments",
    image: "/lelo.jpg",
    location: "Maseru West",
  },
  {
    id: "6",
    title: "Luxe Nails",
    description: "Creative nail designs and treatments",
    image: "/lelo.jpg",
    location: "Maseru West",
  },
  {
    id: "7",
    title: "Polish & Go",
    description: "Creative nail designs and treatments",
    image: "/lelo.jpg",
    location: "Maseru West",
  },
  {
    id: "8",
    title: "Diva Nails",
    description: "Creative nail designs and treatments",
    image: "/lelo.jpg",
    location: "Maseru West",
  },
  {
    id: "9",
    title: "Nail Perfection",
    description: "Creative nail designs and treatments",
    image: "/lelo.jpg",
    location: "Maseru West",
  },
  {
    id: "10",
    title: "Gloss Studio",
    description: "Creative nail designs and treatments",
    image: "/lelo.jpg",
    location: "Maseru West",
  },
];

export default function Featured() {
  const ITEMS_PER_PAGE = 9;
  const [page, setPage] = useState(1);
  const [location, setLocation] = useState("");
  const [service, setService] = useState("");

  const totalPages = Math.ceil(featuredItems.length / ITEMS_PER_PAGE);

  const paginatedItems = featuredItems.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <div className="space-y-6 p-4">
      <div className="w-full flex flex-col justify-center items-center bg-teal-50/50 rounded-xl h-[250px] py-14 px-6 shadow-xl">
        <h2 className="text-3xl text-[#111111] sm:text-5xl font-bold">
          Nail Techs In Maseru
        </h2>
        <p className="text-lg text-[#111111] mt-4">
          Find the best near you
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-fit px-4 sm:ml-10">
        <Select value={location} onValueChange={(value) => value && setLocation(value)}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Select Location" />
          </SelectTrigger>
          <SelectContent className="bg-white border border-gray-200 shadow-lg">
            <SelectItem value="maseru-west">Maseru West</SelectItem>
            <SelectItem value="maseru-east">Maseru East</SelectItem>
            <SelectItem value="maseru-center">Maseru Center</SelectItem>
            <SelectItem value="all">All Locations</SelectItem>
          </SelectContent>
        </Select>

        <Select value={service} onValueChange={(value) => value && setService(value)}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Select Service" />
          </SelectTrigger>
          <SelectContent className="bg-white border border-gray-200 shadow-lg">
            <SelectItem value="nail-designs">Nail Designs</SelectItem>
            <SelectItem value="nail-care">Nail Care</SelectItem>
            <SelectItem value="gel-nails">Gel Nails</SelectItem>
            <SelectItem value="all">All Services</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {paginatedItems.map((item) => (
          <Card
            key={item.id}
            className="relative w-full max-w-sm mx-auto pt-0 shadow-md border border-[#25D366] overflow-hidden"
          >
            <div className="absolute inset-0 z-30 aspect-video bg-black/25" />

            <img
              src={item.image}
              alt={item.title}
              className="relative z-20 aspect-video w-full object-cover"
            />

            {/* Header */}
            <CardHeader className="space-y-2">
              <CardTitle className="font-bold text-lg">
                {item.title}
              </CardTitle>

              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-[#25D366]" />
                <span>{item.location}</span>
              </div>

              <CardDescription className="text-sm font-medium text-[#111111]">
                {item.description}
              </CardDescription>
            </CardHeader>

            {/* Footer */}
            <CardFooter className="flex items-center justify-center">
              <Button className="w-full h-10 text-sm transform hover:-translate-y-1 transition duration-300 animate-shimmer items-center justify-center rounded-md border-[2px] border-[#25D366] px-6 font-bold text-[#111111]">
                View Profile
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex justify-center">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={() => setPage((p) => Math.max(p - 1, 1))}
              />
            </PaginationItem>

            {Array.from({ length: totalPages }).map((_, i) => (
              <PaginationItem key={i}>
                <PaginationLink
                  href="#"
                  isActive={page === i + 1}
                  onClick={() => setPage(i + 1)}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            {totalPages > 3 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}

            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}