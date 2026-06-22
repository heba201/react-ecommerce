"use client"
import { useEffect, useState } from "react";
import React from 'react'
import Image from 'next/image'
import box from "@/assets/orders/box.png";
import lock from "@/assets/orders/lock.png";
import FeaturesBar from "@/components/featuresBar/FeaturesBar";
import OrderCard from "@/components/orders/OrderCard";
import Link from 'next/link';
import { getUserOrders } from "@/actions/orders.action";
import { orderI } from "@/types/order.type";

export default function Orders() {
const[orders,setOrders] = useState<orderI[]>([]);
const[isLoading,setIsLoading] = useState(false);

  async function fetchUserOrders(){
        try {
          setIsLoading(true);
          const response = await getUserOrders();
          setOrders(response);  
        } catch (error) {
          console.log(error);
        }finally{
          setIsLoading(false);
        }
      }

       useEffect(()=>{
          fetchUserOrders();
          },[]);
  return (
    <>
    <div className='min-h-screen xl:px-[192px] px-[16px]'>
      <div className='px-[16px] py-[32px]'>
         <div className="mb-8">
            <nav className="flex items-center gap-2">
                <a className="font-medium text-[14px] leading-[20px] tracking-normal align-middle text-[#6A7282]">Home</a>
                <span className="font-medium text-[14px] leading-[20px] tracking-normal align-middle text-[#D1D5DC]">/</span>
                <span className="font-medium text-[14px] leading-[20px] tracking-normal align-middle text-[#101828]">My Orders</span>
            </nav>
            <div className="flex xl:flex-row md:flex-row flex-col items-start mt-[24px] justify-between">
             <div className="flex items-center gap-4">
               <div className="flex items-center justify-center w-[56px] h-[56px] rounded-[16px] bg-[linear-gradient(135deg,_#22C55E_0%,_#16A34A_100%)] shadow-[0px_4px_6px_-4px_#22C55E40,_0px_10px_15px_-3px_#22C55E40]">
             <Image src={box} alt='box' />
               </div>
               <div>
                <h1 className="font-bold text-[30px] leading-[36px] tracking-normal align-middle text-[#101828]">
                   My Orders 
                </h1>
                <p className="font-medium text-[14px] leading-[20px] tracking-normal align-middle text-[#6A7282]">
                    Track and manage your 8 orders
                </p>
               </div>
             </div>
             <Link href='/products'  className="flex items-center self-start px-[16px] py-[8px] gap-[8px] rounded-[12px] font-medium text-[14px] leading-[20px] tracking-normal align-middle text-[#16A34A]">
              <Image src={lock} alt='lock' />
              Continue Shopping
             </Link>
            </div>
         </div>
          {orders.map((order) => (
          <OrderCard key={order.id} order={order} />
           ))}
      </div>
    </div>
     <FeaturesBar variant='' /> 
    </>
  )
}
    