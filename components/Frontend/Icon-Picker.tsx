"use client";

import { cn } from "@/lib/utils";
import { categoryIcons } from "@/lib/category-icons";

type IconPickerProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function IconPicker({ value, onChange }: IconPickerProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
      {categoryIcons.map((item) => {
        const Icon = item.icon;
        const active = value === item.key;

        return (
          <button
            key={item.key}
            type="button"
            onClick={() => onChange(item.key)}
            className={cn(
              "flex flex-col items-center justify-center gap-2 rounded-xl border p-3 sm:p-4 transition text-center break-words",
              active
                ? "border-[#25D366] bg-green-50"
                : "border-gray-200 hover:border-gray-400"
            )}
          >
            <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-[#25D366]" />

            <span className="text-[10px] sm:text-xs text-gray-600 leading-tight text-center break-words">
              {item.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}