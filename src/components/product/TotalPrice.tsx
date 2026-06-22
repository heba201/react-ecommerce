"use client"
import React, { useEffect, useState } from 'react'
import { FiMinus } from "react-icons/fi";
import { FaPlus  } from "react-icons/fa";
export default function TotalPrice({priceAfterDiscount,price,quantity}:{priceAfterDiscount:number,price:number,quantity:number}) {
const [initialPrice,setInitialPrice] = useState(priceAfterDiscount ? priceAfterDiscount : price);
const[totalPrice,setTotalPrice] = useState(initialPrice);
const[quan,setQuan] = useState("1");
function totalPriceCalc(value:number){
   setTotalPrice(value*initialPrice || initialPrice) ;
}
useEffect(()=>{
totalPriceCalc(Number(quan));
},[quan]);
              return (
                    <>
                      <div>
                       <label className='block text-[14px] font-medium leading-5 text-[#364153] mt-6' >
                        Quantity
                        </label>
                            <div className="flex items-center gap-4 mt-2">
                              <div className="flex items-center border-t-2 border-t-[#E5E7EB] w-[172px] h-[52px] rounded-lg border">
                                <button id="decrease-qty"  className='w-[52px] h-12 opacity-50 pt-[15px] pr-4 pb-[17px] pl-4 flex items-center justify-center'>
                                  <FiMinus className='w-5 h-4 text-[#4A5565]'  />
                                </button>
                                <input value={quan} onChange={(e) => {setQuan((e.target.value));totalPriceCalc(Number(quan))}} type="number" id="quantity" className='w-16 h-7 text-center focus:outline-none'/>
                                <button className='w-[52px] h-12 pt-[15px] pr-4 pb-[17px] pl-4 flex items-center justify-center'>
                                  <FaPlus className='w-5 h-4 text-[#4A5565]'/>
                                </button>
                              
                              </div>
                              <span className='text-[14px] font-medium leading-5 text-[#6A7282]'>
                                {quantity} available
                              </span>
                            </div>
                           </div>
                      <div className='bg-[#F9FAFB] p-4 mt-6'>
                    <div className='flex items-center justify-between'>
                    <span className='font-medium text-[16px] leading-6 align-middle text-[#4A5565]'>Total Price:</span>
                    <span className='font-bold text-base leading-5 align-middle text-[#16A34A]'>{totalPrice} EGP</span>
                    </div>
                    </div>
    </>
  )
}
