import Stickynavbar from '@/components/Stickynavbar'
import React from 'react'
import Footer from '@/components/Footer'
import EditProfile from "@/components/EditProfile"
function Edit() {
  return (
    <div>
        <Stickynavbar></Stickynavbar>
        <EditProfile suppressHydrationWarning={true}></EditProfile>
        <Footer></Footer>
    </div>
  )
}

export default Edit