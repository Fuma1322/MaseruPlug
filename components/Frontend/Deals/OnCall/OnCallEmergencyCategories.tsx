import Link from 'next/link';
import {
  ArrowRight,
  Bolt,
  CarFront,
  House,
  KeyRound,
  LockKeyhole,
  ShieldCheck,
  Wrench,
  Zap,
} from 'lucide-react';

const categories = [
  {
    name: 'Plumbing',
    description: 'Leaks, burst pipes and blocked drains.',
    Icon: Wrench,
  },
  {
    name: 'Electrical',
    description: 'Power issues and electrical faults.',
    Icon: Bolt,
  },
  {
    name: 'Vehicle Breakdown',
    description: 'Jump starts, towing and roadside help.',
    Icon: CarFront,
  },
  {
    name: 'Locksmith',
    description: 'Lost keys, lockouts and lock repairs.',
    Icon: KeyRound,
  },
  {
    name: 'Security',
    description: 'Security support and urgent assistance.',
    Icon: ShieldCheck,
  },
  {
    name: 'Home Repairs',
    description: 'Doors, roofs and general repairs.',
    Icon: House,
  },
  {
    name: 'Other Urgent',
    description: 'Other urgent service needs.',
    Icon: LockKeyhole,
  },
];

export default function OnCallEmergencyCategories() {
  return (
    <section
      id="categories"
      className="scroll-mt-24 border-b border-emerald-400/15 bg-[#00100E] py-20"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
              <Zap size={14} />
              Emergency categories
            </span>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">What do you need help with?</h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-white/60">
              Find a service category and connect with a local professional.
            </p>
          </div>

          <Link
            href="/search"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 transition hover:text-emerald-300"
          >
            Explore businesses <ArrowRight size={17} />
          </Link>
        </div>

        <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
          {categories.map(({ name, description, Icon }) => (
            <Link
              key={name}
              href="/search"
              className="group rounded-2xl border border-emerald-400/20 bg-gradient-to-b from-[#09241D] to-[#03120F] p-4 text-center transition duration-300 hover:-translate-y-1 hover:border-emerald-400/60 hover:shadow-[0_10px_35px_rgba(0,231,135,0.08)]"
            >
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-400 transition group-hover:bg-emerald-400 group-hover:text-[#00100E]">
                <Icon size={24} />
              </span>

              <h3 className="mt-4 text-sm font-bold">{name}</h3>

              <p className="mt-2 text-xs leading-5 text-white/55">{description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
