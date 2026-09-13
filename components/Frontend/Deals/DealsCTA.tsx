import Link from 'next/link';
import { ArrowRight, Clock3, Gift, Sparkles, Tag } from 'lucide-react';

export default function DealsCTA() {
  return (
    <section className="relative overflow-hidden bg-[#111111] py-20 sm:py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#25D366]/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-[#25D366]/10 blur-[120px]" />

      {/* Decorative circles */}
      <div className="pointer-events-none absolute right-[8%] top-12 h-20 w-20 rounded-full border border-white/10" />
      <div className="pointer-events-none absolute right-[12%] top-16 h-12 w-12 rounded-full border border-[#25D366]/20" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* LEFT CONTENT */}
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-4 py-2">
              <Sparkles className="h-4 w-4 text-[#25D366]" />

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#25D366]">
                MaseruPlug Deals
              </span>
            </div>

            <h2 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Good things <span className="text-[#25D366]">don&apos;t stay available forever.</span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-neutral-400">
              Discover special offers, limited-time promotions and exclusive deals from businesses
              around Maseru.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/deals"
                className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#25D366] px-6 py-3.5 font-semibold text-[#111111] transition-all duration-300 hover:bg-[#20c85d] hover:shadow-[0_0_35px_rgba(37,211,102,0.25)]"
              >
                Explore Deals
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <span className="flex items-center gap-2 text-sm text-neutral-500">
                <Clock3 className="h-4 w-4" />
                Limited offers available
              </span>
            </div>
          </div>

          {/* RIGHT DEAL VISUAL */}
          <div className="relative mx-auto w-full max-w-md lg:ml-auto">
            {/* Glow behind card */}
            <div className="absolute inset-8 rounded-[2rem] bg-[#25D366]/20 blur-3xl" />

            {/* Main deal card */}
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-2 shadow-2xl backdrop-blur-xl">
              <div className="relative overflow-hidden rounded-[1.5rem] bg-white">
                {/* Top banner */}
                <div className="flex items-center justify-between bg-[#25D366] px-5 py-3">
                  <div className="flex items-center gap-2">
                    <Gift className="h-4 w-4 text-[#111111]" />

                    <span className="text-xs font-bold uppercase tracking-wider text-[#111111]">
                      Special Offer
                    </span>
                  </div>

                  <span className="rounded-full bg-[#111111] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                    Limited
                  </span>
                </div>

                {/* Deal body */}
                <div className="p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                        Local Business
                      </p>

                      <h3 className="mt-2 text-2xl font-bold text-[#111111]">Exclusive Deals</h3>
                    </div>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366]/10">
                      <Tag className="h-5 w-5 text-[#25D366]" />
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-neutral-500">
                    Find something you love, claim the offer and connect directly with the business.
                  </p>

                  {/* Fake deal rows */}
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center justify-between rounded-xl bg-neutral-50 p-4">
                      <div>
                        <p className="text-sm font-semibold text-[#111111]">Beauty & Wellness</p>

                        <p className="mt-1 text-xs text-neutral-400">Special offers nearby</p>
                      </div>

                      <span className="text-sm font-bold text-[#25D366]">View</span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl bg-neutral-50 p-4">
                      <div>
                        <p className="text-sm font-semibold text-[#111111]">Local Services</p>

                        <p className="mt-1 text-xs text-neutral-400">Limited-time offers</p>
                      </div>

                      <span className="text-sm font-bold text-[#25D366]">View</span>
                    </div>
                  </div>

                  <Link
                    href="/deals"
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-[#111111] px-5 py-3 text-sm font-semibold text-[#111111] transition hover:bg-[#111111] hover:text-white"
                  >
                    See All Deals
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
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
