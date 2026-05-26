"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";

export default function BackButton() {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.back()}
      className="mb-1 inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-[#111111] shadow-lg transition hover:border-[#25D366] hover:text-[#25D366]"
    >
      <ArrowLeft className="h-3 w-3 text-[#25D366]" />
      Back
    </Button>
  );
}