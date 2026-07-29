import BusinessManagement from '@/components/Dashboard/BusinessManagement';
import prisma from '@/lib/db';

export default async function Page() {
  const categories = await prisma.category.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  const businesses = await prisma.business.findMany({
    include: {
      category: true,
    },

    orderBy: {
      createdAt: 'desc',
    },
  });

  return <BusinessManagement categories={categories} businesses={businesses} />;
}
