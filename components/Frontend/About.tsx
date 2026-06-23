"use client";

import Link from "next/link";
import {
  Search,
  Store,
  Users,
  ArrowRight,
} from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">

          <span className="inline-flex items-center rounded-full bg-[#25D366]/10 px-4 py-2 text-sm font-semibold text-[#25D366]">
            About MaseruPlug
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold text-[#111111]">
            Connecting People With Trusted Local Businesses
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            MaseruPlug was created to help people discover trusted
            businesses and services across Lesotho while giving
            local entrepreneurs an affordable online presence.
          </p>

        </div>

        {/* Story */}
        <div className="mt-20 grid gap-10 lg:grid-cols-2 items-center">

          <div>

            <h3 className="text-3xl font-bold text-[#111111]">
              Why We Built MaseruPlug
            </h3>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Finding a reliable carpenter, nail technician,
              plumber, welder, tattoo artist or clothing business
              often depends on referrals and word of mouth.
              Many talented business owners struggle to get
              discovered online because websites are expensive
              and difficult to maintain.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              MaseruPlug bridges that gap by creating one place
              where customers can discover trusted local services
              while helping small businesses grow their visibility.
            </p>

          </div>

          <div className="rounded-3xl border border-[#25D366]/20 bg-[#25D366]/5 p-8">

            <h4 className="text-2xl font-bold text-[#111111]">
              Our Mission
            </h4>

            <p className="mt-4 text-gray-600">
              To make local businesses easier to discover,
              support entrepreneurship and strengthen local
              economies throughout Lesotho.
            </p>

          </div>

        </div>

        {/* Features */}
        <div className="mt-20 grid gap-6 md:grid-cols-3">

          <div className="rounded-3xl border p-8">
            <Search className="h-12 w-12 text-[#25D366]" />

            <h3 className="mt-5 text-xl font-bold">
              Discover Services
            </h3>

            <p className="mt-3 text-gray-600">
              Find trusted businesses in one place.
            </p>
          </div>

          <div className="rounded-3xl border p-8">
            <Store className="h-12 w-12 text-[#25D366]" />

            <h3 className="mt-5 text-xl font-bold">
              Promote Businesses
            </h3>

            <p className="mt-3 text-gray-600">
              Give entrepreneurs an affordable online presence.
            </p>
          </div>

          <div className="rounded-3xl border p-8">
            <Users className="h-12 w-12 text-[#25D366]" />

            <h3 className="mt-5 text-xl font-bold">
              Build Community
            </h3>

            <p className="mt-3 text-gray-600">
              Connect customers with local opportunities.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-20 rounded-3xl bg-[#25D366] p-10 text-center text-white">

          <h3 className="text-3xl font-bold">
            Ready to Grow Your Business?
          </h3>

          <p className="mt-4 opacity-90">
            Join MaseruPlug and get discovered by more customers.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 font-semibold text-[#111111] font-semibold shadow-lg transition-all duration-300 hover:scale-[1.03]"
          >
            Get Listed
            <ArrowRight className="h-5 w-5" />
          </Link>

        </div>

      </div>

    </section>
  );
}