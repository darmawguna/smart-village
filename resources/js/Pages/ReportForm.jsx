import CreateForm from '@/Components/Fragments/CreateFrom'
import FormReport from '@/Components/Fragments/FormReport'
import HomeLayout from '@/Layouts/HomeLayout'
import React from 'react'

const ReportForm = () => {
  return (
    <HomeLayout>
      <div className='flex flex-col min-h-screen mt-[80px] sm:mt-[80px] lg:mt-[100px] px-4'>
        {/* <FormReport/> */}
        <div>
          <CreateForm />
        </div>

      </div>
    </HomeLayout>
  )
}

export default ReportForm