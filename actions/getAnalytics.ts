'use server';

import prisma from '@/lib/db';

export async function getAnalyticsOverview(range: 'today' | '7days' | '30days' | 'all' = '30days') {
  let startDate: Date | undefined;

  if (range === 'today') {
    startDate = new Date();

    startDate.setHours(0, 0, 0, 0);
  }

  if (range === '7days') {
    startDate = new Date();

    startDate.setDate(startDate.getDate() - 7);
  }

  if (range === '30days') {
    startDate = new Date();

    startDate.setDate(startDate.getDate() - 30);
  }

  const filter = startDate
    ? {
        createdAt: {
          gte: startDate,
        },
      }
    : {};

  const totalViews = await prisma.businessEvent.count({
    where: {
      event: 'PROFILE_VIEW',
      ...filter,
    },
  });

  const whatsappClicks = await prisma.businessEvent.count({
    where: {
      event: 'WHATSAPP_CLICK',
      ...filter,
    },
  });

  const phoneClicks = await prisma.businessEvent.count({
    where: {
      event: 'PHONE_CLICK',
      ...filter,
    },
  });

  const businesses = await prisma.business.findMany({
    orderBy: {
      name: 'asc',
    },

    include: {
      analytics: {
        where: filter,
      },
    },
  });

  return {
    totalViews,

    whatsappClicks,

    phoneClicks,

    businesses,
  };
}
