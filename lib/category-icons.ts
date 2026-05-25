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
} from "lucide-react";

export const categoryIconMap: Record<string, React.ComponentType<any>> = {
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
};

export function getCategoryIcon(iconKey?: string) {
  if (!iconKey) return Palette;
  return categoryIconMap[iconKey] || Palette;
}