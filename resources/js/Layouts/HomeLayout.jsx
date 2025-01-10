import Footer from '@/Components/Fragments/Footer'
import NavBar from '@/Components/Fragments/NavBar'
import React from 'react'

const HomeLayout = ({children}) => {
  return (
    <div>
        <NavBar />
        {children}
        <Footer />
    </div>
  )
}

export default HomeLayout