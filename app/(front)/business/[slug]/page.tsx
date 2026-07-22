import prisma from '@/lib/db';
import Image from 'next/image';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { MapPin } from 'lucide-react';
import BusinessActions from '@/components/Frontend/BusinessActions';
import { trackBusinessEvent } from '@/actions/analytics';

interface Props {
  params: {
    slug: string;
  };
}

export const revalidate = 3600;

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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const business = await prisma.business.findUnique({
    where: { slug: params.slug },
    include: { category: true },
  });

  if (!business) {
    return {
      title: 'Business Not Found | MaseruPlug',
      description: 'This business listing does not exist on MaseruPlug.',
    };
  }

  if (business) {
    await trackBusinessEvent(business.id, 'PROFILE_VIEW');
  }

  const title = `${business.name} in ${business.location} | ${business.category.name}`;

  const description =
    business.description ||
    `Contact ${business.name}, a trusted ${business.category.name.toLowerCase()} in ${business.location}. Find details, location, and services on MaseruPlug.`;

  const image = business.images?.[0] || '/lelo.jpg';

  return {
    title,
    description,
    alternates: {
      canonical: `https://mplug.com.ls/business/${business.slug}`,
    },
    openGraph: {
      title,
      description,
      images: [image],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
    },
  };
}

export default async function BusinessProfilePage({ params }: Props) {
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

  const galleryImages = business.images.length > 0 ? business.images : ['/lelo.jpg'];

  const mainTitle = `${business.name}`;

  return (
    <div className="min-h-screen w-full bg-white px-4 py-8 md:px-10 lg:px-20">
      {/* TOP SECTION */}
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
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
              className="h-[400px] w-full object-cover transition duration-500 hover:scale-105"
            />
          </div>

          {/* SMALL IMAGES (max 4 already fixed 👍) */}
          <div className="grid grid-cols-4 gap-3">
            {galleryImages.slice(1, 5).map((image, index) => (
              <div key={index} className="overflow-hidden rounded-2xl shadow-md">
                <Image
                  src={image}
                  alt={`${business.name} gallery ${index + 1}`}
                  placeholder="blur"
                  blurDataURL="/lelo.jpg"
                  width={400}
                  height={300}
                  className="h-24 w-full object-cover transition duration-300 hover:scale-110 md:h-28"
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col justify-center">
          {/* TITLE (SEO H1) */}
          <h1 className="text-4xl font-bold text-[#111111] md:text-5xl">{mainTitle}</h1>

          {/* LOCATION */}
          <div className="text-muted-foreground mt-4 flex items-center gap-2">
            <MapPin className="h-5 w-5 text-[#25D366]" />
            <span className="text-lg">{business.location}</span>
          </div>

          {/* DESCRIPTION */}
          <p className="mt-6 text-lg leading-relaxed text-gray-600">{business.description}</p>

          {/* CTA BUTTONS */}
          <BusinessActions business={business} />
        </div>
      </div>

      {/* GALLERY */}
      <div className="mt-20">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-bold text-[#111111] md:text-5xl">Gallery</h2>

          <p className="mt-3 text-lg text-gray-500">Recent Work By {business.name}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div key={index} className="group overflow-hidden rounded-3xl shadow-lg">
              <Image
                src={image}
                alt={`${business.name} work ${index + 1}`}
                width={600}
                height={500}
                className="h-[280px] w-full object-cover transition duration-500 group-hover:scale-110"
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
