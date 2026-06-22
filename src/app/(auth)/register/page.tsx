"use client"
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Field, FieldDescription, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { registerSchema, registerTypeSchema } from '@/schemas/auth.sechamas'
import { registerUser } from '@/services/auth.services'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { FaStar , FaShieldAlt } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import user from "@/assets/user/user.png";
import Image from 'next/image'
import gmail_signup from "@/assets/user/gmail_signup.png";
import facebook_signup  from "@/assets/user/facebook_signup.png";
import user_plus from "@/assets/user/user_plus.png";
import FeaturesBar from '@/components/featuresBar/FeaturesBar'
import { Spinner } from '@/components/ui/spinner'
export default function Register() {
  const [isLoading, setIsLoading] = useState(false);
 const [password, setPassword] = useState("");
  function getPasswordStrength(pass:string) {
  if (pass.length === 0) return "empty";
  if (pass.length < 6) return "weak";
  if (
    pass.match(/[A-Z]/) &&
    pass.match(/[0-9]/) &&
    pass.length >= 8
  ) {
    return "strong";
  }

  return "medium";
}

type Strength = "empty" | "weak" | "medium" | "strong";
 function getStrengthStyle(strength: Strength) {
  const styles: Record<Strength, { width: string; color: string; label: string }> = {
   empty: { width: "0%", color: "#E5E7EB", label: "" },
    weak: { width: "33%", color: "#EF4444", label: "Weak" },
    medium: { width: "66%", color: "#F59E0B", label: "Medium" },
    strong: { width: "100%", color: "#22C55E", label: "Strong" },
  };

  return styles[strength];
}
const strength = getPasswordStrength(password);
const current = getStrengthStyle(strength);

const router = useRouter()
const form =  useForm({
  resolver:zodResolver(registerSchema),
  defaultValues:{
 name:"",
 email:"",
 password:"",
 rePassword:"",
 phone:""
  }
})

async function handleRegister(data:registerTypeSchema){
setIsLoading(true);
const response = await  registerUser(data)
if(response){
    setIsLoading(false);
}
if(response.message === 'success'){
router.push("/login")
toast.success("User Register Successfully")
}else{
  toast.error("User Register Failed")
}
}

  return (
    <>
    <div className='flex flex-col md:flex-row xl:flex-row  items-start gap-[48px] px-4 md:px-4 xl:px-[320px] mt-[40px] mb-[40px]'>
      <div className='w-full md:w-1/2 xl:w-1/2'>
        <h1 className="font-bold text-[36px] leading-[40px] align-middle tracking-normal text-[#364153]">Welcome to FreshCart</h1>
     <p className="font-medium text-[20px] leading-[28px] tracking-normal align-middle text-[#364153]">Join thousands of happy customers who enjoy fresh groceries
         delivered right to their doorstep.</p>
    
      <ul className="space-y-6 pt-6 pb-6">
         <li className="flex items-center gap-4">
           <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#BBF7D0]">
            <FaStar className="w-[22.5px] h-[18px] text-[#16A34A]" />
           </div>
           <div>
              <h2 className="font-semibold text-[18px] leading-[28px] tracking-normal align-middle text-[#364153">Premium Quality</h2>
           <p className="font-medium text-[16px] leading-[24px] tracking-normal align-middle text-[#4A5565]">Premium quality products sourced from trusted suppliers.</p>
           </div>
         </li>

         <li className="flex items-center gap-4">
           <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#BBF7D0]">
            <FaTruckFast className="w-[22.5px] h-[18px] text-[#16A34A]" />
           </div>
           <div>
              <h2 className="font-semibold text-[18px] leading-[28px] tracking-normal align-middle text-[#364153">Fast Delivery</h2>
           <p className="font-medium text-[16px] leading-[24px] tracking-normal align-middle text-[#4A5565]">Same-day delivery available in most areas</p>
           </div>
         </li>

         <li className="flex items-center gap-4">
           <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#BBF7D0]">
            <FaShieldAlt className="w-[22.5px] h-[18px] text-[#16A34A]" />
           </div>
           <div>
              <h2 className="font-semibold text-[18px] leading-[28px] tracking-normal align-middle text-[#364153">Secure Shopping</h2>
           <p className="font-medium text-[16px] leading-[24px] tracking-normal align-middle text-[#4A5565]">Your data and payments are completely secure</p>
           </div>
         </li>
      </ul>

      <div className="review p-4 gap-4 rounded-[6px] bg-white shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]">
       
        <div className="author flex items-center gap-4 mb-4">
        <Image src={user} alt='user'  className="w-[48px] h-[48px] rounded-full"/>
        
        <div>
          <h3 className="font-medium text-[16px] leading-[24px] tracking-normal align-middle text-[#364153]">Sarah Johnson</h3>
        <div className="rating flex items-center  pt-[3px] pb-[5px]">
         <FaStar className="w-[20px] h-[16px] text-[#FFDF20]" />
         <FaStar className="w-[20px] h-[16px] text-[#FFDF20]" />
         <FaStar className="w-[20px] h-[16px] text-[#FFDF20]" />
         <FaStar className="w-[20px] h-[16px] text-[#FFDF20]" />
         <FaStar className="w-[20px] h-[16px] text-[#FFDF20]" />
        </div>
        </div>
        </div>
        <p className="font-medium italic text-[16px] leading-[24px] tracking-normal align-middle text-[#4A5565]">
         "FreshCart has transformed my shopping experience. The quality of the
          products is outstanding, and the delivery is always on time. Highly
          recommend!" 
        </p>
      </div>
      </div>
      
        <div className="w-full md:w-1/2 xl:w-1/2 bg-white pt-10 pr-6 pb-10 pl-6 rounded-2xl shadow-[0px_4px_6px_-4px_#0000001A,0px_10px_15px_-3px_#0000001A]">
         <h2 className="mb-2 text-center font-semibold text-[30px] leading-[36px] tracking-normal text-center align-middle text-[#364153]">
          Create Your Account
         </h2>
         <p className="text-center font-medium text-[16px] leading-[24px] tracking-normal text-center align-middle text-[#364153]">
          Start your fresh journey with us today
         </p>
          
         <div className='register-options mb-2 flex items-center justify-center gap-2 py-8'>
          <button className="flex items-center justify-center w-1/2 py-[8px] px-[16px] rounded-[8px] border border-[#D1D5DC]">
            <Image src={gmail_signup} alt='gmail_signup' className='pr-2' />
           <span className="font-semibold text-[16px] leading-[24px] tracking-normal text-center align-middle text-[#101828]">Google</span>
          </button>

          <button className="flex items-center justify-center w-1/2 py-[8px] px-[16px] rounded-[8px] border border-[#D1D5DC]">
            <Image src={facebook_signup} alt='facebook_signup'  className='pr-2' />
          <span className="font-semibold text-[16px] leading-[24px] tracking-normal text-center align-middle text-[#101828]">Facebook</span>
          </button>
         </div>
          
         <div className="mb-2 relative w-full h-[2px] bg-[#D1D5DC4D]">
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-[16px] bg-white font-medium text-[16px] leading-[24px] tracking-normal text-[#364153]">
            or
          </span>
        </div>
        
        <form onSubmit={form.handleSubmit(handleRegister)} className='space-y-7 py-2 mb-2'>
         <div className="">
          <label htmlFor="" className="mb-2 font-medium text-[16px] leading-[24px] tracking-normal align-middle text-[#364153]">Name*</label>
         <input type="text" {...form.register("name")} className="w-full pt-[9px] pr-[12px] pb-[10px] pl-[12px] rounded-[6px] border" placeholder='Ali'/>
         {form.formState.errors.name && (
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.name.message}
                  </p>
                )}
         </div>

          <div className="">
          <label htmlFor="" className="mb-2 font-medium text-[16px] leading-[24px] tracking-normal align-middle text-[#364153]">Email*</label>
         <input type="text" {...form.register("email")} className="w-full pt-[9px] pr-[12px] pb-[10px] pl-[12px] rounded-[6px] border font-medium text-[16px] leading-none tracking-normal align-middle" placeholder='ali@example.com'/>
         {form.formState.errors.email && (
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.email.message}
                  </p>
                )}
         </div>

           <div className="">
          <label htmlFor="" className="mb-2 font-medium text-[16px] leading-[24px] tracking-normal align-middle text-[#364153]">Password*</label>
         <input type="text" {...form.register("password")} onChange={(e) => setPassword(e.target.value)}  value={password} className="w-full pt-[9px] pr-[12px] pb-[10px] pl-[12px] rounded-[6px] border font-medium text-[16px] leading-none tracking-normal align-middle" placeholder='create a strong password'/>
         {form.formState.errors.password && (
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.password.message}
                  </p>
                )}
         <div className="mb-2 flex items-center gap-2">
          <div className="w-3/4 h-[4px] rounded-[6px] bg-[#E5E7EB]"  style={{
        width: current.width,
        backgroundColor: current.color,
      }}></div>
      {strength !== "empty" && (
          <span className="font-medium text-[14px] leading-[20px] tracking-normal align-middle text-[#364153]"  style={{ color: current.color }}> {current.label}</span>
          )}
          </div>
         <p className="font-medium text-[12px] leading-[16px] tracking-normal align-middle text-[#6A7282]">Must be at least 8 characters with numbers and symbols</p>
         </div>

        <div className="">
          <label htmlFor="" className="mb-2 font-medium text-[16px] leading-[24px] tracking-normal align-middle text-[#364153]">Confirm Password*</label>
         <input type="text" {...form.register("rePassword")} className="w-full pt-[9px] pr-[12px] pb-[10px] pl-[12px] rounded-[6px] border font-medium text-[16px] leading-none tracking-normal align-middle" placeholder='confirm your password'/>
        {form.formState.errors.rePassword && (
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.rePassword.message}
                  </p>
                )}
         </div>

         <div className="">
          <label htmlFor="" className="mb-2 font-medium text-[16px] leading-[24px] tracking-normal align-middle text-[#364153]">Phone Number*</label>
         <input type="text"  {...form.register("phone")} className="w-full pt-[9px] pr-[12px] pb-[10px] pl-[12px] rounded-[6px] border font-medium text-[16px] leading-none tracking-normal align-middle" placeholder='+1 234 567 8900'/>
          {form.formState.errors.phone && (
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.phone.message}
                  </p>
                )}
         </div>
          <div className="mb-[28px] flex items-center gap-2">
          <input type="checkbox" className="w-[16px] h-[16px] rounded-[2.5px] border border-[#767676]" />
          <label htmlFor="" className="pl-[8px] font-medium text-[16px] leading-[24px] tracking-normal align-middle text-[#364153]">I agree to the <span className='text-[#16a34a]'>Terms of Service</span>  and <span className='text-[#16a34a]'>Privacy Policy</span> *</label>
          </div>
          <button type='submit' disabled={isLoading} className="w-full h-[40px] flex items-center justify-center gap-2 rounded-[8px] bg-[#16A34A] cursor-pointer">
          {isLoading ? <Spinner/>: <Image src={user_plus} alt='user_plus' />} 
           <span className="font-semibold text-[16px] leading-[24px] tracking-normal text-center align-middle text-white">Create My Account</span>
          </button>
        </form>
        
        <div className="pt-10 border-t border-[#D1D5DC4D]">
         <p className="font-medium text-[16px] leading-[24px] tracking-normal text-center align-middle text-[#364153]">Already have an account? <span className='text-[#16a34a]'>Sign In</span></p>
        </div>
        </div>
    </div>
    <FeaturesBar variant='register' />
    </>
  
  )
}
