'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { getDailyAnalytics, type AnalyticsRange, type DailyAnalytics } from '@/actions/analytics';

import { BarChart3, Loader2 } from 'lucide-react';

interface DailyAnalyticsChartProps {
  initialData: DailyAnalytics[];
  initialRange?: AnalyticsRange;
}

const RANGE_OPTIONS: {
  label: string;
  value: AnalyticsRange;
}[] = [
  { label: '7 Days', value: '7D' },
  { label: '30 Days', value: '30D' },
  { label: '90 Days', value: '90D' },
  { label: 'All Time', value: 'ALL' },
];

function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'short',
  }).format(new Date(`${date}T12:00:00`));
}

export default function DailyAnalyticsChart({
  initialData,
  initialRange = '30D',
}: DailyAnalyticsChartProps) {
  const [range, setRange] = useState<AnalyticsRange>(initialRange);
  const [data, setData] = useState<DailyAnalytics[]>(initialData);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (range === initialRange) {
      return;
    }

    let cancelled = false;

    async function loadAnalytics() {
      try {
        setLoading(true);

        const result = await getDailyAnalytics(range);

        if (!cancelled) {
          setData(result);
        }
      } catch (error) {
        console.error('Failed to load daily analytics:', error);
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    loadAnalytics();

    return () => {
      cancelled = true;
    };
  }, [range, initialRange]);

  const totals = useMemo(() => {
    return data.reduce(
      (acc, day) => {
        acc.profileViews += day.profileViews;
        acc.whatsappLeads += day.whatsappLeads;
        acc.phoneLeads += day.phoneLeads;

        return acc;
      },
      {
        profileViews: 0,
        whatsappLeads: 0,
        phoneLeads: 0,
      }
    );
  }, [data]);

  return (
    <section className="mt-10 rounded-3xl border border-gray-100 bg-white p-6 shadow-xl md:p-8">
      {/* HEADER */}

      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50">
            <BarChart3 className="h-5 w-5 text-[#25D366]" />
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#111111]">Customer Activity</h2>

            <p className="text-sm text-gray-500">
              Track how customers interact with MaseruPlug businesses.
            </p>
          </div>
        </div>

        {/* RANGE FILTER */}

        <div className="flex flex-wrap gap-2 rounded-xl bg-gray-50 p-1">
          {RANGE_OPTIONS.map((option) => {
            const active = range === option.value;

            return (
              <button
                key={option.value}
                type="button"
                onClick={() => setRange(option.value)}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                  active
                    ? 'bg-[#25D366] text-white shadow-sm'
                    : 'text-gray-600 hover:bg-white hover:text-[#111111]'
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* SUMMARY */}

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <SummaryItem label="Profile Views" value={totals.profileViews} />

        <SummaryItem label="WhatsApp Leads" value={totals.whatsappLeads} />

        <SummaryItem label="Phone Leads" value={totals.phoneLeads} />
      </div>

      {/* CHART */}

      <div className="relative mt-10 h-[380px] w-full">
        {loading && (
          <div className="absolute inset-0 z-10 flex items-center justify-center rounded-2xl bg-white/70 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
              <Loader2 className="h-4 w-4 animate-spin text-[#25D366]" />
              Updating analytics...
            </div>
          </div>
        )}

        {data.length === 0 ? (
          <div className="flex h-full items-center justify-center rounded-2xl border border-dashed border-gray-200">
            <div className="text-center">
              <p className="font-semibold text-[#111111]">No analytics data yet</p>

              <p className="mt-1 text-sm text-gray-500">
                Customer activity will appear here once events are recorded.
              </p>
            </div>
          </div>
        ) : (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 10,
                right: 10,
                left: 0,
                bottom: 10,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />

              <XAxis
                dataKey="date"
                tickFormatter={formatDate}
                tickLine={false}
                axisLine={false}
                minTickGap={30}
                tick={{
                  fontSize: 12,
                }}
              />

              <YAxis
                allowDecimals={false}
                tickLine={false}
                axisLine={false}
                width={40}
                tick={{
                  fontSize: 12,
                }}
              />

              <Tooltip
                labelFormatter={(value) => formatDate(String(value))}
                contentStyle={{
                  borderRadius: '12px',
                  border: '1px solid #e5e7eb',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                }}
              />

              <Legend />

              <Line
                type="monotone"
                dataKey="profileViews"
                name="Profile Views"
                stroke="#25D366"
                strokeWidth={3}
                dot={false}
                activeDot={{
                  r: 5,
                }}
              />

              <Line
                type="monotone"
                dataKey="whatsappLeads"
                name="WhatsApp Leads"
                stroke="#111111"
                strokeWidth={2}
                dot={false}
                activeDot={{
                  r: 5,
                }}
              />

              <Line
                type="monotone"
                dataKey="phoneLeads"
                name="Phone Leads"
                stroke="#6b7280"
                strokeWidth={2}
                dot={false}
                activeDot={{
                  r: 5,
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
    </section>
  );
}

function SummaryItem({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4">
      <p className="text-sm text-gray-500">{label}</p>

      <p className="mt-1 text-2xl font-bold tracking-tight text-[#111111]">
        {value.toLocaleString()}
      </p>
    </div>
  );
}
