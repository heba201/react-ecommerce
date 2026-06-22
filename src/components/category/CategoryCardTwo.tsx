import React from 'react'
import pro1 from "@/assets/categories/pro1.jpg";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import { categoryI } from '@/types/category.type';

export default function CategoryCardTwo({category} :{category:categoryI}) {
  return (
   <>
<a href={`categories/${category._id}`} className="group col-span-1 md:pb-[113px] pb-[13px] xl:pb-[29.2px] flex flex-col items-center justify-center rounded-[16px] hover:shadow-[0_4px_6px_rgba(0,0,0,0.1),0_2px_4px_rgba(187,247,208,0.5)]  transition-all duration-300 ease-in-out border border-[#F3F4F6] hover:border-[#BBF7D0] overflow-hidden hover:-translate-y-1">
  {/* xl:w-[231.61px] xl::h-[231.61px] */}
  <div className="aspect-square md:px-[13px] xl:px-[25px] md:pt-[13px] xl:pt-[25px]  bg-[#F9FAFB] rounded-[12px] overflow-hidden flex items-center justify-center">
     <Image src={category.image}  width={1000} height={1000} className="w-full h-full object-cover rounded-[12px] group-hover:scale-110 transition-transform duration-500" alt='' />
    </div>
      <h3 className="mt-4 font-bold text-base leading-5 text-center align-middle text-[#101828]  group-hover:text-green-600 transition-colors">{category.name}</h3>
     <div className="flex items-center mt-2 text-[#16A34A] opacity-0 group-hover:opacity-100 transition-opacity">
     <span className="flex items-center justify-center gap-1 font-medium text-xs leading-4 align-middle">View Subcategories
     <GoArrowRight className="w-[12.5px] h-[10px]"/>
     </span>
     </div>
  
   </a>
   </>
  )
}
