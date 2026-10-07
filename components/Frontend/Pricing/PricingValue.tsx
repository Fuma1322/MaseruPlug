import { BarChart3, Gift, Megaphone, MessageCircle, Search, Star } from 'lucide-react';
import React from 'react';

const valueLevers = [
  {
    title: 'Deals',
    description:
      'Turn attention into action with special offers that give customers a reason to contact or visit your business.',
    icon: Gift,
  },
  {
    title: 'Featured',
    description:
      'Increase your visibility by giving your business stronger placement across relevant MaseruPlug discovery areas.',
    icon: Star,
  },
  {
    title: 'Lead Boost',
    description:
      'Go beyond visibility. Promotional campaigns can help put your business in front of more potential customers.',
    icon: Megaphone,
  },
];

export default function PricingValue() {
  return (
    <div>
      <section className="border-y border-gray-100 bg-gray-50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#25D366]">
              More than a listing
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Tools designed around customer acquisition.
            </h2>

            <p className="mt-4 text-gray-600">
              MaseruPlug is being built to help businesses move from being invisible online to being
              discovered, contacted and chosen.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {valueLevers.map((lever) => {
              const Icon = lever.icon;

              return (
                <div key={lever.title} className="rounded-2xl border border-gray-200 bg-white p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#25D366]/10">
                    <Icon className="h-5 w-5 text-[#25D366]" />
                  </div>

                  <h3 className="mt-5 text-xl font-bold">{lever.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">{lever.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VALUE / WHY MASERUPLUG */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-[#25D366]">
                The bigger picture
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Your business deserves more than just a listing.
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                MaseruPlug is building a digital home for local businesses — helping customers
                discover businesses and helping businesses connect with the people looking for what
                they offer.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                As the platform grows, our goal is to turn visibility into meaningful customer
                opportunities.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 p-6">
                <Search className="h-6 w-6 text-[#25D366]" />
                <h3 className="mt-4 font-bold">Discovery</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Help customers find your business when they are looking for what you offer.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 p-6">
                <MessageCircle className="h-6 w-6 text-[#25D366]" />
                <h3 className="mt-4 font-bold">Direct Contact</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Make it simple for customers to move from discovery to WhatsApp or phone.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 p-6">
                <Gift className="h-6 w-6 text-[#25D366]" />
                <h3 className="mt-4 font-bold">Offers</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Give customers a reason to act through special deals and promotions.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 p-6">
                <BarChart3 className="h-6 w-6 text-[#25D366]" />
                <h3 className="mt-4 font-bold">Insights</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Understand how customers are discovering and interacting with your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
