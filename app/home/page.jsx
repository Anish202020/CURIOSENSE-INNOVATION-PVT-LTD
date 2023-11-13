import Description from '@/components/Description'
import Footer from '@/components/Footer'
import Part from '@/components/Part'
import Stickynavbar from '@/components/Stickynavbar'
import Testimonials from '@/components/Testimonials'
import React from 'react'

function Home() {
  return (
    <div>
        <Stickynavbar></Stickynavbar> {/*Done*/}
        <Part></Part> {/*Done*/}
        <Description></Description> {/*Done*/} 
        <Testimonials></Testimonials>{/*Done*/}
        <Footer></Footer>
    </div>
  )
}

export default Home