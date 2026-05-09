"use server";

import { prisma } from "@/lib/db";
import { BusinessProps } from "@/types/types";
import { revalidatePath } from "next/cache";

/**
 * Create a new business
 */
export async function createBusiness(data: BusinessProps) {
  try {
    // Check if a business with the same slug already exists
    const existingBusiness = await prisma.business.findUnique({
      where: {
        slug: data.slug,
      },
    });

    if (existingBusiness) {
      return {
        data: null,
        status: 409,
        error: "Business already exists",
      };
    }

    // Create business
    const newBusiness = await prisma.business.create({
      data: {
        ...data,
        images: data.images || [],
        isFeatured: data.isFeatured ?? false,
        status: data.status ?? "PENDING",
      },
      include: {
        category: true,
      },
    });

    // Revalidate relevant pages
    revalidatePath("/dashboard/businesses");
    revalidatePath("/");
    revalidatePath(`/business/${newBusiness.slug}`);

    return {
      data: newBusiness,
      status: 201,
      error: null,
    };
  } catch (error) {
    console.error("Error creating business:", error);

    return {
      data: null,
      status: 500,
      error: "Business not created",
    };
  }
}

/**
 * Get all businesses
 */
export async function getBusinesses() {
  try {
    const businesses = await prisma.business.findMany({
      include: {
        category: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return {
      data: businesses,
      status: 200,
      error: null,
    };
  } catch (error) {
    console.error("Error fetching businesses:", error);

    return {
      data: null,
      status: 500,
      error: "Failed to fetch businesses",
    };
  }
}

/**
 * Get only featured businesses
 */
export async function getFeaturedBusinesses() {
  try {
    const businesses = await prisma.business.findMany({
      where: {
        isFeatured: true,
        status: "ACTIVE",
      },
      include: {
        category: true,
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 6,
    });

    return {
      data: businesses,
      status: 200,
      error: null,
    };
  } catch (error) {
    console.error("Error fetching featured businesses:", error);

    return {
      data: null,
      status: 500,
      error: "Failed to fetch featured businesses",
    };
  }
}

/**
 * Get a single business by slug
 */
export async function getBusinessBySlug(slug: string) {
  try {
    const business = await prisma.business.findUnique({
      where: {
        slug,
      },
      include: {
        category: true,
      },
    });

    return {
      data: business,
      status: 200,
      error: null,
    };
  } catch (error) {
    console.error("Error fetching business:", error);

    return {
      data: null,
      status: 500,
      error: "Failed to fetch business",
    };
  }
}

/**
 * Get a single business by ID
 */
export async function getBusinessById(id: string) {
  try {
    const business = await prisma.business.findUnique({
      where: {
        id,
      },
      include: {
        category: true,
      },
    });

    return {
      data: business,
      status: 200,
      error: null,
    };
  } catch (error) {
    console.error("Error fetching business by ID:", error);

    return {
      data: null,
      status: 500,
      error: "Failed to fetch business",
    };
  }
}

/**
 * Get active businesses by category slug
 */
export async function getBusinessesByCategory(categorySlug: string) {
  try {
    const businesses = await prisma.business.findMany({
      where: {
        status: "ACTIVE",
        category: {
          slug: categorySlug,
        },
      },
      include: {
        category: true,
      },
      orderBy: [
        {
          isFeatured: "desc",
        },
        {
          createdAt: "desc",
        },
      ],
    });

    return {
      data: businesses,
      status: 200,
      error: null,
    };
  } catch (error) {
    console.error("Error fetching businesses by category:", error);

    return {
      data: null,
      status: 500,
      error: "Failed to fetch businesses",
    };
  }
}

/**
 * Update a business
 */
export async function updateBusiness(
  id: string,
  data: BusinessProps
) {
  try {
    // Check if business exists
    const existingBusiness = await prisma.business.findUnique({
      where: {
        id,
      },
    });

    if (!existingBusiness) {
      return {
        data: null,
        status: 404,
        error: "Business not found",
      };
    }

    // Update business
    const updatedBusiness = await prisma.business.update({
      where: {
        id,
      },
      data: {
        ...data,
        images: data.images || [],
        isFeatured: data.isFeatured ?? false,
        status: data.status ?? "PENDING",
      },
      include: {
        category: true,
      },
    });

    // Revalidate pages
    revalidatePath("/dashboard/businesses");
    revalidatePath("/");
    revalidatePath(`/business/${updatedBusiness.slug}`);

    return {
      data: updatedBusiness,
      status: 200,
      error: null,
    };
  } catch (error) {
    console.error("Error updating business:", error);

    return {
      data: null,
      status: 500,
      error: "Business not updated",
    };
  }
}

/**
 * Delete a business
 */
export async function deleteBusiness(id: string) {
  try {
    const existingBusiness = await prisma.business.findUnique({
      where: {
        id,
      },
    });

    if (!existingBusiness) {
      return {
        ok: false,
        status: 404,
        error: "Business not found",
      };
    }

    await prisma.business.delete({
      where: {
        id,
      },
    });

    // Revalidate pages
    revalidatePath("/dashboard/businesses");
    revalidatePath("/");
    revalidatePath(`/business/${existingBusiness.slug}`);

    return {
      ok: true,
      status: 200,
      error: null,
    };
  } catch (error) {
    console.error("Error deleting business:", error);

    return {
      ok: false,
      status: 500,
      error: "Business not deleted",
    };
  }
}