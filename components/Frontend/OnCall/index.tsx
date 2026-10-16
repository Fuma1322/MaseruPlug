import Link from 'next/link';
import { ArrowRight, MapPin, ShieldCheck, Zap } from 'lucide-react';

export default function OnCall() {
  return (
    <section className="relative isolate overflow-hidden border-y border-emerald-400/20 bg-[#00100E] py-16 text-white sm:py-20">
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center opacity-35"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=80')",
        }}
      />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#00100E] via-[#00100E]/95 to-[#003526]/80" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-2 lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300">
            <Zap size={16} fill="currentColor" />
            Introducing MPlug OnCall
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
            Help is just
            <span className="block text-emerald-400">one call away.</span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-7 text-white/75 sm:text-lg">
            Find trusted local service providers for plumbing, electrical faults, vehicle
            breakdowns, locksmith services and other urgent needs. Local help, when you need it.
          </p>

          <Link
            href="/mplugOncall"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400 px-7 py-4 font-bold text-[#00100E] transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/20"
          >
            Explore MPlug OnCall
            <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          <div className="flex items-center gap-4 rounded-2xl border border-emerald-400/20 bg-[#00100E]/75 p-5 backdrop-blur">
            <MapPin className="shrink-0 text-emerald-400" size={30} />
            <div>
              <h3 className="font-bold">Local Providers</h3>
              <p className="mt-1 text-sm text-white/60">Discover services near you.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-emerald-400/20 bg-[#00100E]/75 p-5 backdrop-blur">
            <ShieldCheck className="shrink-0 text-emerald-400" size={30} />
            <div>
              <h3 className="font-bold">Trusted Connections</h3>
              <p className="mt-1 text-sm text-white/60">Find professionals for your needs.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 rounded-2xl border border-emerald-400/20 bg-[#00100E]/75 p-5 backdrop-blur">
            <Zap className="shrink-0 text-emerald-400" size={30} />
            <div>
              <h3 className="font-bold">Rapid Response Services</h3>
              <p className="mt-1 text-sm text-white/60">
                Start finding help without unnecessary searching.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
