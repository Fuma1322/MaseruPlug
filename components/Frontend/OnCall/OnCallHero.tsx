import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Zap,
  Users,
  MapPinned,
} from 'lucide-react';

export default function OnCallHero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-emerald-400/20 bg-[#00100E]">
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2200&q=85')",
        }}
      />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#00100E] via-[#00100E]/90 to-[#00100E]/40" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#00100E] via-transparent to-[#00100E]/20" />

      <div className="mx-auto grid min-h-[610px] max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300">
            <Zap size={16} fill="currentColor" />
            MPlug OnCall
          </span>

          <h1 className="mt-6 max-w-2xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Help is just
            <span className="mt-1 block text-emerald-400">one call away.</span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-white/75 sm:text-lg">
            Find trusted local service providers ready to respond when you need them. Fast, reliable
            and close to you.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/oncall#categories"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400 px-7 py-4 font-bold text-[#00100E] shadow-[0_0_30px_rgba(0,231,135,0.15)] transition hover:-translate-y-0.5"
            >
              <MessageCircle size={19} />
              Get Help Now
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/oncall#join-providers"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-400/60 px-7 py-4 font-semibold text-white transition hover:bg-emerald-400/10"
            >
              Become an OnCall Provider
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-3 border-t border-white/15 pt-6">
            <div className="flex items-start gap-2">
              <MapPin className="shrink-0 text-emerald-400" size={23} />
              <div>
                <p className="text-xs font-bold sm:text-sm">Local Providers</p>
                <p className="mt-1 text-xs text-white/60">Near you</p>
              </div>
            </div>

            <div className="flex items-start gap-2 border-l border-white/15 pl-3">
              <ShieldCheck className="shrink-0 text-emerald-400" size={23} />
              <div>
                <p className="text-xs font-bold sm:text-sm">Verified</p>
                <p className="mt-1 text-xs text-white/60">Trusted professionals</p>
              </div>
            </div>

            <div className="flex items-start gap-2 border-l border-white/15 pl-3">
              <Zap className="shrink-0 text-emerald-400" size={23} />
              <div>
                <p className="text-xs font-bold sm:text-sm">Fast Response</p>
                <p className="mt-1 text-xs text-white/60">When needed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[340px]">
          <div className="absolute inset-8 rounded-full bg-emerald-400/20 blur-[90px]" />

          <div className="relative rounded-[2.8rem] border border-emerald-300/50 bg-[#020C0B] p-3 shadow-[0_0_60px_rgba(0,231,135,0.12)]">
            <div className="overflow-hidden rounded-[2.2rem] border border-white/10 bg-gradient-to-b from-[#0B3026] to-[#00100E] px-5 pb-10 pt-8">
              <div className="mx-auto mb-7 h-1.5 w-20 rounded-full bg-black" />

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-extrabold">
                    MPlug <span className="text-emerald-400">OnCall</span>
                  </p>
                  <p className="mt-1 text-xs text-white/50">Local help, made simple</p>
                </div>
                <Zap className="text-emerald-400" size={24} />
              </div>

              <div className="mt-8 rounded-2xl border border-emerald-400/30 bg-[#09241D] p-4">
                <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">
                  OnCall request
                </p>
                <h2 className="mt-3 text-xl font-bold">Plumber needed</h2>
                <p className="mt-2 flex items-center gap-1 text-xs text-white/65">
                  <MapPin size={14} />
                  Maseru · Nearby providers
                </p>
                <div className="my-4 border-t border-white/10" />
                <p className="flex items-center gap-2 text-xs text-emerald-300">
                  <CheckCircle2 size={16} />
                  Find a service provider
                </p>
                <Link
                  href="/oncall#categories"
                  className="mt-4 flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-4 py-3 text-sm font-bold text-[#00100E]"
                >
                  Explore Services <ArrowRight size={16} />
                </Link>
              </div>

              <div className="mt-8 flex justify-center gap-4">
                {[Users, MapPinned, ShieldCheck].map((Icon, index) => (
                  <span
                    key={index}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/10 text-emerald-300"
                  >
                    <Icon size={19} />
                  </span>
                ))}
              </div>

              <div className="mt-8 rounded-full border border-emerald-400/20 p-3 text-center text-xs text-white/60">
                Local services. One simple starting point.
              </div>
            </div>
          </div>

          <p className="mt-5 text-center text-sm italic text-emerald-200/80">
            Local help. Real people. Fast.
          </p>
        </div>
      </div>
    </section>
  );
}
