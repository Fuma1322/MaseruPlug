'use client';

import { AnalyticsBusiness } from '@/types/analytics';
import { X, Eye, MessageCircle, Phone } from 'lucide-react';

interface Props {
  business: AnalyticsBusiness;
  close: () => void;
}

export default function BusinessAnalyticsModal({ business, close }: Props) {
  const views = business.analytics.filter((event) => event.event === 'PROFILE_VIEW').length;

  const whatsapp = business.analytics.filter((event) => event.event === 'WHATSAPP_CLICK').length;

  const phone = business.analytics.filter((event) => event.event === 'PHONE_CLICK').length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="w-[90%] max-w-md rounded-3xl bg-white p-8 shadow-2xl">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-[#111111]">{business.name}</h2>

          <button onClick={close}>
            <X />
          </button>
        </div>

        <p className="mt-2 text-gray-500">Customer engagement overview</p>

        <div className="mt-8 space-y-4">
          <div className="flex items-center justify-between rounded-2xl bg-gray-50 p-4">
            <div className="flex items-center gap-3">
              <Eye className="text-[#25D366]" />

              <span>Profile Views</span>
            </div>

            <strong>{views}</strong>
          </div>

          <div className="flex items-center justify-between rounded-2xl bg-gray-50 p-4">
            <div className="flex items-center gap-3">
              <MessageCircle className="text-[#25D366]" />

              <span>WhatsApp Clicks</span>
            </div>

            <strong>{whatsapp}</strong>
          </div>

          <div className="flex items-center justify-between rounded-2xl bg-gray-50 p-4">
            <div className="flex items-center gap-3">
              <Phone className="text-[#25D366]" />

              <span>Phone Calls</span>
            </div>

            <strong>{phone}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
