'use client';

import { Business, Category } from '@prisma/client';

import BusinessCard from './BusinessCard';
import AddBusinessDialog from './AddBusinessDialog';

type BusinessWithCategory = Business & {
  category: Category;
};

type Props = {
  categories: Category[];
  businesses: BusinessWithCategory[];
};

export default function BusinessManagement({ categories, businesses }: Props) {
  return (
    <div className="space-y-8">
      {/* HEADER */}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#111111]">Businesses</h1>

          <p className="mt-1 text-gray-500">Manage businesses listed on MaseruPlug.</p>
        </div>

        <AddBusinessDialog categories={categories} />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {businesses.map((business) => (
          <BusinessCard key={business.id} business={business} categories={categories} />
        ))}
      </div>
    </div>
  );
}
