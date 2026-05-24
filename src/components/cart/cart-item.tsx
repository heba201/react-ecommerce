import { removeProductFromCart, updateProductFromCart } from '@/actions/cart.action'
import { cartProductI } from '@/types/cart.type'
import { Spinnaker } from 'next/font/google';
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'sonner';
import { tr } from 'zod/locales';
import { Spinner } from '../ui/spinner';
import { CartContext } from '@/provider/cart-provider';
import woman_shawl from "@/assets/home/woman_shawl.png";
import { FaCheck } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa";
import { IoMdTrash } from "react-icons/io";

export default function CartItem() {
  return (
    <>
        <div className="flex items-center gap-6">
         <a className='relative'>
          <div className='w-32 h-32 p-3 rounded-xl border bg-[linear-gradient(135deg,#F9FAFB_0%,#FFFFFF_50%,#F3F4F6_100%)] border-t border-t-[#F3F4F6]'>
            <Image src={woman_shawl} alt='woman_shawl' />
          </div>
          <div className='absolute left-[128px] bottom-[15.38px] top-[163.63px] right-0  flex items-center gap-1 justify-center  w-16.75 h-4.75 px-2 py-0.5  rounded-full bg-[#00C950] font-semibold text-[10px] leading-3.75 align-middle text-white'>
         <FaCheck className='w-2.5 h-2 text-white'/>
         In Stock
          </div>
         </a>

         <div className="flex-1">
          <div className='mb-3'>
           <div className='mb-3 font-semibold text-[18px] leading-[29.25px] align-middle text-[#101828]'>
           Woman Shawl
           <div className="flex  items-center gap-2">
            <span className='w-29.5 h-6 px-2.5 py-1 rounded-full bg-[linear-gradient(90deg,#F0FDF4_0%,#F3F4F6_100%)] text-[#15803D] font-medium text-[12px] leading-4 align-middle'>Women's Fashion</span>
            <span className='font-medium text-[12px] leading-4 align-middle text-[#99A1AF]'>.</span>
            <span className='font-medium text-[12px] leading-4 align-middle text-[#6A7282]'>SKU: 5CA0AD</span>
           </div>
          </div>
          </div>
        <div className='mb-1'>
         <div className="flex gap-2">
             <span className='font-bold text-[18px] leading-7 align-middle text-[#16A34A]'>149 EGP</span>
              <span className='font-medium text-[12px] leading-4 align-middle text-[#99A1AF] mt-2'>per unit</span>
         </div>
        </div>
          <div className="mt-auto flex items-center justify-between"> 
            <div className="flex items-center justify-between w-30.5 h-10.5 rounded-xl p-1 border bg-[#F9FAFB] border-t border-t-[#E5E7EB]">
                <div className="flex items-center justify-center  w-8 h-8 rounded-lg text-white shadow-[0_1px_2px_-1px_rgba(0,0,0,0.1),0_1px_3px_0_rgba(0,0,0,0.1)]">
                <FiMinus className='w-3.75 h-3 text-[#6A7282]' />
               </div>
                <span className='font-bold text-[16px] leading-6 text-center align-middle text-[#101828]'>2</span>
                <span className='w-8 h-8 rounded-lg flex items-center justify-center bg-[#16A34A] shadow-[0_1px_2px_-1px_rgba(22,163,74,0.3),0_1px_3px_0_rgba(22,163,74,0.3)]'>
                  <FaPlus className='w-3.75 h-3 text-white'/>
                </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-right">
                <p className='font-medium text-[12px] leading-4 text-right align-middle text-[#99A1AF]'>Total</p>
                <p  className=''>
                <span className='font-bold text-[20px] leading-7 text-right align-middle text-[#101828]'>
                298 
                </span>
                <span className='font-medium text-[14px] leading-5 text-right align-middle text-[#99A1AF]'>
                  EGP
                </span>
                </p>
              </div>

              <button className='flex items-center justify-center  w-10 h-10 rounded-xl border bg-[#FEF2F2] border-t border-t-[#FFC9C9]'>
                <IoMdTrash className='w-[17.5px] h-3.5 text-[#FB2C36]' />
              </button>
            </div>
          </div>
         </div>
        </div>
       
    
    </>
  )
}
