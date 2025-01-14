import Footer from '@/Components/Fragments/Footer'
import NavBar from '@/Components/Fragments/NavBar'
import React from 'react'

const HomeLayout = ({children}) => {
  return (
    <div>
        <NavBar />
        {children}
        <Footer />
        {/* <WaButton
                    phoneNumber="6282147389276"
                    variant="rounded-full p-2 bg-color5"
                >
                    <img
                        src="/assets/icons/cs.png"
                        alt="cs"
                        className="w-7 h-7"
                    />
                </WaButton> */}
    </div>
  )
}

export default HomeLayout