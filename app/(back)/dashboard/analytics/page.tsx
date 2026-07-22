import { TrendingUp, Store } from 'lucide-react';
import { getAnalyticsOverview } from '@/actions/getAnalytics';
import AnalyticsCard from '@/components/Dashboard/AnalyticsCard';
import BusinessAnalyticsTable from '@/components/Dashboard/BusinessAnalyticsTable';
import { formatNumber } from '@/lib/formatNumber';
import AnalyticsDashboard from '@/components/Dashboard/AnalyticsDashboard';

export default async function AnalyticsPage() {
  const data = await getAnalyticsOverview();

  const conversionRate =
    data.totalViews > 0 ? Number(((data.whatsappClicks / data.totalViews) * 100).toFixed(1)) : 0;

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-10">
      {/* HEADER */}

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#25D366] shadow-lg shadow-green-200">
            <TrendingUp className="text-white" size={26} />
          </div>

          <div>
            <h1 className="text-2xl font-bold tracking-tight text-[#111111] sm:text-3xl lg:text-4xl">
              MPlug Analytics
            </h1>

            <p className="text-gray-500">Business performance and customer engagement insights.</p>
          </div>
        </div>
      </div>

      {/* STAT CARDS */}

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <AnalyticsCard
          title="Profile Views"
          value={formatNumber(data.totalViews)}
          description="Customers viewing business profiles"
        />

        <AnalyticsCard
          title="WhatsApp Leads"
          value={formatNumber(data.whatsappClicks)}
          description="Customers starting conversations"
        />

        <AnalyticsCard
          title="Phone Calls"
          value={formatNumber(data.phoneClicks)}
          description="Direct customer enquiries"
        />

        <AnalyticsCard
          title="Conversion Rate"
          value={`${conversionRate.toFixed(1)}%`}
          description="Conversion Rate"
        />
      </div>

      {/* BUSINESS PERFORMANCE */}

      {/* BUSINESS PERFORMANCE */}

      <div className="mt-8 rounded-3xl border border-gray-100 bg-white p-4 shadow-xl sm:mt-12 sm:p-8">
        {/* SECTION HEADER */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-green-50 p-3">
              <Store className="text-[#25D366]" />
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#111111] sm:text-2xl">
                All MaseruPlug Businesses
              </h2>

              <p className="text-sm text-gray-500 sm:text-base">
                Monitor customer engagement across every business listed on MaseruPlug.
              </p>
            </div>
          </div>
        </div>

        {/* ANALYTICS CHARTS */}

        <div className="mt-8">
          <AnalyticsDashboard />
        </div>

        {/* BUSINESS TABLE */}

        <div className="mt-10 divide-y">
          <BusinessAnalyticsTable businesses={data.businesses} />
        </div>
      </div>
    </div>
  );
}
