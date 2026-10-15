import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getDealBySlug } from '@/actions/deals';
import DealClaim from '@/components/Frontend/DealClaim';
import { ArrowRight, BadgeCheck, Gift } from 'lucide-react';
import DealImageViewer from '@/components/Frontend/DealImageViewer';

type Props = {
  params: {
    slug: string;
  };
};

export default async function DealDetailsPage({ params }: Props) {
  const deal = await getDealBySlug(params.slug);

  if (!deal) {
    notFound();
  }

  const spotsLeft = deal.totalSpots - deal.claimedSpots;

  return (
    <main className="min-h-screen bg-white">
      <section className="container mx-auto max-w-6xl px-4 py-16">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Image */}
          <DealImageViewer image={deal.image} title={deal.title} />

          {/* Details */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#25D366]/10 px-4 py-2 font-medium text-[#25D366]">
              <Gift className="h-4 w-4" />
              Limited Time Deal
            </div>

            <p className="mt-6 text-sm font-semibold text-gray-500">{deal.business.name}</p>

            <h1 className="mt-2 text-4xl font-black leading-tight text-[#111111] md:text-5xl">
              {deal.title}
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-gray-600">{deal.description}</p>

            {/* Price */}
            <div className="mt-8 flex items-center gap-4">
              <span className="text-xl text-gray-400 line-through">M{deal.originalPrice}</span>

              <span className="text-4xl font-black text-[#25D366]">
                {deal.offerPrice === 0 ? 'FREE' : `M${deal.offerPrice}`}
              </span>
            </div>

            {/* Spots */}
            <div className="mt-6 inline-flex rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-600">
              {spotsLeft > 0 ? `${spotsLeft} spots remaining` : 'This deal is fully claimed'}
            </div>

            {/* Claim */}
            {spotsLeft > 0 && (
              <div className="mt-10">
                <DealClaim dealId={deal.id} dealTitle={deal.title} />
              </div>
            )}

            {/* Trust */}
            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-gray-200 bg-gray-50 p-5">
              <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#25D366]" />

              <div>
                <p className="font-semibold text-[#111111]">Powered by MaseruPlug</p>

                <p className="mt-1 text-sm text-gray-500">
                  Claim your offer through MaseruPlug and present your unique offer code to the
                  business.
                </p>
              </div>
            </div>

            {/* BUSINESS CTA */}
            <div className="mt-6 overflow-hidden rounded-3xl border border-gray-100 bg-[#111111]">
              <div className="p-6 sm:p-8">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="max-w-xl">
                    <p className="text-sm font-bold text-[#25D366]">Interested in this business?</p>

                    <h2 className="mt-2 text-xl font-bold leading-tight text-white sm:text-2xl">
                      See more of {deal.business.name}&apos;s work
                    </h2>

                    <p className="mt-2 text-sm leading-relaxed text-gray-400">
                      Explore their gallery, learn more about the business, and get in touch with
                      them directly.
                    </p>
                  </div>

                  <Link
                    href={`/business/${deal.business.slug}`}
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3.5 text-sm font-bold text-white transition hover:bg-[#1ebe5d] sm:px-6"
                  >
                    View Business
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
