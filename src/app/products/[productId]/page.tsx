

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

              <div className="px-52 flex items-start  mt-[40.5px] gap-8">
                 
                <ProductDetailsCarousel/>

                <div className="product-info w-3/4 ">
                   <div className="bg-white shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A] pt-6 px-6 pb-[24px] rounded-xl">
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
                     <span className='flex items-center justify-center  gap-[6px] bg-[#F0FDF4] w-[90px] h-8 rounded-full py-[6px] px-3 text-[14px] font-medium leading-5 text-[#008236]'>
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
                            <button id="decrease-qty"  className='w-[52px] h-12 opacity-50 pt-[15px] pr-4 pb-[17px] pl-4 flex items-center justify-center'>
                              <FiMinus className='w-5 h-4 text-[#4A5565]'  />
                            </button>
                            <input type="number" id="quantity" className='w-16 h-7 text-center focus:outline-none'/>
                            <button className='w-[52px] h-12 pt-[15px] pr-4 pb-[17px] pl-4 flex items-center justify-center'>
                              <FaPlus className='w-5 h-4 text-[#4A5565]'/>
                            </button>
                          
                          </div>
                          <span className='text-[14px] font-medium leading-5 text-[#6A7282]'>
                            220 available
                          </span>
                        </div>
                       </div>


                     <div className='bg-[#F9FAFB] p-4 mt-6'>
                          <div className='flex items-center justify-between'>
                            <span className='font-medium text-[16px] leading-6 align-middle text-[#4A5565]'>Total Price:</span>
                          <span className='font-bold text-base leading-5 align-middle text-[#16A34A]'>149.00 EGP</span>
                          </div>
                     </div>
                    
                     <div>
                      <div className="flex items-center gap-[12px] mt-6">
                       <button className="flex items-center justify-center  w-1/2 h-[52px] rounded-xl px-6 py-[14px] bg-[#16A34A] shadow-[0px_4px_6px_-4px_#16A34A40,0px_10px_15px_-3px_#16A34A40] font-medium text-base leading-6 text-center align-middle text-white">
                         <IoCart className="w-5 h-4 text-white"/> Add to Cart
                       </button>

                       <button className="flex items-center   justify-center w-1/2 h-[52px] rounded-xl px-6 py-[14px] bg-[#101828]  font-medium text-base leading-6 text-center align-middle text-white">
                         <FaBolt className="w-5 h-4 text-white"/> Buy Now
                       </button>
                      </div>
                     </div>

                     <div className="flex items-center gap-[12px] mt-6">
                      <button className="flex items-center justify-center flex-1  h-[52px] rounded-xl gap-2 px-4 py-3 border border-t-2 border-t-[#E5E7EB] font-medium text-base leading-6 text-center align-middle text-[#364153]">
                        <CiHeart className="w-5 h-4 text-[#364153]"/>Add to Wishlist
                      </button>
                      <button className="flex items-center justify-center w-14 h-[52px] rounded-xl px-4 pt-[15px] pb-[17px] border border-t-2 border-t-[#E5E7EB]">
                          <IoShareSocialSharp className="w-5 h-4 text-[#364153]"/>
                      </button>
                     </div>

                     <div className="border-t border-t-[#F3F4F6] pt-[24px] mt-6">
                        <div className="grid grid-cols-3 gap-[16px]">
                           
                           <div className='col-span-1 flex items-center gap-[12px]'>
                              <div className='flex items-center justify-center w-[40px] h-[40px] bg-[#DCFCE7] rounded-full'>
                                <FaTruckFast className="w-5 h-4 text-[#16A34A]"/>
                              </div>
                              <div>
                              <h4 className="font-medium text-sm leading-5 align-middle text-[#101828]">Free Delivery</h4>
                              <p className="font-medium text-xs leading-4 align-middle text-[#6A7282]">Orders over $50</p>
                              </div>
                            </div>

                             <div className='col-span-1 flex items-center gap-[12px]'>
                              <div className='flex items-center justify-center w-[40px] h-[40px] bg-[#DCFCE7] rounded-full'>
                                <IoIosRefresh className="w-5 h-4  scale-x-[-1] text-[#16A34A]"/>
                              </div>
                              <div>
                              <h4 className="font-medium text-sm leading-5 align-middle text-[#101828]">30 Days Return</h4>
                              <p className="font-medium text-xs leading-4 align-middle text-[#6A7282]">Money back</p>
                              </div>
                            </div>


                             <div className='col-span-1 flex items-center gap-[12px]'>
                              <div className='flex items-center justify-center w-[40px] h-[40px] bg-[#DCFCE7] rounded-full'>
                                <FaShieldAlt className="w-5 h-4 text-[#16A34A]"/>
                              </div>
                              <div>
                              <h4 className="font-medium text-sm leading-5 align-middle text-[#101828]">Secure Payment</h4>
                              <p className="font-medium text-xs leading-4 align-middle text-[#6A7282]">100% Protected</p>
                              </div>
                            </div>

                        </div>
                     </div>
                   </div>
                </div>
              </div>
            
              <div className='mt-[56px] w-[376px] pl-[24px] pr-[24px]  relative left-52 pb-6 gap-6  bg-white rounded-lg shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A]'>
               <div className='border-b border-b-[#E5E7EB] -mx-[24px]'>
                   <div className="flex items-center">
                    <button className='flex items-center gap-[8px] cursor-pointer px-6 py-4  border-b-2 border-b-[#16A34A]  bg-[#F0FDF480] font-medium text-[16px] leading-none text-center align-middle text-[#16A34A]'>
                     <Image src={box} alt='box' className='w-[17.5px] h-[14px] bg-[#16A34A]' />
                    Product Details
                    </button>

                    <button className='flex items-center gap-[8px] cursor-pointer px-6 py-4  font-medium text-[16px] leading-none text-center align-middle text-[#4A5565]'>
                     <FaStar className='w-[17.5px] h-[14px]' />
                     Reviews (18)
                    </button>

                    <button className='flex items-center gap-[8px]  cursor-pointer px-6 py-4  font-medium text-[16px] leading-none text-center align-middle text-[#4A5565]'>
                     <FaTruck  className='w-[17.5px] h-[14px] text-[#4A5565]' />
                      Shipping & Returns
                    </button>

                   </div>
               </div>
               
               <div className='space-y-6'>
                 <div>
                  <h3 className='font-semibold text-[18px] leading-[28px] text-[#101828]'>About this Product</h3>
                  <p className='font-medium text-[16px] leading-[26px] align-middle text-[#4A5565]'>Material Polyester Blend Colour Name Multicolour Department Women</p>
                 </div>
                 <div className="grid grid-cols-2 gap-[24px] mt-[24px]">
                   <div className='col-span-1  bg-[#F9FAFB] p-4'>
                   <h4 className='font-medium text-[16px] leading-none align-middle text-[#101828]'>
                    Product Information
                   </h4>
                   <ul className='space-y-2 list-none mt-[12px]'>
                    <li>
                       <div className="flex items-center justify-between">
                     <span className='font-medium text-sm leading-5 align-middle text-[#6A7282]'>Category</span>
                     <span className='font-medium text-[14px] leading-[20px] align-middle text-[#101828]'>Women's Fashion</span>
                    </div>
                    </li>
                    
                    <li>
                       <div className="flex items-center justify-between">
                     <span className='font-medium text-sm leading-5 align-middle text-[#6A7282]'>Subcategory</span>
                     <span className='font-medium text-[14px] leading-[20px] align-middle text-[#101828]'>Women's Clothing</span>
                    </div>
                    </li>

                    <li>
                       <div className="flex items-center justify-between">
                     <span className='font-medium text-sm leading-5 align-middle text-[#6A7282]'>Brand</span>
                     <span className='font-medium text-[14px] leading-[20px] align-middle text-[#101828]'>DeFacto</span>
                    </div>
                    </li>

                    <li>
                       <div className="flex items-center justify-between">
                     <span className='font-medium text-sm leading-5 align-middle text-[#6A7282]'>Items Sold</span>
                     <span className='font-medium text-[14px] leading-[20px] align-middle text-[#101828]'>4.565875507206704e+305+ sold</span>
                    </div>
                    </li>

                   </ul>
                   </div>

                   <div className='col-span-1  bg-[#F9FAFB] p-4'>
                   <h4 className='font-medium text-[16px] leading-none align-middle text-[#101828]'>
                    Key Features
                   </h4>
                   <ul className='space-y-2 list-none mt-[12px]'>
                    <li>
                      <div className="flex items-center font-medium text-[14px] leading-[20px] align-middle text-[#4A5565]">
                       <FaCheck  className='w-[17.5px] h-[14px] text-[#16A34A] pr-[8px]'/>
                       Premium Quality Product
                      </div>
                    </li>

                    <li>
                      <div className="flex items-center font-medium text-[14px] leading-[20px] align-middle text-[#4A5565]">
                       <FaCheck  className='w-[17.5px] h-[14px] text-[#16A34A] pr-[8px]'/>
                       100% Authentic Guarantee
                      </div>
                    </li>

                    <li>
                      <div className="flex items-center font-medium text-[14px] leading-[20px] align-middle text-[#4A5565]">
                       <FaCheck  className='w-[17.5px] h-[14px] text-[#16A34A] pr-[8px]'/>
                       Fast & Secure Packaging
                      </div>
                    </li>

                      <li>
                      <div className="flex items-center font-medium text-[14px] leading-[20px] align-middle text-[#4A5565]">
                       <FaCheck  className='w-[17.5px] h-[14px] text-[#16A34A] pr-[8px]'/>
                      Quality Tested
                      </div>
                    </li>

                   </ul>
                   </div>

                 </div>
               </div>
              </div>
              <div className="container mt-[72px] ml-[192px]">
                 text
              </div>
      </div>
     </>
  )
}
