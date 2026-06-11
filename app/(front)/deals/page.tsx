import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Flame } from "lucide-react";

const deals = [
  {
    id: "1",
    slug: "french-braids-special",
    title: "French Braids Special",
    business: "Braids By MasTee",
    image: "/french2.jpg",
    description:
      "Get professional French braids completely FREE. Limited to the first 10 customers.",
    originalPrice: 30,
    offerPrice: 10,
    spotsLeft: 10,
    totalSpots: 10,
  },
];

export default function DealsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#25D366]/20 blur-3xl rounded-full" />
        <div className="absolute right-0 bottom-0 w-72 h-72 bg-[#25D366]/10 blur-3xl rounded-full" />

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 px-4 py-2 text-[#25D366] font-medium">
              <Flame className="w-4 h-4" />
              Limited Time Offers
            </div>

            <h1 className="mt-6 text-5xl font-black text-[#111111]">
              <span className="text-[#25D366]">Maseru</span>Plug Deals
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              Discover exclusive offers from trusted businesses around Lesotho.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 pb-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deals.map((deal) => (
            <Link key={deal.id} href={`/deals/${deal.slug}`}>
              <div className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">

                <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                        priority
                        src={deal.image}
                        alt={deal.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>

                <div className="p-6">

                  <div className="inline-flex rounded-full bg-[#25D366]/10 px-3 py-1 text-sm font-medium text-[#25D366]">
                    Featured Deal
                  </div>

                  <h2 className="mt-4 text-2xl font-bold text-[#111111]">
                    {deal.title}
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    {deal.business}
                  </p>

                  <p className="mt-4 text-gray-600">
                    {deal.description}
                  </p>

                  <div className="mt-6 flex items-center gap-3">
                    <span className="line-through text-gray-400">
                      M{deal.originalPrice}
                    </span>

                    <span className="text-2xl font-black text-[#25D366]">
                      FREE
                    </span>
                  </div>

                  <div className="mt-4 text-md text-gray-500">
                    {deal.spotsLeft} of {deal.totalSpots} spots remaining
                  </div>

                  <div className="mt-12 flex justify-center">
                    <Button
                    className="inline-flex items-center justify-center h-12 px-8 rounded-xl bg-transparent text-[#25D366] font-semibold shadow-lg transition hover:bg-[#25D366] hover:text-white hover:scale-105"
                    >
                    Claim Deal <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>

                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}