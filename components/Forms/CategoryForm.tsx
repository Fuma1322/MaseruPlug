"use client";

import Link from "next/link";
import { X } from "lucide-react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import IconPicker from "../Frontend/Icon-Picker";
import IconPreview from "../Frontend/Icon-Preview";

import generateSlug from "@/utils/generateSlug";
import { createCategory } from "@/actions/categories";

import TextInput from "@/components/FormInputs/TextInput";
import { TextAreaInput } from "../FormInputs/TextAreaInput";
import SubmitButton from "@/components/FormInputs/SubmitButton";

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
  const [selectedIcon, setSelectedIcon] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm<CategoryProps>();

  useEffect(() => {
  setValue("icon", selectedIcon);
}, [selectedIcon, setValue]);

  async function onSubmit(data: CategoryProps) {
    try {
      setIsLoading(true);
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

            <Link href="/dashboard">
              <X className="h-4 w-4" />
            </Link>
        </div>
      </div>

      {/* Form */}
      <form
        onSubmit={(e) => {
        console.log("FORM SUBMITTED");
        handleSubmit(onSubmit)(e);
    }}
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

          <div className="col-span-full space-y-2">
            <label className="text-sm font-medium">Choose Icon</label>

            <IconPicker
              value={selectedIcon}
              onChange={setSelectedIcon}
            />

            <IconPreview value={selectedIcon} />
          </div>
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
          <Button type="button" variant="outline" onClick={() => router.push('/dashboard')}>
            Cancel
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
