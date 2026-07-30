'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { BusinessStatus, Category } from '@prisma/client';

import generateSlug from '@/utils/generateSlug';
import { createBusiness } from '@/actions/business';

import TextInput from '@/components/FormInputs/TextInput';
import SubmitButton from '@/components/FormInputs/SubmitButton';
import { TextAreaInput } from '@/components/FormInputs/TextAreaInput';

import ToggleInput from '../FormInputs/ToggleInput';
import SelectInput from '../FormInputs/SelectInput';
import MultipleImageInput from '../FormInputs/MultipleImageInput';

export type BusinessProps = {
  name: string;
  slug: string;
  description: string;
  location: string;
  phone: string;
  whatsapp: string;
  images: string[];
  categoryId: string;
  facebookUrl?: string;
  websiteUrl?: string;
  metaTitle?: string;
  metaDescription?: string;
  isFeatured?: boolean;
  status?: BusinessStatus;
};

export default function BusinessForm({ categories }: { categories: Category[] }) {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [isFeatured, setIsFeatured] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BusinessProps>({
    defaultValues: {
      description: '',
    },
  });

  const categoryOptions = categories.map((category) => ({
    label: category.name,
    value: category.id,
  }));

  const statusOptions = [
    { label: 'Pending', value: 'PENDING' },
    { label: 'Active', value: 'ACTIVE' },
    { label: 'Inactive', value: 'INACTIVE' },
  ];

  async function onSubmit(data: BusinessProps) {
    try {
      setIsLoading(true);
      data.slug = generateSlug(data.name);
      data.images = images;
      data.isFeatured = isFeatured;

      const response = await createBusiness(data);

      console.log('RESPONSE:', response);

      if (response?.status === 400) {
        toast.error('Please fix form errors');
        console.log(response.error);
        return;
      }

      toast.success('Business created successfully');

      reset();
      router.push('/dashboard');
      router.refresh();
    } catch {
      toast.error('Something went wrong');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        {/* BUSINESS INFORMATION */}

        <section>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
            Business Information
          </h3>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <TextInput
              label="Business Name"
              name="name"
              register={register}
              errors={errors}
              placeholder="e.g. Nails by Lelo"
              isRequired
            />

            <SelectInput
              label="Category"
              name="categoryId"
              register={register}
              errors={errors}
              options={categoryOptions}
            />
          </div>

          <div className="mt-6">
            <TextAreaInput<BusinessProps>
              label="Description"
              name="description"
              register={register}
              errors={errors}
              placeholder="Describe the business"
              isRequired
            />
          </div>
        </section>

        {/* CONTACT */}

        <section>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
            Contact Information
          </h3>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <TextInput
              label="Location"
              name="location"
              register={register}
              errors={errors}
              placeholder="Maseru West"
              isRequired
            />

            <TextInput
              label="Phone"
              name="phone"
              register={register}
              errors={errors}
              placeholder="+266 5800 0000"
              isRequired
            />

            <TextInput
              label="WhatsApp"
              name="whatsapp"
              register={register}
              errors={errors}
              placeholder="+266 5800 0000"
            />

            <TextInput
              label="Facebook URL"
              name="facebookUrl"
              register={register}
              errors={errors}
              placeholder="https://facebook.com/..."
            />

            <TextInput
              label="Website URL"
              name="websiteUrl"
              register={register}
              errors={errors}
              placeholder="https://example.com"
            />
          </div>
        </section>

        {/* GALLERY */}

        <section>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
            Business Gallery
          </h3>

          <MultipleImageInput
            label="Upload Business Images (up to 12)"
            images={images}
            setImages={setImages}
            endpoint="businessImages"
          />
        </section>

        {/* SEO */}

        <section>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
            SEO & Visibility
          </h3>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <TextInput
              label="Meta Title"
              name="metaTitle"
              register={register}
              errors={errors}
              placeholder="SEO title"
            />

            <SelectInput
              label="Status"
              name="status"
              register={register}
              errors={errors}
              options={statusOptions}
            />
          </div>

          <div className="mt-6">
            <TextAreaInput
              label="Meta Description"
              name="metaDescription"
              register={register}
              errors={errors}
              placeholder="SEO description"
            />
          </div>

          <div className="mt-6">
            <ToggleInput label="Featured Business" value={isFeatured} setValue={setIsFeatured} />
          </div>
        </section>

        {/* ACTION */}

        <div className="flex justify-end border-t pt-6">
          <SubmitButton
            title="Create Business"
            isLoading={isLoading}
            LoadingTitle="Creating business..."
          />
        </div>
      </form>
    </div>
  );
}
