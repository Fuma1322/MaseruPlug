"use client";

import { MapPin, Check, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function ProfilePage() {
  const galleryImages = [
    "/lelo.jpg",
    "/lelo.jpg",
    "/lelo.jpg",
    "/lelo.jpg",
    "/lelo.jpg",
  ];

  const services = [
    "Gel Nails",
    "Acrylic Nails",
    "Nail Art",
    "Pedicure",
    "Manicure",
    "French Tips",
    "Nail Repairs",
  ];

  return (
    <div className="w-full min-h-screen bg-white px-4 py-8 md:px-10 lg:px-20">

      {/* TOP SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* LEFT - GALLERY */}
        <div className="space-y-4">

          {/* Main Image */}
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <img
              src={galleryImages[0]}
              alt="Main"
              className="w-full h-[400px] object-cover hover:scale-105 transition duration-500"
            />
          </div>

          {/* Small Images */}
          <div className="grid grid-cols-4 gap-3">
            {galleryImages.slice(1).map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl shadow-md"
              >
                <img
                  src={image}
                  alt={`Gallery ${index}`}
                  className="w-full h-24 md:h-28 object-cover hover:scale-110 transition duration-300 cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT - BUSINESS INFO */}
        <div className="flex flex-col justify-center">

          <h1 className="text-4xl md:text-5xl font-bold text-[#111111]">
            Nails By Lelo
          </h1>

          {/* Location */}
          <div className="flex items-center gap-2 mt-4 text-muted-foreground">
            <MapPin className="w-5 h-5 text-[#25D366]" />
            <span className="text-lg">Maseru West</span>
          </div>

          {/* Description */}
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            Professional nail care and creative nail designs tailored to your
            style. From elegant gel nails to bold custom artwork, Nails By Lelo
            delivers premium beauty services in Maseru.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8">

            <Link
              href="https://wa.me/26600000000"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-4 text-white font-semibold shadow-lg hover:scale-105 transition duration-300"
            >
              <FaWhatsapp className="w-5 h-5" />
                Chat On WhatsApp
            </Link>

            <Link
              href="tel:+26600000000"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#25D366] px-6 py-4 font-semibold text-[#111111] hover:bg-[#25D366] hover:text-white transition duration-300"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </Link>

          </div>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-20">

        {/* SERVICES */}
        <div className="rounded-3xl border border-gray-200 shadow-lg p-8">
          <h2 className="text-3xl font-bold text-[#111111] mb-6">
            Services
          </h2>

          <div className="space-y-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center gap-3"
              >
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-[#25D366]/10">
                  <Check className="w-4 h-4 text-[#25D366]" />
                </div>

                <span className="text-lg text-gray-700">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ABOUT */}
        <div className="rounded-3xl border border-gray-200 shadow-lg p-8">
          <h2 className="text-3xl font-bold text-[#111111] mb-6">
            About
          </h2>

          <p className="text-lg leading-relaxed text-gray-600">
            Nails By Lelo is dedicated to delivering luxury nail experiences
            with exceptional attention to detail. Whether you're preparing for
            a special occasion or simply treating yourself, every appointment is
            designed to leave you feeling confident and beautiful.
          </p>

          <p className="text-lg leading-relaxed text-gray-600 mt-6">
            Located in Maseru West, the studio combines creativity,
            professionalism, and a relaxing atmosphere to provide clients with
            high-quality nail services tailored to their personal style.
          </p>
        </div>

      </div>
      {/* GALLERY SECTION */}
        <div className="mt-20">

          <div className="mb-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#111111]">
              Gallery
            </h2>

            <p className="text-gray-500 mt-3 text-lg">
              Explore recent work and nail designs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              "/lelo.jpg",
              "/lelo.jpg",
              "/lelo.jpg",
              "/lelo.jpg",
              "/lelo.jpg",
              "/lelo.jpg",
            ].map((image, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-3xl shadow-lg"
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-[280px] object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
            ))}

          </div>
        </div>
        <div className="my-20">
         <section className="py-10 px-4">
          <div className="max-w-screen-xl mx-auto border border-[#25D366] rounded-2xl shadow-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-8">

            {/* Left Content */}
            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-5 flex-1">
              <div>
                <h3 className="text-4xl lg:text-5xl font-bold leading-tight p-3">
                  Contact this business
                </h3>
              </div>
            </div>

            {/* Right CTA */}
            <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">

              {/* WhatsApp Button */}
              <Link
                href="https://wa.me/26600000000"
                className="w-full md:w-auto inline-flex h-12 lg:w-[230px] hover:-translate-y-1 transition duration-300 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 font-bold text-white shadow-lg"
              >
                <FaWhatsapp className="w-5 h-5" />
                Chat On WhatsApp
              </Link>

              {/* Call Button */}
              <Link
                href="tel:+26600000000"
                className="w-full md:w-auto inline-flex h-12 lg:w-[210px] hover:-translate-y-1 transition duration-300 items-center justify-center gap-2 rounded-xl border-2 border-[#25D366] px-6 font-bold text-[#111111] hover:bg-[#25D366] hover:text-white"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </Link>

            </div>

          </div>
        </section>
        </div>
    </div>

  );
}