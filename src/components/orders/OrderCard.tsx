"use client"

import React, { useState } from 'react'
import woman_shawl from "@/assets/home/woman_shawl.png";
import { GoClockFill } from "react-icons/go";
import Image from 'next/image'
import { HiHashtag } from "react-icons/hi2";
import { RiCashFill } from "react-icons/ri";
import { FaCalendarAlt , FaChevronUp , FaPhoneAlt} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import note from "@/assets/orders/note.png";
import box2 from "@/assets/orders/box2.png";
import { orderI } from '@/types/order.type';
import { cartProductI } from '@/types/cart.type';
import { FaTruck  } from "react-icons/fa6";
import visa_card from "@/assets/orders/visa_card.png";

export default function OrderCard({order}:{order:orderI}) {
  const[subtotal,setSubtotal] = useState(0);
  
  const [openId, setOpenId] = useState(0);
  const toggle = (orderId:number) => {
        setOpenId(openId === orderId ? 0 : orderId);
  };

function DateConverter(dateVal:string) {
  const isoDate = "2026-04-29T12:42:00.663Z";
  const dateObj = new Date(dateVal);
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    month: 'short', 
    day: 'numeric', 
    year: 'numeric'  
  }).format(dateObj);

  return formattedDate 
}
 
  return (
    <div className='space-y-4 mb-[16px]'>
            <div className="xl:p-[24px] md:p-[24px] p-[16px] rounded-[16px] border border-[#BBF7D0] bg-white hover:shadow-[0px_4px_6px_-4px_#DCFCE780,0px_10px_15px_-3px_#DCFCE780]">
              <div className="flex items-start gap-5">
                <div className="relative w-fit">
                  <div className="flex items-center justify-center w-[112px] h-[112px] p-[10px] rounded-[16px] border  border-[#F3F4F6] bg-[linear-gradient(135deg,_#F9FAFB_0%,_#FFFFFF_100%)]">
                  <Image src={order.cartItems[0].product.imageCover} width={1000} height={1000} alt={order.cartItems[0].product.slug}/>
                  </div>
                  {order.cartItems.length > 1 && (
                  <div className="absolute -top-2 -right-2  flex items-center justify-center w-[28px] h-[28px] rounded-full bg-[#101828] shadow-[0px_4px_6px_-4px_#0000001A,_0px_10px_15px_-3px_#0000001A] font-bold text-[12px] leading-[16px] text-center tracking-normal align-middle text-white">
                 + {order.cartItems.length -1}
                  </div>
                  )}
                </div>
                <div className="flex-1">
                    <div className="flex items-start justify-between">
                    <div>
                      {!order.isDelivered && <>
                        <div className="flex items-center justify-center gap-[7.5px] w-[102px] h-[24px] px-[10px] py-[4px] gap-[6px] rounded-[8px] bg-[#FEF3C6] mb-[8px]">
                         <GoClockFill className="w-[15px] h-[12px] text-[#E17100]"/>
                    <span className="font-semibold text-[12px] leading-[16px] tracking-normal align-middle text-[#E17100]">Processing</span>   
                         </div></>}

                          {order.isDelivered && <>
                        <div className="flex items-center justify-center gap-[7.5px] w-[102px] h-[24px] px-[10px] py-[4px] gap-[6px] rounded-[8px] bg-[#DCFCE7] mb-[8px]">
                         <FaTruck className="w-[15px] h-[12px] text-[#155DFC]"/>
                    <span className="font-semibold text-[12px] leading-[16px] tracking-normal align-middle text-[#155DFC]">On the way</span>   
                         </div></>}

                        <h3 className="flex items-center gap-2 font-bold text-[18px] leading-[28px] tracking-normal align-middle text-[#101828]">
                          <HiHashtag className="w-[15px] h-[12px] text-[#99A1AF]"/>
                          {order.id}
                        </h3>
                    </div>
                   {order.paymentMethodType === 'cash' && <div className="flex items-center justify-center shrink-0 w-[40px] h-[40px] rounded-[12px] bg-[#F3F4F6]">
                        <RiCashFill className="w-[20px] h-[16px] text-[#4A5565]" />
                    </div>}
                    
                   {order.paymentMethodType === 'card' && <div className="flex items-center justify-center shrink-0 w-[40px] h-[40px] rounded-[12px] bg-[#F3E8FF]">
                        <Image src={visa_card}  alt='visa_card' />
                    </div>}
                    </div>

                   <div className="mt-[11.5px] flex flex-wrap items-center md:gap-3 xl:gap-3 gap-1.5">
                       <span className="flex items-center gap-[6px] font-medium text-[14px] leading-[20px] tracking-normal align-middle text-[#6A7282]">
                      <FaCalendarAlt className="flex items-center w-[15px] h-[12px] text-[#99A1AF]" />
                     {DateConverter(order.createdAt)}
                    </span>
                    <div className="w-[4px] h-[4px] rounded-full bg-[#D1D5DC]"></div>
                    <span className="flex items-center gap-[6px] font-medium text-[14px] leading-[20px] tracking-normal align-middle text-[#6A7282]">
                      <Image src={box2} alt='box2' />
                      {order.cartItems.length} item
                    </span>
                    <div className="w-[4px] h-[4px] rounded-full bg-[#D1D5DC]"></div>
                    <span className="flex items-center gap-[6px] font-medium text-[14px] leading-[20px] tracking-normal align-middle text-[#6A7282]">
                     <FaLocationDot className="w-[15px] h-[12px] text-[#99A1AF]" />
                        Sadat City
                    </span>
                   </div>
                   
                   <div className="mt-[11.5px] flex items-center justify-between">
                    <div className='flex items-end gap-[3.68px]'>
                     <span className="font-bold text-[14px] leading-[16px] tracking-normal align-middle text-[#101828]">{order.totalOrderPrice}</span>
                      <span className="font-medium text-[14px] leading-[20px] tracking-normal align-middle text-[#99A1AF] translate-y-[2px]">EGP</span>  
                    </div>
                    <button onClick={() => toggle(order.id)} className="flex items-center justify-center px-[16px] py-[10px] gap-[8px] rounded-[12px] bg-[#16A34A] shadow-[0px_4px_6px_-4px_#16A34A40,_0px_10px_15px_-3px_#16A34A40] text-white font-semibold text-[14px] leading-[20px] text-center tracking-normal align-middle cursor-pointer">
                         {openId === order.id ? "Hide" : "Details"}
                      <FaChevronUp className="w-[15px] h-[12px] opacity-100 rotate-180"/>
                     
                    </button>
                   </div>
                </div>
              </div>
               {openId === order.id && (
              <div className="mt-[24px] border-t border-[#F3F4F6] bg-[#F9FAFB80]">
               <div className="p-5">
                <h4 className="mb-[16px] flex items-center gap-2 font-semibold text-[14px] leading-[20px] tracking-normal align-middle text-[#101828]">
                    <div className="flex items-center justify-center w-[24px] h-[24px] rounded-[8px] bg-[#DCFCE7]">
                    <Image src={note} alt='note' />
                    </div>
                    Order Items
                </h4>
                  {order.cartItems.map((product) => (
                <div key={product._id} className="mb-2 flex items-center justify-between gap-4 p-[16px] rounded-[12px] border border-[#F3F4F6] bg-white">
                <div className="w-[64px] h-[64px] p-[8px] rounded-[12px] bg-[#F9FAFB]">
                   <Image src={product.product.imageCover} width={1000} height={1000} alt={product.product.slug}/>
                </div>
                <div className="flex-1">
                <p className="font-medium text-[16px] leading-[14px] tracking-normal align-middle text-[#101828">{product.product.title}</p>
                <p className="font-medium text-[14px] leading-[20px] tracking-normal align-middle">{product.count} × {product.price} EGP</p>
                </div>
              
                <div className="text-right">
                <p className="font-bold text-[18px] leading-[28px] text-right tracking-normal align-middle text-[#101828]">{Math.round((product.count)*(product.price))}</p>
               <p className="font-medium text-[12px] leading-[16px] text-right tracking-normal align-middle text-[#99A1AF]">EGP</p>
                </div>
                </div>
               ))}

               </div>
               
               <div className="px-5 flex flex-col md:flex-row xl:flex-row items-start gap-4">
                <div className="px-[16px] py-[16px] pb-[55.25px] rounded-[12px] border border-[#F3F4F6] bg-white w-full md:w-1/2 xl:w-1/2">
                   <h4 className='mb-[12px] flex items-center gap-2 font-semibold text-[14px] leading-[20px] tracking-normal align-middle text-[#101828]'>
                   <div className="flex items-center justify-center w-[24px] h-[24px] rounded-[8px] bg-[#DCFCE7]">
                     <FaLocationDot className="w-[15px] h-[12px] text-[#155DFC]"/>
                     </div>
                     Delivery Address
                </h4>
                 
                <div className='space-y-2 mb-3'>
                 <p className="font-medium text-[16px] leading-[14px] tracking-normal align-middle text-[#101828]">Sadat City</p>
                <p className="font-medium text-[14px] leading-[22.75px] tracking-normal align-middle text-[#4A5565]">Sadat City , Abo Bakr</p>
               <p className="flex items-center gap-2 font-medium text-[14px] leading-[20px] tracking-normal align-middle text-[#4A5565]">
               <FaPhoneAlt className="w-[15px] h-[12px] text-[#99A1AF]" />
                01097514862
               </p>
                </div>
                </div>
                 
                <div className="p-[16px] rounded-[12px] border border-[#FEE685] bg-[#FEF3C6] w-full md:w-1/2 xl:w-1/2">
                   <h4 className="mb-[12px] flex items-center gap-2 font-semibold text-[14px] leading-[20px] tracking-normal align-middle text-[#101828]">
                    <div className="flex items-center justify-center w-[24px] h-[24px] rounded-[8px] bg-[#FE9A00]">
                    <GoClockFill className="w-[15px] h-[12px] text-white"/>
                    </div>
                     Order Summary
                    </h4>
                     
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                        <span className="font-medium text-[14px] leading-[20px] tracking-normal align-middle text-[#4A5565]">Subtotal</span>
                        
                       <span className="font-medium text-[14px] leading-[20px] tracking-normal align-middle text-[#4A5565]">{order.cartItems.reduce((acc:number,counter:cartProductI)=>acc + (counter.count*counter.price),0)} EGP</span>
                        </div>

                        <div className="flex items-center justify-between">
                        <span className="font-medium text-[14px] leading-[20px] tracking-normal align-middle text-[#4A5565]">Shipping</span>
                       <span className="font-medium text-[14px] leading-[20px] tracking-normal align-middle text-[#4A5565]">{order.shippingPrice}</span>
                        </div>
                      <div className="flex items-center justify-between">
                      <span className="font-medium text-[14px] leading-[20px] tracking-normal align-middle text-[#4A5565]">Tax Price</span>
                       <span className="font-medium text-[14px] leading-[20px] tracking-normal align-middle text-[#4A5565]">{order.taxPrice}</span>
                       </div>

                        <hr className="h-[1px] border border-[#E5E7EB80]" />

                        <div className="flex items-center justify-between pt-[4px]">
                        <span className="font-semibold text-[14px] leading-[20px] tracking-normal align-middle text-[#101828]">Total</span>
                       <span className="font-bold text-[18px] leading-[28px] tracking-normal align-middle text-[#101828]">{order.totalOrderPrice} EGP</span>
                        </div>


                    </div> 
                </div>
               </div>
              </div>
             
                )}
            </div>
         </div>
  )
}
