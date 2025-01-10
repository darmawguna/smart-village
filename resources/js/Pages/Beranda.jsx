import ButtonNavigate from '@/Components/Elements/ButtonNavigate'
import HomeLayout from '@/Layouts/HomeLayout'
import React from 'react'

const Beranda = () => {
  return (
    <div>
        <HomeLayout>
            <div className='h-[82vh] bg-img1 bg-cover bg-center flex flex-col justify-center items-center text-white mt-[58px]'>
                <h1 className='text-[40px] font-bold'>Selamat Datang di Smart Forest Village</h1>
                <h2 className='text-[20px] font-semibold'>Transformasi Desa Menuju Desa Cerdas dan Berkelanjutan</h2>
                <p className='w-[500px] text-center text-[12px]'>Bersama, kita melestarikan hutan, meningkatkan ekonomi lokal, dan mendukung keseimbangan ekologi dengan inovasi digital.</p>
                <ButtonNavigate navigateTo='/reportForm' variant="flex justify-center gap-2 rounded-lg bg-white w-[250px] p-3 mt-2">
                    <img src="/assets/icons/green-camera.png" alt="camera" className='w-7 h-7' />
                    <span className='text-[20px] font-semibold'>Laporkan Kejadian</span>
                </ButtonNavigate>
            </div>
        </HomeLayout>
    </div>
  )
}

export default Beranda