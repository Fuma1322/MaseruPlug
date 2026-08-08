'use client';

import Link from 'next/link';

import { trackBusinessEvent, trackGAEvent } from '@/actions/analytics';

interface Props {
  businessId: string;
  businessName: string;
  slug: string;
}

export default function FeaturedBusinessLink({ businessId, businessName, slug }: Props) {
  async function handleClick() {
    await trackBusinessEvent(businessId, 'FEATURED_PROFILE_VIEW', navigator.userAgent);

    trackGAEvent('featured_profile_view', {
      business_name: businessName,
      business_id: businessId,
    });
  }

  return (
    <Link
      href={`/business/${slug}`}
      onClick={handleClick}
      className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-[#25D366] font-semibold text-[#25D366] shadow-sm transition hover:text-[#111111]"
    >
      View Profile
    </Link>
  );
}
