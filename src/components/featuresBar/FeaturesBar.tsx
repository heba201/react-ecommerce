import React from 'react'
import { FaTruck , FaApple ,FaGooglePlay ,FaShieldAlt     } from "react-icons/fa";
import { IoIosRefresh } from "react-icons/io";
import { TfiHeadphoneAlt } from "react-icons/tfi";

export default function FeaturesBar({variant=''}:{variant:string}) {
  return (
    <div className="top-[5863.75px] pt-6 pb-6 xl:px-[208px] md:px-2 px-[16px] py-[24px] border-t border-b bg-[#F0FDF4] border-y border-x-0 border-solid border-[#DCFCE7]">
  <div className={`grid xl:grid-cols-4 md:grid-cols-4 ${variant === 'product_details' ? 'grid-cols-2':'grid-cols-1'}  gap-6`}>
     <div className="col-span-1 flex items-center gap-3">
      
      <div className="w-12 h-12 rounded-xl bg-[#DCFCE7] flex items-center justify-center">
      <FaTruck className="w-[22.5px] h-[18px] text-[#16A34A]" />
      </div>

      <div>
        <h4 className="font-semibold text-sm leading-5 align-middle text-[#101828]">Free Shipping</h4>
        <p className="font-medium text-xs leading-4 align-middle text-[#6A7282]">On orders over 500 EGP</p>
      </div>

     </div>


     <div className="col-span-1 flex items-center gap-3">
      
      <div className="w-12 h-12 rounded-xl bg-[#DCFCE7] flex items-center justify-center">
      <IoIosRefresh className="w-[22.5px] h-[18px] text-[#16A34A] scale-x-[-1]" />
      </div>

      <div>
        <h4 className="font-semibold text-sm leading-5 align-middle text-[#101828]">Easy Returns</h4>
        <p className="font-medium text-xs leading-4 align-middle text-[#6A7282]">14-day return policy</p>
      </div>

     </div>

<div className="col-span-1 flex items-center gap-3">
      
      <div className="w-12 h-12 rounded-xl bg-[#DCFCE7] flex items-center justify-center">
      <FaShieldAlt  className="w-[22.5px] h-[18px] text-[#16A34A]" />
      </div>

      <div>
        <h4 className="font-semibold text-sm leading-5 align-middle text-[#101828]">Secure Payment</h4>
        <p className="font-medium text-xs leading-4 align-middle text-[#6A7282]">100% secure checkout</p>
      </div>

     </div>

<div className="col-span-1 flex items-center gap-3">
      
      <div className="w-12 h-12 rounded-xl bg-[#DCFCE7] flex items-center justify-center">
      <TfiHeadphoneAlt  className="w-[22.5px] h-[18px] text-[#16A34A] scale-x-[-1]" />
      </div>

      <div>
        <h4 className="font-semibold text-sm leading-5 align-middle text-[#101828]">24/7 Support</h4>
        <p className="font-medium text-xs leading-4 align-middle text-[#6A7282]">Contact us anytime</p>
      </div>

     </div>

  </div>
</div>
  )
}
