import Link from "next/link";
import prisma from "@/lib/db";
import Image from "next/image";
import { notFound } from "next/navigation";

import { FaWhatsapp } from "react-icons/fa";
import { MapPin, Phone } from "lucide-react";

interface Props {
  params: {
    slug: string;
  };
}

export default async function BusinessProfilePage({
  params,
}: Props) {
  const business = await prisma.business.findUnique({
    where: {
      slug: params.slug,
    },
    include: {
      category: true,
    },
  });

  if (!business) {
    notFound();
  }

  const galleryImages =
    business.images.length > 0
      ? business.images
      : ["/lelo.jpg"];

  return (
    <div className="w-full min-h-screen bg-white px-4 py-8 md:px-10 lg:px-20">

      {/* TOP SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* LEFT */}
        <div className="space-y-4">

          {/* Main Image */}
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <Image
              src={galleryImages[0]}
              alt={business.name}
              width={1200}
              height={800}
              className="w-full h-[400px] object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Small Images */}
          <div className="grid grid-cols-4 gap-3">
            {galleryImages.slice(1, 5).map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl shadow-md"
              >
                <Image
                  src={image}
                  alt={`Gallery ${index}`}
                  width={400}
                  height={300}
                  className="w-full h-24 md:h-28 object-cover hover:scale-110 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col justify-center">

          <h1 className="text-4xl md:text-5xl font-bold text-[#111111]">
            {business.name}
          </h1>

          {/* Location */}
          <div className="flex items-center gap-2 mt-4 text-muted-foreground">
            <MapPin className="w-5 h-5 text-[#25D366]" />
            <span className="text-lg">{business.location}</span>
          </div>

          {/* Description */}
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            {business.description}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">

            <Link
              href={`https://wa.me/266${business.whatsapp}`}
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-4 text-white font-semibold shadow-lg hover:scale-105 transition duration-300"
            >
              <FaWhatsapp className="w-5 h-5" />
              Chat On WhatsApp
            </Link>

            <Link
              href={`tel:${business.phone}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#25D366] px-6 py-4 font-semibold text-[#111111] hover:bg-[#25D366] hover:text-white transition duration-300"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </Link>

          </div>
        </div>
      </div>

      {/* GALLERY */}
      <div className="mt-20">

        <div className="mb-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#111111]">
            Gallery
          </h2>

          <p className="text-gray-500 mt-3 text-lg">
            Explore recent work
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl shadow-lg"
            >
              <Image
                src={image}
                alt={`Gallery ${index + 1}`}
                width={600}
                height={500}
                className="w-full h-[280px] object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}