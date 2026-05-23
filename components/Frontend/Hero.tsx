"use client";

import Balancer from "react-wrap-balancer";
import { Container } from "@/components/ui/craft";
import { SearchInput } from "./SearchInput";
import { BadgeCheck, ShieldCheck, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <div
          className="h-full w-full bg-cover bg-center scale-105"
          style={{
            backgroundImage: `url("/hero4.png")`,
          }}
        />

        {/* Cinematic Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

        {/* Green Glow */}
        <div className="absolute inset-0 bg-[#25D366]/10 mix-blend-overlay" />
      </div>

      {/* FLOATING BLUR ORBS */}
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-[#25D366]/20 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-[#25D366]/10 blur-3xl" />

      {/* CONTENT */}
      <Container className="relative z-10 flex min-h-screen flex-col items-center justify-center text-center px-6">

        {/* TOP BADGE */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-5 py-2 shadow-xl">
          <BadgeCheck className="h-4 w-4 text-[#25D366]" />

          <span className="text-sm font-medium text-white">
            Your Local. Our Priority.
          </span>
        </div>

        {/* MAIN TITLE */}
        <h1 className="max-w-5xl text-5xl font-black tracking-tight text-white md:text-6xl lg:text-7xl leading-[1.05]">

          Find Trusted Local
          <br />

          <span className="text-[#25D366]">
            Services In Maseru
          </span>
        </h1>

        {/* PARAGRAPH */}
        <p className="mt-8 max-w-3xl text-lg md:text-2xl text-neutral-200 leading-relaxed">
          <Balancer>
            Nail Techs, Salons, Plumbers, Carpenters, and more.
            Connect with trusted local professionals in Maseru
            for all your service needs.
          </Balancer>
        </p>

        {/* SEARCH */}
        <div className="mt-5 w-full max-w-5xl rounded-3xl p-3 shadow-2xl">
          <SearchInput />
        </div>
      </Container>

      {/* CURVED BOTTOM */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-[120px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,224L80,208C160,192,320,160,480,154.7C640,149,800,171,960,192C1120,213,1280,235,1360,245.3L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;