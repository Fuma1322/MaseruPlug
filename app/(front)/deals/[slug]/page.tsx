import Image from "next/image";
import { BadgeCheck, Gift } from "lucide-react";

const deal = {
  slug: "french-braids-special",
  title: "French Braids Special",
  business: "Braids By MasTee",
  image: "/french2.jpg",
  description:
    "Get professional French braids completely FREE. Limited to the first 10 customers through MaseruPlug.",
  originalPrice: 30,
  offerPrice: 0,
  spotsLeft: 10,
};

export default function DealDetailsPage() {
  const offerCode =
    "MP-" +
    Math.random()
      .toString(36)
      .substring(2, 8)
      .toUpperCase();

  return (
    <main className="min-h-screen bg-white">

      <section className="container max-w-5xl mx-auto px-4 py-16">

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          <div className="relative aspect-square rounded-3xl overflow-hidden">
            <Image
              src={deal.image}
              alt={deal.title}
              fill
              className="object-cover"
            />
          </div>

          <div>

            <div className="inline-flex items-center gap-2 rounded-full bg-[#25D366]/10 px-4 py-2 text-[#25D366] font-medium">
              <Gift className="w-4 h-4" />
              Limited Time Deal
            </div>

            <h1 className="mt-6 text-5xl font-black text-[#111111]">
              {deal.title}
            </h1>

            <p className="mt-3 text-gray-500">
              Offered by {deal.business}
            </p>

            <p className="mt-6 text-lg text-gray-600">
              {deal.description}
            </p>

            <div className="mt-8 flex items-center gap-4">
              <span className="text-xl text-gray-400 line-through">
                M{deal.originalPrice}
              </span>

              <span className="text-4xl font-black text-[#25D366]">
                FREE
              </span>
            </div>

            <div className="mt-6">
              <span className="rounded-full bg-gray-100 px-4 py-2 text-sm">
                {deal.spotsLeft} spots remaining
              </span>
            </div>

            <div className="mt-10 rounded-3xl border border-[#25D366]/20 bg-[#25D366]/5 p-6">

              <div className="flex items-center gap-2 text-[#25D366] font-semibold">
                <BadgeCheck className="w-5 h-5" />
                Your Offer Code
              </div>

              <div className="mt-4 text-4xl font-black tracking-widest text-[#111111]">
                {offerCode}
              </div>

              <p className="mt-4 text-gray-600">
                Show this code at the business to redeem your offer.
              </p>

            </div>

          </div>

        </div>

      </section>
    </main>
  );
}