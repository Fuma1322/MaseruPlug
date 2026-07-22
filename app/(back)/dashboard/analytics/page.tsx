import { getAnalyticsOverview } from '@/actions/getAnalytics';
import AnalyticsCard from '@/components/Dashboard/AnalyticsCard';
import BusinessAnalyticsTable from '@/components/Dashboard/BusinessAnalyticsTable';
import { TrendingUp, Store } from 'lucide-react';

export default async function AnalyticsPage() {
  const data = await getAnalyticsOverview();

  return (
    <div className="min-h-screen p-6 md:p-10">
      {/* HEADER */}

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#25D366] shadow-lg shadow-green-200">
            <TrendingUp className="text-white" size={26} />
          </div>

          <div>
            <h1 className="text-4xl font-bold tracking-tight text-[#111111]">MPlug Analytics</h1>

            <p className="text-gray-500">Business performance and customer engagement insights.</p>
          </div>
        </div>
      </div>

      {/* STAT CARDS */}

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <AnalyticsCard
          title="Profile Views"
          value={data.totalViews}
          description="Customers viewing business profiles"
        />

        <AnalyticsCard
          title="WhatsApp Leads"
          value={data.whatsappClicks}
          description="Customers starting conversations"
        />

        <AnalyticsCard
          title="Phone Calls"
          value={data.phoneClicks}
          description="Direct customer enquiries"
        />
      </div>

      {/* BUSINESS PERFORMANCE */}

      <div className="mt-12 rounded-3xl border border-gray-100 bg-white p-8 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-green-50 p-3">
            <Store className="text-[#25D366]" />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#111111]">All MaseruPlug Businesses</h2>

            <p className="text-gray-500">
              Monitor customer engagement across every business listed on MaseruPlug.
            </p>
          </div>
        </div>

        <div className="mt-8 divide-y">
          <BusinessAnalyticsTable businesses={data.businesses} />
        </div>
      </div>
    </div>
  );
}
