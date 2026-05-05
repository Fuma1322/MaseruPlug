// import Footer from '@/components/FrontEnd/Footer'
import Navbar from '@/components/Frontend/Navbar'
import React, { ReactNode } from 'react'

export default async function Layout({children}:{children:ReactNode}) {
  return (
    <div>
      <Navbar />
        {children}
      {/* <Footer /> */}
    </div>
  )
}