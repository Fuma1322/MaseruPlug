import { z } from "zod";

export const CategorySchema = z.object({
  name: z.string().min(1, "Category name is required"),
  slug: z.string().optional(),
  description: z.string().optional(),
  icon: z.string().optional(),
});

export type CategoryInput = z.infer<typeof CategorySchema>;