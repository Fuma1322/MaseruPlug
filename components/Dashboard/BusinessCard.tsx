'use client';

import Image from 'next/image';
import { Pencil, Trash2, MapPin, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

import { deleteBusiness } from '@/actions/business';

type BusinessCardProps = {
  business: {
    id: string;
    name: string;
    location: string;
    images: string[];
    category: {
      name: string;
    };
  };
};

export default function BusinessCard({ business }: BusinessCardProps) {
  const router = useRouter();

  const [deleting, setDeleting] = useState(false);

  const image = business.images?.[0] || '/lelo.jpg';

  async function handleDelete() {
    const confirmed = window.confirm(`Are you sure you want to delete ${business.name}?`);

    if (!confirmed) return;

    try {
      setDeleting(true);

      const response = await deleteBusiness(business.id);

      if (!response.ok) {
        toast.error(response.error || 'Failed to delete business');

        return;
      }

      toast.success('Business deleted successfully');

      router.refresh();
    } catch (error) {
      console.error(error);

      toast.error('Something went wrong');
    } finally {
      setDeleting(false);
    }
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-[#25D366] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      {/* IMAGE */}

      <div className="h-48 overflow-hidden">
        <Image
          src={image}
          alt={business.name}
          width={600}
          height={400}
          className="h-full w-full object-cover transition duration-300 hover:scale-105"
        />
      </div>

      {/* CONTENT */}

      <div className="space-y-4 p-5">
        <div>
          <h2 className="text-xl font-bold text-[#111111]">{business.name}</h2>

          <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
            <MapPin size={15} />

            {business.location}
          </div>
        </div>

        {/* CATEGORY */}

        <span className="inline-flex rounded-full bg-[#25D366]/10 px-3 py-1 text-xs font-semibold text-[#25D366]">
          {business.category?.name}
        </span>

        {/* ACTIONS */}

        <div className="flex justify-between border-t pt-4">
          <button className="flex items-center gap-2 text-sm text-gray-600 transition hover:text-[#25D366]">
            <Pencil size={16} />
            Edit
          </button>

          <button
            onClick={handleDelete}
            disabled={deleting}
            className="flex items-center gap-2 text-sm text-red-500 transition hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {deleting ? (
              <>
                <Loader2 size={16} className="animate-spin" />
                Deleting...
              </>
            ) : (
              <>
                <Trash2 size={16} />
                Delete
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
