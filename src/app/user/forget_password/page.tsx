"use client"
import React, { useState } from 'react'
import ResetPassword from '@/components/user/ResetPassword'
import { MdEmail } from "react-icons/md";
import key from "@/assets/user/key.png";
import gray_lock from "@/assets/user/gray_lock.png";
import Image from 'next/image'
import { FaArrowLeft } from "react-icons/fa6";
import FeaturesBar from '@/components/featuresBar/FeaturesBar';
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { forgetPasswordSchema, forgetPasswordTypeSchema } from '@/schemas/forgetPassword.sechamas';
import Link from 'next/link'
import { sendEmailforgetPassword } from '@/services/forgetPassword.service';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';

export default  function forgetPassword(){
 const[isLoading,setIsLoading] = useState(false);
  const router = useRouter()
  const form =  useForm({
    resolver:zodResolver(forgetPasswordSchema),
   defaultValues:{
   email:""
    }
  })

  async function handleforgetPassword(data:forgetPasswordTypeSchema){
    try {
      setIsLoading(true);
      const response = await sendEmailforgetPassword(data); 
      toast.success(response.message);
      router.push(`/user/verify_code?email=${data.email}`)
       } catch (error) {
        toast.error((error as Error).message);
      console.log(error);
     }finally{
      setIsLoading(false);
    }
  }

 return (
     <>
      <div className="mb-[64.5px] mt-[64px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-[48px] px-4 md:px:4 xl:px-80">
        <div className="hidden md:block  xl:block col-span-1">
        <ResetPassword />
        </div>
        <div className="col-span-1 rounded-[16px] p-12 bg-white shadow-[0px_8px_10px_-6px_#0000001A,0px_20px_25px_-5px_#0000001A]">   
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
                <span className="font-bold text-[30px] leading-[36px] tracking-normal text-center align-middle"> 
                    <span className='text-[#16A34A]'>Fresh</span>
                    Cart</span>
            </div>
            <h1 className="mb-2 font-bold text-[24px] leading-[32px] tracking-normal text-center align-middle text-[#1E2939]">Forgot Password?</h1>
            <p className="font-medium text-[16px] leading-[24px] tracking-normal text-center align-middle text-[#4A5565]">No worries, we'll send you a reset code</p>
          </div>

          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#16A34A] shadow-[0px_0px_0px_4px_#DCFCE7]">
                <MdEmail className="w-[15px] h-[12px] text-white" />
                </div>
                <div className="w-[80px] h-[2px] px-2">
                    <div className="w-16 h-[2px] bg-[#E5E7EB]"></div>
                </div>
            </div>

            <div className="flex items-center">
             <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#F3F4F6]">
               <Image src={key} alt='' />
             </div>
             <div className="w-[80px] h-[2px] px-2">
                <div className="w-16 h-[2px] bg-[#E5E7EB]"></div>
             </div>
            </div>
              <div className="flex items-center">
             <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#F3F4F6]">
               <Image src={gray_lock} alt='' />
             </div>
            </div>
          </div>
           <form   onSubmit={form.handleSubmit(handleforgetPassword)} className='space-y-6 mb-8'>
            <div className='mb-6'>
            <label htmlFor="" className="mb-2 font-semibold text-[14px] leading-[20px] tracking-normal align-middle text-[#364153]">Email Address</label>
            <div className="relative">
            <input {...form.register("email")} type="text"  className="w-full rounded-xl pt-[15px] pr-4 pb-[14px] pl-12 border-2 border-[#E5E7EB] font-medium text-[16px] leading-[100%] tracking-normal align-middle" placeholder='Enter your email address'/>
           <MdEmail className='absolute w-[20px] h-[16px] text-[#99A1AF] top-[20px] bottom-[20px] left-[18px]' />
           {form.formState.errors.email && (
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.email.message}
                  </p>
                )}
            </div>
            </div>
            <button type='submit' disabled={isLoading} className="flex items-center justify-center gap-2 mb-6 w-full rounded-xl py-3 px-4 bg-[#16A34A] shadow-[0px_4px_6px_-4px_#0000001A,0px_10px_15px_-3px_#0000001A] font-semibold text-[18px] leading-[28px] tracking-normal text-center align-middle text-white cursor-pointer">
              {isLoading ? <Spinner /> : ''}  
             Send Reset Code
            </button>
            <div className="text-center">
                <Link href="/login" className="flex items-center justify-center gap-2 font-medium text-[14px] leading-[20px] tracking-normal text-center align-middle text-[#16A34A]">
                   <FaArrowLeft className="w-[15px] h-[12px] text-[#16A34A]" />
                    Back to Sign In
                </Link>
            </div>
           </form>

        <div className="text-center pt-6 border-t border-[#F3F4F6]">
          <p className="font-medium text-[16px] leading-[24px] tracking-normal text-center align-middle text-gray-700">
            Remember your password? 
            <Link href="/login" className="font-semibold text-[16px] leading-[24px] tracking-normal text-center align-middle text-[#16a34a]">
              Sign In
            </Link>
            </p>
        </div>
        </div>
      </div>
      <FeaturesBar variant='' />
     </>
    )
}