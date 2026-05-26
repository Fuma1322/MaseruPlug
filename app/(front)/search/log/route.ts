import prisma from "@/lib/db";

export async function POST(req: Request) {
  const body = await req.json();
  const query = body.query?.trim();

  if (!query) {
    return Response.json({ error: "Invalid query" }, { status: 400 });
  }

  await prisma.searchQuery.create({
    data: {
      query: query.toLowerCase(),
    },
  });

  return Response.json({ success: true });
}