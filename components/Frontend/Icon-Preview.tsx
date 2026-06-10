"use client"

import { categoryIcons } from "@/lib/category-iconss";

export default function IconPreview({ value }: { value: string }) {
  const found = categoryIcons.find((i) => i.key === value);

  if (!found) return null;

  const Icon = found.icon;

  return (
    <div className="flex items-center gap-3 mt-3 p-3 rounded-lg border bg-gray-50">
      <Icon className="h-5 w-5 text-[#25D366]" />
      <span className="text-sm font-medium">{found.label}</span>
    </div>
  );
}