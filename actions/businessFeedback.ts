'use server';

import { prisma } from '@/lib/db';

export interface CreateBusinessFeedbackInput {
  businessName: string;

  listingDuration: string;
  satisfaction: number;
  profileRepresentation: string;

  customerDiscovery: string;
  customerDiscoveryDetails?: string;

  usefulness: string;

  wantsReviews: string;
  reviewPreference?: string;

  desiredFeatures?: string[];
  mostWantedFeature?: string;

  businessGoals?: string[];

  recommend: string;
  recommendationReason?: string;

  whatTheyLike?: string;
  whatToImprove?: string;

  premiumInterest: string;
  premiumFeatures?: string[];
}

export async function createBusinessFeedback(data: CreateBusinessFeedbackInput) {
  const businessName = data.businessName.trim();

  if (!businessName) {
    throw new Error('Business name is required.');
  }

  if (!data.listingDuration) {
    throw new Error('Listing duration is required.');
  }

  if (data.satisfaction < 1 || data.satisfaction > 5) {
    throw new Error('Satisfaction rating must be between 1 and 5.');
  }

  if (!data.profileRepresentation) {
    throw new Error('Profile representation is required.');
  }

  if (!data.customerDiscovery) {
    throw new Error('Customer discovery response is required.');
  }

  if (!data.usefulness) {
    throw new Error('Platform usefulness is required.');
  }

  if (!data.wantsReviews) {
    throw new Error('Please indicate whether you want reviews.');
  }

  if (!data.recommend) {
    throw new Error('Please provide a recommendation response.');
  }

  if (!data.premiumInterest) {
    throw new Error('Please provide your premium interest response.');
  }

  return prisma.businessFeedback.create({
    data: {
      businessName,

      listingDuration: data.listingDuration,

      satisfaction: data.satisfaction,

      profileRepresentation: data.profileRepresentation,

      customerDiscovery: data.customerDiscovery,

      customerDiscoveryDetails: data.customerDiscoveryDetails?.trim() || null,

      usefulness: data.usefulness,

      wantsReviews: data.wantsReviews,

      reviewPreference: data.reviewPreference?.trim() || null,

      desiredFeatures: data.desiredFeatures ?? [],

      mostWantedFeature: data.mostWantedFeature?.trim() || null,

      businessGoals: data.businessGoals ?? [],

      recommend: data.recommend,

      recommendationReason: data.recommendationReason?.trim() || null,

      whatTheyLike: data.whatTheyLike?.trim() || null,

      whatToImprove: data.whatToImprove?.trim() || null,

      premiumInterest: data.premiumInterest,

      premiumFeatures: data.premiumFeatures ?? [],
    },
  });
}

export async function getAllBusinessFeedback() {
  return prisma.businessFeedback.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
}
