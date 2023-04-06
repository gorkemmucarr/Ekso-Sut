import React from 'react'

export default function Footer() {
  return (
    <div className="bg-zinc-800 pt-44 pb-24 border-t-2 border-gray-300 mt-10">
    <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
      <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
        
        <p className="mb-4">
          <strong className="text-2xl text-cream">Bize Ulaşın</strong> 
        </p>
        <div className=" mt-2 mb-8 -mx-2">
          <div className="mx-2 p-2 shadow-md">
            <p className='text-cream'>Organize Sanayi Bölgesi 07190 ANTALYA / TÜRKİYE</p>
          </div>
          <div className="mx-2 flex p-2 shadow-md">
            <p className='text-cream'>+90 242 258 13 96 (Pabx)</p>
          </div>
          <div className="mx-2 p-2 shadow-md">
            <p className='text-cream'>+90 242 258 13 95</p>
          </div>
          <div className="mx-2 p-2 shadow-md">
            <p className='text-cream'>info@eksosut.com</p>
          </div>
        </div>
        <p className="text-cream">©{new Date().getFullYear()} - EKSO</p>
      </div>
      
    </div>
  </div>
  )
}
