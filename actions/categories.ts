"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { CategoryProps } from "@/types/types";
import generateSlug from "@/utils/generateSlug";

/**
 * CREATE CATEGORY
 */
export async function createCategory(data: CategoryProps) {
  try {
    const slug = generateSlug(data.name);

    const category = await prisma.category.create({
      data: {
        name: data.name,
        slug,
        description: data.description,
        imageUrl: data.imageUrl,
        icon: data.icon,
      },
    });

    revalidatePath("/dashboard/categories");
    revalidatePath("/");

    return { success: true, data: category };
  } catch (error) {
    console.error("CREATE_CATEGORY_ERROR:", error);
    return { success: false, error: "Failed to create category" };
  }
}

/**
 * GET ALL CATEGORIES
 */
export async function getCategories() {
  try {
    const categories = await prisma.category.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        _count: {
          select: { businesses: true },
        },
      },
    });

    return categories;
  } catch (error) {
    console.error("GET_CATEGORIES_ERROR:", error);
    return [];
  }
}

/**
 * GET CATEGORY BY SLUG
 */
export async function getCategoryBySlug(slug: string) {
  try {
    const category = await prisma.category.findUnique({
      where: { slug },
      include: {
        businesses: {
          where: {
            status: "ACTIVE",
          },
        },
      },
    });

    return category;
  } catch (error) {
    console.error("GET_CATEGORY_BY_SLUG_ERROR:", error);
    return null;
  }
}

/**
 * UPDATE CATEGORY
 */
export async function updateCategory(id: string, data: Partial<CategoryProps>) {
  try {
    const updated = await prisma.category.update({
      where: { id },
      data: {
        name: data.name,
        description: data.description,
        imageUrl: data.imageUrl,
        icon: data.icon,
        slug: data.name ? generateSlug(data.name) : undefined,
      },
    });

    revalidatePath("/dashboard/categories");
    revalidatePath("/");

    return { success: true, data: updated };
  } catch (error) {
    console.error("UPDATE_CATEGORY_ERROR:", error);
    return { success: false, error: "Failed to update category" };
  }
}

/**
 * DELETE CATEGORY
 */
export async function deleteCategory(id: string) {
  try {
    await prisma.category.delete({
      where: { id },
    });

    revalidatePath("/dashboard/categories");
    revalidatePath("/");

    return { success: true };
  } catch (error) {
    console.error("DELETE_CATEGORY_ERROR:", error);
    return { success: false, error: "Failed to delete category" };
  }
}