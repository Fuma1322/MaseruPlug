import { ArrowRight, Users } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function PricingCTA() {
  return (
    <div>
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="rounded-3xl bg-[#111111] px-6 py-14 text-center text-white sm:px-12">
            <Users className="mx-auto h-8 w-8 text-[#25D366]" />

            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to help more customers find you?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-gray-300">
              Join MaseruPlug and start building your digital presence today.
            </p>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-bold text-[#111111] transition hover:bg-[#1fc65d]"
              >
                List Your Business
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
