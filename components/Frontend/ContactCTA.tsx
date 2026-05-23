"use client";

import Link from "next/link";
import {
  Eye,
  Users,
  TrendingUp,
} from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* SECTION CONTAINER */}
      <div className="max-w-7xl mx-auto px-6">

        {/* MAIN CTA WRAPPER */}
        <div className="relative overflow-hidden rounded-[3rem] border border-white/30 bg-white/60 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.08)] px-8 py-14 md:px-16 md:py-20">

          {/* INNER GRADIENT */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-[#25D366]/10" />

          {/* GRID PATTERN */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(#000 1px, transparent 1px), linear-gradient(to right, #000 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* FLOATING BLUR CIRCLES */}
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[#25D366]/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#25D366]/10 blur-3xl" />

          {/* CONTENT */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* LEFT SIDE */}
            <div>

              {/* TOP TAG */}
              <div className="inline-flex items-center rounded-full border border-[#25D366]/20 bg-[#25D366]/10 px-5 py-2 mb-6">
                <span className="text-[#25D366] font-semibold text-sm">
                  Business Owners
                </span>
              </div>

              {/* HEADING */}
              <h2 className="text-5xl md:text-6xl font-black leading-tight text-[#111111]">
                Own a business
                <br />

                <span className="text-[#25D366]">
                  in Maseru?
                </span>
              </h2>

              {/* SUBTEXT */}
              <h3 className="mt-6 text-2xl md:text-3xl font-bold text-neutral-700">
                Get discovered today
              </h3>

              {/* BUTTON */}
              <div className="mt-10">
                <Link
                  href="/list-business"
                  className="group inline-flex items-center gap-3 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:scale-105 shadow-2xl"
                >
                  List Your Business
                </Link>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="grid gap-5">

              {/* CARD 1 */}
              <div className="group rounded-3xl border border-white/30 bg-white/70 backdrop-blur-xl p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

                <div className="flex items-center gap-4">

                  <div className="flex h-16 w-16 items-center justify-center rounded-xl">
                    <Eye className="h-8 w-8 text-[#25D366]" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#111111]">
                      More Visibility
                    </h3>

                    <p className="text-neutral-500 mt-1">
                      Reach thousands of people searching for services.
                    </p>
                  </div>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="group rounded-3xl border border-white/30 bg-white/70 backdrop-blur-xl p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

                <div className="flex items-center gap-4">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl">
                    <Users className="h-8 w-8 text-[#25D366]" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#111111]">
                      More Customers
                    </h3>

                    <p className="text-neutral-500 mt-1">
                      Connect with clients actively looking for your service.
                    </p>
                  </div>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="group rounded-3xl border border-white/30 bg-white/70 backdrop-blur-xl p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

                <div className="flex items-center gap-4">

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl">
                    <TrendingUp className="h-8 w-8 text-[#25D366]" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-[#111111]">
                      More Growth
                    </h3>

                    <p className="text-neutral-500 mt-1">
                      Build your digital presence and grow your brand.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}