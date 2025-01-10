import FormReport from '@/Components/Fragments/FormReport'
import HomeLayout from '@/Layouts/HomeLayout'
import React from 'react'

const ReportForm = () => {
  return (
    <HomeLayout>
        <div className='flex flex-col min-h-screen mt-[80px] px-4'>
            <FormReport/>
        </div>
    </HomeLayout>
  )
}

export default ReportForm