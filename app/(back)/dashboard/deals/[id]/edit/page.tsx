import Link from 'next/link';
import { ArrowLeft, Flame } from 'lucide-react';

import { getDealById } from '@/actions/deals';
import DealForm from '@/components/Forms/DealForm';
import { getBusinesses } from '@/actions/business';

type EditDealPageProps = {
  params: {
    id: string;
  };
};

export default async function EditDealPage({ params }: EditDealPageProps) {
  const [deal, businessesResponse] = await Promise.all([getDealById(params.id), getBusinesses()]);

  if (!deal) {
    return (
      <main className="min-h-screen p-6 md:p-10">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/dashboard/deals"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#25D366]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Deals
          </Link>

          <div className="mt-10 rounded-3xl border border-dashed border-gray-300 bg-white p-16 text-center">
            <Flame className="mx-auto h-10 w-10 text-gray-300" />

            <h1 className="mt-4 text-2xl font-black text-[#111111]">Deal not found</h1>

            <p className="mt-2 text-gray-500">The deal you're trying to edit doesn't exist.</p>

            <Link
              href="/dashboard/deals"
              className="mt-6 inline-flex rounded-xl bg-[#25D366] px-5 py-3 font-semibold text-white hover:bg-[#1ebe5d]"
            >
              Back to Deals
            </Link>
          </div>
        </div>
      </main>
    );
  }

  const businesses = businessesResponse.data ?? [];

  const businessOptions = businesses
    .filter((business) => business.status === 'ACTIVE' || business.id === deal.businessId)
    .map((business) => ({
      id: business.id,
      name: business.name,
    }));

  return (
    <main className="min-h-screen p-6 md:p-10">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/dashboard/deals"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition hover:text-[#25D366]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Deals
          </Link>

          <div className="mt-6 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#25D366]/10">
              <Flame className="h-6 w-6 text-[#25D366]" />
            </div>

            <div>
              <h1 className="text-3xl font-black text-[#111111]">Edit Deal</h1>

              <p className="mt-1 text-sm text-gray-500">
                Update the details, availability, or publishing status of this deal.
              </p>
            </div>
          </div>
        </div>

        <DealForm
          businesses={businessOptions}
          deal={{
            id: deal.id,
            title: deal.title,
            slug: deal.slug,
            description: deal.description,
            image: deal.image,
            originalPrice: deal.originalPrice,
            offerPrice: deal.offerPrice,
            totalSpots: deal.totalSpots,
            status: deal.status,
            businessId: deal.businessId,
            startsAt: deal.startsAt,
            expiresAt: deal.expiresAt,
          }}
        />
      </div>
    </main>
  );
}
