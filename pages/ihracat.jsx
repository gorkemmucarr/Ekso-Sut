import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import Head from "next/head";

export default function ihracat() {
  return (
    <>
    <Head>
      <title>İletişim</title>
    </Head>

    <div className="bg-cream">
      <Navbar />
      <div>
        <div className="p-20">
          <h1 className="uppercase text-3xl font-bold text-center mb-3 text-black">
            Ekso Süt Olarak İhracat Yaptığımız Ülkeler
          </h1>
          <span className="font-googlefont text-xl text-black">
            Son teknolojinin tüm imkânlarını etkin bir şekilde kullanan EKSO,
            çevreyi ve toplum sağlığını korumayı kendisine ilke edinen bir
            işletmedir. İç piyasaya tedarik etmenin yanı sıra, yurt dışına da
            2012 yılından bu yana ihracat yapılmaktadır. Ürdün, Pakistan ,Suriye
            ,Yemen, Filistin, Mısır, Afganistan, Hindistan, Suudi Arabistan,
            Türkmenistan, Özbekistan, Birleşik Arap Emirlikleri, Sudan,
            Gürcistan’a ihracatımız devam etmekte olup, Çin’i de son dönemde
            hizmet verdiğimiz ülkeler arasına almış bulunuyoruz.
          </span>
        </div>

        <div className="flex justify-around">
          <div className="">
            <img src="/bayraklar/ürdün.png" alt="ürdün" className="w-52 h-28" />
          </div>
          <div className="">
            <img
              src="/bayraklar/pakistan.png"
              alt="pakistan"
              className="w-52 h-28"
            />
          </div>
          <div className="">
            <img
              src="/bayraklar/suriye.png"
              alt="suriye"
              className="w-52 h-28"
            />
          </div>
        </div>

        <div className="flex mt-20 justify-around">
          <div className="">
            <img src="/bayraklar/yemen.png" alt="yemen" className="w-52 h-28" />
          </div>
          <div className="">
            <img
              src="/bayraklar/filistin.jpg"
              alt="filistin"
              className="w-52 h-28"
            />
          </div>
          <div className="">
            <img src="/bayraklar/misir.png" alt="yemen" className="w-52 h-28" />
          </div>
        </div>

        <div className="flex mt-20 justify-around">
          <div className="">
            <img
              src="/bayraklar/afganistan.jpg"
              alt="afganistan"
              className="w-52 h-28"
            />
          </div>
          <div className="">
            <img
              src="/bayraklar/hindistan.png"
              alt="hindistan"
              className="w-52 h-28"
            />
          </div>
          <div className="">
            <img
              src="/bayraklar/arabistan.png"
              alt="arabistan"
              className="w-52 h-28"
            />
          </div>
        </div>

        <div className="flex justify-around mt-20">
          <div className="">
            <img
              src="/bayraklar/turkmenistan.png"
              alt="turkmenistan"
              className="w-52 h-28"
            />
          </div>
          <div className="">
            <img
              src="/bayraklar/ozbekistan.png"
              alt="ozbekistan"
              className="w-52 h-28"
            />
          </div>
          <div>
            <img src="/bayraklar/cin.png" alt="cin" className="w-52 h-28" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
    </>
    
  );
}
