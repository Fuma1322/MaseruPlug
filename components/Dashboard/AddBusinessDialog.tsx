'use client';

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogCancel,
} from '@/components/ui/alert-dialog';

import { Button } from '@/components/ui/button';

import { Plus, X } from 'lucide-react';

import BusinessForm from '@/components/Forms/BusinessForm';

import { Category } from '@prisma/client';

type Props = {
  categories: Category[];
};

export default function AddBusinessDialog({ categories }: Props) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 font-semibold text-white shadow-sm transition hover:bg-[#1faa55] sm:w-auto">
          <Plus size={18} />
          Add Business
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent className="max-w-4xl overflow-hidden rounded-3xl p-0">
        {/* HEADER */}

        <div className="flex items-center justify-between bg-white px-6 py-5">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-2xl font-bold text-[#111111]">
              Create Business
            </AlertDialogTitle>
          </AlertDialogHeader>

          <AlertDialogCancel asChild>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-100">
              <X className="h-5 w-5" />
            </Button>
          </AlertDialogCancel>
        </div>

        {/* FORM */}

        <div className="max-h-[75vh] overflow-y-auto bg-[#fafafa] px-6 py-6">
          <BusinessForm categories={categories} />
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
