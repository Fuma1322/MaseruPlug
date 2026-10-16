import Link from 'next/link';
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  MessageCircle,
  Users,
  Zap,
} from 'lucide-react';

export default function OnCallProviderCTA() {
  return (
    <section
      id="join-providers"
      className="relative isolate scroll-mt-24 overflow-hidden border-b border-emerald-400/20 bg-[#00100E] py-20"
    >
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center opacity-35"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2000&q=80')",
        }}
      />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#00100E] via-[#00100E]/95 to-[#00100E]/80" />

      <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
            <BriefcaseBusiness size={14} />
            For service providers
          </span>

          <h2 className="mt-5 max-w-xl text-3xl font-black leading-tight sm:text-5xl">
            Turn your skills into
            <span className="block text-emerald-400">your next customer.</span>
          </h2>

          <p className="mt-5 max-w-lg leading-7 text-white/70">
            Join the MPlug OnCall network to help customers find your services and grow your local
            visibility.
          </p>

          <ul className="mt-6 space-y-3 text-sm text-white/75">
            <li className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-emerald-400" />
              Showcase your services
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-emerald-400" />
              Connect with potential customers
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-emerald-400" />
              Build your local reputation
            </li>
          </ul>

          <Link
            href="/oncall#join-providers"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 font-bold text-[#00100E] transition hover:bg-emerald-300"
          >
            Join MPlug OnCall <ArrowRight size={18} />
          </Link>
        </div>

        <div className="rounded-3xl border border-emerald-400/25 bg-[#00100E]/85 p-7 shadow-[0_0_50px_rgba(0,231,135,0.08)] backdrop-blur sm:p-9">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-400">
            <Zap size={30} fill="currentColor" />
          </span>

          <h3 className="mt-6 text-2xl font-extrabold">
            When something goes wrong, know where to go.
          </h3>

          <p className="mt-3 leading-7 text-white/60">
            Find a relevant service category and start looking for a local professional.
          </p>

          <Link
            href="/oncall#categories"
            className="mt-7 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-400 px-5 py-4 font-bold text-[#00100E] transition hover:brightness-110"
          >
            <MessageCircle size={19} />
            Get Help Now
            <ArrowRight size={18} />
          </Link>

          <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5 text-sm text-white/50">
            <Users size={19} className="text-emerald-400" />
            Connecting customers with local services
          </div>
        </div>
      </div>
    </section>
  );
}
