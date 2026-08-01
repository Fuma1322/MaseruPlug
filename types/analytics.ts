import { AnalyticsEvent } from '@prisma/client';

export type BusinessAnalytics = {
  id: string;
  event: AnalyticsEvent;
  createdAt: Date;
};

export type AnalyticsBusiness = {
  id: string;
  name: string;
  location: string;
  analytics: {
    id: string;
    event: string;
    createdAt: Date;
  }[];
};
