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
     <main>
      <CarouselComponent/>
     </main>
  )
}
