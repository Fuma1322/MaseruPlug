"use client";

import Balancer from "react-wrap-balancer";
import { Container } from "@/components/ui/craft";
import { SearchInput } from "./SearchInput";

const Hero = () => {

  return (
    <>
      <div
        className="relative h-[600px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url("/hero.jpg")`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-transparent" />
        {/* Overlay content */}
        <Container className="relative flex flex-col items-center text-center text-white p-10 rounded-md max-w-7xl">
        <h1 className="scroll-m-20 text-5xl font-bold tracking-tight lg:text-7xl text-[#111111]">
        Find Trusted Local<br/> Services In Maseru
        </h1>
          <h3 className="text-muted-foreground text-white py-4 text-starts">
            <Balancer>
            Nail Techs, Salons, Plumbers, Capenters, and more. Connect with trusted local professionals in Maseru for all your service needs.
            </Balancer>
          </h3>
          <div className="not-prose mt-6 flex gap-10 md:mt-8 relative">
            <SearchInput />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Hero;