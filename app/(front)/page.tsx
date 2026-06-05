import Categories from '@/components/Frontend/Categories'
import CTA from '@/components/Frontend/CTA'
import Featured from '@/components/Frontend/Featured'
import Hero from '@/components/Frontend/Hero'
import MeetTheTeam from '@/components/Frontend/Team'
import React from 'react'

export default function page() {
  return (
    <div>
        <Hero />
        <Categories />
        <Featured />
        <CTA />
        <MeetTheTeam />
    </div>
  )
}
