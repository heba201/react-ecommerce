
import { productI } from '@/types/producttype'
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
import { getAllProducts } from '@/services/product.service'
import AddToCartBtn from '@/components/cart/AddToCartBtn'
import { FaHome } from "react-icons/fa";
import { MdChevronRight } from "react-icons/md";

export default async function ProductDetails({
  params}:{
params:Promise<{productId:string}>
  }) {
     const {productId} = await params
     const response = await fetch(`${process.env.BASE_URL}/products/${productId}`)
     const data = await response.json()
     const product : productI =  data.data
     const related =  await  getAllProducts(product.category._id);
     const relatedProducts : productI[] = related.data;
     console.log(relatedProducts);
  return (
     <>
     <div className='min-h-screen h-231'>
     <h1>asasssssssssssssss</h1>
      <Breadcrumb className='px-52 pt-[15.5px]'>
      <BreadcrumbList>
        <BreadcrumbItem className='flex items-center '>
          <BreadcrumbLink asChild>
            <Link href="/" className='flex  items-center text-lg font-semibold'>
            <FaHome />
            Home
            </Link>
           <MdChevronRight />
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/products" className='text-lg font-semibold'>Products</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className='text-xl font-bold'>{product.title}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
      </div>
     </>
  )
}
