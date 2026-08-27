'use client';

import { useEffect, useMemo, useState } from 'react';

import {
  BarChart3,
  CheckCircle2,
  ChevronDown,
  MessageSquare,
  Search,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  Wallet,
} from 'lucide-react';
import { getAllBusinessFeedback } from '@/actions/businessFeedback';

interface Feedback {
  id: string;

  businessName: string;

  listingDuration: string;

  satisfaction: number;

  profileRepresentation: string;

  customerDiscovery: string;

  customerDiscoveryDetails?: string | null;

  usefulness: string;

  wantsReviews: string;

  reviewPreference?: string | null;

  desiredFeatures: string[];

  mostWantedFeature?: string | null;

  businessGoals: string[];

  recommend: string;

  recommendationReason?: string | null;

  whatTheyLike?: string | null;

  whatToImprove?: string | null;

  premiumInterest: string;

  premiumFeatures: string[];

  createdAt: Date;
}

export default function FeedbackPage() {
  const [feedback, setFeedback] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    loadFeedback();
  }, []);

  async function loadFeedback() {
    try {
      const data = await getAllBusinessFeedback();

      setFeedback(data);
    } catch (error) {
      console.error('Failed to load feedback:', error);
    } finally {
      setLoading(false);
    }
  }

  const filteredFeedback = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return feedback;
    }

    return feedback.filter((item) => item.businessName.toLowerCase().includes(query));
  }, [feedback, search]);

  const analytics = useMemo(() => {
    const total = feedback.length;

    if (!total) {
      return {
        total: 0,
        averageSatisfaction: 0,
        recommendRate: 0,
        discoveryRate: 0,
        reviewInterest: 0,
        premiumInterest: 0,
        satisfactionDistribution: [0, 0, 0, 0, 0],
        requestedFeatures: [],
        premiumFeatures: [],
        improvementFeedback: [],
        businessBreakdown: [],
        trend: [],
      };
    }

    const averageSatisfaction = feedback.reduce((sum, item) => sum + item.satisfaction, 0) / total;

    const recommendCount = feedback.filter(
      (item) => item.recommend === 'Definitely' || item.recommend === 'Probably'
    ).length;

    const discoveryCount = feedback.filter(
      (item) =>
        item.customerDiscovery === 'Yes, a significant increase' ||
        item.customerDiscovery === 'Yes, a small increase'
    ).length;

    const reviewInterestCount = feedback.filter(
      (item) =>
        item.wantsReviews === 'Yes, definitely' ||
        item.wantsReviews === 'Yes, but only verified customers should review'
    ).length;

    const premiumInterestCount = feedback.filter(
      (item) =>
        item.premiumInterest === 'Yes' ||
        item.premiumInterest === 'Maybe, depending on the features and price'
    ).length;

    /*
     * SATISFACTION DISTRIBUTION
     */

    const satisfactionDistribution = [1, 2, 3, 4, 5].map(
      (rating) => feedback.filter((item) => item.satisfaction === rating).length
    );

    /*
     * REQUESTED FEATURES
     */

    const featureMap: Record<string, number> = {};

    feedback.forEach((item) => {
      item.desiredFeatures?.forEach((feature) => {
        featureMap[feature] = (featureMap[feature] ?? 0) + 1;
      });
    });

    const requestedFeatures = Object.entries(featureMap)
      .map(([name, count]) => ({
        name,
        count,
        percentage: (count / total) * 100,
      }))
      .sort((a, b) => b.count - a.count);

    /*
     * PREMIUM FEATURES
     */

    const premiumFeatureMap: Record<string, number> = {};

    feedback.forEach((item) => {
      item.premiumFeatures?.forEach((feature) => {
        premiumFeatureMap[feature] = (premiumFeatureMap[feature] ?? 0) + 1;
      });
    });

    const premiumFeatures = Object.entries(premiumFeatureMap)
      .map(([name, count]) => ({
        name,
        count,
        percentage: (count / total) * 100,
      }))
      .sort((a, b) => b.count - a.count);

    /*
     * BUSINESS BREAKDOWN
     */

    const businessMap: Record<
      string,
      {
        responses: number;
        satisfaction: number;
      }
    > = {};

    feedback.forEach((item) => {
      const name = item.businessName;

      if (!businessMap[name]) {
        businessMap[name] = {
          responses: 0,
          satisfaction: 0,
        };
      }

      businessMap[name].responses += 1;
      businessMap[name].satisfaction += item.satisfaction;
    });

    const businessBreakdown = Object.entries(businessMap)
      .map(([name, data]) => ({
        name,
        responses: data.responses,
        averageSatisfaction: data.satisfaction / data.responses,
      }))
      .sort((a, b) => b.responses - a.responses);

    /*
     * IMPROVEMENT FEEDBACK
     */

    const improvementFeedback = feedback
      .filter((item) => item.whatToImprove?.trim())
      .map((item) => ({
        businessName: item.businessName,
        text: item.whatToImprove!.trim(),
        createdAt: item.createdAt,
      }));

    /*
     * MONTHLY TREND
     */

    const trendMap: Record<string, number> = {};

    feedback.forEach((item) => {
      const date = new Date(item.createdAt);

      const key = date.toLocaleDateString('en-US', {
        month: 'short',
        year: 'numeric',
      });

      trendMap[key] = (trendMap[key] ?? 0) + 1;
    });

    const trend = Object.entries(trendMap).map(([month, count]) => ({
      month,
      count,
    }));

    return {
      total,

      averageSatisfaction,

      recommendRate: (recommendCount / total) * 100,

      discoveryRate: (discoveryCount / total) * 100,

      reviewInterest: (reviewInterestCount / total) * 100,

      premiumInterest: (premiumInterestCount / total) * 100,

      satisfactionDistribution,

      requestedFeatures,

      premiumFeatures,

      improvementFeedback,

      businessBreakdown,

      trend,
    };
  }, [feedback]);

  if (loading) {
    return (
      <main className="min-h-screen p-8">
        <p className="text-neutral-500">Loading feedback...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen p-2 sm:p-8">
      {/* HEADER */}

      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#25D366]/10">
              <MessageSquare size={21} className="text-[#25D366]" />
            </div>

            <span className="text-sm font-semibold text-[#25D366]">MaseruPlug Insights</span>
          </div>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-[#111111]">
            Business Feedback
          </h1>

          <p className="mt-1 max-w-2xl text-sm text-neutral-500">
            Understand how businesses experience MaseruPlug and identify the products and features
            they want next.
          </p>
        </div>

        <div className="relative w-full md:w-72">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search business..."
            className="w-full rounded-xl border border-neutral-200 bg-white py-3 pl-10 pr-4 text-sm outline-none focus:border-[#25D366]"
          />
        </div>
      </div>

      {/* PRIMARY KPIs */}

      <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          icon={<MessageSquare size={20} />}
          label="Total Responses"
          value={analytics.total}
        />

        <StatCard
          icon={<Star size={20} />}
          label="Average Satisfaction"
          value={`${analytics.averageSatisfaction.toFixed(1)} / 5`}
        />

        <StatCard
          icon={<TrendingUp size={20} />}
          label="Would Recommend"
          value={`${analytics.recommendRate.toFixed(0)}%`}
        />

        <StatCard
          icon={<Search size={20} />}
          label="Customer Discovery"
          value={`${analytics.discoveryRate.toFixed(0)}%`}
        />
      </section>

      {/* SECONDARY KPIs */}

      <section className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard
          icon={<Star size={20} />}
          label="Demand for Reviews"
          value={`${analytics.reviewInterest.toFixed(0)}%`}
        />

        <StatCard
          icon={<Sparkles size={20} />}
          label="Premium Interest"
          value={`${analytics.premiumInterest.toFixed(0)}%`}
        />

        <StatCard
          icon={<Users size={20} />}
          label="Businesses Responded"
          value={analytics.businessBreakdown.length}
        />
      </section>

      {/* SATISFACTION + TREND */}

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <AnalyticsCard
          title="Satisfaction Distribution"
          description="How businesses rated their MaseruPlug experience."
          icon={<Star size={20} />}
        >
          <div className="space-y-4">
            {[5, 4, 3, 2, 1].map((rating) => {
              const count = analytics.satisfactionDistribution[rating - 1];

              const percentage = analytics.total > 0 ? (count / analytics.total) * 100 : 0;

              return (
                <div key={rating} className="flex items-center gap-4">
                  <div className="flex w-16 items-center gap-1 text-sm font-semibold">
                    {rating}
                    <Star size={14} className="fill-[#25D366] text-[#25D366]" />
                  </div>

                  <div className="h-3 flex-1 overflow-hidden rounded-full bg-neutral-100">
                    <div
                      className="h-full rounded-full bg-[#25D366]"
                      style={{
                        width: `${percentage}%`,
                      }}
                    />
                  </div>

                  <span className="w-12 text-right text-sm font-semibold">{count}</span>
                </div>
              );
            })}
          </div>
        </AnalyticsCard>

        <AnalyticsCard
          title="Feedback Trend"
          description="Number of responses received over time."
          icon={<BarChart3 size={20} />}
        >
          {analytics.trend.length === 0 ? (
            <EmptyState text="No trend data yet." />
          ) : (
            <div className="flex h-52 items-end gap-3">
              {analytics.trend.map((item) => {
                const max = Math.max(...analytics.trend.map((trend) => trend.count));

                const height = max > 0 ? (item.count / max) * 100 : 0;

                return (
                  <div key={item.month} className="flex min-w-0 flex-1 flex-col items-center gap-2">
                    <span className="text-xs font-semibold text-[#111111]">{item.count}</span>

                    <div className="flex h-36 w-full items-end">
                      <div
                        className="w-full rounded-t-lg bg-[#25D366]"
                        style={{
                          height: `${height}%`,
                        }}
                      />
                    </div>

                    <span className="truncate text-xs text-neutral-400">{item.month}</span>
                  </div>
                );
              })}
            </div>
          )}
        </AnalyticsCard>
      </section>

      {/* FEATURE ANALYTICS */}

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <AnalyticsCard
          title="Most Requested Features"
          description="What businesses want MaseruPlug to build next."
          icon={<Sparkles size={20} />}
        >
          <RankingList items={analytics.requestedFeatures} empty="No feature requests yet." />
        </AnalyticsCard>

        <AnalyticsCard
          title="Most Wanted Premium Services"
          description="Features businesses may be willing to pay for."
          icon={<Wallet size={20} />}
        >
          <RankingList items={analytics.premiumFeatures} empty="No premium preferences yet." />
        </AnalyticsCard>
      </section>

      {/* BUSINESS BREAKDOWN */}

      <AnalyticsCard
        title="Feedback by Business"
        description="Businesses that have submitted feedback and their average satisfaction."
        icon={<Users size={20} />}
        className="mt-8"
      >
        {analytics.businessBreakdown.length === 0 ? (
          <EmptyState text="No business feedback yet." />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b text-left text-xs uppercase tracking-wide text-neutral-400">
                  <th className="pb-3">Business</th>

                  <th className="pb-3 text-center">Responses</th>

                  <th className="pb-3 text-right">Satisfaction</th>
                </tr>
              </thead>

              <tbody>
                {analytics.businessBreakdown.map((business) => (
                  <tr key={business.name} className="border-b last:border-0">
                    <td className="py-4 font-semibold text-[#111111]">{business.name}</td>

                    <td className="py-4 text-center text-sm text-neutral-500">
                      {business.responses}
                    </td>

                    <td className="py-4 text-right">
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#25D366]/10 px-3 py-1 text-sm font-bold text-[#111111]">
                        <Star size={14} className="fill-[#25D366] text-[#25D366]" />

                        {business.averageSatisfaction.toFixed(1)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </AnalyticsCard>

      {/* IMPROVEMENT FEEDBACK */}

      <AnalyticsCard
        title="What Businesses Want Improved"
        description="The latest qualitative feedback from business owners."
        icon={<MessageSquare size={20} />}
        className="mt-8"
      >
        {analytics.improvementFeedback.length === 0 ? (
          <EmptyState text="No improvement feedback yet." />
        ) : (
          <div className="space-y-3">
            {analytics.improvementFeedback.map((item, index) => (
              <div key={`${item.businessName}-${index}`} className="rounded-2xl bg-neutral-50 p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-semibold text-[#111111]">{item.businessName}</p>

                  <span className="text-xs text-neutral-400">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </span>
                </div>

                <p className="mt-2 text-sm leading-6 text-neutral-600">{item.text}</p>
              </div>
            ))}
          </div>
        )}
      </AnalyticsCard>

      {/* RECENT FEEDBACK */}

      <section className="mt-8">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-[#111111]">Recent Responses</h2>

          <p className="text-sm text-neutral-500">Review individual responses in detail.</p>
        </div>

        {filteredFeedback.length === 0 ? (
          <div className="rounded-3xl border border-neutral-200 bg-white p-10 text-center">
            <MessageSquare className="mx-auto text-neutral-300" size={40} />

            <p className="mt-4 font-semibold">No feedback found</p>

            <p className="mt-1 text-sm text-neutral-500">Feedback responses will appear here.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {filteredFeedback.map((item) => {
              const expanded = expandedId === item.id;

              return (
                <article
                  key={item.id}
                  className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setExpandedId(expanded ? null : item.id)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left"
                  >
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="font-bold text-[#111111]">{item.businessName}</h3>

                        <span className="inline-flex items-center gap-1 rounded-full bg-[#25D366]/10 px-2.5 py-1 text-xs font-bold">
                          <Star size={12} className="fill-[#25D366] text-[#25D366]" />
                          {item.satisfaction}/5
                        </span>
                      </div>

                      <p className="mt-1 text-xs text-neutral-400">
                        {new Date(item.createdAt).toLocaleDateString()}
                      </p>
                    </div>

                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-neutral-400 transition ${
                        expanded ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {expanded && (
                    <div className="border-t border-neutral-100 p-5">
                      <div className="grid gap-3 md:grid-cols-3">
                        <Insight label="Usefulness" value={item.usefulness} />

                        <Insight label="Discovery" value={item.customerDiscovery} />

                        <Insight label="Recommendation" value={item.recommend} />

                        <Insight label="Reviews" value={item.wantsReviews} />

                        <Insight label="Premium" value={item.premiumInterest} />

                        <Insight label="Representation" value={item.profileRepresentation} />
                      </div>

                      <div className="mt-5 grid gap-5 md:grid-cols-2">
                        {item.whatTheyLike && (
                          <FeedbackText title="What they like" text={item.whatTheyLike} />
                        )}

                        {item.whatToImprove && (
                          <FeedbackText title="What should improve" text={item.whatToImprove} />
                        )}

                        {item.mostWantedFeature && (
                          <FeedbackText title="Most wanted feature" text={item.mostWantedFeature} />
                        )}

                        {item.recommendationReason && (
                          <FeedbackText
                            title="Recommendation reason"
                            text={item.recommendationReason}
                          />
                        )}
                      </div>

                      {item.desiredFeatures.length > 0 && (
                        <TagSection title="Requested features" items={item.desiredFeatures} />
                      )}

                      {item.premiumFeatures.length > 0 && (
                        <TagSection title="Premium services" items={item.premiumFeatures} />
                      )}

                      {item.businessGoals.length > 0 && (
                        <TagSection title="Business goals" items={item.businessGoals} />
                      )}
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}

/* =========================================================
   COMPONENTS
========================================================= */

function StatCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#25D366]/10 text-[#25D366]">
          {icon}
        </div>

        <p className="text-sm text-neutral-500">{label}</p>
      </div>

      <p className="mt-4 text-2xl font-extrabold text-[#111111]">{value}</p>
    </div>
  );
}

function AnalyticsCard({
  title,
  description,
  icon,
  children,
  className = '',
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm ${className}`}
    >
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/10 text-[#25D366]">
          {icon}
        </div>

        <div>
          <h2 className="font-bold text-[#111111]">{title}</h2>

          <p className="mt-1 text-sm text-neutral-500">{description}</p>
        </div>
      </div>

      <div className="mt-6">{children}</div>
    </section>
  );
}

function RankingList({
  items,
  empty,
}: {
  items: {
    name: string;
    count: number;
    percentage: number;
  }[];
  empty: string;
}) {
  if (items.length === 0) {
    return <EmptyState text={empty} />;
  }

  const max = items[0]?.count ?? 1;

  return (
    <div className="space-y-4">
      {items.slice(0, 8).map((item, index) => (
        <div key={item.name}>
          <div className="flex items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-xs font-bold text-neutral-500">
                {index + 1}
              </span>

              <span className="truncate text-sm font-semibold text-[#111111]">{item.name}</span>
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <span className="text-xs text-neutral-400">{item.percentage.toFixed(0)}%</span>

              <span className="text-sm font-bold">{item.count}</span>
            </div>
          </div>

          <div className="ml-10 mt-2 h-2 overflow-hidden rounded-full bg-neutral-100">
            <div
              className="h-full rounded-full bg-[#25D366]"
              style={{
                width: `${(item.count / max) * 100}%`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function Insight({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-neutral-50 p-3">
      <p className="text-xs text-neutral-400">{label}</p>

      <p className="mt-1 text-sm font-semibold text-[#111111]">{value}</p>
    </div>
  );
}

function FeedbackText({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <p className="text-sm font-semibold text-[#111111]">{title}</p>

      <p className="mt-2 rounded-xl bg-neutral-50 p-3 text-sm leading-6 text-neutral-600">{text}</p>
    </div>
  );
}

function TagSection({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="mt-5 border-t pt-5">
      <p className="text-sm font-semibold text-[#111111]">{title}</p>

      <div className="mt-2 flex flex-wrap gap-2">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full bg-[#25D366]/10 px-3 py-1 text-xs font-medium text-[#111111]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function EmptyState({ text }: { text: string }) {
  return (
    <div className="rounded-2xl bg-neutral-50 p-8 text-center">
      <CheckCircle2 size={28} className="mx-auto text-neutral-300" />

      <p className="mt-2 text-sm text-neutral-500">{text}</p>
    </div>
  );
}
