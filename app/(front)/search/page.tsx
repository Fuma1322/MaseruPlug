import prisma from "@/lib/db";
import Link from "next/link";
import Image from "next/image";
import { MapPin } from "lucide-react";

interface Props {
  searchParams: {
    q?: string;
  };
}

export default async function SearchPage({ searchParams }: Props) {
  const query = searchParams.q || "";

  const results = await prisma.business.findMany({
    where: {
      OR: [
        { name: { contains: query, mode: "insensitive" } },
        { description: { contains: query, mode: "insensitive" } },
        { location: { contains: query, mode: "insensitive" } },
      ],
    },
    take: 20,
  });

  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Search results for:{" "}
        <span className="text-[#25D366]">{query}</span>
      </h1>

      {results.length === 0 ? (
        <p className="text-gray-500">No businesses found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((biz) => (
            <div
              key={biz.id}
              className="group overflow-hidden rounded-3xl border border-[#25D366] bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-48">
                <Image
                  src={biz.images?.[0] || "/lelo.jpg"}
                  alt={biz.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4 space-y-2">
                <h2 className="font-bold text-lg">{biz.name}</h2>

                <div className="flex items-center text-sm text-gray-500 gap-1">
                  <MapPin className="w-4 h-4 text-[#25D366]" />
                  {biz.location}
                </div>

                {/* DESCRIPTION */}
                <p className="text-sm text-gray-600 line-clamp-2">
                  {biz.description}
                </p>

                {/* CTA BUTTON (IMPORTANT) */}
                <Link
                  href={`/business/${biz.slug}`}
                  className="mt-3 inline-flex items-center justify-center w-full rounded-xl bg-[#25D366] px-4 py-2 text-white font-semibold hover:scale-[1.02] transition"
                >
                  Visit Profile
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}