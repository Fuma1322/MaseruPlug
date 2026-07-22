'use server';

import prisma from '@/lib/db';
import { AnalyticsEvent } from '@prisma/client';

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
