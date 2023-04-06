import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
import React from 'react'

export default function iletisim() {
  return (

    <>
    <Head>
      <title>İletişim</title>
    </Head>

    <div className='bg-cream'>
      <Navbar/>
      
      <div className='mt-10 '>
        <h1 className='uppercase text-4xl font-bold px-40 text-black'>Bize Ulaşın</h1>
        <div className='flex flex-col px-40 mt-4'>
          <span className='font-googlefont text-xl text-black'>Ekso Süt ve Gıda Mamülleri San. ve Tic. A.Ş</span>
          <span className='font-googlefont text-xl text-black'>Organize Sanayi Bölgesi 7. Cad. 5159 Ada 2. Parsel 07190 ANTALYA TÜRKİYE</span>
          <span className='font-googlefont text-xl text-black'>+90 242 258 13 96 (Pabx)</span>
          <span className='ffont-googlefont text-xl text-black'>+90 242 258 13 95</span>
          <span className='font-googlefont text-xl text-black'>info@eksosut.com</span>
        </div>
        
      </div>
      <Footer/>
    </div>
    </>
    
  )
}
