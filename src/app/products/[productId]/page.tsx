

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


export default async function ProductDetails() {
      
  return (
     <>
    <div className='min-h-screen'>
      <div className='px-48 pt-14'>
<div className="container text-black">
            <nav className='flex items-center gap-2 mb-6'>
              <a className="font-medium text-sm leading-5 align-middle">
                Home
              </a>
              <span className="font-medium text-sm leading-5 align-middle">/</span>
              <span className="font-medium text-sm leading-5 align-middle">All Products</span>
            </nav>
            </div>
      </div>
        
            </div>
     </>
  )
}
