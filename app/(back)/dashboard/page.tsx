import prisma from '@/lib/db';
import AdminCards from '@/components/Dashboard/AdminCards';
import BusinessGrowthChart from '@/components/Dashboard/BusinessGrowthChart';
import DailyAnalyticsChart from '@/components/Dashboard/DailyAnalyticsChart';
import CategoryDistributionChart from '@/components/Dashboard/CategoryDistributionChart';
import {
  getCustomerEngagement,
  getDailyAnalytics,
  getDashboardAnalytics,
} from '@/actions/analytics';
import FeaturedBusinessAnalytics from '@/components/Dashboard/FeaturedBusinessAnalytics';

export default async function Page() {
  const growth = await getDashboardAnalytics();
  const engagement = await getCustomerEngagement();
  const dailyAnalytics = await getDailyAnalytics('30D');
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
    <div className="min-h-screen space-y-8 p-6 md:p-10">
      {/* ADMIN CARDS */}

      <AdminCards
        totalBusinesses={totalBusinesses}
        featuredBusinesses={featuredBusinesses}
        totalCategories={totalCategories}
        newBusinesses={newBusinesses}
        engagement={engagement}
      />

      {/* CUSTOMER ENGAGEMENT */}

      <DailyAnalyticsChart initialData={dailyAnalytics} initialRange="30D" />

      <FeaturedBusinessAnalytics />

      {/* BUSINESS / CATEGORY ANALYTICS */}

      <div className="grid w-full grid-cols-1 gap-6 xl:grid-cols-2">
        <BusinessGrowthChart data={growth} />

        <CategoryDistributionChart data={chartData} />
      </div>
    </div>
  );
}
