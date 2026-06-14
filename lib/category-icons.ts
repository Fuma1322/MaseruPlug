import type { ComponentType, SVGProps } from "react";
import {
  Palette,
  Wrench,
  Hammer,
  Brush,
  Car,
  Utensils,
  Camera,
  Zap,
  Flame,
  ScissorsLineDashed,
  Shirt,
  HardHat,
  Paintbrush
} from "lucide-react";

export type CategoryIconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export const categoryIconMap: Record<string, CategoryIconComponent> = {
  Palette,
  Wrench,
  Hammer,
  Brush,
  Car,
  Utensils,
  Camera,
  Zap,
  Paintbrush,
  Flame,
  ScissorsLineDashed,
  Shirt,
  HardHat
};

export function getCategoryIcon(iconKey?: string) {
  if (!iconKey) return Palette;
  return categoryIconMap[iconKey] || Palette;
}