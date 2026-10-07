'use client';

import { useEffect, useMemo, useState } from 'react';
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

  const maxViews = useMemo(() => {
    if (!analytics?.dailyViews.length) return 1;

    return Math.max(...analytics.dailyViews.map((item) => item.views), 1);
  }, [analytics]);

  const averageViews = useMemo(() => {
    if (!analytics?.dailyViews.length) return 0;

    return analytics.totalViews / analytics.dailyViews.length;
  }, [analytics]);

  const bestDay = useMemo(() => {
    if (!analytics?.dailyViews.length) return null;

    return analytics.dailyViews.reduce((best, current) =>
      current.views > best.views ? current : best
    );
  }, [analytics]);

  return (
    <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-xl">
      {/* HEADER */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-[#25D366]/10 p-3">
              <TrendingUp size={20} className="text-[#25D366]" />
            </div>

            <div>
              <h2 className="text-xl font-bold text-[#111111]">Featured Performance</h2>

              <p className="text-sm text-neutral-500">Views generated from featured businesses</p>
            </div>
          </div>
        </div>

        {/* RANGE */}
        <div className="grid grid-cols-4 rounded-xl bg-neutral-100 p-1">
          {(['7D', '30D', '90D', 'ALL'] as AnalyticsRange[]).map((option) => (
            <button
              key={option}
              onClick={() => setRange(option)}
              className={`rounded-lg px-3 py-2 text-xs font-semibold transition ${
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

      {/* STATS */}
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {/* TOTAL */}
        <div className="rounded-2xl border border-neutral-100 bg-neutral-50 p-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-neutral-500">Total Views</p>

            <Eye size={18} className="text-[#25D366]" />
          </div>

          <p className="mt-2 text-3xl font-black text-[#111111]">
            {loading ? '...' : (analytics?.totalViews ?? 0)}
          </p>
        </div>

        {/* AVERAGE */}
        <div className="rounded-2xl border border-neutral-100 bg-neutral-50 p-4">
          <p className="text-sm text-neutral-500">Daily Average</p>

          <p className="mt-2 text-3xl font-black text-[#111111]">
            {loading ? '...' : averageViews.toFixed(1)}
          </p>
        </div>

        {/* BEST DAY */}
        <div className="rounded-2xl border border-neutral-100 bg-neutral-50 p-4">
          <p className="text-sm text-neutral-500">Best Day</p>

          {loading ? (
            <p className="mt-2 text-3xl font-black">...</p>
          ) : bestDay ? (
            <>
              <p className="mt-2 text-2xl font-black text-[#111111]">{bestDay.views}</p>

              <p className="text-xs text-neutral-500">
                {new Date(`${bestDay.date}T00:00:00`).toLocaleDateString('en-GB', {
                  day: '2-digit',
                  month: 'short',
                })}
              </p>
            </>
          ) : (
            <p className="mt-2 text-2xl font-black">0</p>
          )}
        </div>
      </div>

      {/* CHART */}
      <div className="mt-8">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-[#111111]">Featured Views</h3>

            <p className="text-xs text-neutral-500">Daily activity</p>
          </div>

          {bestDay && (
            <div className="flex items-center gap-1 text-xs font-semibold text-[#25D366]">
              <TrendingUp size={14} />
              {bestDay.views} peak views
            </div>
          )}
        </div>

        {loading ? (
          <div className="flex h-56 items-center justify-center rounded-2xl bg-neutral-50">
            <p className="text-sm text-neutral-500">Loading analytics...</p>
          </div>
        ) : !analytics?.dailyViews.length ? (
          <div className="flex h-56 items-center justify-center rounded-2xl border border-dashed border-neutral-200">
            <p className="text-sm text-neutral-500">No featured profile views yet.</p>
          </div>
        ) : (
          <div className="rounded-2xl bg-neutral-50 p-5">
            <div className="flex h-56 items-end gap-1 overflow-hidden">
              {analytics.dailyViews.map((day) => {
                const height = day.views === 0 ? 4 : Math.max(8, (day.views / maxViews) * 100);

                return (
                  <div key={day.date} className="group relative flex h-full flex-1 items-end">
                    {/* TOOLTIP */}
                    <div className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 hidden -translate-x-1/2 whitespace-nowrap rounded-lg bg-[#111111] px-3 py-2 text-xs text-white shadow-lg group-hover:block">
                      <p className="font-semibold">{day.views} views</p>

                      <p className="text-neutral-300">
                        {new Date(`${day.date}T00:00:00`).toLocaleDateString('en-GB', {
                          day: '2-digit',
                          month: 'short',
                        })}
                      </p>
                    </div>

                    {/* BAR */}
                    <div
                      className="w-full rounded-t-md bg-[#25D366] opacity-80 transition-all duration-200 group-hover:opacity-100"
                      style={{
                        height: `${height}%`,
                      }}
                    />
                  </div>
                );
              })}
            </div>

            {/* DATE LABELS */}
            <div className="mt-3 flex justify-between text-[10px] text-neutral-400">
              <span>
                {new Date(`${analytics.dailyViews[0].date}T00:00:00`).toLocaleDateString('en-GB', {
                  day: '2-digit',
                  month: 'short',
                })}
              </span>

              {analytics.dailyViews.length > 2 && (
                <span>
                  {new Date(
                    `${
                      analytics.dailyViews[Math.floor(analytics.dailyViews.length / 2)].date
                    }T00:00:00`
                  ).toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: 'short',
                  })}
                </span>
              )}

              <span>
                {new Date(
                  `${analytics.dailyViews[analytics.dailyViews.length - 1].date}T00:00:00`
                ).toLocaleDateString('en-GB', {
                  day: '2-digit',
                  month: 'short',
                })}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
