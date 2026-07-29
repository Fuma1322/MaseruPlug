'use client';

import Image from 'next/image';
import { Pencil, Trash2, MapPin } from 'lucide-react';

type Props = {
  business: any;
};

export default function BusinessCard({ business }: Props) {
  const image = business.images?.[0] || '/lelo.jpg';

  return (
    <div className="overflow-hidden rounded-3xl border border-[#25D366] bg-white shadow-sm transition hover:shadow-xl">
      {/* IMAGE */}

      <div className="h-48 overflow-hidden">
        <Image
          src={image}

          alt={business.name}

          width={600}

          height={400}

          className="h-full w-full object-cover transition hover:scale-105"
        />
      </div>

      <div className="space-y-4 p-5">
        <div>
          <h2 className="text-xl font-bold text-[#111111]">{business.name}</h2>

          <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
            <MapPin size={15} />

            {business.location}
          </div>
        </div>

        <span className="inline-flex rounded-full bg-[#25D366]/10 px-3 py-1 text-xs font-semibold text-[#25D366]">
          {business.category.name}
        </span>

        <div className="flex justify-between border-t pt-4">
          <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#25D366]">
            <Pencil size={16} />
            Edit
          </button>

          <button className="flex items-center gap-2 text-sm text-red-500 hover:text-red-600">
            <Trash2 size={16} />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
