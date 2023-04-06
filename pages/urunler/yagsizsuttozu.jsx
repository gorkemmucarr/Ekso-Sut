import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";

export default function yagsizsuttozu() {
  return (
    <>
    <Head>
      <title>Yağsız Süt Tozu</title>
    </Head>
    <div className="bg-cream">
      <Navbar />
      <div className="bg-red-300 h-60 mt-10">Resim koyulacak</div>

      <div className="flex mt-20 justify-center">
        <div className="mr-11 border-2 border-gray-200 rounded-lg flex items-center p-3">
          <img
            src="/urunler/yesil.png"
            alt="yesil"
            className="w-40 h-60 mr-2"
          />
        </div>
        <div className="border-2 border-gray-200 p-4 rounded-xl w-96 ">
          <h1 className="uppercase text-3xl font-bold text-black">
            Yağsız Süt Tozu
          </h1>
          <p className="font-googlefont text-lg text-black">
            Çiğ sütlerin suyunu kurutularak uzaklaştırılması ile elde edilen toz
            halindeki üründür. Gıda sanayi için uygundur. Süt ve süt ürünleri
            grubundadır
          </p>
        </div>
      </div>
      <Footer />
    </div>
    </>
    
  );
}
