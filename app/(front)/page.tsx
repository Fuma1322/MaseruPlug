import Categories from '@/components/Frontend/Categories'
import Featured from '@/components/Frontend/Featured'
import Hero from '@/components/Frontend/Hero'
import React from 'react'

export default function page() {
  return (
    <div>
        <Hero />
        <Categories />
        <Featured />
    </div>
  )
}
