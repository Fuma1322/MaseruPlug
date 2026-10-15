import PricingFAQ from '@/components/Frontend/Pricing/PricingFAQ';
import PricingCTA from '@/components/Frontend/Pricing/PricingCTA';
import PricingPlans from '@/components/Frontend/Pricing/PricingPlans';
import PricingHero from '@/components/Frontend/Pricing/PricingHero';
import PricingValue from '@/components/Frontend/Pricing/PricingValue';

export default function PricingPage() {
  return (
    <main className="bg-white text-[#111111]">
      {/* HERO */}
      <PricingHero />

      {/* PLANS */}
      <PricingPlans />

      {/* VALUE LEVERS */}
      <PricingValue />

      {/* FAQ */}
      <PricingFAQ />

      {/* FINAL CTA */}
      <PricingCTA />
    </main>
  );
}
