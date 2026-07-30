import { Prisma } from '@prisma/client';

export type BusinessWithCategory = Prisma.BusinessGetPayload<{
  include: {
    category: true;
  };
}>;
