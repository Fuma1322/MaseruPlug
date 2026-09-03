import Link from 'next/link';
import {
  ArrowLeft,
  CheckCircle2,
  Clock3,
  Gift,
  Mail,
  Phone,
  TicketCheck,
  User,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { getAllDealClaims } from '@/actions/deals';
import RedeemClaimButton from '@/components/Frontend/RedeemClaimButton';

export default async function DashboardDealClaimsPage() {
  const claims = await getAllDealClaims();

  const totalClaims = claims.length;
  const redeemedClaims = claims.filter((claim) => claim.redeemed).length;
  const pendingClaims = claims.filter((claim) => !claim.redeemed).length;

  return (
    <main className="min-h-screen p-6 md:p-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <Link
              href="/dashboard/deals"
              className="mb-3 inline-flex items-center text-sm font-medium text-gray-500 transition hover:text-[#111111]"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Deals
            </Link>

            <h1 className="text-3xl font-black text-[#111111]">Deal Claims</h1>

            <p className="mt-1 text-gray-500">View and manage customer claims and offer codes.</p>
          </div>

          <div className="flex items-center gap-2 rounded-xl bg-[#25D366]/10 px-4 py-3">
            <TicketCheck className="h-5 w-5 text-[#25D366]" />

            <span className="text-sm font-semibold text-[#111111]">
              {totalClaims} {totalClaims === 1 ? 'Claim' : 'Claims'}
            </span>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <StatCard
            title="Total Claims"
            value={totalClaims}
            icon={<TicketCheck className="h-5 w-5" />}
          />

          <StatCard title="Pending" value={pendingClaims} icon={<Clock3 className="h-5 w-5" />} />

          <StatCard
            title="Redeemed"
            value={redeemedClaims}
            icon={<CheckCircle2 className="h-5 w-5" />}
          />
        </div>

        {/* Claims */}
        <div className="mt-10">
          {claims.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-gray-300 bg-white p-16 text-center">
              <Gift className="mx-auto h-10 w-10 text-gray-300" />

              <h2 className="mt-4 text-xl font-bold text-[#111111]">No claims yet</h2>

              <p className="mt-2 text-gray-500">
                Customer claims will appear here when someone claims a deal.
              </p>

              <Link href="/dashboard/deals">
                <Button className="mt-6 rounded-xl bg-[#25D366] text-white hover:bg-[#1ebe5d]">
                  View Deals
                </Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-8">
              {groupClaimsByBusiness(claims).map(([businessName, businessClaims]) => (
                <section
                  key={businessName}
                  className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm"
                >
                  {/* Business Header */}
                  <div className="border-b border-gray-200 bg-gray-50 px-5 py-5 md:px-6">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
                          Business
                        </p>

                        <h2 className="mt-1 text-xl font-black text-[#111111]">{businessName}</h2>
                      </div>

                      <span className="w-fit rounded-full bg-[#25D366]/10 px-3 py-1 text-xs font-bold text-[#25D366]">
                        {businessClaims.length} {businessClaims.length === 1 ? 'Claim' : 'Claims'}
                      </span>
                    </div>
                  </div>

                  {/* Claims */}
                  <div className="divide-y divide-gray-100">
                    {businessClaims.map((claim) => (
                      <ClaimRow key={claim.id} claim={claim} />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

function ClaimRow({
  claim,
}: {
  claim: {
    id: string;
    offerCode: string;
    customerName: string | null;
    customerPhone: string | null;
    customerEmail: string | null;
    redeemed: boolean;
    redeemedAt: Date | null;
    createdAt: Date;
    deal: {
      title: string;
      business: {
        name: string;
      };
    };
  };
}) {
  return (
    <div className="p-5 md:p-6">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        {/* Customer */}
        <div className="min-w-0">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366]">
              <User className="h-5 w-5" />
            </div>

            <div className="min-w-0">
              <p className="font-bold text-[#111111]">{claim.customerName || 'Unnamed customer'}</p>

              <p className="text-sm text-gray-500">{claim.deal.title}</p>
            </div>
          </div>

          {/* Contact */}
          <div className="mt-4 flex flex-col gap-2 text-sm text-gray-500 sm:flex-row sm:flex-wrap sm:gap-x-5">
            {claim.customerPhone && (
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>{claim.customerPhone}</span>
              </div>
            )}

            {claim.customerEmail && (
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span className="break-all">{claim.customerEmail}</span>
              </div>
            )}
          </div>
        </div>

        {/* Claim Code */}
        <div className="rounded-2xl border border-dashed border-[#25D366]/40 bg-[#25D366]/5 p-4 lg:min-w-[220px]">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Offer Code</p>

          <p className="mt-1 font-mono text-xl font-black tracking-wider text-[#111111]">
            {claim.offerCode}
          </p>
        </div>

        {/* Status / Date */}
        <div className="flex flex-col items-start gap-3 lg:min-w-[150px] lg:items-end">
          <RedeemClaimButton
            claimId={claim.id}
            offerCode={claim.offerCode}
            redeemed={claim.redeemed}
          />

          <div className="text-left lg:text-right">
            <p className="text-xs text-gray-400">Claimed {formatDate(claim.createdAt)}</p>

            {claim.redeemed && claim.redeemedAt && (
              <p className="mt-1 text-xs font-medium text-green-600">
                Redeemed {formatDate(claim.redeemedAt)}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function groupClaimsByBusiness(claims: Awaited<ReturnType<typeof getAllDealClaims>>) {
  const grouped = new Map<string, typeof claims>();

  for (const claim of claims) {
    const businessName = claim.deal.business.name;

    const existing = grouped.get(businessName) ?? [];

    existing.push(claim);

    grouped.set(businessName, existing);
  }

  return Array.from(grouped.entries());
}

function formatDate(date: Date) {
  return new Intl.DateTimeFormat('en-LS', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(date));
}

function StatCard({ title, value, icon }: { title: string; value: number; icon: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-gray-500">{title}</p>

        <div className="rounded-xl bg-[#25D366]/10 p-2 text-[#25D366]">{icon}</div>
      </div>

      <p className="mt-3 text-3xl font-black text-[#111111]">{value}</p>
    </div>
  );
}
