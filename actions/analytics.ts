'use server';

import prisma from '@/lib/db';

type AnalyticsEvent =
  | 'PROFILE_VIEW'
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
