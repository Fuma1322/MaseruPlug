"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
} from "lucide-react";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import ContactCTA from "./ContactCTA";

const contactMethods = [
  {
    icon: <FaWhatsapp className="h-20 w-20 text-[#25D366]" />,
    title: "WhatsApp Us",
    description: "Chat with the MaseruPlug team directly on WhatsApp.",
    href: "https://wa.me/+26663272145",
    button: "Start Chat",
  },
  {
    icon: <FaFacebook className="h-20 w-20 text-blue-600" />,
    title: "Facebook",
    description: "Reach out to us through our Facebook page.",
    href: "https://facebook.com/maseruplug",
    button: "Visit Page",
  },
  {
    icon: <Phone className="h-20 w-20 text-[#11111]" />,
    title: "Call Us",
    description: "Speak to us directly for quick assistance.",
    href: "tel:+26663272145",
    button: "Call Now",
  },
  {
    icon: <Mail className="h-20 w-20 text-red-500" />,
    title: "Email Us",
    description: "Send us an email and we’ll get back to you.",
    href: "mailto:hello@maseruplug.com",
    button: "Send Email",
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
            className="object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex min-h-screen items-center justify-center px-6">
            <div className="max-w-4xl text-center">

            {/* Badge */}
            <div className="inline-block rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 mb-6">
                <p className="text-white font-medium text-sm md:text-base">
                We are here for you
                </p>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
                Contact{" "}
                <span className="text-[#25D366]">
                MaseruPlug
                </span>
            </h1>

            {/* Paragraph */}
            <p className="mt-6 text-lg md:text-2xl text-neutral-200 max-w-2xl mx-auto leading-relaxed">
                Looking for a service or looking to grow your business with us?
                Let’s Talk.
            </p>
            </div>
        </div>

        {/* CURVED BOTTOM */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
            <svg
            className="relative block w-full h-[120px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            >
            <path
                fill="#f8f8f8"
                d="M0,224L80,208C160,192,320,160,480,154.7C640,149,800,171,960,192C1120,213,1280,235,1360,245.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
            </svg>
        </div>
        </section>

      {/* CONTACT METHODS */}
      <section className="py-20 bg-[#f8f8f8]">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">

          {/* Section Heading */}
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-[#111111]">
              Get In Touch
            </h2>

            <p className="mt-4 text-neutral-500 text-lg">
              Choose your preferred way to connect with the MaseruPlug team.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {contactMethods.map((method, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-3xl border border-neutral-200 shadow-xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Icon */}
                <div className="mb-6">
                  {method.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-[#111111]">
                  {method.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-500 mt-4 leading-relaxed">
                  {method.description}
                </p>

                {/* Button */}
                <Link
                  href={method.href}
                  target="_blank"
                  className="mt-8 inline-flex items-center gap-2 bg-[#111111] hover:bg-[#1ebe5d] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300"
                >
                  {method.button}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactCTA />
    </div>
  );
}