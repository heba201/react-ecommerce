

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
import { MdChevronRight , MdChevronLeft } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import woman_shawl from "@/assets/home/woman_shawl.png";
import { FaStar } from "react-icons/fa6";
import half_star from "@/assets/home/half_star.png";
import { CiSquareMinus } from "react-icons/ci";
import { FaPlus , FaShieldAlt } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { FaBolt , FaTruckFast , FaTruck } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { IoShareSocialSharp } from "react-icons/io5";
import { IoIosRefresh } from "react-icons/io";
import { FiMinus } from "react-icons/fi";
import ProductDetailsCarousel from '@/components/product/ProductDetailsCarousel'
import box from "@/assets/product_detials/box.png";
import { FaCheck } from "react-icons/fa6";
import ProductCard from '@/components/product/ProductCard'
import ProductsSwipper from '@/components/product/ProductsSwipper'
import FeaturesBar from '@/components/featuresBar/FeaturesBar'
import { getAllProducts, getProduct } from '@/services/product.service'
import { productI } from '@/types/producttype'
import TotalPrice from '@/components/product/TotalPrice'
import AddToCartBtn from '@/components/cart/AddToCartBtn'
import AddToWishlistBtn from '@/components/wishlist/AddToWishlistBtn'
import Rating from '@/components/product/Rating'
import ProductTabs from '@/components/product/ProductTabs'

export default async function ProductDetails({params}:{params:Promise<{productId:string}>}) {
  
  const {productId} = await params ;
  const productResponse =  await  getProduct(productId);
  const product : productI =  productResponse.data;
  const related =  await  getAllProducts(product.category._id);
  const relatedProducts : productI[] = related.data;
  
  return (
     <>
    <div className='min-h-screen'>
       <Breadcrumb className='xl:px-52 md:px-4 pt-[15.5px]'>
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

              <div className="xl:px-52 md:px-4 flex flex-col xl:flex-row md:flex-row xl:items-start md:items-start mt-[40.5px] xl:gap-8 md:gap-[32px] px-4">
                 
                <ProductDetailsCarousel images={product.images}/>

                <div className="product-info xl:w-3/4 md:[70%] w-[100%]">
                   <div className="bg-white shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A] pt-6 px-6 pb-[24px] rounded-xl">
                      <div className="flex items-center gap-2">
                         <a className='w-[122px] h-7 rounded-full py-[6px] px-3 bg-[#F0FDF4] text-[12px] font-medium leading-4 text-[#15803D]'>
                           {product.category.name}
                         </a>
                         <a className='w-[69px] h-7 rounded-full py-[6px] px-3 bg-[#F3F4F6] text-[12px] font-medium leading-4 text-[#364153]'>
                          {product.brand.name}
                         </a>
                      </div>
                      <h1 className='text-[30px] font-bold leading-9 text-[#101828] mt-4'>
                        {product.title}
                      </h1>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-0 text-[#FCC800]">
                    <Rating  rating={product.ratingsAverage}/> 
                    </div>
                    <span className='text-[14px] font-medium leading-5 text-[#4A5565]'>{product.ratingsAverage} ({product.ratingsQuantity})</span>
                  </div>

                     <div className="flex items-center gap-3 mt-4">
                       <span className='text-[30px] font-bold leading-9 text-[#101828]'>{product.priceAfterDiscount ? `${product.priceAfterDiscount} EGP` : `${product.price} EGP`}</span>
                       {product.priceAfterDiscount && <>
                        <span className="text-lg text-gray-400 line-through">{`${product.price} EGP`}</span>
                       <span className="bg-red-500 text-white text-sm px-3 py-1 rounded-full font-medium">Save {`${Math.round((product.priceAfterDiscount/product.price)*100)}%`}</span>
                       </>}
                      
                     </div>

                     <div className="flex items-center mt-6">
                     <span className='flex items-center justify-center  gap-[6px] bg-[#F0FDF4] w-[90px] h-8 rounded-full py-[6px] px-3 text-[14px] font-medium leading-5 text-[#008236]'>
                      <span className='w-2 h-2 rounded-full bg-[#00C950]'></span>
                      In Stock
                     </span>
                     </div>
                      
                      <div className='border-t border-[#F3F4F6] pt-5 mt-6'>
                         <p className='text-[16px] font-medium leading-[26px] text-[#4A5565]'>
                         {product.description}
                         </p>
                      </div>
                       
                     <TotalPrice priceAfterDiscount={product.priceAfterDiscount} price={product.price} quantity={product.quantity}  />
                    
                     <div>
                      <div className="flex items-center gap-[12px] mt-6">
                       <AddToCartBtn produtId={product._id} />
                       <button className="flex items-center   justify-center w-1/2 h-[52px] rounded-xl px-6 py-[14px] bg-[#101828]  font-medium text-base leading-6 text-center align-middle text-white">
                         <FaBolt className="w-5 h-4 text-white"/> Buy Now
                       </button>
                      </div>
                     </div>

                     <div className="flex items-center gap-[12px] mt-6">
                       <AddToWishlistBtn  productId={productId}/>
                      <button className="flex items-center justify-center w-14 h-[52px] rounded-xl px-4 pt-[15px] pb-[17px] border border-t-2 border-t-[#E5E7EB] hover:border-green-300 hover:text-green-600 transition text-[#364153]">
                          <IoShareSocialSharp className="w-5 h-4"/>
                      </button>
                     </div>

                     <div className="border-t border-t-[#F3F4F6] pt-[24px] mt-6">
                        <div className="grid xl:grid-cols-3 md:grid-cols-3 grid-cols-1  gap-[16px]">
                           
                           <div className='col-span-1 flex items-center xl:gap-[12px] md:gap-[10px]'>
                              <div className='flex items-center justify-center w-[40px] h-[40px] bg-[#DCFCE7] rounded-full'>
                                <FaTruckFast className="w-5 h-4 text-[#16A34A]"/>
                              </div>
                              <div>
                              <h4 className="font-medium text-sm leading-5 align-middle text-[#101828]">Free Delivery</h4>
                              <p className="font-medium text-xs leading-4 align-middle text-[#6A7282]">Orders over $50</p>
                              </div>
                            </div>

                             <div className='col-span-1 flex items-center xl:gap-[12px] md:gap-[10px]'>
                              <div className='flex items-center justify-center w-[40px] h-[40px] bg-[#DCFCE7] rounded-full'>
                                <IoIosRefresh className="w-5 h-4  scale-x-[-1] text-[#16A34A]"/>
                              </div>
                              <div>
                              <h4 className="font-medium text-sm leading-5 align-middle text-[#101828] whitespace-nowrap">30 Days Return</h4>
                              <p className="font-medium text-xs leading-4 align-middle text-[#6A7282] whitespace-nowrap">Money back</p>
                              </div>
                            </div>


                             <div className='col-span-1 flex items-center xl:gap-[12px] md:gap-[10px]'>
                              <div className='flex items-center justify-center w-[40px] h-[40px] bg-[#DCFCE7] rounded-full'>
                                <FaShieldAlt className="w-5 h-4 text-[#16A34A]"/>
                              </div>
                              <div>
                              <h4 className="font-medium text-sm leading-5 align-middle text-[#101828] whitespace-nowrap">Secure Payment</h4>
                              <p className="font-medium text-xs leading-4 align-middle text-[#6A7282] whitespace-nowrap">100% Protected</p>
                              </div>
                            </div>

                        </div>
                     </div>
                   </div>
                </div>
              </div>
            
             <ProductTabs product={product} />
              <div className="container mt-[72px] mb-[40px] relative xl:left-[208px] md:left-4 md:right-4 left-4 right-4 xl:right-[208px] pb-4 pt-4 xl:w-[75%]  md:w-[96%] w-[100%]">
              <ProductsSwipper relatedProducts={relatedProducts} />
              </div>  
            </div> 
            <FeaturesBar variant="product_details" /> 
            
     </>
  )
}
