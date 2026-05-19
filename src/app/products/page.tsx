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
export default async function Products() {
  const data = await  getAllProducts();
  const products : productI[]= data.data; 
  return (
     <div className='min-h-screen'>
      <div className='bg-[linear-gradient(135deg,#16A34A_0%,#22C55E_50%,#4ADE80_100%)] pl-48 pr-48'>
        <div className="container pt-14 pl-4">
            <nav className='flex items-center gap-2'>
              <a className="font-medium text-sm leading-5 align-middle text-white/70">
                Home
              </a>
              <span className="font-medium text-sm leading-5 align-middle text-white/40">/</span>
              <span className="font-medium text-sm leading-5 align-middle text-white">All Products</span>
            </nav>
        </div>
      </div>
     </div>
  )
}
