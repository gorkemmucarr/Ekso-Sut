import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
import React from 'react'

export default function hakkimizda() {
  return (
    <>
    <Head>
      <title>Hakkımızda</title>
    </Head>
    <div className='bg-cream'>
      <Navbar/>

      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
        <div className="flex w-full justify-center">
          <div className=" p-4 ml-40 flex items-center" >
            <img
              src="/urunler/kirmizi.png"
              alt="VPN Illustrasi"
              quality={100}
              className='w-52 h-60'
            />
          </div>
        </div>
        <div>

        <div className="flex flex-col items-start justify-center ml-auto w-full lg:w-9/12 mr-40" >
          <h3 className="text-4xl lg:text-4xl font-medium leading-relaxed text-black-600 ml-40 text-black">
            Hakkımızda
          </h3>
          <p className="my-2 text-black-500 font-googlefont text-black">
          Antalya Organize Sanayi Bölgesinde, 2004 yılında temelleri atılmış olan Ekso Süt, yine aynı bölgede faaliyetini sürdüren Ekici Peynir’in kardeş kuruluşudur. Şirketin kurulma sebebi, Ekici Peynir’in üretimi sonucu açığa çıkan ve içerisinde bulunan asit sebebiyle çevreye oldukça zararlı olan peynir altı suyunun tekrardan doğaya kazandırılmasıdır.
          Temeli atıldıktan sonra 5 yıl boyunca süren kurulum ve AR-GE çalışmaları sonucunda, 2009 yılında faaliyetine başlayarak, düzenli olarak çalışan bir işletme haline gelmiştir.
          Faaliyete başlanılan ilk yıllarda sadece peynir altı suyunu işleyerek toz haline getirmekteydi. Bugün yapmış olduğu yatırımlarla peynir altı suyunun yanında süt de işleyerek süt tozu üretimini de gerçekleştirmektedir. Günde 25 ton peynir altı suyu tozu (PAST) ve 20 ton da süt tozu üretme kapasitesine sahip olan Ekso Süt, yatırımlarına ara vermeden devam ederek kapasitesini arttırmayı hedeflemektedir.
          Son teknolojinin tüm imkanlarını etkin bir şekilde kullanan Ekso Süt, çevreyi ve toplum sağlığını korumayı kendisine ilke edinen bir işletmedir. Şu anda sadece Ekici Peynir’den çıkan atık suyun doğaya yeniden kazandırılması için çalışan Ekso Süt, ilerleyen zamanlarda bulunduğu bölgede bulunan tüm işletmelerdeki atıkları doğaya kazandırma misyonuyla hareket etmektedir.
          </p>
          
        </div>
        </div>

      
    </div>
    <Footer/>
    </div>
    </>
  )
}
