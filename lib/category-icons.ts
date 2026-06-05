import type { ComponentType, SVGProps } from "react";
import {
  Scissors,
  Palette,
  Wrench,
  Hammer,
  Brush,
  Car,
  Utensils,
  Camera,
  Eye,
  Zap,
  Flame,
  ScissorsLineDashed,
  Shirt
} from "lucide-react";

export type CategoryIconComponent = ComponentType<SVGProps<SVGSVGElement>>;

export const categoryIconMap: Record<string, CategoryIconComponent> = {
  Scissors,
  Palette,
  Wrench,
  Hammer,
  Brush,
  Car,
  Utensils,
  Camera,
  Eye,
  Zap,
  Flame,
  ScissorsLineDashed,
  Shirt
};

export function getCategoryIcon(iconKey?: string) {
  if (!iconKey) return Palette;
  return categoryIconMap[iconKey] || Palette;
}