"use client"

import {
  Eye,
  Users,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

const message = encodeURIComponent(
  "Hello MaseruPlug, I am interested in listing my business on your platform. Please share more details."
);

export default function ContactCTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <div className="relative overflow-hidden rounded-[3rem] border border-white/30 bg-white/60 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,0.08)] px-8 py-14 md:px-16 md:py-20">

          <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-[#25D366]/10" />

          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(#000 1px, transparent 1px), linear-gradient(to right, #000 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[#25D366]/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#25D366]/10 blur-3xl" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>

              <div className="inline-flex items-center rounded-full border border-[#25D366]/20 bg-[#25D366]/10 px-5 py-2 mb-6">
                <span className="text-[#25D366] font-semibold text-sm">
                  Business Owners
                </span>
              </div>

              <h2 className="text-5xl md:text-6xl font-black leading-tight text-[#111111]">
                Own a business
                <br />

                <span className="text-[#25D366]">
                  in Maseru?
                </span>
              </h2>

              <h3 className="mt-6 text-2xl md:text-3xl font-bold text-neutral-700">
                Get discovered today
              </h3>

              <div className="mt-10">
                <Link
                  href={`https://wa.me/26663272145?text=${message}`}
                  target="_blank"
                  className="group inline-flex items-center gap-3 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:scale-105 shadow-2xl"
                >
                  List Your Business
                </Link>
              </div>
            </div>

            <div className="grid gap-5">

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