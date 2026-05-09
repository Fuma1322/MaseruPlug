"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Business, BusinessStatus, Category } from "@prisma/client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import { X } from "lucide-react";

import { createBusiness, updateBusiness } from "@/actions/business";
import generateSlug from "@/utils/generateSlug";

import TextInput from "@/components/FormInputs/TextInput";
import { TextAreaInput } from "@/components/FormInputs/TextAreaInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";

import { Button } from "@/components/ui/button";
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
  initialData,
}: {
  title: string;
  categories: Category[];
  initialData?: Business;
}) {
  const router = useRouter();
  const editingId = initialData?.id || "";

  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState<string[]>(initialData?.images || []);
  const [isFeatured, setIsFeatured] = useState(initialData?.isFeatured || false);

  const categoryOptions = categories.map((category) => ({
    label: category.name,
    value: category.id,
  }));

  const statusOptions = [
    { label: "Pending", value: "PENDING" },
    { label: "Active", value: "ACTIVE" },
    { label: "Inactive", value: "INACTIVE" },
  ];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BusinessProps>({
    defaultValues: {
      name: initialData?.name || "",
      description: initialData?.description || "",
      location: initialData?.location || "",
      phone: initialData?.phone || "",
      whatsapp: initialData?.whatsapp || "",
      categoryId: initialData?.categoryId || "",
      facebookUrl: initialData?.facebookUrl || "",
      websiteUrl: initialData?.websiteUrl || "",
      metaTitle: initialData?.metaTitle || "",
      metaDescription: initialData?.metaDescription || "",
      status: initialData?.status || "PENDING",
    },
  });

   async function onSubmit(data: BusinessProps) {
    try {
      setIsLoading(true);

      data.slug = generateSlug(data.name);
      data.images = images;
      data.isFeatured = isFeatured;

      const response = editingId
        ? await updateBusiness(editingId, data)
        : await createBusiness(data);

      if (response?.error) {
        toast.error(typeof response.error === "string" ? response.error : "Something went wrong");
        return;
      }

      toast.success(editingId ? "Business updated successfully" : "Business created successfully");

      reset();
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
      <div className="border-b px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-2xl font-bold tracking-tight">{title}</h1>

          <Button asChild type="button" variant="outline" size="icon">
            <Link href="/dashboard/businesses">
              <X className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TextInput label="Business Name" name="name" register={register} errors={errors} placeholder="e.g. Nails by Lelo" />
          <SelectInput label="Category" name="categoryId" register={register} errors={errors} options={categoryOptions} />
        </div>

        <TextAreaInput label="Description" name="description" register={register} errors={errors} placeholder="Describe the business" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TextInput label="Location" name="location" register={register} errors={errors} placeholder="e.g. Maseru West" />
          <TextInput label="Phone" name="phone" register={register} errors={errors} placeholder="+266 5800 0000" />
          <TextInput label="WhatsApp" name="whatsapp" register={register} errors={errors} placeholder="+266 5800 0000" />
          <TextInput label="Facebook URL" name="facebookUrl" register={register} errors={errors} placeholder="https://facebook.com/..." />
          <TextInput label="Website URL" name="websiteUrl" register={register} errors={errors} placeholder="https://example.com" />
        </div>

        <MultipleImageInput
          label="Business Images (up to 12)"
          images={images}
          setImages={setImages}
          endpoint="businessImages"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TextInput label="Meta Title" name="metaTitle" register={register} errors={errors} placeholder="SEO title" />
          <SelectInput label="Status" name="status" register={register} errors={errors} options={statusOptions} />
        </div>

        <TextAreaInput
          label="Meta Description"
          name="metaDescription"
          register={register}
          errors={errors}
          placeholder="SEO description"
        />

        <ToggleInput
          label="Featured Business"
          value={isFeatured}
          setValue={setIsFeatured}
        />

        <div className="flex items-center justify-between gap-4 pt-4">
          <Button asChild type="button" variant="outline">
            <Link href="/dashboard/businesses">Cancel</Link>
          </Button>

          <SubmitButton
            title={editingId ? "Update Business" : "Create Business"}
            isLoading={isLoading}
            LoadingTitle={editingId ? "Updating business..." : "Creating business..."}
          />
        </div>
      </form>
    </div>
  );
}