import { ArrowRight, Check, Search, Star, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const plans = [
  {
    name: 'Get Listed',
    eyebrow: 'A simple place to start',
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
    <div>
      <section id="plans" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#25D366]">
              Choose what works for you
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Start where you are. Grow when you&apos;re ready.
            </h2>

            <p className="mt-4 text-gray-600">
              Every business deserves the opportunity to be discovered. Choose the level of support
              and visibility that fits your business today.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {plans.map((plan) => {
              const Icon = plan.icon;

              return (
                <div
                  key={plan.name}
                  className={`relative flex flex-col rounded-2xl border p-7 transition ${
                    plan.featured
                      ? 'border-[#25D366] shadow-xl shadow-[#25D366]/10'
                      : 'border-gray-200 shadow-sm hover:shadow-md'
                  }`}
                >
                  {plan.featured && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="rounded-full bg-[#25D366] px-4 py-1.5 text-xs font-bold text-[#111111]">
                        MOST POPULAR
                      </span>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#25D366]/10">
                      <Icon className="h-5 w-5 text-[#25D366]" />
                    </div>

                    {plan.name === 'Get Listed' && (
                      <span className="text-xs font-medium text-gray-500">No commitment</span>
                    )}
                  </div>

                  <p className="mt-6 text-sm font-semibold text-[#25D366]">{plan.eyebrow}</p>

                  <h3 className="mt-2 text-2xl font-bold">{plan.name}</h3>

                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-gray-600">
                    {plan.description}
                  </p>

                  <div className="mt-7 border-y border-gray-100 py-6">
                    <div className="flex items-end gap-2">
                      <span className="text-4xl font-bold">{plan.price}</span>

                      <span className="pb-1 text-sm text-gray-500">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="mt-7 space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-gray-700">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#25D366]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-8">
                    <Link
                      href={plan.href}
                      className={`flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold transition ${
                        plan.featured
                          ? 'bg-[#25D366] text-[#111111] hover:bg-[#1fc65d]'
                          : 'border border-gray-200 hover:border-[#25D366] hover:bg-[#25D366]/5'
                      }`}
                    >
                      {plan.cta}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
