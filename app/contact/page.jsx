import React from 'react'
import Footer from '@/components/Footer'
import Contact from '@/components/Contact'
import Stickynavbar from '@/components/Stickynavbar'
export default function Test() {
  return (
    <div>
      <Stickynavbar></Stickynavbar>
      <Contact suppressHydrationWarning={true}></Contact>
      <Footer></Footer>
      
    </div>
  )
}

