"use client"
import { clearCart, getCart } from '@/actions/cart.action'
import { CartCheckout } from '@/components/cart/cart-checkout';
import CartItem from '@/components/cart/cart-item';
import { Avatar } from '@/components/ui/avatar';
import { Spinner } from '@/components/ui/spinner';
import { CartContext } from '@/provider/cart-provider';
import { cartI, cartProductI } from '@/types/cart.type';
import { Trash2 } from 'lucide-react';
import { finalizeLayoutVaryPath } from 'next/dist/client/components/segment-cache/vary-path';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react'
import { IoCart } from "react-icons/io5";
import { IoMdTrash } from "react-icons/io";
import Image from 'next/image'
import lock from "@/assets/cart/lock.png";
import mark from "@/assets/cart/mark.png";
import { FaTruck  } from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";
import { BiSolidLockAlt } from "react-icons/bi";
import FeaturesBar from '@/components/featuresBar/FeaturesBar';

export default function Cart() {
  return (
    <>
    <div className='bg-[#F9FAFB] pt-8 pb-20.5'>
      <div className="container mx-auto">
       <div className='mb-8'>
            <nav className="flex items-center gap-2 mb-4">
              <a className='font-medium text-[14px] leading-5 text-[#6A7282]'>Home</a>
              <span className='font-medium text-[14px] leading-5 align-middle text-[#6A7282]'>/</span>
              <span className='font-medium text-[14px] leading-5 align-middle text-[#101828]'>Shopping Cart</span>
            </nav>
            <div className="flex  items-center gap-3">
               <div>
                <h1 className="flex  items-center gap-3 font-bold text-[30px] leading-9 align-middle text-[#101828]">
                  <span className="flex  items-center justify-center bg-linear-to-r from-[#16A34A] to-[#15803D] w-12 h-12 rounded-xl">
                    <IoCart className='w-[37.5px] h-7.5 text-white' />
                  </span>
                  Shopping Cart
                </h1>
                <p className='mt-2 font-medium text-[16px] leading-4 align-middle'><span className='text-[#5A6370]'>You have</span> <span className='font-semibold text-[16px] leading-4 align-middle text-[#16A34A]'>4 items</span><span className='text-[#5A6370]'>in your cart</span> </p>
               </div>
            </div>
       </div>

        <div className="grid grid-cols-3 gap-8">
        <div className='col-span-2 '>
         
          <div className="space-y-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div className='bg-white rounded-2xl border border-[#F3F4F6]  mb-4 p-5.25 shadow-[0_1px_2px_-1px_rgba(0,0,0,0.1),0_1px_3px_0_rgba(0,0,0,0.1)]'>
            <CartItem />
            </div>
             ))}
            <div className="mt-6 flex items-center  justify-between pt-6   border  border-t-[#E5E7EB]">
             <a className="flex items-center gap-2 text-[#16A34A] font-medium text-[14px] leading-5 align-middle">
              <span className='font-medium text-[14px] leading-5 align-middle text-[#16A34A]'>←</span>
              Continue Shopping
             </a>
             <button className='flex items-center gap-2'>
               <IoMdTrash className='w-3.75 h-3 text-[#99A1AF]' />
               <span className='font-medium text-[14px] leading-5 text-center align-middle text-[#99A1AF]'>Clear all items</span>
             </button>
            </div>
          </div>
          
        </div>
          
         <div className='col-span-1'>
           <div className='rounded-2xl border shadow-[0_1px_2px_-1px_rgba(0,0,0,0.1),0_1px_3px_0_rgba(0,0,0,0.1)] bg-white border-t border-t-[#F3F4F6]'>
            <div className='gap-1 px-6 py-4 bg-[linear-gradient(90deg,#16A34A_0%,#15803D_100%)] rounded-tl-lg rounded-tr-lg'>
              <h2 className='flex items-center text-white font-bold text-[18px] leading-7 align-middle'>
                <Image src={lock}  alt='lock' className='w-[22.5px] h-4.5'/>
                Order Summary
              </h2>
              <p className='font-medium text-[14px] leading-5 align-middle text-[#DCFCE7]'>4 items in your cart</p>
            </div>
             <div className='p-6'>
              <div className='flex items-center gap-3 w-107.5 h-19  p-4 rounded-xl bg-[linear-gradient(90deg,#F0FDF4_0%,#F3F4F6_100%)]'>
                <div className='flex items-center justify-center w-10 h-10 bg-[#DCFCE7] rounded-full'>
                   <FaTruck className='w-5 h-4 text-[#00A63E]' />
                  </div>
                   <div>
                  <p className='font-semibold text-[16px] leading-4 align-middle text-[#008236]'>Free Shipping!</p>
                  <p className='font-medium text-[14px] leading-5 align-middle text-[#00A63E]'>You qualify for free delivery</p>
                   </div>
                
              </div>
             
            <div className='space-y-3 mb-5'>
            <div className='flex items-center justify-between'>
               <span className='font-medium text-[16px] leading-4 align-middle text-[#4A5565]'>Subtotal</span>
               <span className='font-medium text-[16px] leading-4 align-middle text-[#101828]'>1,994 EGP</span>
            </div>

             <div className='flex items-center justify-between'>
               <span className='font-medium text-[16px] leading-4 align-middle text-[#4A5565]'>Shipping</span>
               <span className='font-medium text-[16px] leading-4 align-middle text-[#00A63E]'>FREE</span>
            </div>
             
             <div className='w-full h-full pt-3 border-dashed border-[3px_2px] border-t border-t-[#E5E7EB]'>
                  <div className='flex items-center justify-between'>
                    <div className='flex items-center text-right'>
                      <span className='font-medium text-[14px] leading-5 text-right align-middle text-[#6A7282 mt-[9.5px]'>EGP</span>
                      <span className='font-bold text-[16px] leading-4 text-right align-middle text-[#101828'>1,994</span>
                    </div>
                    <span className='font-semibold text-[16px] leading-4 align-middle text-[#101828]'>Total</span>
                  </div>
             </div>
            </div>
            <button className='mb-5 flex items-center justify-center w-full h-full py-3 gap-2 rounded-xl border border-dashed border-t border-t-[#D1D5DC]'>
               <Image src={mark}  alt='mark' className='w-5 h-4'/>
               <span className='font-medium text-[14px] leading-5 text-center align-middle text-[#4A5565]'>
                Apply Promo Code
               </span>
            </button>

             <a className='mb-5 flex items-center justify-center gap-3 w-full h-full px-6 py-4 rounded-xl bg-linear-to-r from-[#16A34A] to-[#15803D] shadow-[0_4px_6px_-4px_rgba(22,163,74,0.2),0_10px_15px_-3px_rgba(22,163,74,0.2)]'>
               <BiSolidLockAlt className='w-5 h-4 text-white' />
               <span className='font-semibold text-[16px] leading-4 align-middle text-white'>Secure Checkout</span>
             </a>
              <div className="flex items-center justify-center w-full h-full py-2 gap-4">
                <div className="flex items-center gap-[6.75px]">
                  <FaShieldAlt className='w-3.75 h-3 text-[#00C950]' />
                  <span className="font-medium text-[12px] leading-4 align-middle text-[#6A7282]">Secure Payment</span>
                </div>
                <div className='w-px h-4 bg-[#E5E7EB'></div>
                <div className="flex items-center gap-[6.75px]">
                  <FaTruck className='w-3.75 h-3 text-[#2B7FFF]' />
                  <span className="font-medium text-[12px] leading-4 align-middle text-[#6A7282]">Fast Delivery</span>
                </div>

              </div>
             </div>

             <a  className="w-full py-2 flex items-center justify-center text-[#16A34A] font-medium text-[14px] leading-5 text-center align-middle">
                   ← Continue Shopping
             </a>
           </div>

         </div>
        </div>
      </div>
    </div>
     <FeaturesBar variant='' /> 
     </>
  )
}
