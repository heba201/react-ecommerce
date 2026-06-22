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

export default function CartItem({product,setProducts}:{product : cartProductI,setProducts:(products:cartProductI[])=>void}) {

      const {getCartData} = useContext(CartContext);
      const[isLoading,setIsLoading] = useState(false);
      const[isLoadingUpdateInc,setIsLoadingUpdateInc] = useState(false);
      const[isLoadingUpdateDec,setIsLoadingUpdateDec] = useState(false);
      const[productCounter,setProductCounter] = useState(0);

      useEffect(()=>{
        setProductCounter(product.count);
      },[product])


      async function updateCart(productId : string ,count:number){
              try {
                console.log(productCounter);
                if(count > productCounter){
                  setIsLoadingUpdateInc(true);
                }else{
                 setIsLoadingUpdateDec(true);
                }
                 const response =   await updateProductFromCart(productId,count);   
                  toast.success(response.message);
                  setProducts(response.data.products);
                  getCartData();
              } catch (error) {
                   toast.error((error as Error).message)
                    console.log(error)  
              }finally{
           setIsLoadingUpdateInc(false);
           setIsLoadingUpdateDec(false);
          } 
          }

          async function removeProduct(productId : string){
                  try {
                  setIsLoading(true);
                  const response = await removeProductFromCart(productId);   
                  toast.success(response.message);
                  setProducts(response.data.products);
                  getCartData();
                  } catch (error) {
                     toast.error((error as Error).message) 
                  }finally{
                       setIsLoading(false);
                       setIsLoadingUpdateInc(false);
                       setIsLoadingUpdateDec(false);
                  }
                 
              }

  return (
    <>
        <div className="flex items-start xl:gap-6 md:gap-6 gap-4">
         <a className='relative'>
          <div className='w-32 h-32 p-3 rounded-xl border bg-[linear-gradient(135deg,#F9FAFB_0%,#FFFFFF_50%,#F3F4F6_100%)] border-t border-t-[#F3F4F6]'>
            <Image src={product.product.imageCover}  width={1000} height={1000}  alt={product.product.slug}  className='w-full h-full object-cover'/>
          </div>
          <div className='absolute left-[65.14px] bottom-[15.38px] xl:top-[151.25px] md:top-[151.25px] top-[200.25px]  flex items-center gap-1 justify-center  w-16.75 h-4.75 px-2 py-0.5  rounded-full bg-[#00C950] font-semibold text-[10px] leading-3.75 align-middle text-white'>
         <FaCheck className='w-2.5 h-2 text-white'/>
         In Stock
          </div>
         </a>

         <div className="flex-1">
          <div className='mb-3'>
           <div className='mb-3 font-semibold text-[18px] leading-[29.25px] align-middle text-[#101828]'>
            {product.product.title}
           <div className="flex  items-center gap-2">
            <span className='w-29.5 h-6 px-2.5 py-1 rounded-full bg-[linear-gradient(90deg,#F0FDF4_0%,#F3F4F6_100%)] text-[#15803D] font-medium text-[12px] leading-4 align-middle'>{product.product.category.name}</span>
            <span className='font-medium text-[12px] leading-4 align-middle text-[#99A1AF]'>.</span>
            <span className='font-medium text-[12px] leading-4 align-middle text-[#6A7282]'>SKU: 5CA0AD</span>
           </div>
          </div>
          </div>
        <div className='mb-1'>
         <div className="flex gap-2">
             <span className='font-bold text-[18px] leading-7 align-middle text-[#16A34A]'>{product.price}EGP</span>
              <span className='font-medium text-[12px] leading-4 align-middle text-[#99A1AF] mt-2'>per unit</span>
         </div>
        </div>
          <div className="mt-auto flex xl:flex-row md:flex-row flex-col xl:items-center md:items-center items-start xl:justify-between md:justify-between justify-start gap-4 md:gap-0"> 
            <div className="flex items-center justify-between   w-30.5 h-10.5 rounded-xl p-1 border bg-[#F9FAFB] border-t border-t-[#E5E7EB]">
                <button onClick={()=>updateCart(product.product._id,productCounter-1)} disabled={isLoadingUpdateDec} className="cursor-pointer flex items-center justify-center  w-8 h-8 rounded-lg text-white shadow-[0_1px_2px_-1px_rgba(0,0,0,0.1),0_1px_3px_0_rgba(0,0,0,0.1)]">
                {isLoadingUpdateDec ? <Spinner className='text-[#16A34A]'/>: <FiMinus  className='w-3.75 h-3 text-[#6A7282]' />}
                
               </button>
                <span className='font-bold text-[16px] leading-6 text-center align-middle text-[#101828]'>{productCounter}</span>
                <button onClick={()=>updateCart(product.product._id,productCounter+1)} disabled={isLoadingUpdateInc} className='cursor-pointer w-8 h-8 rounded-lg flex items-center justify-center bg-[#16A34A] shadow-[0_1px_2px_-1px_rgba(22,163,74,0.3),0_1px_3px_0_rgba(22,163,74,0.3)]'>
                  {isLoadingUpdateInc ? <Spinner className='text-white'/>: <FaPlus className='w-3.75 h-3 text-white'/>}
                </button>
            </div>

            <div className="flex items-center gap-4 p-2">
              <div className="text-right">
                <p className='font-medium text-[12px] leading-4 text-right align-middle text-[#99A1AF]'>Total</p>
                <p  className=''>
                <span className='font-bold text-[20px] leading-7 text-right align-middle text-[#101828]'>
                {product.price * productCounter}
                </span>
                <span className='font-medium text-[14px] leading-5 text-right align-middle text-[#99A1AF]'>
                  EGP
                </span>
                </p>
              </div>

              <button  onClick={()=>removeProduct(product.product._id)} disabled={isLoading} className='flex items-center justify-center  w-10 h-10 rounded-xl border bg-[#FEF2F2] border-t border-t-[#FFC9C9] cursor-pointer  disabled:cursor-not-allowed disabled:bg-gray-400 text-[#FB2C36] hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-200'>
                <IoMdTrash className='w-[17.5px] h-3.5' />
              </button>
            </div>
          </div>
         </div>
        </div>
       
    
    </>
  )
}
