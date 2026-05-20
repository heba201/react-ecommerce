

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


export default async function ProductDetails() {
      
  return (
     <>
    <div className='min-h-screen'>
      <Breadcrumb className='px-208 pt-[28px] bg-blue-500'>
      <BreadcrumbList className='flex items-center gap-[4px]'>
        <BreadcrumbItem className='flex items-center'>
          <BreadcrumbLink asChild>
            <Link href="/" className='text-lg font-semibold flex items-center'>
               <FaHome />
               Home
            </Link>
          </BreadcrumbLink>
          <MdChevronRight />
        </BreadcrumbItem>
        

        <BreadcrumbItem className='flex items-center'>
          <BreadcrumbLink asChild>
            <Link href="/" className='text-lg font-semibold flex items-center'>
               <FaHome />
               Home
            </Link>
          </BreadcrumbLink>
          <MdChevronRight />
        </BreadcrumbItem>


      </BreadcrumbList>
    </Breadcrumb>
       
      </div>
     </>
  )
}
