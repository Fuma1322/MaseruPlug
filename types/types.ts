export type CategoryProps = {
  name: string;
  slug: string;
  description?: string;
  icon?: string;
};

export type BusinessProps = {
  name: string;
  slug: string;
  description: string;
  location: string;

  phone: string;
  whatsapp: string;

  images: string[];

  categoryId: string;

  facebookUrl?: string;
  websiteUrl?: string;

  metaTitle?: string;
  metaDescription?: string;

  isFeatured?: boolean;
  status?: "PENDING" | "ACTIVE" | "INACTIVE";
};