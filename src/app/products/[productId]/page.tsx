

import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import { Heart, ShoppingCart, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  
} from "@/components/ui/carousel"
import { MdChevronRight } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import woman_shawl from "@/assets/home/woman_shawl.png";
import { FaStar } from "react-icons/fa6";
import half_star from "@/assets/home/half_star.png";
import { CiSquareMinus } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";

export default async function ProductDetails() {
      
  return (
     <>
    <div className='min-h-screen'>
       <Breadcrumb className='px-52 pt-[15.5px]'>
             <BreadcrumbList>
               <BreadcrumbItem>
                 <BreadcrumbLink asChild>
                   <Link href="/" className='flex items-center gap-1.5 text-[#6A7282] text-[14px] font-medium leading-5'>
               <FaHome  className='w-[15px] h-3 text-[#6A7282]'/>
               Home
            </Link>
                 </BreadcrumbLink>
               </BreadcrumbItem>
               <BreadcrumbSeparator />
               <BreadcrumbItem>
                 <BreadcrumbLink asChild>
                   <Link href="/products" className='text-[#6A7282] text-[14px] font-medium leading-5'>Women's Fashion</Link>
                 </BreadcrumbLink>
               </BreadcrumbItem>
               <BreadcrumbSeparator />
                <BreadcrumbItem>
                 <BreadcrumbLink asChild>
                   <Link href="/products" className='text-[14px] font-medium leading-5 text-[#101828]'>Woman Shawl</Link>
                 </BreadcrumbLink>
               </BreadcrumbItem>
             </BreadcrumbList>
           </Breadcrumb>

              <div className="px-52 flex items-center mt-[40.5px] gap-8">
                <div className="product-images p-4 w-[26%]">
                  <div className='shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A] bg-white'>
                     <div className="gallary-content">
                      <Image  src={woman_shawl} alt='woman_shawl'/>
                      
                      <div className="image-gallery-thumbnails">
                        
                        <div className="Thumbnail Navigation-content">

                        </div>
                      </div>


                     </div>
                  </div>
                </div>
                <div className="product-info w-[74%]">
                   <div className="bg-white shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A] pt-6 px-6">
                      <div className="flex items-center gap-2">
                         <a className='w-[122px] h-7 rounded-full py-[6px] px-3 bg-[#F0FDF4] text-[12px] font-medium leading-4 text-[#15803D]'>
                          Women's Fashion
                         </a>
                         <a className='w-[69px] h-7 rounded-full py-[6px] px-3 bg-[#F3F4F6] text-[12px] font-medium leading-4 text-[#364153]'>
                          DeFacto
                         </a>
                      </div>
                      <h1 className='text-[30px] font-bold leading-9 text-[#101828] mt-4'>
                        Woman Shawl
                      </h1>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-0">
                      <FaStar className='w-5 h-4 text-[#FCC800]' />
                      <FaStar className='w-5 h-4 text-[#FCC800]' />
                      <FaStar className='w-5 h-4 text-[#FCC800]' />
                      <FaStar className='w-5 h-4 text-[#FCC800]' />
                       <Image src={half_star} alt='half_star' className='w-5 h-4' />
                    </div>
                    <span className='text-[14px] font-medium leading-5 text-[#4A5565]'>4.8 (18 reviews)</span>
                  </div>

                     <div className="flex items-center mt-4">
                          <span className='text-[30px] font-bold leading-9 text-[#101828]'>149 EGP</span>
                     </div>

                     <div className="flex items-center mt-6">
                     <span className='flex items-center justify-center bg-[#F0FDF4] w-[90px] h-8 rounded-full py-[6px] px-3 text-[14px] font-medium leading-5 text-[#008236]'>
                      <span className='w-2 h-2 rounded-full bg-[#00C950]'></span>
                      In Stock
                     </span>
                     </div>
                      
                      <div className='border-t border-[#F3F4F6] pt-5 mt-6'>
                         <p className='text-[16px] font-medium leading-[26px] text-[#4A5565]'>
                          Material Polyester Blend Colour Name Multicolour Department Women
                         </p>
                      </div>
                       
                       <div>
                        <label className='block text-[14px] font-medium leading-5 text-[#364153] mt-6' >
                          Quantity
                        </label>
                        <div className="flex items-center gap-4 mt-2">
                          <div className="flex items-center border-t-2 border-t-[#E5E7EB] w-[172px] h-[52px] rounded-lg border">
                            <button id="decrease-qty" className='w-[52px] h-12 opacity-50 pt-[15px] pr-4 pb-[17px] pl-4 flex items-center justify-center'>
                              <CiSquareMinus className='w-5 h-4 text-[#4A5565]'  />
                            </button>
                            <input id="quantity"/>
                            <button className='w-[52px] h-12 pt-[15px] pr-4 pb-[17px] pl-4 flex items-center justify-center'>
                              <FaPlus className='w-5 h-4 text-[#4A5565]'/>
                            </button>
                          
                          </div>
                          <span className='text-[14px] font-medium leading-5 text-[#6A7282]'>
                            220 available
                          </span>
                        </div>
                       </div>

                   </div>
                </div>
              </div>
      </div>
     </>
  )
}
