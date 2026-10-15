'use client';

import { useMemo, useState } from 'react';

import AnalyticsFilter from './AnalyticsFilter';
import BusinessAnalyticsTable from './BusinessAnalyticsTable';

import { AnalyticsBusiness } from '@/types/analytics';

type Props = {
  businesses: AnalyticsBusiness[];
};

export default function AnalyticsContent({ businesses }: Props) {
  const [filter, setFilter] = useState('all');

  const filteredBusinesses = useMemo(() => {
    const now = new Date();

    return businesses
      .map((business) => ({
        ...business,
        analytics: business.analytics.filter((event) => {
          if (filter === 'all') return true;

          const created = new Date(event.createdAt);

          if (filter === 'today') {
            return created.toDateString() === now.toDateString();
          }

          if (filter === '7days') {
            const date = new Date();
            date.setDate(now.getDate() - 7);

            return created >= date;
          }

          if (filter === '30days') {
            const date = new Date();
            date.setDate(now.getDate() - 30);

            return created >= date;
          }

          return true;
        }),
      }))
      .filter((business) => business.analytics.length > 0);
  }, [businesses, filter]);

  return (
    <>
      <AnalyticsFilter value={filter} onChange={setFilter} />

      <BusinessAnalyticsTable businesses={filteredBusinesses} />
    </>
  );
}
