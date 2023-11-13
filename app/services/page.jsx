import Footer from '@/components/Footer'
import Services from '@/components/Services'
import Stickynavbar from '@/components/Stickynavbar'
import React from 'react'

function services() {
    return (
        <div>
            <Stickynavbar></Stickynavbar>
            <Services></Services>
            <Footer></Footer>
        </div>
    )
}

export default services