"use client"
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Field, FieldDescription, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { loginSchema, loginTypeSchema } from '@/schemas/auth.sechamas'
import { loginUser } from '@/services/auth.services'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import login_bg from "@/assets/user/login_bg.png";
import Image from 'next/image'
import { FaShieldAlt  , FaTruck} from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import gmail from "@/assets/user/gmail.png";
import facebook  from "@/assets/user/facebook.png";
import { MdEmail } from "react-icons/md";
import { FaEye } from "react-icons/fa6";
import lock_absolute from "@/assets/user/lock_absolute.png";
import lock_login  from "@/assets/user/lock_login.png";
import users  from "@/assets/user/users.png";
import { FaStar , FaEyeSlash } from "react-icons/fa";
import FeaturesBar from '@/components/featuresBar/FeaturesBar'
import Link from 'next/link'
import { Spinner } from '@/components/ui/spinner'

export default function Login() {
const [showPassword, setShowPassword] = useState(false);
 const[isLoading,setIsLoading] =useState(false);
const router = useRouter()
const form =  useForm({
  resolver:zodResolver(loginSchema),
  defaultValues:{
 email:"",
 password:"",
  
  }
})

async function handleLogin(data:loginTypeSchema){
  setIsLoading(true);
const response = await signIn("credentials",{
  email:data.email,
  password:data.password,
  redirect:false,
  // callbackUrl:"/products"
})
if(response){setIsLoading(false);}
console.log(response,"response dt");
if(response?.ok){
 router.push("/products")
 toast.success("User Login Successfully")
}else{
toast.error(response?.error || "User Login Failed");
}
 
}
  return (
    <>
    <div className="mb-[64.5px] mt-[64px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-[48px] px-4 md:px:4 xl:px-80">
        <div className="hidden md:block  xl:block col-span-1">
         <div className='text-center mt-[132.5px] mb-[132.5px]'>
           <Image src={login_bg} alt='login_bg' className="mb-6 w-full h-full object-cover  rounded-2xl " />
         <div className='space-y-4'>
        <h2 className="font-bold text-[30px] leading-[36px] tracking-normal text-center align-middle text-[#1E2939]">FreshCart - Your One-Stop Shop for Fresh Products</h2>
         <p className="font-medium text-[18px] leading-[28px] tracking-normal text-center align-middle text-[#4A5565]">Join thousands of happy customers who trust FreshCart for their daily grocery needs</p>
         

         <div className="flex items-center justify-center gap-6">
               
               <div className="flex items-center gap-2 text-[14px] font-medium text-[#6A7282] whitespace-nowrap">
                 <FaTruck className="w-[16px] h-[16px] text-[#16A34A]" />
                 Free Delivery
               </div>
        
               <div className="flex items-center gap-2 text-[14px] font-medium text-[#6A7282] whitespace-nowrap">
                 <FaShieldAlt className="w-[16px] h-[16px] text-[#16A34A]" />
                Secure Payment
               </div>
         
               <div className="flex items-center gap-2 text-[14px] font-medium text-[#6A7282] whitespace-nowrap">
                <FaClock className="w-[16px] h-[16px] text-[#16A34A]"/>
                 24/7 Support
               </div>
             </div>
          </div>
         </div>
        </div>
        <div className="col-span-1">
          <div className="bg-white p-[48px]  rounded-2xl shadow-[0px_8px_10px_-6px_#0000001A,0px_20px_25px_-5px_#0000001A]">
               <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
                <span className="font-bold text-[30px] leading-[36px] tracking-normal text-center align-middle"> 
                    <span className='text-[#16A34A]'>Fresh</span>
                    Cart</span>
            </div>
            <h1 className="mb-2 font-bold text-[24px] leading-[32px] tracking-normal text-center align-middle text-[#1E2939]">Welcome Back!</h1>
            <p className="font-medium text-[16px] leading-[24px] tracking-normal text-center align-middle text-[#4A5565]">Sign in to continue your fresh shopping experience</p>
          </div>
              
              <div className='space-y-3 mb-6'>
              <button className='w-full flex items-center justify-center rounded-[12px] gap-3  border-2 border-[#E5E7EB] px-4 py-3'>
              <Image src={gmail} alt='gmail' />
              <span className="font-medium text-[16px] leading-5 tracking-normal text-center align-middle text-[#364153]">Continue with Google</span>
              </button>
              <button className='w-full flex items-center justify-center rounded-[12px] gap-3  border-2 border-[#E5E7EB] px-4 py-3'>
              <Image src={facebook} alt='facebook' />
              <span className="font-medium text-[16px] leading-5 tracking-normal text-center align-middle text-[#364153]">Continue with Google</span>
              </button>
              </div>

           <div className="flex items-center w-full mb-6">
            <div className="flex-1 h-px border-t border-[#E5E7EB]" ></div>

            <span className="px-4 font-medium text-[14px] leading-[20px] text-[#6A7282]">
              OR CONTINUE WITH EMAIL
            </span>

            <div className="flex-1 h-px border-t border-[#E5E7EB]"></div>
          </div>
          
             <form onSubmit={form.handleSubmit(handleLogin)} className='space-y-6 mb-8'>
             <div>
              <label htmlFor="" className="mb-2 font-semibold text-[14px] leading-[20px] tracking-normal align-middle text-[#364153]">Email Address</label>
             <div className="relative">
              <input type="text"  {...form.register("email")} className="w-full rounded-[12px] border-2 border-[#E5E7EB] border-[0.5px] pt-[18px] pr-4 pb-3.5 pl-12 font-medium text-[16px] leading-none tracking-normal align-middle" placeholder='Enter your email'/>
            <MdEmail className="w-[20px] h-[16px] text-[#99A1AF] absolute top-[20px] left-[18px]" />
            {form.formState.errors.email && (
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.email.message}
                  </p>
                )}
             </div>
             </div>

             <div>
              <div className="mb-2 flex items-center justify-between">
              <label htmlFor="" className="font-semibold text-[14px] leading-[20px] tracking-normal align-middle text-[#364153]">Password</label>
              <Link href="/user/forget_password" className="font-medium text-[14px] leading-[20px] tracking-normal align-middle text-[#16A34A]">Forgot Password?</Link>
              </div>
              <div className="relative">
                <input type={showPassword ? "text" : "password"} {...form.register("password")} className="w-full rounded-[12px] border-2 border-[#E5E7EB] pt-[18px] pr-12 pb-3.5 pl-12 font-medium text-[16px] leading-none tracking-normal align-middle"  placeholder='Enter your password'/>
                      {form.formState.errors.password && (
                      <p className="text-red-500 text-sm">
                        {form.formState.errors.password.message}
                      </p>
                    )}
              
               <Image src={lock_absolute} alt='lock_absolute' className='absolute top-[20px] left-[18px]' />
             <a onClick={() => setShowPassword(!showPassword)}  className="absolute top-[14px] right-[16px] pt-[3px] pb-[5px] cursor-pointer">
              {showPassword ? (
               <FaEyeSlash className="w-[20px] h-[16px] text-[#99A1AF]" />
             ) : (
                <FaEye className="w-[20px] h-[16px] text-[#99A1AF]" />
                 ) }
               </a>
              </div>
             </div>
               <div className='flex items-center'>
                <label htmlFor="" className='flex items-center'>
                  <input type="checkbox"  className='w-[16px] h-[16px] rounded-[2.5px] border border-[#767676]'/>
                  <span className="pl-3 font-medium text-[14px] leading-[20px] tracking-normal align-middle text-[#364153]">Keep me signed in</span>
                </label>
               </div>
               <button  disabled={isLoading}  type="submit" className="flex items-center justify-center gap-1 w-full rounded-[12px] px-4 py-3  cursor-pointer hover:shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] bg-[#16A34A] text-white">
               {isLoading ? <Spinner/> : ''}   
               Sign In
               </button>
             </form>

             <div className="text-center pt-6 border-t  border-[#F3F4F6] mb-6">
              <p className="flex items-center justify-center gap-[7.99px] font-medium text-[16px] leading-5 tracking-normal text-center align-middle text-[#4A5565]">New to FreshCart?
                <a href="" className="font-semibold text-[16px] leading-5 tracking-normal text-center align-middle text-[#16A34A]">Create an account</a>
              </p>
             
             </div>


             <div className="flex items-center justify-center">
                   <div className="flex items-center pr-6">
                   <div className="flex items-center  text-[14px] font-medium text-[#6A7282] whitespace-nowrap">
                     <Image src={lock_login} alt='lock_login' className='pr-1' />
                     SSL Secured
                   </div>
                  </div>

                  <div className="flex items-center pr-6">
                   <div className="flex items-center text-[14px] font-medium text-[#6A7282] whitespace-nowrap">
                     <Image src={users} alt='lock_login' className='pr-1' />
                     50K+ Users
                   </div>
                    </div>
                   <div className="flex items-center  text-[14px] font-medium text-[#6A7282] whitespace-nowrap">
                      <FaStar className="w-[19px] h-[12px] pr-1 text-[#6A7282"/>
                     4.9 Rating
                   </div>
                 </div>
          </div>
        </div>
        </div>
        <FeaturesBar variant='login' />
    </>
  )
}
