'use client';

import { useState } from 'react';
import { CheckCircle2, Loader2, TicketCheck } from 'lucide-react';

import { Button } from '@/components/ui/button';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

import { redeemClaim } from '@/actions/deals';
import toast from 'react-hot-toast';

type RedeemClaimButtonProps = {
  claimId: string;
  offerCode: string;
  redeemed: boolean;
};

export default function RedeemClaimButton({
  claimId,
  offerCode,
  redeemed,
}: RedeemClaimButtonProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isRedeemed, setIsRedeemed] = useState(redeemed);
  const [error, setError] = useState<string | null>(null);

  async function handleRedeem() {
    setLoading(true);
    setError(null);

    const result = await redeemClaim(claimId);

    if (!result.success) {
      toast.error('Failed to redeem claim. Please try again.');
      setLoading(false);
      return;
    }

    setIsRedeemed(true);
    setLoading(false);
    setOpen(false);
  }

  if (isRedeemed) {
    return (
      <div className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1.5 text-xs font-bold text-green-700">
        <CheckCircle2 className="h-3.5 w-3.5" />
        Redeemed
      </div>
    );
  }

  return (
    <>
      <Button
        type="button"
        onClick={() => {
          setError(null);
          setOpen(true);
        }}
        className="rounded-xl bg-[#25D366] font-semibold text-white hover:bg-[#1ebe5d]"
      >
        <TicketCheck className="mr-2 h-4 w-4" />
        Redeem
      </Button>

      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent className="rounded-2xl">
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center gap-2 text-xl font-bold text-[#111111]">
              <TicketCheck className="h-5 w-5 text-[#25D366]" />
              Redeem this claim?
            </AlertDialogTitle>

            <AlertDialogDescription className="text-gray-500">
              You are about to redeem the following offer code:
            </AlertDialogDescription>

            <div className="mt-2 rounded-2xl border border-dashed border-[#25D366]/40 bg-[#25D366]/5 p-4 text-center">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Offer Code</p>

              <p className="mt-1 font-mono text-2xl font-black tracking-widest text-[#111111]">
                {offerCode}
              </p>
            </div>

            {error && (
              <div className="mt-2 rounded-xl bg-red-50 p-3 text-sm font-medium text-red-600">
                {error}
              </div>
            )}
          </AlertDialogHeader>

          <AlertDialogFooter className="gap-2">
            <AlertDialogCancel disabled={loading} className="rounded-xl">
              Cancel
            </AlertDialogCancel>

            <AlertDialogAction
              onClick={(event) => {
                event.preventDefault();
                handleRedeem();
              }}
              disabled={loading}
              className="rounded-xl bg-[#25D366] text-white hover:bg-[#1ebe5d]"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Redeeming...
                </>
              ) : (
                <>
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                  Confirm Redemption
                </>
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
