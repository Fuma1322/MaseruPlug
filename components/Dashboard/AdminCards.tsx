"use client";

import { CategoryPieChart } from "./AdminChart";
import { SectionCards } from "./AdminSectionCards";

type Props = {
  totalBusinesses: number;
  featuredBusinesses: number;
  totalCategories: number;
  newBusinesses: number;
  chartData: {
    category: string;
    count: number;
    fill: string;
  }[];
};

export default function AdminCards({
  totalBusinesses,
  featuredBusinesses,
  totalCategories,
  newBusinesses,
  chartData,
}: Props) {
  return (
    <div className="space-y-8 p-4 lg:p-6">

      {/* KPI CARDS */}
      <SectionCards
        totalBusinesses={totalBusinesses}
        featuredBusinesses={featuredBusinesses}
        totalCategories={totalCategories}
        newBusinesses={newBusinesses}
      />

      {/* PIE CHART */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CategoryPieChart data={chartData} />
      </div>

    </div>
  );
}