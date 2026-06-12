import prisma from "@/lib/db";
import type { MetadataRoute } from "next";

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
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://mplug.com.ls/categories",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url:
      "https://mplug.com.ls/business",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    {
      url: "https://mplug.com.ls/deals",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    },
    {
      url: "https://mplug.com.ls/contact",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.3,
    },

    ...businessUrls,
    ...categoryUrls,
  ];
}