import { ArrowRight, BadgeCheck } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function PricingHero() {
  return (
    <div>
      <section className="border-gray-100">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 px-4 py-2 text-sm font-medium text-[#111111]">
              <BadgeCheck className="h-4 w-4 text-[#25D366]" />
              Built for local businesses
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Grow your business with <span className="text-[#25D366]">MaseruPlug.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Whether you are just getting started or ready to reach more customers, there is a
              place for your business on MaseruPlug.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#111111] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-black"
              >
                List Your Business
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="#plans"
                className="inline-flex items-center justify-center rounded-xl border border-gray-200 px-6 py-3.5 text-sm font-semibold transition hover:border-[#25D366] hover:bg-[#25D366]/5"
              >
                Explore Plans
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
