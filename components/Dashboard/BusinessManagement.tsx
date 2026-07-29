'use client';

import BusinessCard from './BusinessCard';
import AddBusinessDialog from './AddBusinessDialog';

type Props = {
  categories: any[];
  businesses: any[];
};

export default function BusinessManagement({ categories, businesses }: Props) {
  return (
    <div className="space-y-8">
      {/* HEADER */}

      {/* HEADER */}

      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#111111] sm:text-3xl">Businesses</h1>

          <p className="mt-1 text-sm text-gray-500 sm:text-base">
            Manage businesses listed on MaseruPlug.
          </p>
        </div>

        <div className="w-full sm:w-auto">
          <AddBusinessDialog categories={categories} />
        </div>
      </div>

      {/* BUSINESS GRID */}

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {businesses.map((business) => (
          <BusinessCard key={business.id} business={business} />
        ))}
      </div>
    </div>
  );
}
