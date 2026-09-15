import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Users, Search, TrendingUp } from 'lucide-react';

export default function PricingHero() {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      {/* Background atmosphere */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/3 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[#25D366]/30 blur-[120px]" />

        <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-[#25D366]/10 blur-[100px]" />

        <div className="absolute inset-0 bg-[radial-gradient(#11111112_1px,transparent_1px)] opacity-80 [background-size:24px_24px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-20 pt-32 lg:px-8 lg:pb-28 lg:pt-20">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#25D366]/30 bg-white/80 px-4 py-2 text-sm font-semibold text-[#111111] shadow-[0_8px_30px_rgba(37,211,102,0.08)] backdrop-blur">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#25D366]/10">
              <Sparkles className="h-3.5 w-3.5 text-[#25D366]" />
            </span>
            Built for ambitious local businesses
            <span className="ml-1 h-1.5 w-1.5 rounded-full bg-[#25D366]" />
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-bold tracking-[-0.04em] text-[#111111] sm:text-6xl lg:text-7xl">
            Put your business
            <br />
            <span className="relative inline-block">
              where customers
              <span className="relative ml-2 text-[#25D366]">are looking.</span>
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            Your business deserves to be discovered. Choose a MaseruPlug plan that helps more
            customers find you, connect with you, and choose your services.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-[#111111] px-7 py-4 text-sm font-semibold text-white shadow-[0_12px_35px_rgba(17,17,17,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:shadow-[0_18px_45px_rgba(17,17,17,0.25)]"
            >
              List Your Business
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>

            <Link
              href="#plans"
              className="inline-flex items-center justify-center rounded-2xl border border-gray-200 bg-white/80 px-7 py-4 text-sm font-semibold text-[#111111] shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[#25D366]/50 hover:bg-[#25D366]/5 hover:shadow-md"
            >
              Explore Plans
            </Link>
          </div>
        </div>

        {/* Value indicators */}
        <div className="mx-auto mt-20 max-w-4xl">
          <div className="grid overflow-hidden rounded-3xl border border-gray-200 bg-white/80 shadow-[0_20px_70px_rgba(17,17,17,0.06)] backdrop-blur sm:grid-cols-3">
            {/* Discovery */}
            <div className="flex items-center gap-4 border-b border-gray-200 p-6 sm:border-b-0 sm:border-r">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#25D366]/10">
                <Search className="h-5 w-5 text-[#25D366]" />
              </div>

              <div>
                <p className="text-sm font-bold text-[#111111]">Get discovered</p>

                <p className="mt-1 text-xs text-gray-500">Be easier to find online</p>
              </div>
            </div>

            {/* Customers */}
            <div className="flex items-center gap-4 border-b border-gray-200 p-6 sm:border-b-0 sm:border-r">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#25D366]/10">
                <Users className="h-5 w-5 text-[#25D366]" />
              </div>

              <div>
                <p className="text-sm font-bold text-[#111111]">Reach customers</p>

                <p className="mt-1 text-xs text-gray-500">Connect with people nearby</p>
              </div>
            </div>

            {/* Growth */}
            <div className="flex items-center gap-4 p-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#25D366]/10">
                <TrendingUp className="h-5 w-5 text-[#25D366]" />
              </div>

              <div>
                <p className="text-sm font-bold text-[#111111]">Grow your presence</p>

                <p className="mt-1 text-xs text-gray-500">Build your digital footprint</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
