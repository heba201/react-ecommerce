import { productI } from '@/types/producttype'
import React from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import { Heart, ShoppingCart, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  
} from "@/components/ui/carousel"
import { addProductToCart } from '@/actions/cart.action'
import AddToCartBtn from '@/components/cart/AddToCartBtn'
import { getAllProducts } from '@/services/product.service'
import CarouselComponent from '@/components/commons/CarouselComponent'
import { FaBoxOpen } from "react-icons/fa";

export default async function Products() {
  const data = await  getAllProducts();
  const products : productI[]= data.data; 
  return (
     <div className='min-h-screen'>
      <div className='bg-[linear-gradient(135deg,#16A34A_0%,#22C55E_50%,#4ADE80_100%)] pl-48 pr-48'>
        <div className="container pt-14 pl-4 pb-14">
            <nav className='flex items-center gap-2'>
              <a className="font-medium text-sm leading-5 align-middle text-white/70">
                Home
              </a>
              <span className="font-medium text-sm leading-5 align-middle text-white/40">/</span>
              <span className="font-medium text-sm leading-5 align-middle text-white">All Products</span>
            </nav>
            <div className="flex items-center gap-5 ">
               
               <div className="w-16 h-16 bg-[#FFFFFF33] backdrop-blur-sm">
                 <div className='flex items-center justify-center w-16 h-16 rounded-full  shadow-[0px_8px_10px_-6px_#0000001A,0px_20px_25px_-5px_#0000001A,0px_0px_0px_1px_#FFFFFF4D'>
                  <FaBoxOpen  className='w-[37.5px] h-7.5 text-white'/>
                 </div>
               </div>

                <div className="flex flex-col gap-0.5">
                  <h1 className='text-[36px] font-bold leading-10 tracking-[-0.9px] text-white'>
                    All Products
                  </h1>
                  <p className='text-[16px] font-medium leading-6 text-white/80'>
                    Explore our complete product collection
                  </p>
                </div>
            </div>
        </div>
      </div>
     </div>
  )
}
