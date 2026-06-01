import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const message = encodeURIComponent(
  "Hello MaseruPlug, I am interested in listing my business on your platform. Please share more details."
);

export default function CTA() {
  return (
    <section className="py-14 px-4">
      <div className="max-w-screen-xl mx-auto relative overflow-hidden rounded-3xl border border-[#25D366]/30 bg-gradient-to-br from-white via-white to-green-50 shadow-2xl">

        <div
          className="absolute inset-0 opacity-[0.09]"
          style={{
            backgroundImage:
              "linear-gradient(#000 1px, transparent 1px), linear-gradient(to right, #000 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[#25D366]/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#25D366]/10 blur-3xl" />

        <div className="relative flex flex-col md:flex-row items-center justify-between gap-10 px-8 py-10 md:px-12 md:py-14">

          <div className="flex items-center gap-5 text-center md:text-left">
            <div className="flex items-center justify-center">
              <FaWhatsapp className="h-24 w-24 text-[#25D366]" />
            </div>

            <div>
              <h3 className="text-4xl md:text-6xl font-extrabold text-[#111111] leading-tight">
                Are you a business owner?
              </h3>

              <p className="mt-2 text-base md:text-lg text-muted-foreground">
                Get discovered by real customers in Maseru today
              </p>
            </div>
          </div>

          <div className="w-full md:w-auto">
            <Button
              className="inline-flex h-12 lg:w-[210px] animate-shimmer items-center justify-center rounded-md bg-[linear-gradient(110deg,#25D366_20%,#13a047_50%,#25D366_80%)] bg-[length:200%_100%] px-6 font-bold text-[#111111]"
            >
              <a
                href={`https://wa.me/26663272145?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                Contact on WhatsApp
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
