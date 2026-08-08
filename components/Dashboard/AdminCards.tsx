'use client';

import { SectionCards } from './AdminSectionCards';

type Props = {
  totalBusinesses: number;
  featuredBusinesses: number;
  totalCategories: number;
  newBusinesses: number;
  engagement: {
    date: string;
    views: number;
    whatsapp: number;
    calls: number;
  }[];
};

export default function AdminCards({
  totalBusinesses,
  featuredBusinesses,
  totalCategories,
  newBusinesses,
}: Props) {
  return (
    <div className="space-y-8 p-4 lg:p-6">
      <SectionCards
        totalBusinesses={totalBusinesses}
        featuredBusinesses={featuredBusinesses}
        totalCategories={totalCategories}
        newBusinesses={newBusinesses}
      />
    </div>
  );
}
