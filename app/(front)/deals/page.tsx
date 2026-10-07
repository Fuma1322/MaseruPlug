import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Flame } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { getActiveDeals } from '@/actions/deals';

export default async function DealsPage() {
  const deals = await getActiveDeals();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#25D366]/20 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#25D366]/10 blur-3xl" />

        <div className="container relative z-10 mx-auto px-4 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/20 bg-[#25D366]/10 px-4 py-2 font-medium text-[#25D366]">
              <Flame className="h-4 w-4" />
              Limited Time Offers
            </div>

            <h1 className="mt-6 text-5xl font-black text-[#111111] md:text-6xl">
              <span className="text-[#25D366]">Maseru</span>
              Plug Deals
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              Discover exclusive offers from businesses around Lesotho.
            </p>
          </div>
        </div>
      </section>

      {/* Deals */}
      <section className="container mx-auto px-4 pb-20">
        {deals.length === 0 ? (
          <div className="mx-auto max-w-xl rounded-3xl border border-gray-200 bg-gray-50 p-12 text-center">
            <Flame className="mx-auto h-10 w-10 text-gray-300" />

            <h2 className="mt-4 text-2xl font-bold text-[#111111]">No active deals right now</h2>

            <p className="mt-2 text-gray-500">
              Check back soon for exclusive offers from local businesses.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {deals.map((deal) => {
              const spotsLeft = deal.totalSpots - deal.claimedSpots;

              return (
                <Link key={deal.id} href={`/deals/${deal.slug}`} className="group">
                  <article className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                      <Image
                        src={deal.image}
                        alt={deal.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-[#25D366] shadow-sm">
                        Limited Time Deal
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-sm font-medium text-gray-500">{deal.business.name}</p>

                      <h2 className="mt-2 text-2xl font-bold text-[#111111]">{deal.title}</h2>

                      <p className="mt-3 line-clamp-3 text-gray-600">{deal.description}</p>

                      {/* Price */}
                      <div className="mt-6 flex items-center gap-3">
                        <span className="text-gray-400 line-through">M{deal.originalPrice}</span>

                        <span className="text-3xl font-black text-[#25D366]">
                          {deal.offerPrice === 0 ? 'FREE' : `M${deal.offerPrice}`}
                        </span>
                      </div>

                      {/* Spots */}
                      <div className="mt-4 text-sm text-gray-500">
                        {spotsLeft > 0 ? `${spotsLeft} spots remaining` : 'Fully claimed'}
                      </div>

                      {/* CTA */}
                      <div className="mt-8">
                        <Button className="h-12 w-full rounded-xl bg-transparent font-semibold text-[#25D366] shadow-md transition hover:bg-[#25D366] hover:text-white">
                          Claim Deal
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}
