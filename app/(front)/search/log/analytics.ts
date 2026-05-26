import prisma from "@/lib/db";

export async function GET() {
  const searches = await prisma.searchQuery.groupBy({
    by: ["query"],
    _count: {
      query: true,
    },
    orderBy: {
      _count: {
        query: "desc",
      },
    },
    take: 10,
  });

  return Response.json(
    searches.map((s) => ({
      query: s.query,
      count: s._count.query,
    }))
  );
}