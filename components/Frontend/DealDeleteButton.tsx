'use client';

import { useState } from 'react';
import { Trash2 } from 'lucide-react';

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

import { deleteDeal } from '@/actions/deals';
import toast from 'react-hot-toast';

type DealDeleteButtonProps = {
  dealId: string;
};

export default function DealDeleteButton({ dealId }: DealDeleteButtonProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    setLoading(true);

    const result = await deleteDeal(dealId);

    if (!result.success) {
      toast.error('Failed to delete deal. Please try again.');
      setLoading(false);
      return;
    }

    setLoading(false);
    setOpen(false);
  }

  return (
    <>
      {/* Delete Button */}
      <Button
        type="button"
        variant="outline"
        onClick={() => setOpen(true)}
        disabled={loading}
        className="rounded-xl text-red-500 hover:bg-red-50 hover:text-red-600"
      >
        <Trash2 className="h-4 w-4" />
      </Button>

      {/* Confirmation Dialog */}
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent className="rounded-2xl">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-xl font-bold text-[#111111]">
              Delete this deal?
            </AlertDialogTitle>

            <AlertDialogDescription className="text-gray-500">
              This action cannot be undone. The deal and all customer claims associated with it will
              be permanently deleted.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter className="gap-2">
            <AlertDialogCancel disabled={loading} className="rounded-xl">
              Cancel
            </AlertDialogCancel>

            <AlertDialogAction
              onClick={handleDelete}
              disabled={loading}
              className="rounded-xl bg-red-500 text-white hover:bg-red-600"
            >
              {loading ? 'Deleting...' : 'Delete Deal'}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
