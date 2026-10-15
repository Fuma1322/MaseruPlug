import Link from 'next/link';
import prisma from '@/lib/db';
import { ArrowRight, Clock3, Gift, Sparkles, Tag } from 'lucide-react';

export default async function DealsCTA() {
  const now = new Date();

  const deals = await prisma.deal.findMany({
    where: {
      status: 'ACTIVE',
      OR: [
        {
          startsAt: null,
        },
        {
          startsAt: {
            lte: now,
          },
        },
      ],
      AND: [
        {
          OR: [
            {
              expiresAt: null,
            },
            {
              expiresAt: {
                gte: now,
              },
            },
          ],
        },
      ],
    },
    include: {
      business: {
        select: {
          name: true,
        },
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
    take: 3,
  });

  return (
    <section className="relative w-full overflow-hidden bg-[#111111] py-14 sm:py-20 md:py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-32 -top-24 h-64 w-64 rounded-full bg-[#25D366]/20 blur-[90px] sm:-left-32 sm:-top-32 sm:h-96 sm:w-96 sm:blur-[120px]" />

      <div className="pointer-events-none absolute -bottom-32 -right-28 h-64 w-64 rounded-full bg-[#25D366]/10 blur-[90px] sm:-right-20 sm:h-96 sm:w-96 sm:blur-[120px]" />

      {/* Decorative circles */}
      <div className="pointer-events-none absolute right-[4%] top-8 h-14 w-14 rounded-full border border-white/10 sm:right-[8%] sm:top-12 sm:h-20 sm:w-20" />

      <div className="pointer-events-none absolute right-[8%] top-12 h-9 w-9 rounded-full border border-[#25D366]/20 sm:right-[12%] sm:top-16 sm:h-12 sm:w-12" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          {/* LEFT CONTENT */}
          <div className="w-full min-w-0 max-w-2xl text-center lg:text-left">
            {/* Eyebrow */}
            <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-3 py-2 sm:mb-6 sm:px-4">
              <Sparkles className="h-4 w-4 shrink-0 text-[#25D366]" />

              <span className="truncate text-[9px] font-semibold uppercase tracking-[0.14em] text-[#25D366] sm:text-xs sm:tracking-[0.18em]">
                MaseruPlug Deals
              </span>
            </div>

            {/* Heading */}
            <h2 className="w-full break-words text-[2.15rem] font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-[3.5rem] lg:text-6xl">
              Good things <span className="text-[#25D366]">don&apos;t stay available forever.</span>
            </h2>

            {/* Description */}
            <p className="mx-auto mt-5 w-full max-w-xl text-sm leading-6 text-neutral-400 sm:mt-6 sm:text-lg sm:leading-8 lg:mx-0">
              Discover special offers, limited-time promotions and exclusive deals from businesses
              around Maseru.
            </p>

            {/* CTA */}
            <div className="mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
              <Link
                href="/deals"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3.5 text-sm font-semibold text-[#111111] transition-all duration-300 hover:bg-[#20c85d] hover:shadow-[0_0_35px_rgba(37,211,102,0.25)] sm:w-auto sm:px-6 sm:text-base"
              >
                Explore Deals
                <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <span className="flex w-full items-center justify-center gap-2 text-xs text-neutral-500 sm:w-auto sm:justify-start sm:text-sm">
                <Clock3 className="h-4 w-4 shrink-0" />
                Limited offers available
              </span>
            </div>
          </div>

          {/* RIGHT DEALS */}
          <div className="relative mx-auto mt-2 w-full min-w-0 max-w-md lg:ml-auto lg:mt-0">
            {/* Glow behind cards */}
            <div className="absolute inset-4 rounded-[2rem] bg-[#25D366]/20 blur-3xl sm:inset-8" />

            <div className="relative w-full min-w-0 overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-1.5 shadow-2xl backdrop-blur-xl sm:rounded-[2rem] sm:p-2">
              <div className="w-full min-w-0 overflow-hidden rounded-[1.15rem] bg-white p-4 sm:rounded-[1.5rem] sm:p-6">
                {/* Header */}
                <div className="flex min-w-0 items-center justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400 sm:text-xs">
                      Available now
                    </p>

                    <h3 className="mt-1 truncate text-lg font-bold text-[#111111] sm:text-xl">
                      Latest Deals
                    </h3>
                  </div>

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366]/10 sm:h-11 sm:w-11">
                    <Tag className="h-5 w-5 text-[#25D366]" />
                  </div>
                </div>

                {/* DEAL LIST */}
                {deals.length > 0 ? (
                  <div className="mt-5 w-full min-w-0 space-y-3 sm:mt-6">
                    {deals.map((deal) => {
                      const spotsLeft = deal.totalSpots - deal.claimedSpots;

                      return (
                        <Link
                          key={deal.id}
                          href={`/deals/${deal.slug}`}
                          className="group block w-full min-w-0 overflow-hidden rounded-xl border border-neutral-100 bg-neutral-50 p-3 transition-all duration-300 hover:border-[#25D366]/40 hover:bg-[#25D366]/5 sm:p-4"
                        >
                          <div className="flex min-w-0 items-start gap-3 sm:gap-4">
                            {/* Deal image */}
                            <div className="h-12 w-12 shrink-0 overflow-hidden rounded-xl bg-neutral-200 sm:h-16 sm:w-16">
                              <img
                                src={deal.image}
                                alt={deal.title}
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                            </div>

                            {/* Deal info */}
                            <div className="min-w-0 flex-1">
                              <h4 className="truncate text-sm font-bold text-[#111111]">
                                {deal.title}
                              </h4>

                              <p className="mt-1 truncate text-xs text-neutral-500">
                                {deal.business.name}
                              </p>

                              <div className="mt-2 flex min-w-0 items-center gap-2">
                                <span className="shrink-0 text-sm font-bold text-[#25D366]">
                                  M{deal.offerPrice}
                                </span>

                                {deal.originalPrice > deal.offerPrice && (
                                  <span className="truncate text-xs text-neutral-400 line-through">
                                    M{deal.originalPrice}
                                  </span>
                                )}
                              </div>
                            </div>

                            <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-neutral-300 transition-all group-hover:translate-x-1 group-hover:text-[#25D366]" />
                          </div>

                          {/* Availability */}
                          {deal.totalSpots > 0 && (
                            <div className="mt-3 flex min-w-0 items-center justify-between gap-3 border-t border-neutral-200 pt-3">
                              <span className="truncate text-[10px] text-neutral-400 sm:text-[11px]">
                                {spotsLeft > 0
                                  ? `${spotsLeft} ${spotsLeft === 1 ? 'spot' : 'spots'} left`
                                  : 'Fully claimed'}
                              </span>

                              {spotsLeft > 0 && (
                                <span className="shrink-0 text-[10px] font-semibold text-[#25D366] sm:text-[11px]">
                                  Claim now
                                </span>
                              )}
                            </div>
                          )}
                        </Link>
                      );
                    })}
                  </div>
                ) : (
                  /* EMPTY STATE */
                  <div className="mt-5 rounded-2xl border border-dashed border-neutral-200 bg-neutral-50 px-4 py-7 text-center sm:mt-6 sm:px-5 sm:py-8">
                    <Gift className="mx-auto h-8 w-8 text-[#25D366]" />

                    <h4 className="mt-3 font-semibold text-[#111111]">
                      Something special is coming.
                    </h4>

                    <p className="mt-2 text-sm leading-6 text-neutral-500">
                      We&apos;re working with local businesses to bring you exclusive offers.
                    </p>
                  </div>
                )}

                {/* View all */}
                <Link
                  href="/deals"
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-[#111111] px-4 py-3 text-sm font-semibold text-[#111111] transition hover:bg-[#111111] hover:text-white sm:mt-5 sm:px-5"
                >
                  See All Deals
                  <ArrowRight className="h-4 w-4 shrink-0" />
                </Link>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-white/10 bg-[#1a1a1a] px-4 py-3 shadow-xl sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366]/10">
                  <Sparkles className="h-4 w-4 text-[#25D366]" />
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-wider text-neutral-500">Discover</p>

                  <p className="text-sm font-semibold text-white">Something special</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
