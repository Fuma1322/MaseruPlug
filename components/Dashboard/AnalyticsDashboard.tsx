'use client';

import { useState } from 'react';

import AnalyticsFilter from './AnalyticsFilter';

export default function AnalyticsDashboard() {
  const [range, setRange] = useState('30days');

  return (
    <div>
      <AnalyticsFilter value={range} onChange={setRange} />
    </div>
  );
}
