import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Check,
  Gift,
  MessageCircle,
  Megaphone,
  Search,
  Star,
  TrendingUp,
  Users,
} from 'lucide-react';

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

const faqs = [
  {
    question: 'Can I join MaseruPlug for free?',
    answer:
      'Yes. Get Listed is designed to give businesses a simple way to establish their presence on MaseruPlug at no monthly cost.',
  },
  {
    question: 'What is the difference between Growth and Featured?',
    answer:
      'Growth is focused on building a stronger business presence and improving your ability to be discovered. Featured adds stronger promotional visibility for businesses that want additional exposure.',
  },
  {
    question: 'What are Deals?',
    answer:
      'Deals allow businesses to promote special offers to customers browsing MaseruPlug. They are designed to create urgency and encourage customers to take action.',
  },
  {
    question: 'What is Lead Boost?',
    answer:
      'Lead Boost is our customer-acquisition focused promotional option. Instead of simply giving your business more visibility, the goal is to actively help put your business in front of potential customers.',
  },
  {
    question: 'Can I change my plan later?',
    answer:
      'Yes. Your business can start where it makes sense for you and move to another option as your needs change.',
  },
];

export default function PricingPage() {
  return (
    <main className="bg-white text-[#111111]">
      {/* HERO */}
      <section className="border-b border-gray-100">
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

      {/* PLANS */}
      <section id="plans" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#25D366]">
              Choose what works for you
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Start where you are. Grow when you're ready.
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

      {/* VALUE LEVERS */}
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

      {/* FAQ */}
      <section className="border-t border-gray-100 bg-gray-50 py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-[#25D366]">
              Frequently asked questions
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight">Questions? We've got you.</h2>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-gray-200 bg-white p-6"
              >
                <summary className="cursor-pointer list-none font-semibold">
                  <div className="flex items-center justify-between gap-4">
                    <span>{faq.question}</span>

                    <span className="text-xl text-[#25D366] transition group-open:rotate-45">
                      +
                    </span>
                  </div>
                </summary>

                <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
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
    </main>
  );
}
