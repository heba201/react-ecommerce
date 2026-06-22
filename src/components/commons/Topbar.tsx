import React from 'react'
import shipping from "@/assets/navbar/shipping.png";
import gift from "@/assets/navbar/gift.png";
import phone from "@/assets/navbar/phone.png";
import email from "@/assets/navbar/email.png";
import user from "@/assets/navbar/user.png";
import logout from "@/assets/navbar/logout.png";
import Image from 'next/image';
import { signOut, useSession } from 'next-auth/react'
import { FaUserPlus } from "react-icons/fa6";
import Link from 'next/link'
import { RiUser3Line } from "react-icons/ri";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { FaPhone } from "react-icons/fa6";

export default function Topbar() {
  const {data:session , status} =  useSession();
  function handleLogout(){
      signOut({callbackUrl:"/login"})
    }

  return (
    <div className="hidden xl:block md:block md:px-2 xl:px-52 xl:pr-52  xl:border-b md:border-b xl:border-gray-100 md:border-gray-100">
    <div className="flex items-center xl:justify-between md:gap-6 py-2 xl:h-10">

    <div className="flex items-center h-5 md:gap-4 xl:gap-6">
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
        <div className="flex h-10 items-center md:gap-4  xl:gap-6">
        
        <div className="h-5 flex  items-center gap-4">
            <a href="tel:+18001234567" className='flex items-center  gap-1.5 h-5 text-[#6A7282] hover:text-green-600 transition-colors'>
             <FaPhone className='w-3 h-3' />
             <span className='font-medium text-[14px] leading-5 tracking-normal align-middle  whitespace-nowrap'>+1 (800) 123-4567</span>
            </a>
        </div>

          <div className="flex h-5 gap-1.5 items-center">
            <a href="mailto:support@freshcart.com"  className="flex  items-center  gap-1.5 text-[#6A7282] hover:text-green-600 transition-colors">
        <HiOutlineEnvelope className='w-3 h-3' />
        <span className='font-font1 font-medium text-[14px] leading-5 tracking-normal align-middle'>support@freshcart.com</span>
            </a>
          </div>
  
     <span className='w-px h-4 text-gray-200 whitespace-nowrap'>|</span>

    <div className="h-5 flex gap-4">
      
    <Link href={session ? '#':'/login'} className="flex items-center gap-1.5 whitespace-nowrap text-[#4A5565] hover:text-green-600 transition-colors"> 
      {session && <> <Image alt='user'  src={session.user?.image ?  session.user?.image : user} className='w-3.75 h-3' />
        <span className="font-medium text-[14px] leading-5 tracking-normal align-middle text-[#4A5565] md:text-sm">{session.user?.name}</span>
           </>}
           {!session && <>
           <RiUser3Line   className='w-4 h-4' />
           <span className="font-medium text-[14px] leading-5 tracking-normal align-middle text-[#4A5565] md:text-sm hover:text-green-600 transition-colors">Sign In</span>

           </>
           }
        </Link>
       </div>

    <Link href={session ? '#':'/register' } className='flex items-center h-5 gap-1.5 cursor-pointer whitespace-nowrap hover:text-green-600 transition-colors' onClick={session ? ()=>handleLogout():() => {}}>
      {session && <>
    <Image alt='logout'  src={logout} className='w-3 h-[10.5px]' />
    <span className="font-medium text-[14px] leading-5 tracking-normal text-center align-middle text-[#4A5565] whitespace-nowrap md:text-sm ">Sign Out</span>
    </>}
    {
      !session && <>
        <FaUserPlus className='w-3 h-[10.5px]'/>
        <span className="font-medium text-[14px] leading-5 tracking-normal text-center align-middle text-[#4A5565] whitespace-nowrap md:text-sm  hover:text-green-600 transition-colors">Sign Up</span>
      </>
    }
    </Link>
      </div>

      </div>

      </div>
  )
}
