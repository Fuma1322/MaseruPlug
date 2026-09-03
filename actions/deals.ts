'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/lib/db';
import { DealStatus } from '@prisma/client';

type DealData = {
  title: string;
  slug: string;
  description: string;
  image: string;

  originalPrice: number;
  offerPrice: number;

  totalSpots: number;

  businessId: string;

  status?: DealStatus;

  startsAt?: Date | null;
  expiresAt?: Date | null;
};

type ClaimDealData = {
  dealId: string;
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
};

function generateOfferCode() {
  return 'MP-' + Math.random().toString(36).substring(2, 8).toUpperCase();
}

/**
 * Create a new deal
 */
export async function createDeal(data: DealData) {
  try {
    const existingDeal = await prisma.deal.findUnique({
      where: {
        slug: data.slug,
      },
    });

    if (existingDeal) {
      return {
        success: false,
        error: 'A deal with this slug already exists.',
      };
    }

    const deal = await prisma.deal.create({
      data: {
        title: data.title,
        slug: data.slug,
        description: data.description,
        image: data.image,

        originalPrice: data.originalPrice,
        offerPrice: data.offerPrice,

        totalSpots: data.totalSpots,
        claimedSpots: 0,

        status: data.status ?? 'DRAFT',

        startsAt: data.startsAt ?? null,
        expiresAt: data.expiresAt ?? null,

        businessId: data.businessId,
      },
    });

    revalidatePath('/dashboard/deals');
    revalidatePath('/deals');
    revalidatePath('/');

    return {
      success: true,
      deal,
    };
  } catch (error) {
    console.error('CREATE DEAL ERROR:', error);

    return {
      success: false,
      error: 'Failed to create deal.',
    };
  }
}

/**
 * Get all deals
 */
export async function getDeals() {
  try {
    return await prisma.deal.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        business: {
          select: {
            id: true,
            name: true,
            slug: true,
          },
        },
      },
    });
  } catch (error) {
    console.error('GET DEALS ERROR:', error);

    return [];
  }
}

/**
 * Get active public deals
 */
export async function getActiveDeals() {
  try {
    const now = new Date();

    return await prisma.deal.findMany({
      where: {
        status: 'ACTIVE',

        OR: [
          {
            startsAt: null,
          },
          {
            startsAt: {
              lte: now,
            },
          },
        ],

        AND: [
          {
            OR: [
              {
                expiresAt: null,
              },
              {
                expiresAt: {
                  gte: now,
                },
              },
            ],
          },
        ],
      },

      orderBy: {
        createdAt: 'desc',
      },

      include: {
        business: {
          select: {
            id: true,
            name: true,
            slug: true,
          },
        },
      },
    });
  } catch (error) {
    console.error('GET ACTIVE DEALS ERROR:', error);

    return [];
  }
}

/**
 * Get a single deal by slug
 */
export async function getDealBySlug(slug: string) {
  try {
    return await prisma.deal.findUnique({
      where: {
        slug,
      },
      include: {
        business: {
          select: {
            id: true,
            name: true,
            slug: true,
            phone: true,
            whatsapp: true,
          },
        },
      },
    });
  } catch (error) {
    console.error('GET DEAL ERROR:', error);

    return null;
  }
}

export async function getDealById(id: string) {
  try {
    return await prisma.deal.findUnique({
      where: {
        id,
      },
      include: {
        business: {
          select: {
            id: true,
            name: true,
            slug: true,
          },
        },
      },
    });
  } catch (error) {
    console.error('GET DEAL BY ID ERROR:', error);

    return null;
  }
}

/**
 * Get deals belonging to a business
 */
export async function getDealsByBusiness(businessId: string) {
  try {
    return await prisma.deal.findMany({
      where: {
        businessId,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  } catch (error) {
    console.error('GET BUSINESS DEALS ERROR:', error);

    return [];
  }
}

/**
 * Get all deal claims
 */
export async function getAllDealClaims() {
  try {
    return await prisma.dealClaim.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        deal: {
          select: {
            id: true,
            title: true,
            slug: true,
            business: {
              select: {
                id: true,
                name: true,
                slug: true,
              },
            },
          },
        },
      },
    });
  } catch (error) {
    console.error('GET DEAL CLAIMS ERROR:', error);

    return [];
  }
}

/**
 * Update a deal
 */
export async function updateDeal(id: string, data: Partial<DealData>) {
  try {
    const deal = await prisma.deal.update({
      where: {
        id,
      },
      data,
    });

    revalidatePath('/dashboard/deals');
    revalidatePath('/deals');
    revalidatePath(`/deals/${deal.slug}`);
    revalidatePath('/');

    return {
      success: true,
      deal,
    };
  } catch (error) {
    console.error('UPDATE DEAL ERROR:', error);

    return {
      success: false,
      error: 'Failed to update deal.',
    };
  }
}

/**
 * Delete a deal
 */
export async function deleteDeal(id: string) {
  try {
    await prisma.$transaction(async (tx) => {
      // Delete all claims belonging to the deal first
      await tx.dealClaim.deleteMany({
        where: {
          dealId: id,
        },
      });

      // Now delete the deal itself
      await tx.deal.delete({
        where: {
          id,
        },
      });
    });

    revalidatePath('/dashboard/deals');
    revalidatePath('/deals');
    revalidatePath('/');

    return {
      success: true,
    };
  } catch (error) {
    console.error('DELETE DEAL ERROR:', error);

    return {
      success: false,
      error: 'Failed to delete deal.',
    };
  }
}
/**
 * Claim a deal
 */
export async function claimDeal(data: ClaimDealData) {
  try {
    const { dealId, customerName, customerPhone, customerEmail } = data;

    const deal = await prisma.deal.findUnique({
      where: {
        id: dealId,
      },
    });

    if (!deal) {
      return {
        success: false,
        error: 'Deal not found.',
      };
    }

    // Check deal status
    if (deal.status !== 'ACTIVE') {
      return {
        success: false,
        error: 'This deal is no longer available.',
      };
    }

    // Check start date
    const now = new Date();

    if (deal.startsAt && deal.startsAt > now) {
      return {
        success: false,
        error: 'This deal is not available yet.',
      };
    }

    // Check expiry
    if (deal.expiresAt && deal.expiresAt < now) {
      return {
        success: false,
        error: 'This deal has expired.',
      };
    }

    // Check remaining spots
    if (deal.claimedSpots >= deal.totalSpots) {
      return {
        success: false,
        error: 'Sorry, this deal has already been fully claimed.',
      };
    }

    // Generate offer code
    const offerCode = 'MP-' + Math.random().toString(36).substring(2, 8).toUpperCase();

    // Create claim
    const claim = await prisma.dealClaim.create({
      data: {
        dealId,
        customerName,
        customerPhone,
        customerEmail: customerEmail || null,
        offerCode,
      },
    });

    // Increment claimed spots
    await prisma.deal.update({
      where: {
        id: dealId,
      },
      data: {
        claimedSpots: {
          increment: 1,
        },
      },
    });

    revalidatePath('/deals');
    revalidatePath(`/deals/${deal.slug}`);
    revalidatePath('/dashboard/deals');

    return {
      success: true,
      claim,
    };
  } catch (error) {
    console.error('CLAIM DEAL ERROR:', error);

    return {
      success: false,
      error: 'Something went wrong while claiming the deal.',
    };
  }
}

/**
 * Redeem a deal claim
 */
export async function redeemClaim(claimId: string) {
  try {
    // Only update the claim if it has NOT already been redeemed.
    // This prevents the same claim from being redeemed twice.
    const result = await prisma.dealClaim.updateMany({
      where: {
        id: claimId,
        redeemed: false,
      },
      data: {
        redeemed: true,
        redeemedAt: new Date(),
      },
    });

    // If nothing was updated, the claim either doesn't exist
    // or has already been redeemed.
    if (result.count === 0) {
      const existingClaim = await prisma.dealClaim.findUnique({
        where: {
          id: claimId,
        },
      });

      if (!existingClaim) {
        return {
          success: false,
          error: 'Claim not found.',
        };
      }

      if (existingClaim.redeemed) {
        return {
          success: false,
          error: 'This claim has already been redeemed.',
        };
      }

      return {
        success: false,
        error: 'Unable to redeem this claim.',
      };
    }

    const claim = await prisma.dealClaim.findUnique({
      where: {
        id: claimId,
      },
      include: {
        deal: {
          select: {
            slug: true,
          },
        },
      },
    });

    revalidatePath('/dashboard/deals/claims');
    revalidatePath('/dashboard/deals');
    revalidatePath('/deals');
    revalidatePath(`/deals/${claim?.deal.slug}`);

    return {
      success: true,
      claim,
    };
  } catch (error) {
    console.error('REDEEM CLAIM ERROR:', error);

    return {
      success: false,
      error: 'Failed to redeem claim.',
    };
  }
}
