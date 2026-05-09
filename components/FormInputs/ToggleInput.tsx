"use client";

import { Toggle } from "@/components/ui/toggle";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface ToggleInputProps {
  label: string;
  value: boolean;
  setValue: (value: boolean) => void;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
}

export default function ToggleInput({
  label,
  value,
  setValue,
  description,
  icon,
  className,
}: ToggleInputProps) {
  return (
    <div className={cn("space-y-3", className)}>
      {/* Label */}
      <div>
        <label className="text-sm font-medium text-gray-900">{label}</label>

        {description && (
          <p className="mt-1 text-sm text-muted-foreground">
            {description}
          </p>
        )}
      </div>

      {/* Toggle */}
      <Toggle
        pressed={value}
        onPressedChange={setValue}
        variant="outline"
        size="default"
        className={cn(
          "w-full justify-start gap-2 border-gray-300",
          value &&
            "border-[#25D366] bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/10"
        )}
      >
        {icon || (
          <Star className="h-4 w-4 group-data-[state=on]/toggle:fill-current" />
        )}

        <span>{value ? "Yes" : "No"}</span>
      </Toggle>
    </div>
  );
}