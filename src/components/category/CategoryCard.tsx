import React from 'react'
import mobiles from "@/assets/home/Mobiles.png";
import Image from "next/image";

export default function CategoryCard() {
  return (
   <>
   <a className="col-span-1 flex flex-col items-center justify-center left-[759.98px] top-41 gap-3 rounded-lg p-4 bg-white shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]">
    <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#DCFCE7]">
     <Image src={mobiles} className="w-full rounded-full" alt='' />
    </div>
     <h3 className="font-medium text-[16px] leading-6 tracking-normal text-center align-middle text-[#364153]">Beauty & Health</h3>
   </a>
   </>
  )
}
