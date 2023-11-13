import Event from '@/components/Event'
import Footer from '@/components/Footer'
import Stickynavbar from '@/components/Stickynavbar'
import React from 'react'

function Events() {
  return (
    <div>
        <Stickynavbar></Stickynavbar>
        <Event></Event>
        <Footer></Footer>
    </div>
  )
}

export default Events