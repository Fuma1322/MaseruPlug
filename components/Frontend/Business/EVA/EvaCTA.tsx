import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FaUserTie } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

export default function EvaCTA() {
  return (
    <section className="px-4 py-14">
      <div className="relative mx-auto max-w-screen-xl overflow-hidden rounded-3xl border border-blue-500/30 bg-gradient-to-br from-white via-white to-green-50 shadow-2xl">
        {/* Blue grid / stroke lines */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              'linear-gradient(#2563eb 1px, transparent 1px), linear-gradient(to right, #2563eb 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Subtle green glow */}
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#25D366]/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#25D366]/10 blur-3xl" />

        {/* Subtle blue accent */}
        <div className="absolute -right-32 top-1/2 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />

        <div className="relative flex flex-col items-center justify-between gap-8 px-8 py-10 md:flex-row md:px-12 md:py-12">
          {/* Left Content */}
          <div className="flex items-center gap-5 text-center md:text-left">
            {/* Icon */}
            <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-blue-600/20 bg-blue-600/10 sm:flex md:h-20 md:w-20">
              <FaUserTie className="h-9 w-9 text-blue-600 md:h-11 md:w-11" />
            </div>

            <div>
              <div className="mb-2 flex items-center justify-center gap-2 md:justify-start">
                <span className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  Express Virtual Assistants
                </span>
              </div>

              <h3 className="text-3xl font-extrabold leading-tight text-[#111111] md:text-5xl">
                Need Professional
                <br className="hidden md:block" />
                Virtual Support?
              </h3>

              <p className="text-muted-foreground mt-3 max-w-2xl text-base md:text-lg">
                Get things done with experienced virtual assistants from Express. Flexible support
                when you need it.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="w-full shrink-0 md:w-auto">
            <Button className="group h-12 w-full rounded-xl bg-blue-600 px-7 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.03] hover:bg-blue-700 md:w-auto">
              <a href="/services/express" className="flex items-center justify-center gap-2">
                Explore Virtual Assistants
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
