'use client';

import { useState } from 'react';
import { Trash2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { deleteDeal } from '@/actions/deals';

type DealDeleteButtonProps = {
  dealId: string;
};

export default function DealDeleteButton({ dealId }: DealDeleteButtonProps) {
  const [loading, setLoading] = useState(false);

  async function handleDelete() {
    const confirmed = window.confirm(
      'Are you sure you want to delete this deal? This action cannot be undone.'
    );

    if (!confirmed) {
      return;
    }

    setLoading(true);

    const result = await deleteDeal(dealId);

    if (!result.success) {
      alert(result.error);
      setLoading(false);
      return;
    }

    setLoading(false);
  }

  return (
    <Button
      type="button"
      variant="outline"
      onClick={handleDelete}
      disabled={loading}
      className="rounded-xl text-red-500 hover:bg-red-50 hover:text-red-600"
    >
      <Trash2 className="h-4 w-4" />
    </Button>
  );
}
