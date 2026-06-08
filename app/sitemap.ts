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
    url: `https://mplug.com.ls/business/${business.slug}`,
    lastModified: business.updatedAt,
  }));

  const categoryUrls = categories.map((category) => ({
    url: `https://mplug.com.ls/categories/${category.slug}`,
    lastModified: category.updatedAt,
  }));

  return [
    {
      url: "https://mplug.com.ls",
      lastModified: new Date(),
    },
    {
      url:
      "https://mplug.com.ls/business",
      lastModified: new Date(),
    },

    {
      url: "https://mplug.com.ls/categories",
      lastModified: new Date(),
    },

    {
      url: "https://mplug.com.ls/contact",
      lastModified: new Date(),
    },

    ...businessUrls,
    ...categoryUrls,
  ];
}