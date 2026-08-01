import prisma from '@/lib/db';
import AdminCards from '@/components/Dashboard/AdminCards';
import BusinessGrowthChart from '@/components/Dashboard/BusinessGrowthChart';
import { getDashboardAnalytics } from '@/actions/analytics';
import CategoryDistributionChart from '@/components/Dashboard/CategoryDistributionChart';

export default async function Page() {
  const growth = await getDashboardAnalytics();
  const totalBusinesses = await prisma.business.count();

  const featuredBusinesses = await prisma.business.count({
    where: { isFeatured: true },
  });

  const totalCategories = await prisma.category.count();

  const newBusinesses = await prisma.business.count({
    where: {
      createdAt: {
        gte: new Date(new Date().setMonth(new Date().getMonth() - 1)),
      },
    },
  });

  const categories = await prisma.category.findMany({
    include: {
      _count: {
        select: { businesses: true },
      },
    },
  });

  const chartData = categories.map((cat, index) => ({
    category: cat.name,
    count: cat._count.businesses,
    fill: `var(--chart-${(index % 5) + 1})`,
  }));

  return (
    <div className="space-y-6">
      <AdminCards
        totalBusinesses={totalBusinesses}
        featuredBusinesses={featuredBusinesses}
        totalCategories={totalCategories}
        newBusinesses={newBusinesses}
        chartData={chartData}
      />

      <div className="grid gap-6 lg:grid-cols-3">
        <BusinessGrowthChart data={growth} />

        <CategoryDistributionChart data={chartData} />

        {/* Future */}
        <div className="rounded-3xl border bg-white p-6 shadow-sm">Customer Engagement Chart</div>
      </div>
    </div>
  );
}
