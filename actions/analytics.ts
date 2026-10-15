'use server';

import prisma from '@/lib/db';

export type AnalyticsRange = '7D' | '30D' | '90D' | 'ALL';

export type DailyAnalytics = {
  date: string;
  profileViews: number;
  featuredProfileViews: number;
  whatsappLeads: number;
  phoneLeads: number;
};

const TRACKED_EVENTS = [
  'PROFILE_VIEW',
  'FEATURED_PROFILE_VIEW',
  'WHATSAPP_CLICK',
  'PHONE_CLICK',
] as const;

type AnalyticsEvent =
  | 'PROFILE_VIEW'
  | 'FEATURED_PROFILE_VIEW'
  | 'WHATSAPP_CLICK'
  | 'PHONE_CLICK'
  | 'FACEBOOK_CLICK'
  | 'WEBSITE_CLICK'
  | 'DIRECTIONS_CLICK'
  | 'SHARE_CLICK';

export async function trackBusinessEvent(
  businessId: string,
  event: AnalyticsEvent,
  userAgent?: string
) {
  try {
    await prisma.businessEvent.create({
      data: {
        businessId,
        event,
        userAgent,
      },
    });

    return {
      success: true,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
    };
  }
}

export async function trackGAEvent(eventName: string, params?: Record<string, string>) {
  if (typeof window === 'undefined') return;

  if (!window.gtag) {
    console.warn('Google Analytics not loaded');
    return;
  }

  window.gtag('event', eventName, params);
}

export async function getDashboardAnalytics() {
  const businesses = await prisma.business.findMany({
    select: {
      createdAt: true,
    },
    orderBy: {
      createdAt: 'asc',
    },
  });

  const monthlyGrowth = businesses.reduce(
    (acc, business) => {
      const month = business.createdAt.toLocaleString('default', {
        month: 'short',
      });

      acc[month] = (acc[month] || 0) + 1;

      return acc;
    },
    {} as Record<string, number>
  );

  const chartData = Object.entries(monthlyGrowth).map(([month, businesses]) => ({
    month,
    businesses,
  }));

  return chartData;
}

export async function getCustomerEngagement() {
  const thirtyDaysAgo = new Date();

  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  const events = await prisma.businessEvent.findMany({
    where: {
      createdAt: {
        gte: thirtyDaysAgo,
      },
    },

    select: {
      event: true,
      createdAt: true,
    },
  });

  const grouped = Array.from({ length: 30 }, (_, index) => {
    const date = new Date();

    date.setDate(date.getDate() - (29 - index));

    const key = date.toISOString().split('T')[0];

    return {
      date: key,
      views: 0,
      whatsapp: 0,
      calls: 0,
    };
  });

  events.forEach((event) => {
    const key = event.createdAt.toISOString().split('T')[0];

    const day = grouped.find((item) => item.date === key);

    if (!day) return;

    switch (event.event) {
      case 'PROFILE_VIEW':
        day.views++;
        break;

      case 'WHATSAPP_CLICK':
        day.whatsapp++;
        break;

      case 'PHONE_CLICK':
        day.calls++;
        break;
    }
  });

  return grouped;
}

function getStartDate(range: AnalyticsRange): Date | null {
  if (range === 'ALL') {
    return null;
  }

  const now = new Date();

  const days = range === '7D' ? 7 : range === '30D' ? 30 : 90;

  const start = new Date(now);

  start.setDate(start.getDate() - (days - 1));

  start.setHours(0, 0, 0, 0);

  return start;
}

function getMaseruDate(date: Date): string {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Africa/Maseru',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(date);
}

function getMaseruDateParts(date: Date) {
  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Africa/Maseru',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  const parts = formatter.formatToParts(date);

  const values: Record<string, string> = {};

  for (const part of parts) {
    if (part.type !== 'literal') {
      values[part.type] = part.value;
    }
  }

  return {
    year: Number(values.year),
    month: Number(values.month),
    day: Number(values.day),
  };
}

function createDateKey(year: number, month: number, day: number): string {
  return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

function addDays(date: Date, amount: number): Date {
  const result = new Date(date);

  result.setUTCDate(result.getUTCDate() + amount);

  return result;
}

export async function getDailyAnalytics(range: AnalyticsRange = '30D'): Promise<DailyAnalytics[]> {
  const startDate = getStartDate(range);

  const events = await prisma.businessEvent.findMany({
    where: {
      event: {
        in: [...TRACKED_EVENTS],
      },

      ...(startDate
        ? {
            createdAt: {
              gte: startDate,
            },
          }
        : {}),
    },

    select: {
      event: true,
      createdAt: true,
    },

    orderBy: {
      createdAt: 'asc',
    },
  });

  const dailyMap = new Map<string, DailyAnalytics>();

  /*
   * Add every day in the requested range first.
   *
   * This means days with zero activity still appear in
   * the dashboard rather than disappearing from the chart.
   */

  if (range !== 'ALL' && startDate) {
    const startParts = getMaseruDateParts(startDate);
    const todayParts = getMaseruDateParts(new Date());

    const startUTC = new Date(Date.UTC(startParts.year, startParts.month - 1, startParts.day));

    const endUTC = new Date(Date.UTC(todayParts.year, todayParts.month - 1, todayParts.day));

    let current = startUTC;

    while (current <= endUTC) {
      const date = current.toISOString().slice(0, 10);

      dailyMap.set(date, {
        date,
        profileViews: 0,
        featuredProfileViews: 0,
        whatsappLeads: 0,
        phoneLeads: 0,
      });

      current = addDays(current, 1);
    }
  }

  /*
   * Aggregate events.
   */

  for (const event of events) {
    const date = getMaseruDate(event.createdAt);

    if (!dailyMap.has(date)) {
      dailyMap.set(date, {
        date,
        profileViews: 0,
        featuredProfileViews: 0,
        whatsappLeads: 0,
        phoneLeads: 0,
      });
    }

    const day = dailyMap.get(date)!;

    switch (event.event) {
      case 'PROFILE_VIEW':
        day.profileViews += 1;
        break;

      case 'FEATURED_PROFILE_VIEW':
        day.featuredProfileViews += 1;
        break;

      case 'WHATSAPP_CLICK':
        day.whatsappLeads += 1;
        break;

      case 'PHONE_CLICK':
        day.phoneLeads += 1;
        break;
    }
  }

  return Array.from(dailyMap.values()).sort((a, b) => a.date.localeCompare(b.date));
}

export type FeaturedAnalytics = {
  totalViews: number;
  dailyViews: {
    date: string;
    views: number;
  }[];
};

export async function getFeaturedBusinessAnalytics(
  range: AnalyticsRange = '30D'
): Promise<FeaturedAnalytics> {
  const startDate = getStartDate(range);

  const events = await prisma.businessEvent.findMany({
    where: {
      event: 'FEATURED_PROFILE_VIEW',

      ...(startDate
        ? {
            createdAt: {
              gte: startDate,
            },
          }
        : {}),
    },

    select: {
      createdAt: true,
    },

    orderBy: {
      createdAt: 'asc',
    },
  });

  const dailyMap = new Map<string, number>();

  if (range !== 'ALL' && startDate) {
    const startParts = getMaseruDateParts(startDate);
    const todayParts = getMaseruDateParts(new Date());

    const startUTC = new Date(Date.UTC(startParts.year, startParts.month - 1, startParts.day));

    const endUTC = new Date(Date.UTC(todayParts.year, todayParts.month - 1, todayParts.day));

    let current = startUTC;

    while (current <= endUTC) {
      const date = current.toISOString().slice(0, 10);

      dailyMap.set(date, 0);

      current = addDays(current, 1);
    }
  }

  for (const event of events) {
    const date = getMaseruDate(event.createdAt);

    dailyMap.set(date, (dailyMap.get(date) || 0) + 1);
  }

  const dailyViews = Array.from(dailyMap.entries())
    .map(([date, views]) => ({
      date,
      views,
    }))
    .sort((a, b) => a.date.localeCompare(b.date));

  return {
    totalViews: events.length,
    dailyViews,
  };
}
