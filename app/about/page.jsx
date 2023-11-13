import Aboutus from '@/components/Aboutus'
import Footer from '@/components/Footer'
import Stickynavbar from '@/components/Stickynavbar'
import Team from '@/components/Team'
import React from 'react'
export default function About() {
  return (
    <div>
      <Stickynavbar></Stickynavbar>
      <Team></Team>
      <Aboutus></Aboutus>
      <Footer></Footer>
    </div>
  )
}

