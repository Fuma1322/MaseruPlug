import {
  ExternalLink,
  BriefcaseBusiness,
  Clock3,
  Users,
  ShieldCheck,
  Calculator,
  Laptop,
  Headphones,
  Megaphone,
  ClipboardList,
  UserRound,
  UserCog,
  Video,
  PenLine,
} from 'lucide-react';

// const EXPRESS_URL = 'https://expresspros.co.za/index.php/lesotho/';
const EVA_URL = 'https://eva.co.za/';
const EVA_BOOKING_URL = 'https://eva.co.za/bookings/';

const services = [
  {
    title: 'Finance & Accounting',
    description:
      'Professional support for bookkeeping, invoicing, expenses, budgeting and other finance-related tasks.',
    icon: Calculator,
    url: 'https://eva.co.za/bookings/#/search?c=financeAndAccounting&lid=',
  },

  {
    title: 'Information Technology',
    description:
      'Flexible technical support across areas such as website design, SEO, analytics and UX.',
    icon: Laptop,
    url: 'https://eva.co.za/bookings/#/search?c=informationTechnology&lid=',
  },

  {
    title: 'Customer Service',
    description:
      'Professional support for customer communication, administration, databases and after-sales service.',
    icon: Headphones,
    url: 'https://eva.co.za/bookings/#/search?c=customerService&lid=',
  },

  {
    title: 'Sales & Marketing',
    description:
      'Get support with social media, content creation, campaigns, marketing materials and research.',
    icon: Megaphone,
    url: 'https://eva.co.za/bookings/#/search?c=salesAndMarketing&lid=',
  },

  {
    title: 'Admin & Secretarial',
    description:
      'Take care of everyday administration, email management, diary management, filing and more.',
    icon: ClipboardList,
    url: 'https://eva.co.za/bookings/#/search?c=adminAndSecretarial&lid=',
  },

  {
    title: 'PA & Executive Support',
    description:
      'Flexible professional assistance with calendars, travel, meetings, presentations and projects.',
    icon: UserRound,
    url: 'https://eva.co.za/bookings/#/search?c=paAndExecutiveSupport&lid=',
  },

  {
    title: 'Human Resources',
    description:
      'Professional support for recruitment, shortlisting, reference checks and HR-related tasks.',
    icon: UserCog,
    url: 'https://eva.co.za/bookings/#/search?c=humanResources&lid=',
  },

  {
    title: 'Writing',
    description:
      'Support with copywriting, content, research, proofreading, blogs, articles and translation.',
    icon: PenLine,
    url: 'https://eva.co.za/bookings/#/search?c=writing&lid=',
  },

  {
    title: 'Film & Video',
    description: 'Get professional assistance with video editing and sound editing projects.',
    icon: Video,
    url: 'https://eva.co.za/bookings/#/search?c=filmAndVideo',
  },
];

export default function ExpressVirtualAssistantsPage() {
  return (
    <main className="min-h-screen bg-white text-[#111111]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-white to-blue-50/60">
        {/* Blue grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              'linear-gradient(#2563eb 1px, transparent 1px), linear-gradient(to right, #2563eb 1px, transparent 1px)',
            backgroundSize: '44px 44px',
          }}
        />

        {/* Decorative glow */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[30rem] w-[30rem] rounded-full bg-[#25D366]/10 blur-3xl" />

        <div className="relative mx-auto max-w-screen-xl px-6 py-20 md:px-10 md:py-28">
          <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Hero copy */}
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-600/15 bg-white/80 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm backdrop-blur">
                <BriefcaseBusiness className="h-4 w-4" />
                Express Virtual Assistants
              </div>

              <h1 className="text-5xl font-black leading-[0.98] tracking-[-0.04em] md:text-7xl">
                Professional support.
                <span className="block text-blue-600">When you need it.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-black/60 md:text-xl">
                Access flexible professional support through Express Virtual Assistants. Find the
                expertise you need, choose your support, and continue to EVA when you're ready to
                book.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={EVA_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-blue-600 px-7 font-semibold text-white shadow-xl shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-600/25"
                >
                  Explore & Book an EVA
                  <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>

                <a
                  href={EVA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-14 items-center justify-center gap-2 rounded-2xl border border-black/10 bg-white/80 px-7 font-semibold shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-600/20 hover:bg-blue-50 hover:text-blue-700"
                >
                  Learn About EVA
                  <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>

              <p className="mt-5 text-sm text-black/45">
                MaseruPlug helps you discover EVA. Booking, payment and service delivery are handled
                directly through Express.
              </p>
            </div>

            {/* Hero visual */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-[2rem] border border-blue-600/10 bg-[#111111] p-7 shadow-2xl md:p-9">
                <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />

                <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#25D366]/10 blur-3xl" />

                <div className="relative">
                  <div className="mb-10 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/40">
                        Powered through
                      </p>

                      <p className="mt-2 text-2xl font-bold text-white">
                        Express Employment Professionals
                      </p>
                    </div>

                    <div className="rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-xs font-bold tracking-wider text-white">
                      EVA
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur">
                      <p className="text-sm text-white/45">Professional support</p>

                      <p className="mt-2 text-xl font-semibold tracking-tight text-white md:text-2xl">
                        Flexible. Professional. Accessible.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 transition-colors hover:bg-white/[0.09]">
                        <Clock3 className="mb-4 h-6 w-6 text-[#25D366]" />
                        <p className="text-sm font-semibold text-white">Flexible support</p>
                      </div>

                      <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 transition-colors hover:bg-white/[0.09]">
                        <Users className="mb-4 h-6 w-6 text-[#25D366]" />
                        <p className="text-sm font-semibold text-white">Skilled professionals</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW IT WORKS
      ========================================================= */}
      <section className="mx-auto max-w-screen-xl px-6 py-24 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
            How it works
          </p>

          <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
            Getting support is simple.
          </h2>

          <p className="mt-5 leading-7 text-black/55">
            MaseruPlug helps you discover EVA. Express handles the booking, payment and service
            delivery.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {[
            {
              number: '01',
              title: 'Find the support you need',
              description:
                'Explore the different professional support categories available through Express Virtual Assistants.',
            },
            {
              number: '02',
              title: 'Choose your support',
              description:
                'Explore EVA and find the professional support that matches your task or business needs.',
            },
            {
              number: '03',
              title: 'Book through Express',
              description:
                'When you&Aposre ready, continue to EVA to complete your booking and access the service.',
            },
          ].map((step) => (
            <div
              key={step.number}
              className="group relative overflow-hidden rounded-3xl border border-black/[0.07] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-600/20 hover:shadow-xl"
            >
              <span className="text-sm font-black tracking-widest text-blue-600">
                {step.number}
              </span>

              <h3 className="mt-5 text-xl font-bold tracking-tight">{step.title}</h3>

              <p className="mt-3 leading-7 text-black/55">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#f8fafc]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(#2563eb 1px, transparent 1px), linear-gradient(to right, #2563eb 1px, transparent 1px)',
            backgroundSize: '44px 44px',
          }}
        />

        <div className="relative mx-auto max-w-screen-xl px-6 py-24 md:px-10">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
                Explore support
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
                What could you get done?
              </h2>

              <p className="mt-5 leading-7 text-black/55">
                Explore professional support available through Express Virtual Assistants.
              </p>
            </div>

            <a
              href={EVA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 font-semibold text-blue-600 transition-colors hover:text-blue-700"
            >
              Explore EVA
              <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <a
                  key={service.title}
                  href={service.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-[1.75rem] border border-black/[0.07] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-600/20 hover:shadow-2xl hover:shadow-blue-900/5"
                >
                  {/* subtle hover accent */}
                  <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-blue-600 transition-transform duration-300 group-hover:scale-x-100" />

                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600/[0.08] text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </div>

                    <ExternalLink className="h-4 w-4 text-black/20 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-blue-600" />
                  </div>

                  <h3 className="mt-7 text-lg font-bold tracking-tight">{service.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-black/55">{service.description}</p>

                  <div className="mt-6 text-sm font-semibold text-blue-600">Explore support</div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY EVA
      ========================================================= */}
      <section className="mx-auto max-w-screen-xl px-6 py-24 md:px-10">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
              Why Virtual Assistants?
            </p>

            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
              Get support without doing everything yourself.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-black/55">
              Whether you need administrative, technical, customer service, marketing or other
              professional support, Express Virtual Assistants provides access to remote
              professionals through its platform.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: Users,
                title: 'Skilled professionals',
                text: 'Access professional support through the EVA platform.',
              },
              {
                icon: Clock3,
                title: 'Flexible support',
                text: 'Get support when you need it without committing to a permanent employee.',
              },
              {
                icon: BriefcaseBusiness,
                title: 'Professional services',
                text: 'Explore support across different areas of business.',
              },
              {
                icon: ShieldCheck,
                title: 'Express platform',
                text: "Continue directly to EVA when you're ready to book.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-3xl border border-black/[0.07] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-600/20 hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/[0.08] text-blue-600">
                    <Icon className="h-5 w-5" />
                  </div>

                  <h3 className="mt-5 font-bold">{item.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-black/55">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="px-6 pb-24 md:px-10">
        <div className="relative mx-auto max-w-screen-xl overflow-hidden rounded-[2rem] bg-[#111111] px-7 py-14 text-white shadow-2xl md:px-14 md:py-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                'linear-gradient(#2563eb 1px, transparent 1px), linear-gradient(to right, #2563eb 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />

          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#25D366]">
                Ready to get started?
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
                Find the professional support you need.
              </h2>

              <p className="mt-4 leading-7 text-white/55">
                Explore Express Virtual Assistants and discover what you could get done with
                flexible professional support.
              </p>
            </div>

            <a
              href={EVA_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center gap-2 rounded-2xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-xl shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-2xl"
            >
              Book Through EVA
              <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
