import React from 'react'
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter , FaInstagram , FaYoutube ,FaPhoneAlt   } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot , FaCreditCard } from "react-icons/fa6";


import fresh_cart from "@/assets/navbar/fresh_cart.png";
import Image from 'next/image';

export default function Footer() {
  return (
   <footer className="w-full bg-[#101828]">
 
    
    <div className="grid grid-cols-1 xl:grid-cols-6 md:grid-cols-6  gap-12 pt-[48px] xl:px-[208px] md:px-2 px-[16px]">
      
      <div className='xl:col-span-2 md:col-span-2 col-span-1  xl:mb-[48px] md:mb-[48px]'>

           <div className='w-[197.16px] h-12 px-4 py-2 rounded-lg bg-white mb-[29.75px]'>
            <Image src={fresh_cart} alt='fresh_cart'/>
           </div>

           <p className='top-[77.75px] font-medium text-sm leading-[22.75px] align-middle text-[#99A1AF] mb-[24.5px]'>
            FreshCart is your one-stop destination for quality products. From
            fashion to electronics, we bring you the best brands at competitive
            prices with a seamless shopping experience.
           </p>

          <div className='space-y-3 mb-[24px]'>

          <div className="flex items-center gap-3">
            <FaPhoneAlt className='w-[17.5px] h-[14px] text-[#22C55E]' />
            <span className='font-medium text-sm leading-5 align-middle text-[#99A1AF]'>+1 (800) 123-4567</span>
          </div>

          <div className="flex items-center gap-3">
            <MdEmail className='w-[17.5px] h-[14px] text-[#22C55E]' />
            <span className='font-medium text-sm leading-5 align-middle text-[#99A1AF]'>support@freshcart.com</span>
          </div>

          <div className="flex items-center gap-3">
            <FaLocationDot className='w-[17.5px] h-[14px] text-[#22C55E] top-[2px]' />
            <span className='flex-1 font-medium text-sm leading-5 align-middle text-[#99A1AF]'>123 Commerce Street, New York, NY 10001</span>
          </div>

        </div>

         <div className="flex items-center  gap-3">
          <a className='w-10 h-10 rounded-full flex items-center  justify-center bg-[#1E2939]'>
          <TiSocialFacebook className="w-5 h-4 text-[#99A1AF]"/>
          </a>

          <a className='w-10 h-10 rounded-full flex items-center  justify-center bg-[#1E2939]'>
          <FaTwitter className="w-5 h-4 text-[#99A1AF]"/>
          </a>

          <a className='w-10 h-10 rounded-full flex items-center  justify-center bg-[#1E2939]'>
          <FaInstagram className="w-5 h-4 text-[#99A1AF]"/>
          </a>

          <a className='w-10 h-10 rounded-full flex items-center  justify-center bg-[#1E2939]'>
          <FaYoutube className="w-5 h-4 text-[#99A1AF]"/>
          </a>
        </div>
      </div>

      <div className='col-span-1'>
         <h3 className='font-semibold text-lg leading-7 align-middle text-white'>
          Shop
          <ul className='space-y-3 mt-[20px]'>
           <li className='pt-[3px] pb-[1px] font-medium text-sm leading-5 align-middle text-[#99A1AF]'>
                All Products
           </li>
           <li className='pt-[3px] pb-[1px] font-medium text-sm leading-5 align-middle text-[#99A1AF]'>
                Categories
           </li>
           <li className='pt-[3px] pb-[1px] font-medium text-sm leading-5 align-middle text-[#99A1AF]'>
               Brands
           </li>
           <li className='pt-[3px] pb-[1px] font-medium text-sm leading-5 align-middle text-[#99A1AF]'>
               Electronics
           </li>
           <li className='pt-[3px] pb-[1px] font-medium text-sm leading-5 align-middle text-[#99A1AF]'>
               Men's Fashion
           </li>
           <li className='pt-[3px] pb-[1px] font-medium text-sm leading-5 align-middle text-[#99A1AF]'>
              Women's Fashion
           </li>

          </ul>
         </h3>
      </div>


       <div className='col-span-1'>
         <h3 className='font-semibold text-lg leading-7 align-middle text-white'>
         Account
          <ul className='space-y-3 mt-[20px]'>
           <li className='pt-[3px] pb-[1px] font-medium text-sm leading-5 align-middle text-[#99A1AF]'>
                My Account
           </li>
           <li className='pt-[3px] pb-[1px] font-medium text-sm leading-5 align-middle text-[#99A1AF]'>
                Order History
           </li>
           <li className='pt-[3px] pb-[1px] font-medium text-sm leading-5 align-middle text-[#99A1AF]'>
               Wishlist
           </li>
           <li className='pt-[3px] pb-[1px] font-medium text-sm leading-5 align-middle text-[#99A1AF]'>
               Shopping Cart
           </li>
           <li className='pt-[3px] pb-[1px] font-medium text-sm leading-5 align-middle text-[#99A1AF]'>
               Sign In
           </li>
           <li className='pt-[3px] pb-[1px] font-medium text-sm leading-5 align-middle text-[#99A1AF]'>
              Create Account
           </li>

          </ul>
         </h3>
      </div>

  <div className='col-span-1'>
         <h3 className='font-semibold text-lg leading-7 align-middle text-white'>
         Support
          <ul className='space-y-3 mt-[20px]'>
           <li className='pt-[3px] pb-[1px] font-medium text-sm leading-5 align-middle text-[#99A1AF]'>
                Contact Us
           </li>
           <li className='pt-[3px] pb-[1px] font-medium text-sm leading-5 align-middle text-[#99A1AF]'>
                Help Center
           </li>
           <li className='pt-[3px] pb-[1px] font-medium text-sm leading-5 align-middle text-[#99A1AF]'>
               Shipping Info
           </li>
           <li className='pt-[3px] pb-[1px] font-medium text-sm leading-5 align-middle text-[#99A1AF]'>
               Returns & Refunds
           </li>
           <li className='pt-[3px] pb-[1px] font-medium text-sm leading-5 align-middle text-[#99A1AF]'>
              Track Order
           </li>
           <li className='pt-[3px] pb-[1px] font-medium text-sm leading-5 align-middle text-[#99A1AF]'>
              Create Account
           </li>

          </ul>
         </h3>
      </div>

      <div className='col-span-1'>
         <h3 className='font-semibold text-lg leading-7 align-middle text-white'>
        Legal
          <ul className='space-y-3 mt-[20px]'>
           <li className='pt-[3px] pb-[1px] font-medium text-sm leading-5 align-middle text-[#99A1AF]'>
               Privacy Policy
           </li>
           <li className='pt-[3px] pb-[1px] font-medium text-sm leading-5 align-middle text-[#99A1AF]'>
               Terms of Service
           </li>
           <li className='pt-[3px] pb-[1px] font-medium text-sm leading-5 align-middle text-[#99A1AF]'>
               Cookie Policy
           </li>
          </ul>
         </h3>
      </div>
    </div>
 
 <div className='w-full pt-6 pb-6  border-t border-[#1E2939] xl:px-[208px] md:px-2'>
   <div className="flex xl:flex-row md:flex-row  flex-col items-center xl:justify-between md:justify-between justify-center w-full">
      <p className='font-medium text-sm leading-5   align-middle text-[#6A7282]'>© 2026 FreshCart. All rights reserved.</p>
   
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
       <FaCreditCard className='w-[17.5px] h-[14px] text-[#6A7282]' />
       <span className='font-medium text-sm leading-5 align-middle text-[#6A7282]'>Visa</span>
      </div>

      <div className="flex items-center gap-2">
       <FaCreditCard className='w-[17.5px] h-[14px] text-[#6A7282]' />
       <span className='font-medium text-sm leading-5 align-middle text-[#6A7282]'>Mastercard</span>
      </div>

<div className="flex items-center gap-2">
       <FaCreditCard className='w-[17.5px] h-[14px] text-[#6A7282]' />
       <span className='font-medium text-sm leading-5 align-middle text-[#6A7282]'>PayPal</span>
      </div>

    </div>
   </div>
 </div>

     
     
     

    </footer>
  )
}
