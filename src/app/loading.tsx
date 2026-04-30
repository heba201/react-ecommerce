import { Avatar } from '@/components/ui/avatar'
import Link from 'next/link'
import React from 'react'
import { Spinner } from "@/components/ui/spinner"
export default function Loading() {
  return (
    <div className='flex h-screen items-center justify-center flex-col gap-4'>
 <div className="nav-logo">
         <div  className='text-3xl font-bold flex items-center gap-2'>
         <Avatar className='rounded-lg text-white bg-black flex items-center justify-center'>
 S
  
</Avatar>
         ShopMart
         </div>
        </div>

<Spinner  className='size-8'/>
    </div>
  )
}
