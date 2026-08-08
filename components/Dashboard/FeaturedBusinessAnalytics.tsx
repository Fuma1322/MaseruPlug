'use client';

import { useEffect, useState } from 'react';
import { Eye, TrendingUp } from 'lucide-react';

import {
  getFeaturedBusinessAnalytics,
  type AnalyticsRange,
  type FeaturedAnalytics,
} from '@/actions/analytics';

export default function FeaturedBusinessAnalytics() {
  const [range, setRange] = useState<AnalyticsRange>('30D');

  const [analytics, setAnalytics] = useState<FeaturedAnalytics | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadAnalytics() {
      try {
        setLoading(true);

        const data = await getFeaturedBusinessAnalytics(range);

        setAnalytics(data);
      } catch (error) {
        console.error('Failed loading featured analytics:', error);
      } finally {
        setLoading(false);
      }
    }

    loadAnalytics();
  }, [range]);

  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <div className="rounded-xl bg-[#25D366]/10 p-2">
              <TrendingUp size={20} className="text-[#25D366]" />
            </div>

            <h2 className="text-xl font-bold text-[#111111]">Featured Business Performance</h2>
          </div>

          <p className="mt-1 text-sm text-neutral-500">
            Profile views generated from featured businesses.
          </p>
        </div>

        <div className="grid grid-cols-4 rounded-xl bg-neutral-100 p-1">
          {(['7D', '30D', '90D', 'ALL'] as AnalyticsRange[]).map((option) => (
            <button
              key={option}
              onClick={() => setRange(option)}
              className={`rounded-lg px-3 py-2 text-sm font-semibold transition ${
                range === option
                  ? 'bg-white text-[#111111] shadow-sm'
                  : 'text-neutral-500 hover:text-[#111111]'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <div className="rounded-2xl border border-neutral-100 bg-neutral-50 p-5">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-[#25D366] p-3">
              <Eye size={20} />
            </div>

            <div>
              <p className="text-sm text-neutral-500">Featured Profile Views</p>

              <p className="text-3xl font-black text-[#111111]">
                {loading ? '...' : (analytics?.totalViews ?? 0)}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="mb-4 font-semibold text-[#111111]">Daily Views</h3>

        {loading ? (
          <div className="flex h-48 items-center justify-center text-sm text-neutral-500">
            Loading analytics...
          </div>
        ) : !analytics || analytics.dailyViews.length === 0 ? (
          <div className="flex h-48 items-center justify-center rounded-2xl border border-dashed text-sm text-neutral-500">
            No featured profile views yet.
          </div>
        ) : (
          <div className="space-y-3">
            {analytics.dailyViews.map((day) => (
              <div key={day.date} className="flex items-center gap-4">
                <span className="w-24 text-xs text-neutral-500">
                  {new Date(`${day.date}T00:00:00`).toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: 'short',
                  })}
                </span>

                <div className="h-3 flex-1 overflow-hidden rounded-full bg-neutral-100">
                  <div
                    className="h-full rounded-full bg-[#25D366]"
                    style={{
                      width: `${
                        analytics.dailyViews.length > 0
                          ? Math.min(
                              100,
                              (day.views /
                                Math.max(...analytics.dailyViews.map((item) => item.views), 1)) *
                                100
                            )
                          : 0
                      }%`,
                    }}
                  />
                </div>

                <span className="w-8 text-right text-sm font-bold">{day.views}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
