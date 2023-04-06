import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <>
        {/*menu*/}
    <div className='bg-zinc-800 p-5 flex justify-between items-center'>  
        <Link href="/">
          <h1 className='text-cream p-3 font-bold hover:text-white'>Ekso Süt</h1>
        </Link>
    <ul className='flex'>
    <li className='mx-7'>
      <details className=''>
        <summary className='cursor-pointer text-cream font-mono text-lg'>Kurumsal</summary>
        <ul className='bg-gradient-to-r from-slate-400 to-gray-400 absolute w-52 p-3 mt-3 rounded-lg'>
          <li>
            <Link href="/kurumsal/hakkimizda" className='font-mono text-lg text-white hover:text-black'>Hakkımızda</Link>
          </li>
          <li className='mt-1'>
            <Link href="/kurumsal/kvkk" className='font-mono text-lg text-white hover:text-black'>KVKK</Link>
          </li>
          <li className='mt-1'>
            <Link href="/kurumsal/haberlerveduyurular" className='font-mono text-lg text-white hover:text-black'>Haberler ve duyurular</Link>
          </li>
        </ul>
      </details>
    </li>

    <li className='mx-7'>
      <details>
        <summary className='cursor-pointer text-cream font-mono text-lg'>Faydalı Bigiler</summary>
        <ul className='bg-gradient-to-r from-slate-400 to-gray-400 absolute w-52 p-3 mt-3 rounded-lg'>
          <li>
            <Link href="/faydalibilgiler/peyniraltisuyutozu" className='font-mono text-lg text-white hover:text-black'>Peyniraltı Suyu Tozu</Link>
          </li>
          <li  className='mt-1'>
            <Link href="/faydalibilgiler/suttozu" className='font-mono text-lg text-white hover:text-black'>Süt tozu</Link>
          </li>
        </ul>
      </details>
    </li>

      <li className='mx-7'>
        <details>
          <summary className='cursor-pointer text-cream font-mono text-lg'>Ürünler</summary>
          <ul className='bg-gradient-to-r from-slate-400 to-gray-400 absolute w-52 p-3 mt-3 rounded-lg'>
            <li>
              <Link href="/urunler/50demineralizepast" className='font-mono text-lg text-white hover:text-black'>%50 Deminarelize PAST</Link>
            </li>
            <li  className='mt-1'>
            <Link href="/urunler/70demineralizepast" className='font-mono text-lg text-white hover:text-black'>%70 Deminarelize PAST</Link>
            </li>
            <li  className='mt-1'>
              <Link href="/urunler/yagsizsuttozu" className='font-mono text-lg text-white hover:text-black'>Yağsız Süt Tozu</Link>
            </li>
          </ul>
        </details>
      </li>
    

    <li className='mx-7'> 
      <Link href="/ihracat" className='text-cream font-mono text-lg'>İhracat</Link>
    </li>
    <li className='mx-7'>
      <Link href="/iletisim" className='text-cream font-mono text-lg'>İletişim</Link>
    </li>
  </ul>

    </div>
    
    </>
    
  )
}
