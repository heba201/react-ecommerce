"use client"
import React, { useEffect, useState } from 'react'
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter , FaInstagram , FaYoutube ,FaPhoneAlt   } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot , FaCreditCard } from "react-icons/fa6";
import fresh_cart from "@/assets/navbar/fresh_cart.png";
import Image from 'next/image';
import { categoryI } from '@/types/category.type';
import { getCategoriesFiltered } from '@/services/category.service';

export default function Footer() {
  const[categories,setCategories] =useState<categoryI[]>([]);
  async function getCategories(){
    
          try {
              const categName =["Electronics","Women's Fashion","Men's Fashion","Beauty & Health"];
              const response = await getCategoriesFiltered(categName);
              setCategories(response.data.data) ;  
             } catch (error) {
            }     
            }
            useEffect(()=>{
              getCategories();
            });

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

          <a href="tel:+18001234567" className="flex items-center gap-3 hover:text-green-400 transition-colors">
            <FaPhoneAlt className='w-[17.5px] h-[14px] text-[#22C55E]' />
            <span className='font-medium text-sm leading-5 align-middle text-[#99A1AF]'>+1 (800) 123-4567</span>
          </a>

          <div className="flex items-center gap-3 text-gray-400 hover:text-green-400 transition-colors">
            <MdEmail className='w-[17.5px] h-[14px] text-[#22C55E]' />
            <span className='font-medium text-sm leading-5 align-middle text-[#99A1AF]'>support@freshcart.com</span>
          </div>

          <div className="flex items-center gap-3">
            <FaLocationDot className='w-[17.5px] h-[14px] text-[#22C55E] top-[2px]' />
            <span className='flex-1 font-medium text-sm leading-5 align-middle text-[#99A1AF]'>123 Commerce Street, New York, NY 10001</span>
          </div>

        </div>

         <div className="flex items-center  gap-3">
          <a href="#" className='w-10 h-10 rounded-full flex items-center  justify-center bg-[#1E2939] hover:bg-green-600 hover:text-white transition-colors'>
          <TiSocialFacebook className="w-5 h-4 text-[#99A1AF]"/>
          </a>

          <a href="#" className='w-10 h-10 rounded-full flex items-center  justify-center bg-[#1E2939] hover:bg-green-600 hover:text-white transition-colors'>
          <FaTwitter className="w-5 h-4 text-[#99A1AF]"/>
          </a>

          <a href="#" className='w-10 h-10 rounded-full flex items-center  justify-center bg-[#1E2939] hover:bg-green-600 hover:text-white transition-colors'>
          <FaInstagram className="w-5 h-4 text-[#99A1AF]"/>
          </a>

          <a href="#" className='w-10 h-10 rounded-full flex items-center  justify-center bg-[#1E2939] hover:bg-green-600 hover:text-white transition-colors'>
          <FaYoutube className="w-5 h-4 text-[#99A1AF]"/>
          </a>
        </div>
      </div>

      <div className='col-span-1'>
         <h3 className='font-semibold text-lg leading-7 align-middle text-white'>
          Shop
          <ul className='space-y-3 mt-[20px]'>
           <li className='pt-[3px] pb-[1px] font-medium text-sm leading-5 align-middle text-[#99A1AF]'>
                
                <a href="/products" className='text-gray-400 hover:text-green-400 transition-colors text-sm'>All Products</a>
           </li>
           <li className='pt-[3px] pb-[1px] font-medium text-sm leading-5 align-middle text-[#99A1AF]'>
                <a href="/categories" className='text-gray-400 hover:text-green-400 transition-colors text-sm'>Categories</a>
           </li>
           <li className='pt-[3px] pb-[1px] font-medium text-sm leading-5 align-middle text-[#99A1AF]'>
                 <a href="/brands" className='text-gray-400 hover:text-green-400 transition-colors text-sm'>Brands</a>
           </li>
            {categories.map((category) => (
           <li  key={category._id}    className='pt-[3px] pb-[1px] font-medium text-sm leading-5 align-middle text-[#99A1AF]'>
               <a  href={`/products?category=${category._id}&&category_name=${category.name}&&category_img=${category.image}`} className='text-gray-400 hover:text-green-400 transition-colors text-sm'>{category.name}</a>
           </li>
             
             ))}
          </ul>
         </h3>
      </div>


       <div className='col-span-1'>
         <h3 className='font-semibold text-lg leading-7 align-middle text-white'>
         Account
          <ul className='space-y-3 mt-[20px]'>
           <li className='pt-[3px] pb-[1px] font-medium text-sm leading-5 align-middle text-[#99A1AF]'>
            <a className="text-gray-400 hover:text-green-400 transition-colors text-sm" href="/user/profile">My Account</a>    
           </li>
           <li className='pt-[3px] pb-[1px] font-medium text-sm leading-5 align-middle text-[#99A1AF]'>
               <a className="text-gray-400 hover:text-green-400 transition-colors text-sm" href="/allorders"> Order History</a>
           </li>
           <li className='pt-[3px] pb-[1px] font-medium text-sm leading-5 align-middle text-[#99A1AF]'>
                 <a className="text-gray-400 hover:text-green-400 transition-colors text-sm" href="/wishlist">Wishlist </a>  
           </li>
           <li className='pt-[3px] pb-[1px] font-medium text-sm leading-5 align-middle text-[#99A1AF]'>
            <a className="text-gray-400 hover:text-green-400 transition-colors text-sm" href="/cart">Shopping Cart</a>   
           </li>
           <li className='pt-[3px] pb-[1px] font-medium text-sm leading-5 align-middle text-[#99A1AF]'>
           <a className="text-gray-400 hover:text-green-400 transition-colors text-sm" href="/login">Sign In</a>    
           </li>
           <li className='pt-[3px] pb-[1px] font-medium text-sm leading-5 align-middle text-[#99A1AF]'>
                     <a className="text-gray-400 hover:text-green-400 transition-colors text-sm" href="/register">Create Account</a> 
           </li>

          </ul>
         </h3>
      </div>

  <div className='col-span-1'>
         <h3 className='font-semibold text-lg leading-7 align-middle text-white'>
         Support
          <ul className='space-y-3 mt-[20px]'>
           <li className='pt-[3px] pb-[1px] font-medium text-sm leading-5 align-middle text-[#99A1AF]'>
                <a className="text-gray-400 hover:text-green-400 transition-colors text-sm" href="#">Contact Us</a>
           </li>
           <li className='pt-[3px] pb-[1px] font-medium text-sm leading-5 align-middle text-[#99A1AF]'>
               <a className="text-gray-400 hover:text-green-400 transition-colors text-sm" href="#">Help Center</a> 
           </li>
           <li className='pt-[3px] pb-[1px] font-medium text-sm leading-5 align-middle text-[#99A1AF]'>
               <a className="text-gray-400 hover:text-green-400 transition-colors text-sm" href="#">Shipping Info</a> 
           </li>
           <li className='pt-[3px] pb-[1px] font-medium text-sm leading-5 align-middle text-[#99A1AF]'>
                <a className="text-gray-400 hover:text-green-400 transition-colors text-sm" href="#">Returns & Refunds</a> 
           </li>
           <li className='pt-[3px] pb-[1px] font-medium text-sm leading-5 align-middle text-[#99A1AF]'>
               <a className="text-gray-400 hover:text-green-400 transition-colors text-sm" href="#">Track Order</a>
           </li>
           <li className='pt-[3px] pb-[1px] font-medium text-sm leading-5 align-middle text-[#99A1AF]'>
                <a className="text-gray-400 hover:text-green-400 transition-colors text-sm" href="/register">Create Account</a> 
           </li>

          </ul>
         </h3>
      </div>

      <div className='col-span-1 pb-6'>
         <h3 className='font-semibold text-lg leading-7 align-middle text-white'>
        Legal
          <ul className='space-y-3 mt-[20px]'>
           <li className='pt-[3px] pb-[1px] font-medium text-sm leading-5 align-middle text-[#99A1AF]'>
              <a className="text-gray-400 hover:text-green-400 transition-colors text-sm" href="#"> Privacy Policy</a>
           </li>
           <li className='pt-[3px] pb-[1px] font-medium text-sm leading-5 align-middle text-[#99A1AF]'>
               <a className="text-gray-400 hover:text-green-400 transition-colors text-sm" href="#">Terms of Service</a>
           </li>
           <li className='pt-[3px] pb-[1px] font-medium text-sm leading-5 align-middle text-[#99A1AF]'>
                 <a className="text-gray-400 hover:text-green-400 transition-colors text-sm" href="#">Cookie Policy</a>
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
