'use server';

import prisma from '@/lib/db';

export async function getAnalyticsOverview() {
  const totalViews = await prisma.businessEvent.count({
    where: {
      event: 'PROFILE_VIEW',
    },
  });

  const whatsappClicks = await prisma.businessEvent.count({
    where: {
      event: 'WHATSAPP_CLICK',
    },
  });

  const phoneClicks = await prisma.businessEvent.count({
    where: {
      event: 'PHONE_CLICK',
    },
  });

  const businesses = await prisma.business.findMany({
    orderBy: {
      name: 'asc',
    },

    include: {
      analytics: true,
    },
  });

  return {
    totalViews,

    whatsappClicks,

    phoneClicks,

    businesses,
  };
}
