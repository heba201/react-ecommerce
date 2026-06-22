import React from 'react'
import brand1 from "@/assets/brands/brand1.png";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import { brandI } from '@/types/brand.type';
import Link from 'next/link'

export default function BrandCard({brand}:{brand:brandI}) {
    return (
   <>
   <a href={`/products?brand=${brand._id}&&brand_name=${brand.name}&&brand_img=${brand.image}`} className="group col-span-1 md:p-[21px] xl:p-[21px p-4  rounded-2xl border  border-[#F3F4F6] shadow-[0_1px_2px_-1px_#0000001A,0_1px_3px_0_#0000001A] overflow-hidden bg-white hover:shadow-xl hover:border-violet-200 transition-all duration-300 hover:-translate-y-1">
    <div className="aspect-square p-4 flex items-center justify-center mb-3 xl:w-[151px] xl:h-[151px] rounded-[12px]  bg-[#F9FAFB] overflow-hidden">
      <Image src={brand.image} alt={brand.slug} width={1000} height={1000}  className="w-full h-full object-contain rounded-[12px]" />
    </div>
    <h3 className="mb-1.5 font-semibold text-sm leading-5 text-center align-middle text-[#101828] group-hover:text-violet-600 transition-colors truncate">
       {brand.name}
    </h3>
    <div className="flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <Link href={`/products?brand=${brand._id}&&brand_name=${brand.name}&&brand_img=${brand.image}`} className="flex items-center justify-center gap-1  font-medium text-xs leading-4 align-middle text-[#7F22FE] whitespace-nowrap">
          View Products
          <GoArrowRight className='w-[12.5px] h-[10px] text-[#7F22FE]' />
        </Link>
    </div>
   </a>
   </>
    )
}