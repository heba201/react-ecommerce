import { getUserToken } from '@/lib/auth'
import { authOptions } from '@/lib/authOptions'
import { getServerSession } from 'next-auth'
import React from 'react'
import mark from "@/assets/brands/mark.png";
import Image from "next/image";
import BrandCard from '@/components/brand/BrandCard';
import FeaturesBar from '@/components/featuresBar/FeaturesBar';
import { getAllBrands } from '@/services/brands.service';
import { brandI } from '@/types/brand.type';

export default async function Brans() {
       const response = await getAllBrands();
       const brands :brandI[] = response.data;
  return (
    <>
    <div className='min-h-screen bg-[#F9FAFB80]'>
    <div className="px-4 md:px-4 xl:px-[192px] bg-[linear-gradient(135deg,#7F22FE_0%,#8E51FF_50%,#C27AFF_100%)]">
      <div className="pt-16 pb-16 px-4">
       <nav className="flex items-center gap-2 mb-6">
        <a href="" className="font-medium text-sm leading-5 align-middle text-[#FFFFFFB2]">Home</a>
        <span className="font-medium text-sm leading-5 align-middle text-[#FFFFFF66]">/</span>
        <span className="font-medium text-sm leading-5 align-middle text-white">Brands</span>
       </nav>
       <div className="flex items-center gap-5">
         <div className="flex items-center  justify-center w-16 h-16 rounded-2xl bg-[#FFFFFF33] backdrop-blur-[8px] shadow-[0_8px_10px_-6px_#0000001A,0_20px_25px_-5px_#0000001A,0_0_0_1px_#FFFFFF4D]">
          <Image src={mark} alt='mark' />
         </div>
         <div>
          <h1 className="font-bold text-[36px] leading-10 tracking-[-0.9px] align-middle text-white">Top Brands</h1>
          <p className="font-medium text-base leading-5 align-middle mt-1 text-[#FFFFFFCC]">Shop from your favorite brands</p>
         </div>
       </div>
      </div>
    </div>
     
    <div className='px-4 md:px-4 xl:px-[208px] mt-[40px] mb-[40px]'>
    <div className="grid grid-cols-2 md:grid-cols-6 xl:grid-cols-6 gap-5 xl:gap-5 md:gap-5">
       {brands.map((brand) => (
           <BrandCard key={brand._id} brand={brand} />
            ))}
    </div>
    </div>
    </div>
     <FeaturesBar variant='' /> 
    </>
  )
}
