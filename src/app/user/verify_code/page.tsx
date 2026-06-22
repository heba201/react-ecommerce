"use client"
import React, { useState } from 'react'
import ResetPassword from '@/components/user/ResetPassword'
import { FaCheck , FaArrowLeft } from "react-icons/fa6";
import key from "@/assets/user/key.png";
import gray_lock from "@/assets/user/gray_lock.png";
import Image from 'next/image'
import { FaShieldAlt } from "react-icons/fa";
import white_key from "@/assets/user/white_key.png";
import FeaturesBar from '@/components/featuresBar/FeaturesBar';
import { useSearchParams } from "next/navigation";
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner';
import { Spinner } from '@/components/ui/spinner';
import { verifyCodeSechamas, verifyCodeTypeSchema } from '@/schemas/verifyCode.sechamas';
import { verifyCode } from '@/services/verifyCode.service';
import Link from 'next/link'
import { sendEmailforgetPassword } from '@/services/forgetPassword.service';
import { forgetPasswordTypeSchema } from '@/schemas/forgetPassword.sechamas';

export default function VerifyCode() {
const[isLoading,setIsLoading] = useState(false);
const[isLoadingResendCode,setIsLoadingResendCode] = useState(false);
const searchParams = useSearchParams();
const userEmail = searchParams.get("email") ?? "";

 const router = useRouter()
  const form =  useForm({
    resolver:zodResolver(verifyCodeSechamas),
   defaultValues:{
   resetCode:""
    }
  })


  async function handleVerifyCode(data:verifyCodeTypeSchema){
      try {
        setIsLoading(true);
        const response = await verifyCode(data); 
          if(response.status === 'Success'){
            router.push(`/user/reset_password?email=${userEmail}`)
          }else if(response.statusMsg === 'fail'){
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


    async function handleRsendCode(){
        try {
          setIsLoadingResendCode(true);
          const emailObj : forgetPasswordTypeSchema = {email:userEmail};
          const response = await sendEmailforgetPassword(emailObj); 
          toast.success(response.message);
           } catch (error) {
            toast.error((error as Error).message);
          console.log(error);
         }finally{
          setIsLoadingResendCode(false);
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
            <h1 className="mb-2 font-bold text-[24px] leading-[32px] tracking-normal text-center align-middle text-[#1E2939]">Check Your Email</h1>
            <p className="font-medium text-[16px] leading-[24px] tracking-normal text-center align-middle text-[#4A5565]">Enter the 6-digit code sent to {userEmail}</p>
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
                       <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#16A34A] shadow-[0px_0px_0px_4px_#DCFCE7]">
                         <Image src={white_key} alt='' />
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
                    
                    <form onSubmit={form.handleSubmit(handleVerifyCode)} className='space-y-6'>
                     <div className='mb-[23.5px]'>
                      <label htmlFor="" className="mb-2 font-semibold text-[14px] leading-[20px] tracking-normal align-middle text-[#364153]">Verification Code</label>
                     <div className="relative">
                      <input {...form.register("resetCode")}  type="text" className="w-full rounded-xl border-2 pt-[14px] pr-4 pb-[14px] pl-12 border-[#E5E7EB] font-medium text-[24px] leading-[100%] tracking-[0.12em] text-center align-middle" placeholder='••••••'/>
                        <FaShieldAlt className="absolute w-[20px] h-[16px] text-[#99A1AF] top-[100%] left-0" />
                     {form.formState.errors.resetCode && (
                     <p className="text-red-500 text-sm">
                    {form.formState.errors.resetCode.message}
                     </p>
                    )}
                     </div>
                     </div>
                     <p className="mb-[23.5px] font-medium text-[14px] leading-[20px] tracking-normal text-center align-middle text-[#6A7282]">Didn't receive the code? 
                      <a  onClick={isLoadingResendCode ? undefined:() => handleRsendCode()} className="font-semibold text-[14px] leading-[20px] tracking-normal text-center align-middle text-[#16A34A] cursor-pointer">
                          Resend Code
                      </a>
                     </p>
                     <button disabled={isLoading} className="flex items-center justify-center gap-2 mb-[23.5px] w-full rounded-xl py-3 px-4 bg-[#16A34A] text-white font-semibold text-[18px] leading-[28px] tracking-normal text-center align-middle shadow-[0px_4px_6px_-4px_#0000001A,0px_10px_15px_-3px_#0000001A] cursor-pointer">
                      {isLoading ? <Spinner /> : ''} 
                      Verify Code

                     </button>
                   
                      <div className="text-center pt-[0.5px] pb-[3px]">
                       <Link  href='/user/forget_password' className="flex items-center  justify-center gap-[9.5px] font-medium text-[14px] leading-[20px] tracking-normal text-center align-middle text-[#6A7282]">
                        <FaArrowLeft className="w-[15px] h-[12px] text-[#6A7282]" />
                         Change email address
                       </Link>
                     </div>
                    </form>
          </div>
      </div>
       <FeaturesBar variant='' />
    </>
    
  )
}
