import { ArrowRight, Check, Search, Star, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const plans = [
  {
    name: 'Get Listed',
    eyebrow: 'A simple place to start',
    bestFor: 'For businesses getting online',
    description:
      'Make your business discoverable and give customers an easy way to find and contact you.',
    price: 'M0',
    period: 'forever',
    icon: Search,
    featured: false,
    cta: 'List Your Business',
    href: '/contact',
    features: [
      'Business profile',
      'Business category',
      'Location',
      'Phone & WhatsApp contact',
      'Business description',
      'Up to 6 photos',
      'Appear in relevant searches',
    ],
  },

  {
    name: 'Growth',
    eyebrow: 'For businesses ready to grow',
    bestFor: 'Best for growing businesses',
    description:
      'Build a stronger presence on MaseruPlug and give customers more reasons to discover and contact your business.',
    price: 'M___',
    period: 'per month',
    icon: TrendingUp,
    featured: true,
    cta: 'Choose Growth',
    href: '/contact',
    features: [
      'Everything in Get Listed',
      'Up to 12 photos',
      'Enhanced business profile',
      'Additional social links',
      'Verified business badge',
      'Business performance insights',
      'Access to MaseruPlug Deals',
      'Enhanced search visibility',
    ],
  },

  {
    name: 'Featured',
    eyebrow: 'For businesses seeking more visibility',
    bestFor: 'For businesses seeking maximum visibility',
    description:
      'Put your business in front of more customers with stronger visibility and promotional opportunities.',
    price: 'M___',
    period: 'per month',
    icon: Star,
    featured: false,
    cta: 'Choose Featured',
    href: '/contact',
    features: [
      'Everything in Growth',
      'Featured business placement',
      'Priority category visibility',
      'Featured badge',
      'Promotional opportunities',
      'Stronger profile presentation',
      'Priority consideration for campaigns',
      'Lead Boost opportunities',
    ],
  },
];

export default function PricingPlans() {
  return (
    <section id="plans" className="relative overflow-hidden bg-gray-50/60 py-24 lg:py-32">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#25D366]/5 blur-[120px]" />

        <div className="absolute inset-0 bg-[radial-gradient(#11111108_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#25D366]/30 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#111111] shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#25D366]" />
            Simple, transparent pricing
          </div>

          <h2 className="text-4xl font-bold tracking-[-0.035em] text-[#111111] sm:text-5xl">
            Start where you are.
            <br />
            <span className="text-[#25D366]">Grow when you&apos;re ready.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Every business deserves the opportunity to be discovered. Choose the level of visibility
            and support that fits your business today.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid items-stretch gap-6 lg:grid-cols-3 lg:gap-5">
          {plans.map((plan) => {
            const Icon = plan.icon;

            return (
              <div
                key={plan.name}
                className={`group relative flex flex-col overflow-hidden rounded-[2rem] border bg-white p-7 transition-all duration-500 hover:-translate-y-2 ${
                  plan.featured
                    ? `border-[#25D366]/60 shadow-[0_25px_80px_rgba(37,211,102,0.14)] lg:-translate-y-3 lg:hover:-translate-y-5`
                    : `border-gray-200 shadow-[0_15px_50px_rgba(17,17,17,0.05)] hover:border-[#25D366]/30 hover:shadow-[0_25px_70px_rgba(17,17,17,0.09)]`
                } `}
              >
                {/* Featured glow */}
                {plan.featured && (
                  <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#25D366]/10 blur-[70px]" />
                )}

                {/* Popular Badge */}
                {plan.featured && (
                  <div className="absolute left-0 right-0 top-0">
                    <div className="flex justify-center">
                      <span className="rounded-b-xl bg-[#25D366] px-5 py-2 text-[10px] font-black tracking-[0.18em] text-[#111111]">
                        MOST POPULAR
                      </span>
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className={plan.featured ? 'pt-5' : ''}>
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110 ${
                        plan.featured
                          ? 'bg-[#25D366] text-[#111111] shadow-[0_8px_25px_rgba(37,211,102,0.25)]'
                          : 'bg-[#25D366]/10 text-[#25D366]'
                      } `}
                    >
                      <Icon className="h-5 w-5" />
                    </div>

                    {!plan.featured && plan.name === 'Get Listed' && (
                      <span className="rounded-full bg-gray-100 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-gray-500">
                        No commitment
                      </span>
                    )}
                  </div>

                  {/* Eyebrow */}
                  <p className="mt-7 text-xs font-bold uppercase tracking-wider text-[#25D366]">
                    {plan.eyebrow}
                  </p>

                  {/* Name */}
                  <h3 className="mt-2 text-2xl font-bold tracking-tight text-[#111111]">
                    {plan.name}
                  </h3>

                  {/* Best for */}
                  <p className="mt-2 text-xs font-semibold text-gray-500">{plan.bestFor}</p>

                  {/* Description */}
                  <p className="mt-4 min-h-[84px] text-sm leading-6 text-gray-600">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div
                  className={`mt-7 rounded-2xl border px-5 py-5 ${
                    plan.featured
                      ? 'border-[#25D366]/20 bg-[#25D366]/5'
                      : 'border-gray-100 bg-gray-50/70'
                  } `}
                >
                  <div className="flex items-end gap-2">
                    <span className="text-4xl font-black tracking-tight text-[#111111]">
                      {plan.price}
                    </span>

                    <span className="pb-1 text-xs font-medium text-gray-500">{plan.period}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mt-7">
                  <p className="mb-4 text-xs font-bold uppercase tracking-wider text-[#111111]">
                    What&apos;s included
                  </p>

                  <ul className="space-y-3.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-gray-700">
                        <span
                          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                            plan.featured ? 'bg-[#25D366]/15' : 'bg-gray-100'
                          } `}
                        >
                          <Check
                            className={`h-3 w-3 ${
                              plan.featured ? 'text-[#25D366]' : 'text-gray-600'
                            } `}
                          />
                        </span>

                        <span className="leading-5">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="mt-auto pt-9">
                  <Link
                    href={plan.href}
                    className={`group/button flex w-full items-center justify-center gap-3 rounded-2xl px-5 py-4 text-sm font-bold transition-all duration-300 ${
                      plan.featured
                        ? `bg-[#25D366] text-[#111111] shadow-[0_10px_30px_rgba(37,211,102,0.2)] hover:bg-[#20c85d] hover:shadow-[0_15px_40px_rgba(37,211,102,0.3)]`
                        : `border border-gray-200 bg-white text-[#111111] hover:border-[#25D366]/50 hover:bg-[#25D366]/5`
                    } `}
                  >
                    {plan.cta}

                    <span
                      className={`flex h-7 w-7 items-center justify-center rounded-full transition-transform duration-300 group-hover/button:translate-x-1 ${
                        plan.featured ? 'bg-black/10' : 'bg-gray-100'
                      } `}
                    >
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom reassurance */}
        <div className="mx-auto mt-12 max-w-2xl text-center">
          <p className="text-sm text-gray-500">
            Not sure which plan is right for your business?
            <Link
              href="/contact"
              className="ml-1 font-semibold text-[#111111] underline decoration-[#25D366] decoration-2 underline-offset-4 transition-colors hover:text-[#25D366]"
            >
              Talk to us
            </Link>{' '}
            and we&apos;ll help you choose.
          </p>
        </div>
      </div>
    </section>
  );
}
