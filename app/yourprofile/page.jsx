import Footer from '@/components/Footer'
import Stickynavbar from '@/components/Stickynavbar'
import UserProfile from '@/components/UserProfile'
import Link from 'next/link'
import React from 'react'

function Yourprofile() {
  return (
    <>
    <Stickynavbar></Stickynavbar>
    <UserProfile suppressHydrationWarning={true}></UserProfile>
    <Footer></Footer>
    </>
  )
}

export default Yourprofile