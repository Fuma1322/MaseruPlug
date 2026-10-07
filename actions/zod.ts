import { z } from "zod";

export const CategorySchema = z.object({
  name: z.string().min(1, "Category name is required"),
  slug: z.string().optional(),
  description: z.string().optional(),
  icon: z.string().optional(),
});

export type CategoryInput = z.infer<typeof CategorySchema>;

export const BusinessSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),

  location: z.string().min(1, "Location is required"),
  phone: z.string().min(1, "Phone is required"),
  whatsapp: z.string().min(1, "WhatsApp is required"),

  categoryId: z.string().min(1, "Category is required"),

  images: z.array(z.string().url()).optional(),

  facebookUrl: z.string().url().optional().or(z.literal("")),
  websiteUrl: z.string().url().optional().or(z.literal("")),

  metaTitle: z.string().optional().or(z.literal("")),
  metaDescription: z.string().optional().or(z.literal("")),

  isFeatured: z.boolean().optional(),
  status: z.enum(["PENDING", "ACTIVE", "INACTIVE"]).optional(),

  slug: z.string().optional(),
});

export type BusinessInput = z.infer<typeof BusinessSchema>;