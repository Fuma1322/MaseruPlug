import { MapPin, Clock3, Store, MessageSquareText, ShieldCheck, Zap } from 'lucide-react';

const benefits = [
  {
    title: 'Nearby Providers',
    description: 'Discover local professionals and services.',
    Icon: MapPin,
  },
  {
    title: 'Faster Response',
    description: 'Find a suitable service when time matters.',
    Icon: Clock3,
  },
  {
    title: 'Local Businesses',
    description: 'Support our community and local economy.',
    Icon: Store,
  },
  {
    title: 'Clear Communication',
    description: 'Contact providers and discuss your needs.',
    Icon: MessageSquareText,
  },
];

export default function OnCallWhyOnCall() {
  return (
    <section
      id="why-oncall"
      className="relative isolate scroll-mt-24 overflow-hidden border-b border-emerald-400/20 bg-[#00100E] py-20"
    >
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center opacity-35"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=80')",
        }}
      />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#00100E] via-[#00100E]/90 to-[#00100E]/70" />

      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.6fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
              <Zap size={14} />
              Why MPlug OnCall
            </span>

            <h2 className="mt-5 text-3xl font-black sm:text-4xl">
              The local
              <span className="block text-emerald-400">advantage.</span>
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-7 text-white/65">
              A simpler way to discover local services and connect with professionals in your
              community.
            </p>
          </div>

          <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
            {benefits.map(({ title, description, Icon }) => (
              <div key={title} className="border-l border-emerald-400/20 pl-5">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-400">
                  <Icon size={23} />
                </span>

                <h3 className="mt-5 font-bold">{title}</h3>

                <p className="mt-2 text-sm leading-6 text-white/60">{description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex items-start gap-3 rounded-2xl border border-emerald-400/20 bg-[#00100E]/75 p-5">
          <ShieldCheck className="mt-0.5 shrink-0 text-emerald-400" size={23} />
          <p className="text-sm leading-6 text-white/65">
            Always confirm a provider's identity, availability and agreed price before arranging a
            service. Provider verification will depend on the checks implemented by MPlug.
          </p>
        </div>
      </div>
    </section>
  );
}
