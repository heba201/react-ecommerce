import { Avatar } from '@/components/ui/avatar'
import Link from 'next/link'
import React from 'react'
import { Spinner } from "@/components/ui/spinner"
import Image from 'next/image';
import fresh_cart from "@/assets/home/logo.png";
import { FaSpinner } from "react-icons/fa";

export default function Loading() {
  return (
    <div className='flex h-screen items-center justify-center flex-col gap-4'>
 <div className="nav-logo">
         <div  className='text-3xl font-bold flex items-center gap-2'>
          <Image src={fresh_cart} alt='fresh_cart' />
        
         </div>
        </div>

<FaSpinner  className='size-8 text-green-600 animate-spin' />
    </div>
  )
}
