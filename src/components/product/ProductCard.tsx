import React from 'react'
import woman_shawl from "@/assets/home/woman_shawl.png";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { LuRefreshCw } from "react-icons/lu";
import { FaStar } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { GoPlus } from "react-icons/go";

export default function ProductCard({variant}: { variant: string }) {
  return (
    <div className="col-span-1 left-[1196.8px]  rounded-[8px] border">
     <div className="relative p-5">
        <span className="absolute xl:top-4 md:top-3  top-3 left-[11.99px] w-11.75 h-6 px-2 py-1 rounded-md bg-[#FB2C36] text-white font-medium text-[12px] leading-[16px] tracking-normal align-middle">-30%</span>
     <Image src={woman_shawl} alt='woman_shawl' />
        <div className="absolute w-[32px] h-[112px] flex flex-col pb-2 top-3 top-2 right-[11.99px]">
         <div className='flex items-center justify-center  w-[32px] h-[40px] pb-2'>
            <button className='flex items-center justify-center h-[32px] w-[32px] rounded-full bg-white shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A]'>
                <FaRegHeart className='w-5 h-4 text-[#4A5565]'/>
            </button>
         </div>

         <div className='flex items-center justify-center w-[32px] h-[40px] pb-2'>
            <button className='flex items-center justify-center h-[32px] w-[32px] rounded-full bg-white shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A]'>
                <LuRefreshCw className='w-5 h-4 text-[#4A5565]'/>
            </button>
         </div>

         <div className='flex items-center justify-center w-[32px] h-[40px] pb-2'>
            <a className='flex items-center justify-center h-[32px] w-[32px] rounded-full bg-white shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A]'>
                <FaRegEye  className='w-5 h-4 text-[#4A5565]'/>
            </a>
         </div>

        </div>
      </div>
      <div className="xl:p-4 md:p-2  p-4 gap-1">
        <div className="font-medium text-[12px] leading-[16px] tracking-normal align-middle text-[#6A7282]">
            Women's Fashion
        </div>
        <a className="font-medium text-[16px] leading-[24px] tracking-normal align-middle text-[#364153]">Woman Bordeaux Long Sleeve
           Blouse BORDEAUX</a>
           <div className="flex items-center">
             <div className='pr-2'>
                <div className="flex items-center">
                    <div className="pt-[3px] pb-[5px] flex items-center">
                     <FaStar className="w-[20px] h-[16px] text-[#FCC800]"/>
                     <FaStar className="w-[20px] h-[16px] text-[#FCC800]"/>
                     <FaStar className="w-[20px] h-[16px] text-[#FCC800]"/>
                     <FaStar className="w-[20px] h-[16px] text-[#FCC800]"/>
                     <CiStar className="w-[20px] h-[16px] text-[#FCC800]"/>
                    </div>
                </div>
             </div>

             <span className="font-medium text-[12px] leading-[16px] tracking-normal align-middle text-[#6A7282] whitespace-nowrap">4.2 (10)</span>
           </div>
           <div className="flex items-center xl:justify-between md:gap-2 justify-between">
                <div className="flex items-center xl:gap-2 md:gap-1">
                     <span className={`font-bold md:text-[18px] xl:text-lg leading-7 tracking-normal align-middle text-[#16A34A] ${variant === 'products' ? '' : 'whitespace-nowrap'}`}>349 EGP</span>
                    <span className="font-medium text-[14px] leading-[20px] tracking-normal line-through align-middle top-[5.5px] left-[79.06px] text-[#6A7282] whitespace-nowrap">499 EGP</span>
                   
                </div>
                <button className="xl:w-[40px] xl:h-[40px] md:w-5 md:h-5  w-[40px] h-[40px]  rounded-full bg-[#16A34A] flex items-center justify-center">
                    <GoPlus className='w-[20px] h-[16px]  text-white' />
                </button>
           </div>
      </div>
    </div>
  )
}
