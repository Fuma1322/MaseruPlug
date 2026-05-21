"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { BusinessStatus } from "@prisma/client";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { createBusiness } from "@/actions/business";
import generateSlug from "@/utils/generateSlug";

import TextInput from "@/components/FormInputs/TextInput";
import { TextAreaInput } from "@/components/FormInputs/TextAreaInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";

import SelectInput from "../FormInputs/SelectInput";
import MultipleImageInput from "../FormInputs/MultipleImageInput";
import ToggleInput from "../FormInputs/ToggleInput";

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

export default function BusinessForm({
  title,
  categories,
}: {
  title: string;
  categories: Category[];
}) {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [isFeatured, setIsFeatured] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BusinessProps>();

  const categoryOptions = categories.map((category) => ({
    label: category.name,
    value: category.id,
  }));

  const statusOptions = [
    { label: "Pending", value: "PENDING" },
    { label: "Active", value: "ACTIVE" },
    { label: "Inactive", value: "INACTIVE" },
  ];

  async function onSubmit(data: BusinessProps) {
    try {
      setIsLoading(true);

      data.slug = generateSlug(data.name);
      data.images = images;
      data.isFeatured = isFeatured;

      const response = await createBusiness(data);

      if (response?.error) {
        toast.error(
          typeof response.error === "string"
            ? response.error
            : "Something went wrong"
        );
        return;
      }

      toast.success("Business created successfully");

      reset();
      setImages([]);
      setIsFeatured(false);

      router.push("/dashboard/businesses");
      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full max-w-5xl mx-auto m-3 rounded-xl border border-gray-200 bg-white shadow-sm">
      {/* Header */}
      <div className="border-b px-6 py-4">
        <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 px-6 py-6">
        
        {/* Basic Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            isRequired
          />
        </div>

        {/* Description */}
        <TextAreaInput
          label="Description"
          name="description"
          register={register}
          errors={errors}
          placeholder="Describe the business"
          isRequired
        />

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TextInput
            label="Location"
            name="location"
            register={register}
            errors={errors}
            placeholder="e.g. Maseru West"
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

        {/* Images */}
        <MultipleImageInput
          label="Business Images (up to 12)"
          images={images}
          setImages={setImages}
          endpoint="businessImages"
        />

        {/* SEO + Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

        <TextAreaInput
          label="Meta Description"
          name="metaDescription"
          register={register}
          errors={errors}
          placeholder="SEO description"
        />

        {/* Featured Toggle */}
        <ToggleInput
          label="Featured Business"
          value={isFeatured}
          setValue={setIsFeatured}
        />

        {/* Actions */}
        <div className="flex justify-end pt-4">
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
