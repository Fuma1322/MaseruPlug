import Link from 'next/link';
import { ArrowRight, CheckCircle2, MapPin, MessageSquareText, Users, Zap } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Tell us what happened',
    description: 'Select the service you need and share a few details.',
    Icon: MessageSquareText,
  },
  {
    number: '02',
    title: 'Find nearby providers',
    description: 'Look for local professionals who can help.',
    Icon: MapPin,
  },
  {
    number: '03',
    title: 'Choose who responds',
    description: 'Compare available providers and contact them.',
    Icon: Users,
  },
  {
    number: '04',
    title: 'Get help',
    description: 'Arrange the service directly with your chosen provider.',
    Icon: CheckCircle2,
  },
];

export default function OnCallHowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-24 border-b border-emerald-400/15 bg-gradient-to-b from-[#00100E] to-[#031712] py-20"
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.6fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-3 py-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
              <Zap size={14} />
              How MPlug OnCall works
            </span>

            <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl">
              Get help in
              <span className="block text-emerald-400">4 simple steps.</span>
            </h2>

            <p className="mt-4 max-w-md leading-7 text-white/65">
              From urgent repairs to roadside assistance, MPlug OnCall helps you find local service
              providers when you need them.
            </p>

            <Link
              href="/oncall#categories"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-400 px-6 py-3 font-bold text-[#00100E] transition hover:bg-emerald-300"
            >
              Get Help Now <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {steps.map(({ number, title, description, Icon }) => (
              <div
                key={number}
                className="rounded-2xl border border-emerald-400/15 bg-white/[0.025] p-5 transition hover:border-emerald-400/40 hover:bg-emerald-400/[0.04]"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-400 text-sm font-black text-[#00100E]">
                    {number}
                  </span>

                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/10 text-emerald-300">
                    <Icon size={25} />
                  </span>
                </div>

                <h3 className="mt-6 text-lg font-bold leading-snug">{title}</h3>

                <p className="mt-3 text-sm leading-6 text-white/60">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
