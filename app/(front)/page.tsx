import CTA from '@/components/Frontend/CTA';
import Hero from '@/components/Frontend/Hero';
import MeetTheTeam from '@/components/Frontend/Team';
import Featured from '@/components/Frontend/Featured';
import Categories from '@/components/Frontend/Categories';
import React from 'react';
// import EvaCTA from '@/components/Frontend/Business/EVA/EvaCTA';

export default function page() {
  return (
    <div>
      <Hero />
      <Categories />
      {/* <EvaCTA /> */}
      <Featured />
      <CTA />
      <MeetTheTeam />
    </div>
  );
}
