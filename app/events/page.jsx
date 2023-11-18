import Event from '@/components/Event'
import Footer from '@/components/Footer'
import Sampleevents from '@/components/Sampleevents'
import Stickynavbar from '@/components/Stickynavbar'
import React from 'react'

function Events() {
  return (
    <div>
        <Stickynavbar></Stickynavbar>
        <Sampleevents></Sampleevents>
        <Event></Event>
        <Footer></Footer>
    </div>
  )
}

export default Events