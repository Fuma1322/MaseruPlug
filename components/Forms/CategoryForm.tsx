"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
// import { Category } from "@prisma/client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import { X } from "lucide-react";

import { createCategory, updateCategory } from "@/actions/categories";
import generateSlug from "@/utils/generateSlug";

import TextInput from "@/components/FormInputs/TextInput";
import ImageInput from "@/components/FormInputs/ImageInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";

import { Button } from "@/components/ui/button";
import { TextAreaInput } from "../FormInputs/TextAreaInput";

export type CategoryProps = {
  name: string;
  slug: string;
  description?: string;
  imageUrl?: string;
  icon?: string;
};

export default function CategoryForm({
  title,
//   initialData,
}: {
  title: string;
//   initialData?: Category;
}) {
  const router = useRouter();
//   const editingId = initialData?.id || "";

  const [isLoading, setIsLoading] = useState(false);
//   const [imageUrl, setImageUrl] = useState(initialData?.imageUrl || "");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CategoryProps>({
    defaultValues: {
    //   name: initialData?.name || "",
    //   description: initialData?.description || "",
    //   icon: initialData?.icon || "",
    },
  });

  async function onSubmit(data: CategoryProps) {
    try {
      setIsLoading(true);

      data.slug = generateSlug(data.name);
    //   data.imageUrl = imageUrl;

      let response;

    //   if (editingId) {
    //     response = await updateCategory(editingId, data);
    //   } else {
    //     response = await createCategory(data);
    //   }

    //   if (response?.error) {
    //     toast.error(
    //       typeof response.error === "string"
    //         ? response.error
    //         : "Something went wrong"
    //     );
    //     return;
    //   }

    //   toast.success(
    //     editingId
    //       ? "Category updated successfully"
    //       : "Category created successfully"
    //   );

      reset();
      router.push("/dashboard/categories");
      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full max-w-3xl mx-auto m-3 rounded-xl border border-gray-200 bg-white shadow-sm">
      {/* Header */}
      <div className="border-b px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-2xl font-bold tracking-tight">{title}</h1>

          <Button asChild type="button" variant="outline" size="icon">
            <Link href="/dashboard/categories">
              <X className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-8 px-6 py-6"
      >
        {/* Basic Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TextInput
            label="Category Name"
            name="name"
            register={register}
            errors={errors}
            placeholder="e.g. Nail Technicians"
          />

          <TextInput
            label="Icon"
            name="icon"
            register={register}
            errors={errors}
            placeholder="e.g. Sparkles"
          />
        </div>

        <TextAreaInput
          label="Description"
          name="description"
          register={register}
          errors={errors}
          placeholder="Brief description of this category"
        />

        {/* Image Upload */}
        {/* <ImageInput
          label="Category Image"
          imageUrl={imageUrl}
          setImageUrl={setImageUrl}
          endpoint="categoryImage"
        /> */}

        {/* Actions */}
        <div className="flex items-center justify-between gap-4 pt-4">
          <Button asChild type="button" variant="outline">
            <Link href="/dashboard/categories">Cancel</Link>
          </Button>

          {/* <SubmitButton
            title={editingId ? "Update Category" : "Create Category"}
            isLoading={isLoading}
            LoadingTitle={
              editingId
                ? "Updating category..."
                : "Creating category..."
            }
          /> */}
        </div>
      </form>
    </div>
  );
}