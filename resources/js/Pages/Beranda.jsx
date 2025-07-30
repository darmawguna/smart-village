import ButtonNavigate from '@/Components/Elements/ButtonNavigate'
import CardProduct from '@/Components/Fragments/CardProduct'
import HomeLayout from '@/Layouts/HomeLayout'
import React from 'react'

const Beranda = ({ produk, storageBaseUrl }) => {
    return (
        <div>
            <HomeLayout>
                {/* Hero Section */}
                <div className='relative h-[82vh] mt-[58px] overflow-hidden'>
                    <video
                        className='absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2 z-0'
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src="/assets/videos/pengejaran.mp4" type="video/mp4" />
                        Browser Anda tidak mendukung tag video.
                    </video>

                    {/* Overlay untuk meningkatkan readability */}
                    <div className='absolute inset-0 bg-black bg-opacity-40 z-5'></div>

                    <div className='relative z-10 flex flex-col justify-center items-center text-white h-full px-4'>
                        <h1 className='text-[40px] sm:text-[30px] ssm:text-[20px] font-bold text-center mb-4'>
                            Selamat Datang di Smart Forest Village
                        </h1>
                        <h2 className='text-[20px] sm:text-[15px] ssm:text-[13px] font-semibold text-center mb-4'>
                            Transformasi Desa Menuju Desa Cerdas dan Berkelanjutan
                        </h2>
                        <p className='w-[500px] ssm:w-[400px] text-center text-[12px] mb-6'>
                            Bersama, kita melestarikan hutan, meningkatkan ekonomi lokal, dan mendukung keseimbangan ekologi dengan inovasi digital.
                        </p>
                        
                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <ButtonNavigate 
                                navigateTo='/product' 
                                variant="flex justify-center items-center gap-2 rounded-lg bg-green-500 hover:bg-green-600 text-white w-[200px] px-6 py-3 transition-colors duration-200"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                                <span className='font-semibold'>Lihat Produk</span>
                            </ButtonNavigate>
                            
                            <ButtonNavigate 
                                navigateTo='/about' 
                                variant="flex justify-center items-center gap-2 rounded-lg border-2 border-white text-white hover:bg-white hover:text-green-600 w-[200px] px-6 py-3 transition-all duration-200"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <span className='font-semibold'>Tentang Kami</span>
                            </ButtonNavigate>
                        </div>
                    </div>
                </div>

                {/* Featured Products Section */}
                <div className="flex justify-center min-h-screen py-16 px-4 bg-gray-50">
                    <div className="flex flex-col w-[95%] max-w-7xl">
                        {/* Section Header */}
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">
                                Produk Unggulan Kami
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                Nikmati hasil alam terbaik dari Smart Forest Village. Produk-produk berkualitas tinggi 
                                yang diproduksi dengan metode berkelanjutan dan ramah lingkungan.
                            </p>
                        </div>

                        {/* Products Grid */}
                        <div className="grid grid-cols-4 sm:grid-cols-3 md:grid-cols-2 ssm:grid-cols-1 mb-12 gap-6"> {/* Added gap-6 for spacing */}
                            {/* Use produk.data directly now */}
                            {produk.data.map((product, index) => ( 
                                <CardProduct
                                    key={product.id}
                                    prodImages={`${storageBaseUrl}/${product.gambar_produk}`}
                                    prodName={product.nama}
                                    prodPrice={new Intl.NumberFormat('id-ID', { 
                                        style: 'currency', 
                                        currency: 'IDR' 
                                    }).format(product.harga)}
                                    prodDescription={product.deskripsi}
                                    prodId={product.id}
                                    className="transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                                    style={{
                                        animationDelay: `${index * 150}ms`
                                    }}
                                />
                            ))}
                        </div>

                        {/* Call to Action Section */}
                        <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 text-center">
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                Tidak Menemukan Yang Anda Cari?
                            </h3>
                            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                                Hubungi kami langsung untuk konsultasi produk atau permintaan khusus. 
                                Tim kami siap membantu Anda menemukan produk terbaik sesuai kebutuhan.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a 
                                    href="https://wa.me/6281338690502" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="px-8 py-3 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-colors duration-200 flex items-center justify-center gap-2"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                                    </svg>
                                    Hubungi via WhatsApp
                                </a>
                                <ButtonNavigate 
                                    navigateTo='/product'
                                    variant="px-8 py-3 border-2 border-green-500 text-green-600 font-semibold rounded-xl hover:bg-green-50 transition-colors duration-200"
                                >
                                    Lihat Katalog Lengkap
                                </ButtonNavigate>
                            </div>
                        </div>
                    </div>
                </div>
            </HomeLayout>
        </div>
    )
}

export default Beranda;