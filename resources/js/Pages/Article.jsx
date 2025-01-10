import ButtonNavigate from '@/Components/Elements/ButtonNavigate'
import InputElements from '@/Components/Elements/Input'
import SearchBar from '@/Components/Elements/Search'
import CardArticle from '@/Components/Fragments/CardArticle'
import HomeLayout from '@/Layouts/HomeLayout'
import React from 'react'

const Article = () => {
  return (
    <HomeLayout>
        <div className='flex flex-col min-h-screen mt-[80px] px-4'>
          <div className='flex justify-between'>
            <h1 className='text-color5 font-bold text-2xl'>Artikel Edukasi</h1>
            <SearchBar placeholder='cari artikel disini' variant='border-none bg-white shadow-xl w-[300px]' />
          </div>
          <div className='flex gap-10 py-4'>
            <ButtonNavigate variant='bg-white shadow-xl py-4 px-6 rounded-full'>Agroforestri</ButtonNavigate>
            <ButtonNavigate variant='bg-white shadow-xl py-4 px-6 rounded-full'>Green Energy</ButtonNavigate>
            <ButtonNavigate variant='bg-white shadow-xl py-4 px-6 rounded-full'>Lingkungan</ButtonNavigate>
          </div>
          <div className='flex py-10 flex-wrap justify-center gap-5'>
            <CardArticle />
            <CardArticle />
            <CardArticle />
            <CardArticle />
            <CardArticle />
            <CardArticle />
            <CardArticle />
            <CardArticle />
          </div>
        </div>
    </HomeLayout>
  )
}

export default Article