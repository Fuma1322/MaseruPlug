import prisma from "@/lib/db";
import BusinessForm from "@/components/Forms/BusinessForm";

export default async function Page() {
  const categories = await prisma.category.findMany({
    orderBy: { createdAt: "desc" },
  });

  return <BusinessForm title="Create Business" categories={categories} />;
}