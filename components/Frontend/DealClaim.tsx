'use client';

import { useState } from 'react';
import { BadgeCheck, Loader2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { claimDeal } from '@/actions/deals';

type Props = {
  dealId: string;
  dealTitle: string;
};

export default function DealClaim({ dealId, dealTitle }: Props) {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerEmail, setCustomerEmail] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [offerCode, setOfferCode] = useState('');

  async function handleClaim(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError('');
    setLoading(true);

    try {
      const result = await claimDeal({
        dealId,
        customerName,
        customerPhone,
        customerEmail,
      });

      if (!result.success) {
        setError(result.error || 'Failed to claim deal.');
        return;
      }

      setOfferCode(result.claim?.offerCode || '');
    } catch {
      setError('Something went wrong while claiming this deal.');
    } finally {
      setLoading(false);
    }
  }

  if (offerCode) {
    return (
      <div className="rounded-3xl border border-[#25D366]/20 bg-[#25D366]/5 p-6">
        <div className="flex items-center gap-2 font-semibold text-[#25D366]">
          <BadgeCheck className="h-5 w-5" />
          Deal Successfully Claimed
        </div>

        <h3 className="mt-4 text-lg font-bold text-[#111111]">{dealTitle}</h3>

        <p className="mt-2 text-sm text-gray-600">
          Present this code to the business when redeeming your deal.
        </p>

        <div className="mt-5 rounded-2xl bg-white p-5 text-center shadow-sm">
          <p className="text-xs font-medium uppercase tracking-widest text-gray-400">
            Your Offer Code
          </p>

          <p className="mt-2 text-4xl font-black tracking-widest text-[#111111]">{offerCode}</p>
        </div>

        <p className="mt-4 text-center text-sm text-gray-500">
          Keep this code safe. You may need it to redeem your offer.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-[#111111]">Claim this deal</h2>

      <p className="mt-2 text-sm text-gray-500">
        Enter your details below to receive your unique offer code.
      </p>

      <form onSubmit={handleClaim} className="mt-6 space-y-4">
        <div>
          <label className="mb-2 block text-sm font-medium text-[#111111]">Name</label>

          <Input
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
            placeholder="Your name"
            required
            className="h-12 rounded-xl"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-[#111111]">Phone Number</label>

          <Input
            value={customerPhone}
            onChange={(e) => setCustomerPhone(e.target.value)}
            placeholder="e.g. 63 123 456"
            required
            className="h-12 rounded-xl"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-[#111111]">
            Email
            <span className="ml-1 text-gray-400">(optional)</span>
          </label>

          <Input
            type="email"
            value={customerEmail}
            onChange={(e) => setCustomerEmail(e.target.value)}
            placeholder="you@example.com"
            className="h-12 rounded-xl"
          />
        </div>

        {error && <div className="rounded-xl bg-red-50 p-3 text-sm text-red-600">{error}</div>}

        <Button
          type="submit"
          disabled={loading}
          className="h-12 w-full rounded-xl bg-[#25D366] font-semibold text-white hover:bg-[#1ebe5d]"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Claiming Deal...
            </>
          ) : (
            'Claim Deal'
          )}
        </Button>
      </form>
    </div>
  );
}
