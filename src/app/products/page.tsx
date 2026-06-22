"use client"
import { productI } from '@/types/producttype'
import React, { useEffect, useState } from 'react'
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
import { getAllProducts, getAllProductsFiltered } from '@/services/product.service'
import CarouselComponent from '@/components/commons/CarouselComponent'
import { FaBoxOpen } from "react-icons/fa";
import ProductCard from '@/components/product/ProductCard'
import FeaturesBar from '@/components/featuresBar/FeaturesBar'
import { useSearchParams } from "next/navigation";
import { getAllCategories } from '@/services/category.service'
import { categoryI } from '@/types/category.type'
import { FaFilter ,FaXmark ,FaLayerGroup ,FaFolderOpen } from "react-icons/fa6";
import { FaTags } from "react-icons/fa";
import { createHangingInputAbortSignal } from 'next/dist/server/app-render/dynamic-rendering'

export default  function Products() {
  const[products,setProducts] =useState<productI[]>([]);
  const searchParams = useSearchParams();
  const category = searchParams.get("category") ??  "";
  const categoryName = searchParams.get("category_name") ??  "";
  const categoryImg = searchParams.get("category_img") ??  "";
  const categoryId = category ? [category] : [];
  const brand = searchParams.get("brand") ?? "";
  const brandName = searchParams.get("brand_name") ??  "";
  const brandImg = searchParams.get("brand_img") ??  "";
  const brandId = brand ? [brand] : [];
  const[categoryData,setCategoryData] =useState<categoryI>();
  const [page, setPage] = useState(1);
  const subcategory = searchParams.get("subcategory") ??  "";
  const subcategoryName = searchParams.get("subcategory_name") ??  "";
  const subcategoryId = subcategory ? [subcategory] : [];
 async function getProducts(page:number){
    try {
  const response = await getAllProductsFiltered(page,"","",brandId,categoryId,"","",subcategoryId); 
  console.log(response);
  setProducts(response.data.data);
     } catch (error) { 
    }
  }
  
  useEffect(()=>{
    getProducts(page);
  })
  return (
    <>
     <div className='min-h-screen xl:px-48 md:px-4 px-4'>
      <div className='bg-[linear-gradient(135deg,#16A34A_0%,#22C55E_50%,#4ADE80_100%)] w-screen  xl:-mx-48  xl:px-48  md:px-4 md:-mx-4 -mx-4'>
        <div className="container pt-14 pl-4 pb-14">
            <nav className='flex items-center gap-2 mb-6'>
              <a className="font-medium text-sm leading-5 align-middle text-white/70">
                Home
              </a>
              <span className="font-medium text-sm leading-5 align-middle text-white/40">/</span>
             
              {category  ? (<>
              <Link href='/categories' className="font-medium text-sm leading-5 align-middle text-white">Categories</Link>
              <span className="font-medium text-sm leading-5 align-middle text-white/40">/</span>
              <span className="font-medium text-sm leading-5 align-middle text-white">{products[0]?.category.name ?? categoryName}</span>
              <span className="font-medium text-sm leading-5 align-middle text-white/40">/</span>
              <span className="font-medium text-sm leading-5 align-middle text-white">{products[0]?.category.name ?? categoryName}</span>
              </>):
              ('')}
           
            {brand  ? (<>
              <Link href='/brands' className="font-medium text-sm leading-5 align-middle text-white">brands</Link>
              <span className="font-medium text-sm leading-5 align-middle text-white/40">/</span>
              <span className="font-medium text-sm leading-5 align-middle text-white">{products[0]?.brand.name ?? brandName}</span>
       
              </>):
              ('')}
            
               {subcategory ? (<>
              <Link href='/categories' className="font-medium text-sm leading-5 align-middle text-white">Categories</Link>
              <span className="font-medium text-sm leading-5 align-middle text-white/40">/</span>
              <span className="font-medium text-sm leading-5 align-middle text-white">{subcategoryName}</span>

               </>):''}

               {(category ==="" && brand===""  && subcategory === "") ? <span className="font-medium text-sm leading-5 align-middle text-white">All Products</span>:""}

            </nav>
            <div className="flex items-center gap-5">
               
               <div className="w-16 h-16  rounded-2xl  bg-[#FFFFFF33] backdrop-blur-sm">
                 <div className='flex items-center justify-center w-16 h-16 rounded-2xl  shadow-[0px_8px_10px_-6px_#0000001A,0px_20px_25px_-5px_#0000001A,0px_0px_0px_1px_#FFFFFF4D'>
                  
                  {category ?<Image src={products[0]?.category.image ?? categoryImg} width={1000} height={1000} alt={products[0]?.category.slug} className='w-10 h-10 object-contain' /> : "" }
                  
                  {brand ?<Image src={products[0]?.brand.image ?? brandImg} width={1000} height={1000} alt={products[0]?.brand.slug} className='w-10 h-10 object-contain' /> : "" }

                  {subcategory ?<FaFolderOpen className='w-10 h-10 text-3xl text-white' /> : "" }

                  { (category ==="" && brand==="" && subcategory === "") ? <FaBoxOpen  className='w-[37.5px] h-7.5 text-white'/> : ""}
                 </div>
               </div>

                <div className="flex flex-col gap-0.5">
                  <h1 className='text-[36px] font-bold leading-10 tracking-[-0.9px] text-white'>
                    {category ? products[0]?.category.name ?? categoryName:""}
                    {brand ? products[0]?.brand.name:""}
                    {subcategory ? subcategoryName:""}

                    { (category ==="" && brand==="" && subcategory === "") ? "All Products" : "" }
                  </h1>
                  <p className='text-[16px] font-medium leading-6 text-white/80'>
                    {category ?   `Browse products in ${categoryName}`:""}
                    {brand ?   `Shop ${brandName} products`:""}
                    {subcategory ?   `Browse ${subcategoryName} products`:""}
                   { (category ==="" && brand==="" && subcategory === "") ? "Explore our complete product collection" : "" }
                  </p>
                </div>
            </div>
        </div>
      </div>

      {/* products */}
      <div className="container pt-8 pb-8">
        <div className='text-[14px] font-medium leading-5 text-[#6A7282] mb-6'>
        Showing {products.length} products
        </div>
        {(category || brand || subcategory) && (<>
        <div className="mb-6 flex flex-wrap items-center gap-3">
      <span className="flex items-center gap-2 text-sm text-gray-600">
        <FaFilter /> Active Filters:
      </span>
     
        <Link href='/products'
          className={`cursor-pointer flex items-center gap-2 px-3 py-1.5 text-sm font-medium rounded-full  ${category ? 'text-green-700 bg-green-100 hover:bg-green-200' : ''} ${brand ? 'text-violet-700 bg-violet-100 hover:bg-violet-200' : ''} ${subcategory ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200' : ''} transition-colors`}
        >
        {category  ? <><FaLayerGroup className="text-xs" />{products[0]?.category.name ?? categoryName}</>  : ""}  
        {brand ? <><FaTags className="text-xs" />{products[0]?.brand.name ?? brandName}</>  : ""}  

        {subcategory ? <><FaFolderOpen className="text-xs" />{subcategoryName}</>  : ""}

          <FaXmark className="text-xs" />
        </Link>
      <Link href='/products'
        className="text-sm text-gray-500 underline hover:text-gray-700"
      >
        Clear all
      </Link>
    </div>
        </>
        )}
        { ((category && products.length === 0) || (brand && products.length === 0) || (subcategory && products.length === 0)) ? (<>
        
        <div className="w-full py-20 text-center">
      <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
        <FaBoxOpen className="text-3xl text-gray-400" />
      </div>

      <h3 className="mb-2 text-lg font-bold text-gray-900">
        No Products Found
      </h3>

      <p className="mb-6 text-gray-500">
        No products match your current filters.
      </p>

      <Link
        href="/products"
        className="inline-flex items-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-green-700"
      >
        View All Products
      </Link>
    </div>
    
        
        </>):
        
        
        (<>
         <div className="grid xl:grid-cols-5 md:grid-cols-5 grid-cols-1 xl:gap-[24.01px] md:gap-4 gap-4">
        {products.map((product) => (
                <ProductCard key={product.id} variant="products" product={product}/>
                   ))}
        </div>
        
        </>)
        }
       
      </div>
     </div>
    <FeaturesBar variant=''/>
    </>
  )
}
