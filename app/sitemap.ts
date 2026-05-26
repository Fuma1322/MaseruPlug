import type { MetadataRoute } from "next";
import prisma from "@/lib/db";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const businesses = await prisma.business.findMany({
    select: {
      slug: true,
      updatedAt: true,
    },
  });

  const categories = await prisma.category.findMany({
    select: {
      slug: true,
      updatedAt: true,
    },
  });

  const businessUrls = businesses.map((business) => ({
    url: `https://maseru-plug.vercel.app/business/${business.slug}`,
    lastModified: business.updatedAt,
  }));

  const categoryUrls = categories.map((category) => ({
    url: `https://maseru-plug.vercel.app/categories/${category.slug}`,
    lastModified: category.updatedAt,
  }));

  return [
    {
      url: "https://maseru-plug.vercel.app",
      lastModified: new Date(),
    },

    {
      url: "https://maseru-plug.vercel.app/categories",
      lastModified: new Date(),
    },

    {
      url: "https://maseru-plug.vercel.app/contact",
      lastModified: new Date(),
    },

    ...businessUrls,
    ...categoryUrls,
  ];
}