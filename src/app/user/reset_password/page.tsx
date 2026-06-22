"use client"
import React, { useState } from 'react'
import ResetPassword from '@/components/user/ResetPassword'
import { FaCheck } from "react-icons/fa6";
import white_lock2 from "@/assets/user/white_lock2.png";
import lock_absolute from "@/assets/user/lock_absolute.png";
import Image from 'next/image'
import { FaEye } from "react-icons/fa6";
import FeaturesBar from '@/components/featuresBar/FeaturesBar';
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { resetPasswordSchema, resetPasswordTypeSchema } from '@/schemas/resetPassword.sechamas';
import { useSearchParams } from "next/navigation";
import { resetPassword } from '@/services/resetPassword.service';
import { toast } from 'sonner';
import { Spinner } from '@/components/ui/spinner';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation'
import { FaEyeSlash } from "react-icons/fa";

export default function page() {
const[isLoading,setIsLoading] = useState(false);
const [showNewPassword, setShowNewPassword] = useState(false);
const [showRePassword, setShowRePassword] = useState(false);
const searchParams = useSearchParams();
const userEmail :string = searchParams.get("email") ?? "";
const router = useRouter();
const form =  useForm({
  resolver:zodResolver(resetPasswordSchema),
  defaultValues:{
  email:userEmail,
  newPassword:"",
  rePassword:"",
  }
})

    async function handleResetPassword(data:resetPasswordTypeSchema){
          try {
            setIsLoading(true);
            const response = await resetPassword(data); 
              if(response.token){
                const loginResponse = await signIn("credentials",{
                  email:userEmail,
                  password:data.newPassword,
                  redirect:false,
                })
                console.log(loginResponse,"response dt");
                if(loginResponse?.ok){
                 router.push("/products")
                 toast.success("User Login Successfully")
                }else{
                toast.error(loginResponse?.error || "User Login Failed")
                }
              }else if(response.statusMsg === 'error'){
               toast.error(response.message);
              }
             console.log(response);
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
            <h1 className="mb-2 font-bold text-[24px] leading-[32px] tracking-normal text-center align-middle text-[#1E2939]">Create New Password</h1>
            <p className="w-full font-medium text-[16px] leading-[24px] tracking-normal text-center align-middle text-[#4A5565]">Your new password must be different from previous passwords</p>
          </div>

            <div className="flex items-center justify-center mb-8">
            <div className="flex items-center">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#16A34A]">
                <FaCheck className="w-[15px] h-[12px] text-white" />
                </div>
                <div className="w-[80px] h-[2px] px-2">
                    <div className="w-16 h-[2px] bg-[#E5E7EB]"></div>
                </div>
            </div>

            <div className="flex items-center">
             <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#16A34A]">
               <FaCheck className="w-[15px] h-[12px] text-white" />
             </div>
             <div className="w-[80px] h-[2px] px-2">
                <div className="w-16 h-[2px] bg-[#E5E7EB]"></div>
             </div>
            </div>
              <div className="flex items-center">
             <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#16A34A] shadow-[0px_0px_0px_4px_#DCFCE7]">
               <Image src={white_lock2} alt='' />
             </div>
            </div>
          </div>

               
               <form onSubmit={form.handleSubmit(handleResetPassword)} className='space-y-6'>
                <div className='mb-6'>
                  <label htmlFor="" className="mb-2 font-semibold text-[14px] leading-[20px] tracking-normal align-middle text-[#364153]">New Password</label>
                <div className="relative"> 
                  <input  {...form.register("newPassword")} type={showNewPassword ? "text" : "password"}  className="w-full rounded-xl border-2 pt-[13px] pr-12 pb-[14px] pl-12 font-medium text-[16px] leading-[100%] tracking-normal align-middle border-[#E5E7EB]" placeholder='Enter new password'/>
               <Image src={lock_absolute} alt='lock_absolute' className='absolute left-[16px] top-[18px]' />
              <a onClick={() => setShowNewPassword(!showNewPassword)}  className="absolute top-[14px] right-[16px] pt-[3px] pb-[5px] cursor-pointer">
              {showNewPassword ? (
               <FaEyeSlash className="w-[20px] h-[16px] text-[#99A1AF]" />
               ) : (
                <FaEye className="w-[20px] h-[16px] text-[#99A1AF]" />
                 ) }
              </a>
              {form.formState.errors.newPassword && (
                     <p className="text-red-500 text-sm">
                    {form.formState.errors.newPassword.message}
                     </p>
                    )}
                </div>
                </div>

                 <div className='mb-6'>
                  <label htmlFor="" className="mb-2 font-semibold text-[14px] leading-[20px] tracking-normal align-middle text-[#364153]">Confirm Password</label>
                <div className="relative"> 
                  <input {...form.register("rePassword")} type={showRePassword ? "text" : "password"}  className="w-full rounded-xl border-2 pt-[13px] pr-12 pb-[14px] pl-12 font-medium text-[16px] leading-[100%] tracking-normal align-middle border-[#E5E7EB]" placeholder='Confirm new password'/>
               <Image src={lock_absolute} alt='lock_absolute' className='absolute left-[16px] top-[18px] cursor-pointer' />
              <a onClick={() => setShowRePassword(!showRePassword)} className="absolute top-[14px] right-[16px] pt-[3px] pb-[5px]">
               {showRePassword ? (
                    <FaEyeSlash className="w-[20px] h-[16px] text-[#99A1AF]" />
                  ) : (
                      <FaEye className="w-[20px] h-[16px] text-[#99A1AF]" />
                      ) }
              </a>
              {form.formState.errors.rePassword && (
                     <p className="text-red-500 text-sm">
                    {form.formState.errors.rePassword.message}
                     </p>
                    )}
                </div>
                </div>
               
               <button disabled={isLoading} type='submit' className="flex items-center justify-center gap-2 w-full rounded-xl py-3 px-4 bg-[#16A34A] shadow-[0px_4px_6px_-4px_#0000001A,0px_10px_15px_-3px_#0000001A] font-semibold text-[18px] leading-[28px] tracking-normal text-center align-middle text-white cursor-pointer">
                 {isLoading ? <Spinner /> : ''} 
                Reset Password
               </button>
               </form>
               </div>
             </div>
              <FeaturesBar variant='' />
     </>
  )
}
