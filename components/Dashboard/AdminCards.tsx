"use client";

import { LoaderFive } from "../ui/loader";
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
}: Props) {
  return (
    <div className="space-y-8 p-4 lg:p-6">

      <div className="flex items-center justify-center">
        <LoaderFive text="Welcome To MaseruPlug..." />
      </div>

      <SectionCards
        totalBusinesses={totalBusinesses}
        featuredBusinesses={featuredBusinesses}
        totalCategories={totalCategories}
        newBusinesses={newBusinesses}
      />
    </div>
  );
}