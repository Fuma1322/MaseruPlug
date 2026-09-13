'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '../ui/button';
import ContactCTA from './ContactCTA';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { Phone } from 'lucide-react';

const contactMethods = [
  {
    icon: <FaWhatsapp className="h-20 w-20 text-[#25D366]" />,
    title: 'WhatsApp Us',
    description: 'Chat with the MaseruPlug team directly on WhatsApp.',
    href: 'https://wa.me/26663272145',
    button: 'Start Chat',
    external: true,
  },
  {
    icon: <FaFacebook className="h-20 w-20 text-blue-600" />,
    title: 'Facebook',
    description: 'Reach out to us through our Facebook page.',
    href: 'https://facebook.com/maseruplug',
    button: 'Visit Page',
    external: true,
  },
  {
    icon: <Phone className="h-20 w-20 text-[#111111]" />,
    title: 'Call Us',
    description: 'Speak to us directly for quick assistance.',
    href: 'tel:+26663272145',
    button: 'Call Now',
    external: false,
  },
];

export default function ContactPage() {
  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/hero3.png"
            alt="MaseruPlug"
            fill
            priority
            className="animate-fadeIn object-cover opacity-0"
          />

          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
          <div className="max-w-4xl text-center">
            {/* Badge */}
            <div className="mb-6 inline-block rounded-full border border-white/20 bg-white/10 px-6 py-2 backdrop-blur-md">
              <p className="text-sm font-medium text-white md:text-base">We are here for you</p>
            </div>

            {/* Heading */}
            <h1 className="text-5xl font-extrabold leading-tight text-white md:text-7xl">
              Contact <span className="text-[#25D366]">MaseruPlug</span>
            </h1>

            {/* Paragraph */}
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-200 md:text-2xl">
              Looking for a service or looking to grow your business with us? Let&apos;s talk.
            </p>
          </div>
        </div>

        {/* CURVED BOTTOM */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block h-[120px] w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#f8f8f8"
              d="M0,224L80,208C160,192,320,160,480,154.7C640,149,800,171,960,192C1120,213,1280,235,1360,245.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            />
          </svg>
        </div>
      </section>

      {/* BUSINESS PRICING CTA */}
      {/* <section className="bg-[#f8f8f8] px-4 pb-4">
        <div className="mx-auto max-w-screen-xl">
          <div className="relative overflow-hidden rounded-3xl bg-[#111111] px-6 py-12 text-center shadow-xl md:px-12 md:py-14">
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#25D366]/10 blur-2xl" />

            <div className="relative z-10 mx-auto max-w-3xl">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366]/10">
                <Sparkles className="h-6 w-6 text-[#25D366]" />
              </div>

              <p className="mt-5 text-sm font-semibold uppercase tracking-wider text-[#25D366]">
                Growing your business?
              </p>

              <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
                Find the option that works for you.
              </h2>

              <p className="mx-auto mt-4 max-w-2xl leading-7 text-neutral-300">
                Whether you&apos;re just getting started or ready for more visibility, explore our
                MaseruPlug options and choose what makes sense for your business.
              </p>

              <div className="mt-7">
                <Link href="/pricing">
                  <Button className="h-12 rounded-xl bg-[#25D366] px-7 font-semibold text-[#111111] transition-all hover:bg-[#1ebe5d]">
                    Explore Pricing Plans
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              <p className="mt-4 text-xs text-neutral-500">
                Not sure what you need? You can always speak to us directly.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* CONTACT METHODS */}
      <section className="bg-[#f8f8f8] py-20">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          {/* Section Heading */}
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-[#111111] md:text-5xl">Get In Touch</h2>

            <p className="text-md mt-4 text-neutral-500">
              Choose your preferred way to connect with the MaseruPlug team.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {contactMethods.map((method) => (
              <div
                key={method.title}
                className="group flex flex-col items-center rounded-3xl border border-neutral-200 bg-white p-8 text-center shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Icon */}
                <div className="mb-6">{method.icon}</div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#111111]">{method.title}</h3>

                {/* Description */}
                <p className="mt-4 leading-relaxed text-neutral-500">{method.description}</p>

                {/* Button */}
                <Button className="mt-8 h-12 w-full rounded-xl border-2 border-[#25D366] bg-white font-semibold text-[#111111] transition-all duration-300 hover:bg-[#25D366]">
                  <Link
                    href={method.href}
                    target={method.external ? '_blank' : undefined}
                    rel={method.external ? 'noopener noreferrer' : undefined}
                  >
                    {method.button}
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXISTING CONTACT CTA */}
      <ContactCTA />
    </div>
  );
}
