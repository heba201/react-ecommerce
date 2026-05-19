import React from 'react'
import shipping from "@/assets/navbar/shipping.png";
import gift from "@/assets/navbar/gift.png";
import phone from "@/assets/navbar/phone.png";
import email from "@/assets/navbar/email.png";
import user from "@/assets/navbar/user.png";
import logout from "@/assets/navbar/logout.png";
import Image from 'next/image';
export default function Topbar() {
  return (
    <div className="px-2 lg:px-52 lg:pr-52 h-10.25 border-b border-gray-100">
    <div className="flex items-center lg:justify-between md:gap-6 py-2 lg:h-10">

    <div className="flex items-center h-5 md:gap-3 lg:gap-6">
        <span className="flex items-center h-5 text-sm leading-5 text-[#6A7282] gap-2 whitespace-nowrap">
             <Image alt='shippig'  src={shipping} className='w-[13.5px] h-[11.25px]' />
             Free Shipping on Orders 500 EGP
             </span>
          
             <span className="flex items-center h-5 font-medium text-[14px] leading-5 align-middle tracking-normal text-[#6A7282] gap-2 whitespace-nowrap md:text-sm">
             <Image alt='gift'  src={gift} className='w-3 h-[11.25px]' />
           New Arrivals Daily
             </span>

            </div>


          {/* right */}
        <div className="flex h-10 items-center  md:gap-4 lg:gap-6">
        
        <div className="h-5 flex  items-center gap-4">
            <a className='flex items-center  gap-1.5 h-5'>
             <Image alt='phone'  src={phone} className='w-3 h-3' />
             <span className='font-medium text-[14px] leading-5 tracking-normal align-middle text-[#6A7282] whitespace-nowrap'>+1 (800) 123-4567</span>
            </a>
        </div>

          <div className="flex h-5 gap-1.5 items-center">
            <a className="flex  items-center gap-1.5">
        <Image alt='email'  src={email} className='w-3 h-2.25' />
        <span className='font-font1 font-medium text-[14px] leading-5 tracking-normal align-middle text-[#6A7282]'>support@freshcart.com</span>
            </a>
          </div>
  
  <span className='w-px h-4 text-gray-200 whitespace-nowrap'>|</span>

  <div className="h-5 flex gap-4">
    <a className="flex items-center gap-1.5"> 
        <Image alt='user'  src={user} className='w-3.75 h-3' />
        <span className="font-medium text-[14px] leading-5 tracking-normal align-middle text-[#4A5565] md:text-sm">Usama</span>
    </a>
  </div>

<button className='flex items-center h-5 gap-1.5'>
 <Image alt='logout'  src={logout} className='w-3 h-[10.5px]' />
 <span className="font-medium text-[14px] leading-5 tracking-normal text-center align-middle text-[#4A5565] whitespace-nowrap md:text-sm">Sign Out</span>
</button>
   </div>

    </div>

    </div>
  )
}
