"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import { X } from "lucide-react";

import { createCategory } from "@/actions/categories";
import generateSlug from "@/utils/generateSlug";

import TextInput from "@/components/FormInputs/TextInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";
import { TextAreaInput } from "../FormInputs/TextAreaInput";

import { Button } from "@/components/ui/button";

export type CategoryProps = {
  name: string;
  slug: string;
  description?: string;
  icon?: string;
};

export default function CategoryForm({
  title,
}: {
  title: string;
}) {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CategoryProps>();

  async function onSubmit(data: CategoryProps) {
    try {
      setIsLoading(true);

      console.log("SUBMITTED DATA:", data);

      data.slug = generateSlug(data.name);

      const response = await createCategory(data);

      if (response?.error) {
        toast.error(
          typeof response.error === "string"
            ? response.error
            : "Something went wrong"
        );
        return;
      }

      toast.success("Category created successfully");

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
    <div className="w-full max-w-3xl mx-auto m-3 rounded-xl border border-gray-200 bg-white shadow-md">
      {/* Header */}
      <div className="border-b px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-2xl font-bold tracking-tight">
            {title}
          </h1>

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
            isRequired
          />

          <TextInput
            label="Icon"
            name="icon"
            register={register}
            errors={errors}
            placeholder="e.g. Sparkles"
            isRequired={false}
          />
        </div>

        <TextAreaInput
          label="Description"
          name="description"
          register={register}
          errors={errors}
          placeholder="Brief description of this category"
          isRequired={false}
        />

        {/* Actions */}
        <div className="flex items-center justify-between gap-4 pt-4">
          <Button asChild type="button" variant="outline">
            <Link href="/dashboard/categories">
              Cancel
            </Link>
          </Button>

          <SubmitButton
            title="Create Category"
            isLoading={isLoading}
            LoadingTitle="Creating category..."
          />
        </div>
      </form>
    </div>
  );
}