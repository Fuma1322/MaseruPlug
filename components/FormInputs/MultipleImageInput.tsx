// components/FormInputs/MultipleImageInput.tsx

"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import { XCircle } from "lucide-react";
import Image from "next/image";
import toast from "react-hot-toast";

type MultipleImageInputProps = {
  label: string;

  // Match the props used in BusinessForm.tsx
  images: string[];
  setImages: React.Dispatch<React.SetStateAction<string[]>>;

  className?: string;
  endpoint: any;
};

export default function MultipleImageInput({
  label,
  images,
  setImages,
  className = "col-span-full",
  endpoint,
}: MultipleImageInputProps) {
  function handleImageRemove(imageIndex: number) {
    const updatedImages = images.filter(
      (_, index) => index !== imageIndex
    );
    setImages(updatedImages);
  }

  return (
    <div className={className}>
      {/* Label */}
      <div className="flex items-center justify-between mb-4">
        <label className="block text-sm font-medium leading-6 text-gray-900 dark:text-gray-400">
          {label}
        </label>
      </div>

      {/* Preview Images */}
      {images.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-6">
          {images.map((imageUrl, index) => (
            <div key={index} className="relative">
              <button
                type="button"
                onClick={() => handleImageRemove(index)}
                className="absolute -top-2 -right-2 z-10 rounded-full bg-white shadow-md text-red-500 hover:text-red-600"
              >
                <XCircle className="w-6 h-6" />
              </button>

              <Image
                src={imageUrl}
                alt={`Business image ${index + 1}`}
                width={1000}
                height={667}
                className="w-full h-32 rounded-lg object-cover border"
              />
            </div>
          ))}
        </div>
      )}

      {/* Upload Zone */}
      {images.length < 12 && (
        <UploadDropzone
          endpoint={endpoint}
          onClientUploadComplete={(res) => {
            const urls = res.map((item) => item.url);

            // Append new images to existing ones
            setImages((prev) => [...prev, ...urls].slice(0, 12));

            toast.success("Images uploaded successfully");
          }}
          onUploadError={(error: Error) => {
            toast.error("Image upload failed. Try again.");
            console.error(error);
          }}
        />
      )}

      {/* Counter */}
      <p className="mt-2 text-sm text-muted-foreground">
        {images.length}/12 images uploaded
      </p>
    </div>
  );
}