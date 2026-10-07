'use client';

import { Phone } from 'lucide-react';
import { FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { AnalyticsEvent } from '@prisma/client';

import { trackBusinessEvent, trackGAEvent } from '@/actions/analytics';

type Props = {
  business: {
    id: string;
    name: string;
    phone?: string | null;
    whatsapp?: string | null;
    facebookUrl?: string | null;
  };
};

export default function BusinessActions({ business }: Props) {
  const phone = business.phone?.trim();
  const whatsapp = business.whatsapp?.trim();
  const facebookUrl = business.facebookUrl?.trim();

  // Normalize the WhatsApp number for wa.me.
  const whatsappNumber = whatsapp ? whatsapp.replace(/\D/g, '').replace(/^0/, '266') : '';

  const message = encodeURIComponent(
    `Hello ${business.name}, I found your business on MaseruPlug and I'm interested in learning more about your services.`
  );

  async function handleClick(event: AnalyticsEvent) {
    try {
      await trackBusinessEvent(business.id, event, navigator.userAgent);
    } catch (error) {
      console.error('Failed to track business event:', error);
    }

    const eventName = event === 'WHATSAPP_CLICK' ? 'whatsapp_click' : 'phone_click';

    trackGAEvent(eventName, {
      business_name: business.name,
      business_id: business.id,
    });
  }

  return (
    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {/* WHATSAPP */}
      {whatsappNumber && (
        <a
          href={`https://wa.me/${whatsappNumber}?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => void handleClick('WHATSAPP_CLICK')}
          className="flex min-h-[56px] w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-4 text-center font-semibold text-white shadow-lg transition duration-300 hover:scale-[1.02]"
        >
          <FaWhatsapp className="h-5 w-5 shrink-0" />
          <span className="text-[13px]">Chat on WhatsApp</span>
        </a>
      )}

      {/* PHONE */}
      {phone && (
        <a
          href={`tel:${phone}`}
          onClick={() => void handleClick('PHONE_CLICK')}
          className="flex min-h-[56px] w-full items-center justify-center gap-2 rounded-xl border-2 border-[#25D366] bg-white px-4 py-4 text-center font-semibold text-[#111111] transition duration-300 hover:bg-[#25D366] hover:text-white"
        >
          <Phone className="h-5 w-5 shrink-0" />
          <span>Call Now</span>
        </a>
      )}

      {/* FACEBOOK */}
      {facebookUrl && (
        <a
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${business.name} on Facebook`}
          className="flex min-h-[56px] w-full items-center justify-center gap-2 rounded-xl bg-[#1877F2] px-4 py-4 text-center font-semibold text-white shadow-lg transition duration-300 hover:scale-[1.02]"
        >
          <FaFacebook className="h-5 w-5 shrink-0" />
          <span>Visit Facebook</span>
        </a>
      )}
    </div>
  );
}
