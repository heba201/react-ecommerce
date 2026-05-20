

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

              <div className="flex items-center mt-[40.5px] gap-8">
                <div className="product-images p-4">
                  <div className='shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A] bg-white'>
                     <div className="gallary-content">
                      <Image  src={woman_shawl} alt='woman_shawl'/>
                     </div>
                  </div>
                </div>
                <div className="product-info">

                </div>
              </div>
      </div>
     </>
  )
}
