'use client';

import Link from 'next/link';
import { ArrowRight, Search, Store, Users, Sparkles, MapPin, HeartHandshake } from 'lucide-react';

const pillars = [
  {
    icon: Search,
    number: '01',
    title: 'Discover',
    description:
      'Help customers find the businesses and services they need, exactly when they need them.',
  },
  {
    icon: Store,
    number: '02',
    title: 'Connect',
    description:
      'Give local businesses a professional digital presence without the cost and complexity of a traditional website.',
  },
  {
    icon: Users,
    number: '03',
    title: 'Grow',
    description:
      'Create opportunities for businesses to reach more customers, build visibility and grow their presence.',
  },
];

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-32">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#25D366]/20 blur-[140px]" />

        <div className="absolute inset-0 bg-[radial-gradient(#11111108_2px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* ------------------------------------------------ */}
        {/* HERO */}
        {/* ------------------------------------------------ */}

        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#25D366]/30 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#111111] shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-[#25D366]" />
            About MaseruPlug
          </div>

          <h1 className="text-5xl font-bold tracking-[-0.045em] text-[#111111] sm:text-6xl lg:text-7xl">
            Making it easier to
            <br />
            <span className="text-[#25D366]">find local businesses.</span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
            MaseruPlug is a digital platform built to connect people with local businesses across
            Lesotho — while giving entrepreneurs a simple and affordable way to be discovered
            online.
          </p>
        </div>

        {/* ------------------------------------------------ */}
        {/* STORY */}
        {/* ------------------------------------------------ */}

        <div className="mt-24 grid items-stretch gap-6 lg:grid-cols-[1.25fr_0.75fr]">
          {/* Main story */}
          <div className="relative overflow-hidden rounded-[2rem] border border-gray-200 bg-[#111111] p-8 text-white shadow-[0_25px_80px_rgba(17,17,17,0.12)] sm:p-10 lg:p-12">
            {/* Glow */}
            <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#25D366]/20 blur-[90px]" />

            <div className="relative">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#25D366]">
                  <MapPin className="h-5 w-5 text-[#111111]" />
                </div>

                <span className="text-sm font-semibold text-[#25D366]">Built for Lesotho</span>
              </div>

              <h2 className="mt-8 max-w-xl text-3xl font-bold tracking-tight sm:text-4xl">
                Great businesses shouldn&apos;t be difficult to find.
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300">
                Finding a reliable carpenter, nail technician, plumber, welder, tattoo artist or
                clothing business has traditionally depended on referrals, social media posts and
                word of mouth.
              </p>

              <p className="mt-5 max-w-2xl text-base leading-8 text-gray-300">
                At the same time, many talented entrepreneurs cannot justify the cost, complexity or
                ongoing administration of a traditional website.
              </p>

              <div className="mt-8 h-px w-full bg-white/10" />

              <p className="mt-8 max-w-2xl text-base font-medium leading-8 text-white">
                MaseruPlug exists to bridge that gap — creating one place where customers can
                discover local businesses and where entrepreneurs can build their digital presence.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="relative overflow-hidden rounded-[2rem] border border-[#25D366]/20 bg-[#25D366]/5 p-8 sm:p-10">
            <div className="absolute -bottom-20 -right-20 h-52 w-52 rounded-full bg-[#25D366]/10 blur-[70px]" />

            <div className="relative flex h-full flex-col">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#25D366]">
                <HeartHandshake className="h-5 w-5 text-[#111111]" />
              </div>

              <p className="mt-8 text-xs font-bold uppercase tracking-[0.18em] text-[#25D366]">
                Our Mission
              </p>

              <h3 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#111111]">
                Strengthening local business through digital access.
              </h3>

              <p className="mt-6 text-sm leading-7 text-gray-600">
                We want to make local businesses easier to discover, support entrepreneurship and
                help strengthen the local economies and communities that make Lesotho unique.
              </p>

              <div className="mt-auto pt-10">
                <div className="flex items-center gap-3 text-sm font-semibold text-[#111111]">
                  <span className="h-2 w-2 rounded-full bg-[#25D366]" />
                  One business at a time.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------ */}
        {/* PILLARS */}
        {/* ------------------------------------------------ */}

        <div className="mt-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#25D366]">
              What we do
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#111111] sm:text-4xl">
              Built around people and businesses.
            </h2>

            <p className="mt-4 text-gray-600">
              MaseruPlug brings discovery, connection and growth together in one simple platform.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <div
                  key={pillar.number}
                  className="group relative overflow-hidden rounded-[2rem] border border-gray-200 bg-white p-8 shadow-[0_12px_45px_rgba(17,17,17,0.04)] transition-all duration-500 hover:-translate-y-2 hover:border-[#25D366]/30 hover:shadow-[0_25px_65px_rgba(17,17,17,0.08)]"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#25D366]/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#25D366]">
                      <Icon className="h-5 w-5 text-[#25D366] transition-colors group-hover:text-[#111111]" />
                    </div>

                    <span className="text-xs font-black tracking-widest text-gray-300">
                      {pillar.number}
                    </span>
                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-[#111111]">{pillar.title}</h3>

                  <p className="mt-4 text-sm leading-7 text-gray-600">{pillar.description}</p>

                  <div className="mt-8 h-1 w-8 rounded-full bg-[#25D366] transition-all duration-300 group-hover:w-14" />
                </div>
              );
            })}
          </div>
        </div>

        {/* ------------------------------------------------ */}
        {/* CLOSING CTA */}
        {/* ------------------------------------------------ */}

        <div className="relative mt-24 overflow-hidden rounded-[2rem] bg-[#25D366] px-8 py-14 text-center sm:px-12 lg:py-16">
          {/* Decorative circles */}
          <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full border-[40px] border-white/10" />

          <div className="pointer-events-none absolute -bottom-32 -right-20 h-72 w-72 rounded-full border-[50px] border-white/10" />

          <div className="relative mx-auto max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#111111]/60">
              Your business belongs here
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#111111] sm:text-4xl lg:text-5xl">
              Ready to get discovered?
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#111111]/70 sm:text-base">
              Join businesses across Lesotho building their digital presence and connecting with
              customers through MaseruPlug.
            </p>

            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-3 rounded-2xl bg-[#111111] px-7 py-4 text-sm font-bold text-white shadow-[0_12px_35px_rgba(17,17,17,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-black hover:shadow-[0_18px_45px_rgba(17,17,17,0.3)]"
            >
              Get Your Business Listed
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
