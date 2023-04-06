import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";
import React from "react";

export default function haberlerveduyurular() {
  return (
    <>
    <Head>
      <title>Haberler ve Duyurular</title>
    </Head>
    <div className="bg-cream">
      <Navbar />
      <div className="mt-10">
        <div className="flex">
          <div className="mr-10 ml-80 flex items-center">
            <img
              src="/urunler/suttozu.png"
              alt="suttozu"
              className="w-80 rounded-lg"
            />
          </div>
          <div className="border-2 border-gray-200 p-4 rounded-xl w-96">
            <h1 className="text-3xl font-semibold text-center text-black">
              EKSO’dan 5 Milyon TL’lik Yatırım
            </h1>
            <p className="font-googlefont mt-2 text-black">
              2009 Yılında, Antalya’da faaliyetine başlayan EKSO, 1500 m2 kapalı
              alanda üretimini gerçekleştirerek, çevreyi koruma bilinciyle
              çalışmalarını sürdürmektedir. Peynir altı suyu ve Süt tozu
              ürünlerine olan talebin artmasıyla beraber, EKSO için kapasite
              artışı zorunluluk haline gelmiş, ve bunun için çalışmalara
              başlanmıştır. 2012’nin son aylarında başlayan yatırımların sürmesi
              planlanmaktadır. Yatırım sonucunda 1.500m2 kapalı alandan 3.500m2
              alana çıkarak 5 milyon TL’lik yatırım yapmayı hedefliyor. Hali
              hazırda günde 25 ton toz üretme kapasitesine sahip olan EKSO,
              yatırım sonucu kapasitesini tam 3 katına çıkartabilecek . Yatırım
              sonucu sadece kapasite artışı ile kalmayacak, aynı zamanda katma
              değeri yüksek başka ürünleri de portföyüne katarak
              ilerleyebilecek.
            </p>
          </div>
        </div>

        <div className="flex mt-20">
          <div className="mr-10 ml-80 flex items-center">
            <img
              src="/urunler/suttozu.png"
              alt="suttozu"
              className="w-80 rounded-lg"
            />
          </div>
          <div className="border-2 border-gray-200 p-4 rounded-xl w-96">
            <h1 className="text-3xl font-semibold text-center text-black">
              EKSO Ürün Portföyüne Yeni Bir Ürün Daha Ekledi
            </h1>
            <p className="font-googlefont mt-2 text-black">
              Antalya Organize Sanayi Bölgesinde, 2009 yılında faaliyete
              başlamış olan EKSO, Ekici Peynir’in üretimi sonucu açığa çıkan ve
              içerisinde bulunan laktik asit sebebiyle kısa sürede asitlenip
              çevreye oldukça zarar veren atıkların, ekonomiye tekrardan
              kazanılması amacıyla kurulmuştu. EKSO çevre ve doğaya önem veren
              bir yaklaşımla üretim yapan, çevreyi ve toplum sağlığını korumayı
              kendisine ilke edinen bir işletmedir. İlk yıllarında sadece
              Peyniraltı suyunu işleyerek toz haline getiren firma, bugün ürün
              portföyüne yeni bir ürün daha eklemiş oldu. Ekso artık Süt tozu
              üretimini de gerçekleştiriyor. Şimdilik sadece Yağsız süt tozu
              üretimini gerçekleştiren Ekso, ilerleyen dönemlerde planladığı
              yatırımlarla çeşitliliğini arttırmayı hedeflemektedir. Süt tozu
              havayla temas etmediği müddetçe aylarca bozulmadan saklanabilir.
              İçerisine su katarak kullanmak, hatta bebeklere bile vermek
              mümkündür. Süt tozu, bisküvi, bebek maması ve çikolata yapımında,
              pasta ve hamur işlerinde, kahve kremalarında, hayvan mamalarında,
              işlenmiş et ürünlerinde, hazır çorbalarda, süt ve süt ürünlerinde
              kullanılan süt tozu, geniş kullanım alanları ile üretici ve
              tüketicilere uygulama kolaylığı sağlıyor.
            </p>
          </div>
        </div>

        <div className="flex mt-20">
          <div className="mr-10 ml-80 flex items-center">
            <img
              src="/urunler/suttozu.png"
              alt="suttozu"
              className="w-80 rounded-lg"
            />
          </div>
          <div className="border-2 border-gray-200 p-4 rounded-xl w-96">
            <h1 className="text-3xl font-semibold text-center text-black">
              EKSO Çalışmaları Hızlandırdı
            </h1>
            <p className="font-googlefont mt-2 text-black">
              Antalya Organize Sanayi Bölgesinde, 2009 yılında faaliyete
              başlamış olan EKSO, Ekici Peynir’in üretimi sonucu açığa çıkan ve
              içerisinde bulunan laktik asit sebebiyle kısa sürede asitlenip
              çevreye oldukça zarar veren atıkların, ekonomiye tekrardan
              kazanılması amacıyla kurulmuştu. Şuan sadece Ekici Peynir’den
              çıkan atık peynir altı suyun doğaya yeniden kazandırılması için
              çalışan EKSO, bulunduğu bölgede yer alan başka işletmelerin
              peyniraltı suyunu değerlendirmek üzere çalışmalara başladı. Bugün,
              bölgesindeki diğer süt ve süt ürünleri üreten işletmelerle
              anlaşarak, doğaya attıkları peynir altı sularını, özel tanklar ile
              toparlıyor ve Organize Sanayi Bölgesinde bulunan işletmesinde
              üretim hattına dahil ediyor. İlerleyen dönemlerde, kapasite artışı
              için çalışmalarına başlayacak olan EKSO, yatırım sonucu
              kapasitesini arttırarak, bölgedeki tüm üreticilerden peynir altı
              sularını toplayabilecek.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    </>
  );
}
