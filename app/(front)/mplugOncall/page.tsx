import OnCallHero from '@/components/Frontend/OnCall/OnCallHero';
import OnCallHowItWorks from '@/components/Frontend/OnCall/OnCallHowItWorks';
import OnCallEmergencyCategories from '@/components/Frontend/OnCall/OnCallEmergencyCategories';
import OnCallNearbyProviders from '@/components/Frontend/OnCall/OnCallNearbyProviders';
import OnCallWhyOnCall from '@/components/Frontend/OnCall/OnCallWhyOnCall';
import OnCallProviderCTA from '@/components/Frontend/OnCall/OnCallProviderCTA';

export default function OnCallPage() {
  return (
    <main className="bg-white text-[#111111]">
      <div className="overflow-hidden bg-[#00100E] text-white">
        <OnCallHero />
        <OnCallHowItWorks />
        <OnCallEmergencyCategories />
        <OnCallNearbyProviders />
        <OnCallWhyOnCall />
        <OnCallProviderCTA />
      </div>
    </main>
  );
}
