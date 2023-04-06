import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import React from "react";

export default function demineralizepast() {
  return (
    <>
    <Head>
      <title>%50 Demineralize Past</title>
    </Head>
    <div className="bg-cream">
      <Navbar />
      <div className="bg-red-300 h-60 mt-10 text-black">Resim Koyulacak</div>

      <div className="flex mt-20 justify-center">
        <div className="mr-11 border-2 border-gray-200 rounded-lg flex items-center p-3 ">
          <img
            src="/urunler/kirmizi.png"
            alt="kirmizi"
            className="w-40 h-60 mr-2"
          />
        </div>
        <div className="border-2 border-gray-200 p-4 rounded-xl w-96 ">
          <h1 className="uppercase text-3xl font-bold text-black w-96">
            %50 Demineralize Süt
          </h1>
          <p className="font-googlefont text-lg text-black mt-2">
            Çiğ sütlerin peynir olup sonrasında taze peynir altı sularının
            demineralize işlemi ve kurutma teknikleri ile elde edilen toz
            halindeki üründür. Bisküvi, çikolata, pasta gibi gıda sanayiye uygun
            olup, katkı maddesi olarak kullanılır. Süt ve süt ürünleri
            grubundadır
          </p>
        </div>
      </div>
      <Footer />
    </div>
    </>
    
  );
}
