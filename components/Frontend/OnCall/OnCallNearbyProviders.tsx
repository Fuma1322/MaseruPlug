import Link from 'next/link';
import { ArrowRight, MapPin, MessageCircle, Wrench, Zap, CarFront, KeyRound } from 'lucide-react';

const providers = [
  {
    name: 'Plumbing Services',
    service: 'Plumber',
    distance: 'Local service',
    description: 'Repairs, leaks and pipe maintenance.',
    Icon: Wrench,
  },
  {
    name: 'Electrical Services',
    service: 'Electrician',
    distance: 'Local service',
    description: 'Electrical faults and installations.',
    Icon: Zap,
  },
  {
    name: 'Vehicle Assistance',
    service: 'Mechanic',
    distance: 'Local service',
    description: 'Vehicle trouble and roadside support.',
    Icon: CarFront,
  },
  {
    name: 'Locksmith Services',
    service: 'Locksmith',
    distance: 'Local service',
    description: 'Locks, keys and access assistance.',
    Icon: KeyRound,
  },
];

export default function OnCallNearbyProviders() {
  return (
    <section
      id="providers"
      className="scroll-mt-24 border-b border-emerald-400/15 bg-gradient-to-b from-[#00100E] to-[#031712] py-20"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
              <MapPin size={14} />
              Local services
            </span>

            <h2 className="mt-4 text-3xl font-black sm:text-4xl">
              Trusted providers. Ready when you need them.
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-white/60">
              Discover the types of professionals you can find through MPlug OnCall.
            </p>
          </div>

          <Link
            href="/search"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300"
          >
            Browse businesses <ArrowRight size={17} />
          </Link>
        </div>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {providers.map(({ name, service, distance, description, Icon }) => (
            <article
              key={name}
              className="rounded-2xl border border-emerald-400/20 bg-[#041A14] p-5 transition hover:border-emerald-400/50"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
                  <Icon size={27} />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-semibold text-emerald-400">{service}</p>
                  <h3 className="mt-1 font-bold">{name}</h3>
                  <p className="mt-1 flex items-center gap-1 text-xs text-white/50">
                    <MapPin size={13} />
                    {distance}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-6 text-white/60">{description}</p>

              <p className="mt-4 rounded-lg border border-emerald-400/15 bg-emerald-400/5 px-3 py-2 text-xs text-white/60">
                Example service category · Provider availability not confirmed
              </p>

              <Link
                href="/search"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-emerald-400 px-4 py-3 text-sm font-bold text-[#00100E] transition hover:bg-emerald-300"
              >
                <MessageCircle size={17} />
                Find a provider
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
