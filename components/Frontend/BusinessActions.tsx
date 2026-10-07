'use client';

import Link from 'next/link';
import { Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { AnalyticsEvent } from '@prisma/client';

import { trackBusinessEvent, trackGAEvent } from '@/actions/analytics';

type Props = {
  business: {
    id: string;
    name: string;
    phone: string;
    whatsapp: string;
  };
};

export default function BusinessActions({ business }: Props) {
  const message = encodeURIComponent(
    `Hello ${business.name}, I found your business on MaseruPlug and I'm interested in learning more about your services.`
  );

  async function handleClick(event: AnalyticsEvent) {
    await trackBusinessEvent(business.id, event, navigator.userAgent);

    if (event === 'WHATSAPP_CLICK') {
      trackGAEvent('whatsapp_click', {
        business_name: business.name,
        business_id: business.id,
      });
    }

    if (event === 'PHONE_CLICK') {
      trackGAEvent('phone_click', {
        business_name: business.name,
        business_id: business.id,
      });
    }

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', event === 'WHATSAPP_CLICK' ? 'whatsapp_click' : 'phone_click', {
        business_name: business.name,
        business_id: business.id,
      });
    }
  }

  return (
    <div className="mt-8 flex flex-col gap-4 sm:flex-row">
      <Link
        href={`https://wa.me/266${business.whatsapp}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => handleClick('WHATSAPP_CLICK')}
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-4 font-semibold text-white shadow-lg transition duration-300 hover:scale-105"
      >
        <FaWhatsapp className="h-5 w-5" />
        Chat On WhatsApp
      </Link>

      <Link
        href={`tel:${business.phone}`}
        onClick={() => handleClick('PHONE_CLICK')}
        className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-[#25D366] px-6 py-4 font-semibold text-[#111111] transition duration-300 hover:bg-[#25D366] hover:text-white"
      >
        <Phone className="h-5 w-5" />
        Call Now
      </Link>
    </div>
  );
}
