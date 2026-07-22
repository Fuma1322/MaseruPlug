'use client';

import { useState } from 'react';
import BusinessAnalyticsModal from './BusinessAnalyticsModal';
import { AnalyticsBusiness } from '@/types/analytics';

interface Props {
  businesses: AnalyticsBusiness[];
}

export default function BusinessAnalyticsTable({ businesses }: Props) {
  const [selectedBusiness, setSelectedBusiness] = useState<AnalyticsBusiness | null>(null);

  return (
    <>
      <div className="mt-8 divide-y">
        {businesses.map((business, index) => (
          <button
            key={business.id}

            onClick={() => setSelectedBusiness(business)}

            className="flex w-full items-center justify-between rounded-xl px-3 py-5 text-left transition hover:bg-gray-50"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] font-bold text-white">
                {index + 1}
              </div>

              <div>
                <p className="font-semibold text-[#111111]">{business.name}</p>

                <p className="text-sm text-gray-500">{business.location}</p>
              </div>
            </div>

            <div className="rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-[#25D366]">
              {business.analytics.length} events
            </div>
          </button>
        ))}
      </div>

      {selectedBusiness && (
        <BusinessAnalyticsModal
          business={selectedBusiness}

          close={() => setSelectedBusiness(null)}
        />
      )}
    </>
  );
}
