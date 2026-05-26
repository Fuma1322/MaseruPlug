import Link from "next/link";
import prisma from "@/lib/db";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { FaWhatsapp } from "react-icons/fa";
import { MapPin, Phone } from "lucide-react";

interface Props {
  params: {
    slug: string;
  };
}

export const revalidate = 3600;

const message = encodeURIComponent(
    "Hello {name}, I found your business on MaseruPlug and I'm interested in learning more about your services. Could you please provide more details? Thank you!"
    );

export async function generateStaticParams() {
  const businesses = await prisma.business.findMany({
    select: {
      slug: true,
    },
  });

  return businesses.map((business) => ({
    slug: business.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const business = await prisma.business.findUnique({
    where: { slug: params.slug },
    include: { category: true },
  });

  if (!business) {
    return {
      title: "Business Not Found | MaseruPlug",
      description: "This business listing does not exist on MaseruPlug.",
    };
  }

  const title = `${business.name} in ${business.location} | ${business.category.name}`;

  const description =
    business.description ||
    `Contact ${business.name}, a trusted ${business.category.name.toLowerCase()} in ${business.location}. Find details, location, and services on MaseruPlug.`;

  const image = business.images?.[0] || "/lelo.jpg";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
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
    business.images.length > 0 ? business.images : ["/lelo.jpg"];

  const mainTitle = `${business.name}`;

  return (
    <div className="w-full min-h-screen bg-white px-4 py-8 md:px-10 lg:px-20">

      {/* TOP SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* LEFT */}
        <div className="space-y-4">

          {/* MAIN IMAGE */}
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <Image
              priority
              src={galleryImages[0]}
              alt={`${business.name} main image`}
              placeholder="blur"
              blurDataURL="/lelo.jpg"
              width={1200}
              height={800}
              className="w-full h-[400px] object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* SMALL IMAGES (max 4 already fixed 👍) */}
          <div className="grid grid-cols-4 gap-3">
            {galleryImages.slice(1, 5).map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl shadow-md"
              >
                <Image
                  src={image}
                  alt={`${business.name} gallery ${index + 1}`}
                  placeholder="blur"
                  blurDataURL="/lelo.jpg"
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

          {/* TITLE (SEO H1) */}
          <h1 className="text-4xl md:text-5xl font-bold text-[#111111]">
            {mainTitle}
          </h1>

          {/* LOCATION */}
          <div className="flex items-center gap-2 mt-4 text-muted-foreground">
            <MapPin className="w-5 h-5 text-[#25D366]" />
            <span className="text-lg">{business.location}</span>
          </div>

          {/* DESCRIPTION */}
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            {business.description}
          </p>

          {/* CTA BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">

            <Link
              href={`https://wa.me/266${business.whatsapp}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
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
            Recent Work By {business.name}
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
                alt={`${business.name} work ${index + 1}`}
                width={600}
                height={500}
                className="w-full h-[280px] object-cover transition duration-500 group-hover:scale-110"
                placeholder="blur"
                blurDataURL="/lelo.jpg"
              />
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}