import CTA from '@/components/Frontend/CTA';
import Hero from '@/components/Frontend/Hero';
import MeetTheTeam from '@/components/Frontend/Team';
import Featured from '@/components/Frontend/Featured';
import Categories from '@/components/Frontend/Categories';
import React from 'react';
import DealsCTA from '@/components/Frontend/Deals/DealsCTA';
import OnCall from '@/components/Frontend/OnCall/index';
// import EvaCTA from '@/components/Frontend/Business/EVA/EvaCTA';

export default function page() {
  return (
    <div>
      <Hero />
      <Categories />
      <OnCall />
      <DealsCTA />
      {/* <EvaCTA /> */}
      <Featured />
      <CTA />
      <MeetTheTeam />
    </div>
  );
}
