'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { createDeal, updateDeal } from '@/actions/deals';
import toast from 'react-hot-toast';

type DealFormProps = {
  businesses: {
    id: string;
    name: string;
  }[];

  deal?: {
    id: string;
    title: string;
    slug: string;
    description: string;
    image: string;
    originalPrice: number;
    offerPrice: number;
    totalSpots: number;
    status: 'DRAFT' | 'ACTIVE' | 'PAUSED' | 'EXPIRED';
    businessId: string;
    startsAt?: Date | null;
    expiresAt?: Date | null;
  };
};

export default function DealForm({ businesses, deal }: DealFormProps) {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: deal?.title ?? '',
    slug: deal?.slug ?? '',
    description: deal?.description ?? '',
    image: deal?.image ?? '',

    originalPrice: deal?.originalPrice?.toString() ?? '',
    offerPrice: deal?.offerPrice?.toString() ?? '',
    totalSpots: deal?.totalSpots?.toString() ?? '10',

    businessId: deal?.businessId ?? '',

    status: deal?.status ?? 'DRAFT',

    startsAt: deal?.startsAt ? new Date(deal.startsAt).toISOString().slice(0, 16) : '',

    expiresAt: deal?.expiresAt ? new Date(deal.expiresAt).toISOString().slice(0, 16) : '',
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function generateSlug(value: string) {
    return value
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/--+/g, '-');
  }

  function handleTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;

    setFormData((previous) => ({
      ...previous,
      title: value,
      slug: deal ? previous.slug : generateSlug(value),
    }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);

    const payload = {
      title: formData.title,
      slug: formData.slug,
      description: formData.description,
      image: formData.image,

      originalPrice: Number(formData.originalPrice),
      offerPrice: Number(formData.offerPrice),

      totalSpots: Number(formData.totalSpots),

      businessId: formData.businessId,

      status: formData.status as 'DRAFT' | 'ACTIVE' | 'PAUSED' | 'EXPIRED',

      startsAt: formData.startsAt ? new Date(formData.startsAt) : null,

      expiresAt: formData.expiresAt ? new Date(formData.expiresAt) : null,
    };

    const result = deal ? await updateDeal(deal.id, payload) : await createDeal(payload);

    setLoading(false);

    if (!result.success) {
      toast.error('Something Went Wrong');
      return;
    }

    toast.success(deal ? 'Deal updated successfully.' : 'Deal created successfully.');

    if (!deal) {
      setFormData({
        title: '',
        slug: '',
        description: '',
        image: '',
        originalPrice: '',
        offerPrice: '',
        totalSpots: '10',
        businessId: '',
        status: 'DRAFT',
        startsAt: '',
        expiresAt: '',
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Basic Information */}

      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-[#111111]">Deal Information</h2>

        <p className="mt-1 text-sm text-gray-500">
          Create a special offer that customers can discover through MaseruPlug.
        </p>

        <div className="mt-6 space-y-5">
          <div>
            <label className="text-sm font-medium">Deal Title</label>

            <Input
              name="title"
              value={formData.title}
              onChange={handleTitleChange}
              placeholder="French Braids Special"
              required
              className="mt-2"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Slug</label>

            <Input
              name="slug"
              value={formData.slug}
              onChange={handleChange}
              placeholder="french-braids-special"
              required
              className="mt-2"
            />

            <p className="mt-1 text-xs text-gray-500">This becomes the public URL for the deal.</p>
          </div>

          <div>
            <label className="text-sm font-medium">Description</label>

            <Textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe what customers receive..."
              rows={5}
              required
              className="mt-2"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Image URL</label>

            <Input
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="/french2.jpg"
              required
              className="mt-2"
            />
          </div>
        </div>
      </div>

      {/* Business */}

      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-[#111111]">Business</h2>

        <div className="mt-5">
          <label className="text-sm font-medium">Business</label>

          <select
            name="businessId"
            value={formData.businessId}
            onChange={handleChange}
            required
            className="mt-2 h-11 w-full rounded-lg border bg-white px-3 text-sm"
          >
            <option value="">Select a business</option>

            {businesses.map((business) => (
              <option key={business.id} value={business.id}>
                {business.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Pricing */}

      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-[#111111]">Pricing</h2>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <div>
            <label className="text-sm font-medium">Original Price</label>

            <Input
              name="originalPrice"
              type="number"
              min="0"
              step="0.01"
              value={formData.originalPrice}
              onChange={handleChange}
              placeholder="30"
              required
              className="mt-2"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Offer Price</label>

            <Input
              name="offerPrice"
              type="number"
              min="0"
              step="0.01"
              value={formData.offerPrice}
              onChange={handleChange}
              placeholder="0"
              required
              className="mt-2"
            />
          </div>
        </div>

        <p className="mt-3 text-xs text-gray-500">Set the offer price to 0 for a free promotion.</p>
      </div>

      {/* Availability */}

      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-[#111111]">Availability</h2>

        <div className="mt-5">
          <label className="text-sm font-medium">Total Available Spots</label>

          <Input
            name="totalSpots"
            type="number"
            min="1"
            value={formData.totalSpots}
            onChange={handleChange}
            required
            className="mt-2"
          />
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <div>
            <label className="text-sm font-medium">Start Date</label>

            <Input
              name="startsAt"
              type="datetime-local"
              value={formData.startsAt}
              onChange={handleChange}
              className="mt-2"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Expiry Date</label>

            <Input
              name="expiresAt"
              type="datetime-local"
              value={formData.expiresAt}
              onChange={handleChange}
              className="mt-2"
            />
          </div>
        </div>
      </div>

      {/* Status */}

      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold text-[#111111]">Publishing</h2>

        <div className="mt-5">
          <label className="text-sm font-medium">Status</label>

          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="mt-2 h-11 w-full rounded-lg border bg-white px-3 text-sm"
          >
            <option value="DRAFT">Draft</option>

            <option value="ACTIVE">Active</option>

            <option value="PAUSED">Paused</option>
          </select>
        </div>
      </div>

      {/* Submit */}

      <Button
        type="submit"
        disabled={loading}
        className="h-12 w-full rounded-xl bg-[#25D366] font-semibold text-white hover:bg-[#1ebe5d]"
      >
        {loading ? 'Saving Deal...' : deal ? 'Update Deal' : 'Create Deal'}
      </Button>
    </form>
  );
}
