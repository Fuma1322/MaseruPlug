import Link from 'next/link';
import prisma from '@/lib/db';
import Image from 'next/image';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArrowRight, MapPin, Tag } from 'lucide-react';
import { trackBusinessEvent } from '@/actions/analytics';
import BusinessActions from '@/components/Frontend/BusinessActions';

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
    where: {
      slug: params.slug,
    },
    include: {
      category: true,
      deals: {
        where: {
          status: 'ACTIVE',
        },
        orderBy: {
          createdAt: 'desc',
        },
      },
    },
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
      deals: {
        where: {
          status: 'ACTIVE',
        },
        orderBy: {
          createdAt: 'desc',
        },
      },
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

          {/* SMALL IMAGES */}
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

      {/* DEALS */}
      {business.deals.length > 0 && (
        <section className="mt-16 md:mt-20">
          {/* SECTION HEADER */}
          <div className="mb-7 flex flex-col gap-4 sm:mb-8">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#25D366]/10 px-3 py-1.5 text-xs font-bold text-[#25D366] sm:px-4 sm:py-2 sm:text-sm">
                <Tag className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                Special Offers
              </div>

              <h2 className="text-2xl font-bold leading-tight text-[#111111] sm:text-3xl md:text-4xl">
                Deals from {business.name}
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-gray-500 sm:mt-3 sm:text-base">
                Grab an exclusive offer before it&apos;s gone.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {business.deals.map((deal) => {
              const spotsLeft = deal.totalSpots - deal.claimedSpots;

              return (
                <Link
                  key={deal.id}
                  href={`/deals/${deal.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:rounded-3xl"
                >
                  {/* IMAGE */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 sm:aspect-[5/4]">
                    <Image
                      src={deal.image}
                      alt={deal.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />

                    {/* OFFER BADGE */}
                    <div className="absolute left-3 top-3 rounded-full bg-[#25D366] px-3 py-1.5 text-xs font-bold text-white shadow-lg sm:left-4 sm:top-4 sm:px-4 sm:py-2 sm:text-sm">
                      Special Offer
                    </div>

                    {/* SPOTS */}
                    {spotsLeft > 0 && (
                      <div className="absolute bottom-3 left-3 rounded-full bg-black/75 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur-sm sm:bottom-4 sm:left-4 sm:text-xs">
                        {spotsLeft} {spotsLeft === 1 ? 'spot' : 'spots'} left
                      </div>
                    )}
                  </div>

                  {/* CONTENT */}
                  <div className="flex flex-1 items-center justify-between gap-4 p-4 sm:p-5">
                    <div className="min-w-0">
                      <h3 className="truncate text-base font-bold text-[#111111] transition group-hover:text-[#25D366] sm:text-lg">
                        {deal.title}
                      </h3>

                      <div className="mt-1 flex flex-wrap items-center gap-2">
                        <span className="text-lg font-black text-[#111111] sm:text-xl">
                          M{deal.offerPrice.toFixed(2)}
                        </span>

                        <span className="text-xs text-gray-400 line-through sm:text-sm">
                          M{deal.originalPrice.toFixed(2)}
                        </span>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex shrink-0 items-center gap-2 text-sm font-semibold text-[#25D366]">
                      <span className="hidden sm:inline">View Deal</span>

                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366] transition group-hover:bg-[#25D366] group-hover:text-white">
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

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
