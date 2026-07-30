'use client';

import { Pencil, X } from 'lucide-react';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { Button } from '@/components/ui/button';

import BusinessForm from '@/components/Forms/BusinessForm';

import { Category } from '@prisma/client';
import { BusinessWithCategory } from '@/types/business';

type Props = {
  business: BusinessWithCategory;
  categories: Category[];
};

export default function EditBusinessDialog({ business, categories }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#25D366]"
        >
          <Pencil size={16} />
          Edit
        </Button>
      </DialogTrigger>

      <DialogContent className="max-h-[90vh] max-w-5xl overflow-y-auto rounded-3xl border border-gray-100 bg-white p-0 shadow-2xl">
        <div className="p-6 md:p-8">
          <DialogTitle className="text-2xl font-bold text-[#111111]">Edit Business</DialogTitle>

          <DialogDescription className="mt-2 text-gray-500">
            Update business information, images, SEO settings and visibility.
          </DialogDescription>

          <div className="mt-6">
            <BusinessForm categories={categories} business={business} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
