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
import { FaBoxOpen , FaArrowRight  } from "react-icons/fa";

export default function Cart() {
    const {getCartData,totalCartPrice,noOfCartItems} = useContext(CartContext);
    const[products,setProducts] = useState<cartProductI[]>([]);
    const[isLoading,setIsLoading] = useState(false);
    const[isLoadingClear,setIsLoadingClear] = useState(false);
    const [subtotal,setSubtotal] = useState(0);
    async function getAllProductCart(){
      try {
        setIsLoading(true);
        const response : cartI = await getCart();
        setProducts(response.data.products);  
      } catch (error) {
        console.log(error);
      }finally{
        setIsLoading(false);
      }
    }
    async function clearOurCart(){
      try {
        setIsLoadingClear(true);
        const response = await clearCart();
            setProducts(response.data.products);
            getCartData();
      } catch (error) {
        console.log(error);
      }finally{
         setIsLoadingClear(false);
      }
    }
 
    useEffect(()=>{
    getAllProductCart();
    },[]);

  if(!isLoading && products.length === 0){
    return  <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-md text-center">

        <div className="relative mb-8">
          <div className="w-32 h-32 rounded-full bg-gray-100 flex items-center justify-center mx-auto">
            <FaBoxOpen className="text-5xl text-gray-300" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          Your cart is empty
        </h2>

        <p className="text-gray-500 mb-8 leading-relaxed">
          Looks like you haven't added anything to your cart yet.
          <br />
          Start exploring our products!
        </p>

        <a
          href="/products"
          className="inline-flex items-center gap-2 bg-[#16a34a] text-white py-3.5 px-8 rounded-xl font-semibold hover:bg-green-700 transition-all shadow-lg active:scale-[0.98]"
        >
          Start Shopping
          <FaArrowRight className="text-sm" />
        </a>

      </div>
    </div>
  }

  return (
     <>
    <div className='bg-[#F9FAFB] pt-8 pb-20.5 xl:px-48'>
      <div className="container xl:px-4 md:px-4 px-4">
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
                <p className='mt-2 font-medium text-[16px] leading-4 align-middle'><span className='text-[#5A6370]'>You have</span> <span className='font-semibold text-[16px] leading-4 align-middle text-[#16A34A]'>{noOfCartItems} items</span> <span className='text-[#5A6370]'>in your cart</span> </p>
               </div>
            </div>
       </div>

        <div className="grid xl:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-8">
        <div className='xl:col-span-2 md:col-span-2 col-span-1'>
         
          <div className="space-y-4">
           {products.map((product) => (
            
            // relative
            <div   key={product._id} className=' bg-white rounded-2xl border border-[#F3F4F6]  mb-4 xl:p-5.25 md:p-5.25 p-2 shadow-[0_1px_2px_-1px_rgba(0,0,0,0.1),0_1px_3px_0_rgba(0,0,0,0.1)]'>
            <CartItem  product={product} setProducts={setProducts}/>
            </div>
             ))}
            <div className="mt-6 flex items-center  justify-between pt-6   border-t  border-t-[#E5E7EB]">
             <Link href='/products' className="cursor-pointer flex items-center gap-2 text-[#16A34A] hover:text-green-700 font-medium text-[14px] leading-5 align-middle">
              <span className='font-medium text-[14px] leading-5 align-middle'>←</span>
              Continue Shopping
             </Link>
             <button onClick={()=>clearOurCart()} className='cursor-pointer flex items-center gap-2 text-[#99A1AF] hover:text-red-500 transition-colors'>
               <IoMdTrash className='w-3.75 h-3' />
               <span className='font-medium text-[14px] leading-5 text-center align-middle'>Clear all items</span>
             </button>
            </div>
          </div>
          
        </div>
          
         <div className='col-span-1'>
           <div className='rounded-2xl border shadow-[0_1px_2px_-1px_rgba(0,0,0,0.1),0_1px_3px_0_rgba(0,0,0,0.1)] bg-white border-t border-t-[#F3F4F6]'>
            <div className='gap-1 px-6 py-4 bg-[linear-gradient(90deg,#16A34A_0%,#15803D_100%)] rounded-tl-lg rounded-tr-lg'>
              <h2 className='flex items-center gap-2 text-white font-bold text-[18px] leading-7 align-middle'>
                <Image src={lock}  alt='lock'/>
                Order Summary
              </h2>
              <p className='mt-1 font-medium text-[14px] leading-5 align-middle text-[#DCFCE7]'>{noOfCartItems} items in your cart</p>
            </div>
             <div className='p-6'>
              <div className='mb-5 flex items-center gap-3  p-4 rounded-xl bg-[linear-gradient(90deg,#F0FDF4_0%,#F3F4F6_100%)]'>
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
               <span className='font-medium text-[16px] leading-4 align-middle text-[#101828]'>{totalCartPrice} EGP</span>
            </div>

             <div className='flex items-center justify-between'>
               <span className='font-medium text-[16px] leading-4 align-middle text-[#4A5565]'>Shipping</span>
               <span className='font-medium text-[16px] leading-4 align-middle text-[#00A63E]'>FREE</span>
            </div>
             
             <div className='pt-3 border-t border-[#E5E7EB]   border-dashed'>
                  <div className='flex items-center justify-between'>
                     <span className='font-semibold text-[16px] leading-4 align-middle text-[#101828]'>Total</span>
                    <div className='flex items-center text-right'>
                       <span className='font-bold text-[16px] leading-4 text-right align-middle text-[#101828'>{totalCartPrice}</span>
                      <span className='font-medium text-[14px] leading-5 text-right align-middle text-[#6A7282] mt-[9.5px]'>EGP</span>
                     
                    </div>
                   
                  </div>
             </div>
            </div>
            <button className='mb-5 flex items-center justify-center w-full py-3 gap-2 rounded-xl border border-dashed border-t border-t-[#D1D5DC]'>
               <Image src={mark}  alt='mark' />
               <span className='font-medium text-[14px] leading-5 text-center align-middle text-[#4A5565]'>
                Apply Promo Code
               </span>
            </button>

             <Link href='/checkout' className='mb-5 flex items-center justify-center gap-3 xl:px-6 md:px-3 py-4 rounded-xl bg-linear-to-r from-[#16A34A] to-[#15803D] hover:shadow-[0_4px_6px_-4px_rgba(22,163,74,0.2),0_10px_15px_-3px_rgba(22,163,74,0.2)] cursor-pointer hover:border-green-400 hover:text-green-600 hover:bg-green-50/50 transition-all'>
               <BiSolidLockAlt className='w-5 h-4 text-white' />
               <span className='font-semibold text-[16px] leading-4 align-middle text-white whitespace-nowrap'>Secure Checkout</span>
             </Link>
              <div className="flex items-center justify-center md:gap-1.5 py-2 md:px-3 gap-4">
                <div className="flex items-center gap-1.5">
                  <FaShieldAlt className='w-3.75 h-3 text-[#00C950]' />
                  <span className="font-medium text-[12px] leading-4 align-middle text-[#6A7282] whitespace-nowrap">Secure Payment</span>
                </div>
                <div className='w-px h-4 bg-[#E5E7EB'></div>
                <div className="flex items-center gap-1.5">
                  <FaTruck className='w-3.75 h-3 text-[#2B7FFF]' />
                  <span className="font-medium text-[12px] leading-4 align-middle text-[#6A7282] whitespace-nowrap">Fast Delivery</span>
                </div>

              </div>
             </div>

             <Link href='/products'  className="mb-6 py-2 flex items-center justify-center text-green-600 font-medium text-[14px] leading-5 text-center align-middle hover:text-green-700">
                   ← Continue Shopping
             </Link>
           </div>

         </div>
        </div>
      </div>
    </div>
     <FeaturesBar variant='' /> 
     </>
  )
}
