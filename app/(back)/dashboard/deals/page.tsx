import Link from 'next/link';
import Image from 'next/image';
import { Plus, Pencil, Eye, Flame, CalendarDays } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { getDeals } from '@/actions/deals';
import DealDeleteButton from '@/components/Frontend/DealDeleteButton';

export default async function DashboardDealsPage() {
  const deals = await getDeals();

  return (
    <main className="min-h-screen p-6 md:p-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-black text-[#111111]">Deals</h1>

            <p className="mt-1 text-gray-500">
              Create and manage special offers from businesses on MaseruPlug.
            </p>
          </div>

          <Link href="/dashboard/deals/new">
            <Button className="h-11 rounded-xl bg-[#25D366] px-5 font-semibold text-white hover:bg-[#1ebe5d]">
              <Plus className="mr-2 h-4 w-4" />
              Create Deal
            </Button>
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard title="Total Deals" value={deals.length} icon={<Flame className="h-5 w-5" />} />

          <StatCard
            title="Active"
            value={deals.filter((deal) => deal.status === 'ACTIVE').length}
            icon={<Eye className="h-5 w-5" />}
          />

          <StatCard
            title="Drafts"
            value={deals.filter((deal) => deal.status === 'DRAFT').length}
            icon={<Pencil className="h-5 w-5" />}
          />

          <StatCard
            title="Total Claims"
            value={deals.reduce((total, deal) => total + deal.claimedSpots, 0)}
            icon={<CalendarDays className="h-5 w-5" />}
          />
        </div>

        {/* Deals */}
        <div className="mt-10">
          {deals.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-gray-300 bg-white p-16 text-center">
              <Flame className="mx-auto h-10 w-10 text-gray-300" />

              <h2 className="mt-4 text-xl font-bold text-[#111111]">No deals yet</h2>

              <p className="mt-2 text-gray-500">
                Create your first special offer for a MaseruPlug business.
              </p>

              <Link href="/dashboard/deals/new">
                <Button className="mt-6 rounded-xl bg-[#25D366] text-white hover:bg-[#1ebe5d]">
                  Create Your First Deal
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {deals.map((deal) => {
                const remaining = deal.totalSpots - deal.claimedSpots;

                return (
                  <div
                    key={deal.id}
                    className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg"
                  >
                    {/* Image */}
                    <div className="relative aspect-[16/10] bg-gray-100">
                      {deal.image ? (
                        <Image src={deal.image} alt={deal.title} fill className="object-cover" />
                      ) : (
                        <div className="flex h-full items-center justify-center">
                          <Flame className="h-10 w-10 text-gray-300" />
                        </div>
                      )}

                      <div className="absolute left-4 top-4">
                        <StatusBadge status={deal.status} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <p className="text-sm font-medium text-gray-500">{deal.business.name}</p>

                      <h2 className="mt-1 text-xl font-bold text-[#111111]">{deal.title}</h2>

                      <p className="mt-2 line-clamp-2 text-sm text-gray-500">{deal.description}</p>

                      {/* Pricing */}
                      <div className="mt-5 flex items-center gap-3">
                        <span className="text-sm text-gray-400 line-through">
                          M{deal.originalPrice}
                        </span>

                        <span className="text-2xl font-black text-[#25D366]">
                          {deal.offerPrice === 0 ? 'FREE' : `M${deal.offerPrice}`}
                        </span>
                      </div>

                      {/* Availability */}
                      <div className="mt-4 rounded-xl bg-gray-50 p-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">Claims</span>

                          <span className="font-semibold text-[#111111]">
                            {deal.claimedSpots} / {deal.totalSpots}
                          </span>
                        </div>

                        <div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-200">
                          <div
                            className="h-full rounded-full bg-[#25D366]"
                            style={{
                              width: `${Math.min(
                                100,
                                (deal.claimedSpots / deal.totalSpots) * 100
                              )}%`,
                            }}
                          />
                        </div>

                        <p className="mt-2 text-xs text-gray-500">
                          {remaining > 0 ? `${remaining} spots remaining` : 'Fully claimed'}
                        </p>
                      </div>

                      {/* Actions */}
                      <div className="mt-5 flex gap-2">
                        <Link href={`/deals/${deal.slug}`} target="_blank" className="flex-1">
                          <Button variant="outline" className="w-full rounded-xl">
                            <Eye className="mr-2 h-4 w-4" />
                            View
                          </Button>
                        </Link>

                        <Link href={`/dashboard/deals/${deal.id}/edit`}>
                          <Button variant="outline" className="rounded-xl">
                            <Pencil className="h-4 w-4" />
                          </Button>
                        </Link>

                        <DealDeleteButton dealId={deal.id} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </main>
  );
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

function StatusBadge({ status }: { status: 'DRAFT' | 'ACTIVE' | 'PAUSED' | 'EXPIRED' }) {
  const styles = {
    DRAFT: 'bg-gray-100 text-gray-600',
    ACTIVE: 'bg-[#25D366] text-white',
    PAUSED: 'bg-yellow-100 text-yellow-700',
    EXPIRED: 'bg-red-100 text-red-600',
  };

  return (
    <span className={`rounded-full px-3 py-1 text-xs font-bold ${styles[status]}`}>{status}</span>
  );
}
