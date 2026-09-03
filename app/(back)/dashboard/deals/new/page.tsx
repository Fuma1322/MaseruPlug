import Link from 'next/link';
import { ArrowLeft, Flame } from 'lucide-react';

import DealForm from '@/components/Forms/DealForm';
import { getBusinesses } from '@/actions/business';

export default async function NewDealPage() {
  const response = await getBusinesses();

  const businesses = response.data ?? [];

  const businessOptions = businesses
    .filter((business) => business.status === 'ACTIVE')
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
              <h1 className="text-3xl font-black text-[#111111]">Create New Deal</h1>

              <p className="mt-1 text-sm text-gray-500">
                Create a special offer for a business on MaseruPlug.
              </p>
            </div>
          </div>
        </div>

        <DealForm businesses={businessOptions} />
      </div>
    </main>
  );
}
