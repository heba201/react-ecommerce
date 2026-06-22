"use client"
import React, { useState } from 'react'
import { FaUser } from "react-icons/fa6";
import { FaLocationDot , FaGear   } from "react-icons/fa6";
import { HiMiniChevronRight  } from "react-icons/hi2";
import { FaSave , FaEye } from "react-icons/fa";
import Image from 'next/image'
import lock from "@/assets/user/lock.png";
import white_lock from "@/assets/user/white_lock.png";
import FeaturesBar from '@/components/featuresBar/FeaturesBar';
import SideMenu from '@/components/user/SideMenu';
import UserHeader from '@/components/user/UserHeader';
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { updateDataSchema, updatePasswordSchema, updatePasswordTypeSchema, updateTypeSchema } from '@/schemas/user.sechamas';
import { updateUserData, updateUserPassword } from '@/actions/user.action';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { useSession } from 'next-auth/react'
import { UserDataI } from '@/types/user.type';
import { FaEyeSlash } from "react-icons/fa";

export default  function Profile(){
  const {data:session , status} =  useSession();
  const[userData,setUserData] = useState<UserDataI>();
  const [isLoadingUpdate,setIsLoadingUpdate] = useState(false);
  const [isLoadingUpdatePassword,setIsLoadingUpdatePassword] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  const { 
  register: registerUpdateProfile, 
  handleSubmit: handleSubmitupdateProfile,
  formState: { errors: profileErrors }
} = useForm({
  resolver: zodResolver(updateDataSchema),
  defaultValues: { name: "", email: "", phone: "" },
  values: {
    name: session?.user?.name ?? '',
    phone: "" 
  }
});

  async function handleupdateData(data:updateTypeSchema){
    try {
    setIsLoadingUpdate(true);
    const response = await  updateUserData(data);
    console.log(response);
   if(response.message === 'success'){
     toast.success("Data updated Successfully");
       setUserData(response.user);
       console.log(response.user);
      }else if(response.message === 'fail'){
        toast.error(response.errors.msg);
      }
     } catch (error) {
       toast.error("Update data Failed");
        console.log(error);
    }finally{
         setIsLoadingUpdate(false);
    }
  }


  const { 
  register: registerUpdatePassword, 
  handleSubmit: handleSubmitupdatePassword,
  setFocus: setPasswordFocus ,
  formState: { errors: passwordErrors }
} = useForm({
  resolver: zodResolver(updatePasswordSchema),
  defaultValues: {   
    currentPassword:"",
    password:"",
    rePassword:""
   },
});

  async function handleupdatePassword(data:updatePasswordTypeSchema){
    try {
    setIsLoadingUpdatePassword(true);
    const response = await  updateUserPassword(data);
    console.log(response);
   if(response.message === 'success'){
     toast.success("Password updated Successfully");
      }else if(response.message === 'fail'){
          toast.error(response.errors.msg);
      }else if(response.statusMsg == 'fail'){
         toast.error(response.message);
      }
     } catch (error) {
       toast.error("Update data Failed");
      console.log(error);
    }finally{
        setIsLoadingUpdatePassword(false);
    }
  }

 return (
     <>
     <div className='min-h-screen bg-[#F9FAFB80]'>
       <UserHeader />
        <div className='px-4 md:px-4 xl:px-[208px] mt-8'>
        <div className="flex flex-col md:flex-row xl:flex-row items-start gap-8">
        <SideMenu />
       <div className='w-full md:w-2/3 xl:flex-1'>
       <div className='space-y-6'>
        <div className="mb-6">
        <h2 className="font-bold text-[20px] leading-[28px] tracking-[0] align-middle text-[#101828]">Account Settings</h2>
       <p className="font-medium text-[14px] leading-[20px] tracking-[0] align-middle text-[#6A7282]">Update your profile information and change your password</p>
       </div>
       <div className="bg-white rounded-[24px] border border-[#F3F4F6] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]">
        <div className="p-6 border-b border-b-[#F3F4F6]">
            <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-[56px] h-[56px] rounded-[16px] bg-[#DCFCE7]">
            <FaUser className="w-[30px] h-[24px] text-[#16A34A]" />  
            </div>
            <div>
             <h3 className="font-bold text-[16px] leading-[20px] tracking-[0] align-middle text-[#101828]">Profile Information</h3>
           <p className="font-medium text-[14px] leading-[20px] tracking-[0] align-middle text-[#6A7282]">Update your personal details</p>
            </div>
            </div>
            
            <form onSubmit={handleSubmitupdateProfile(handleupdateData)} className='space-y-5 mt-6'>
              <div>
              <label htmlFor="" className="mb-2 font-medium text-[14px] leading-[20px] tracking-[0] align-middle text-[#364153]">Full Name</label>
             <input  {...registerUpdateProfile("name")} type='text' className='w-full rounded-[12px] border p-[12px] px-[16px] border border-[#E5E7EB] font-medium text-[16px] leading-[20px] tracking-[0] align-middle text-[#364153]'   />
             {profileErrors.name && <p className="text-red-500 text-sm">{profileErrors.name.message}</p>}

             </div>

             <div>
              <label htmlFor="" className="mb-2 font-medium text-[14px] leading-[20px] tracking-[0] align-middle text-[#364153]">Email Address</label>
             <input {...registerUpdateProfile("email")}  type='email' className='w-full rounded-[12px] border p-[12px] px-[16px] border border-[#E5E7EB] font-medium text-[16px] leading-[20px] tracking-[0] align-middle text-[#364153]' placeholder='Enter your email' />
             {profileErrors.email && <p className="text-red-500 text-sm">{profileErrors.email.message}</p>}
             </div>

            <div>
              <label htmlFor="" className="mb-2 font-medium text-[14px] leading-[20px] tracking-[0] align-middle text-[#364153]">Phone Number</label>
             <input  {...registerUpdateProfile("phone")} type='text' className='w-full rounded-[12px] border p-[12px] px-[16px] border border-[#E5E7EB] font-medium text-[16px] leading-[20px] tracking-[0] align-middle text-[#364153]' placeholder='01xxxxxxxxx' />
            {profileErrors.phone && <p className="text-red-500 text-sm">{profileErrors.phone.message}</p>}
             </div>

             <div className="pt-4">
             <Button type='submit' disabled={isLoadingUpdate} className="flex items-center  justify-center gap-2 rounded-[12px] py-[12px] px-[24px] bg-[#16A34A] shadow-[0px_4px_6px_-4px_rgba(22,163,74,0.25),0px_10px_15px_-3px_rgba(22,163,74,0.25)] font-semibold text-[16px] leading-[20px] tracking-[0] text-center align-middle text-white cursor-pointer hover:bg-green-700 transition-colors">
            {isLoadingUpdate ? <Spinner/> : <FaSave className="w-[20px] h-[16px] text-white" />}  
               Save Changes
             </Button>
             </div>
            </form>
        </div>
        
        <div className="p-6 bg-[#F9FAFB]">
        <h3 className="mb-4 font-bold text-[16px] leading-[20px] tracking-[0] align-middle text-[#101828]">Account Information</h3>
        <div className='space-y-3'>
         <div className="flex items-center justify-between">
         <span className='font-medium text-[14px] leading-[20px] tracking-[0] align-middle text-[#6A7282]'>User ID</span>
         <span className="font-medium text-[8px] leading-[20px] tracking-[0] align-middle text-[#364153]">—</span>
         </div>
         <div className="flex items-center justify-between">
            <span className="font-medium text-[14px] leading-[20px] tracking-[0] align-middle text-[#6A7282]">Role</span>
        <span className="rounded-[8px] py-[4px] px-[12px] bg-[#DCFCE7] text-[#15803D]  font-medium text-[14px] leading-[20px] tracking-[0] align-middle capitalize">{session?.user ? (session.user as any).role : ''}</span>
         </div>
        </div>
        </div>
       </div>
       
       
       <div className='mb-8 bg-white rounded-[24px] border border-[#F3F4F6] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]'>
       <div className="p-6">
        <div className="mb-6 flex items-center gap-4 ">
          <div className="flex items-center justify-center w-[56px] h-[56px] rounded-[16px] bg-[#FEF3C6]">
        <Image src={lock} alt='lock' />
          </div>
          <div>
            <h3 className="font-bold text-[16px] leading-[20px] tracking-[0] align-middle text-[#101828]">Change Password</h3>
         <p className="font-medium text-[14px] leading-[20px] tracking-[0] align-middle text-[#6A7282]">Update your account password</p>
          </div>
        </div>
       
        <form onSubmit={handleSubmitupdatePassword(handleupdatePassword)} className='space-y-5'>
            <div>
            <label htmlFor="" className="mb-2 font-medium text-[14px] leading-[20px] tracking-[0] align-middle text-[#364153]">Current Password</label>
            <div className="relative">
            <input {...registerUpdatePassword("currentPassword")}  type={showCurrentPassword ? "text" : "password"} className="w-full rounded-[12px] border pt-[13px] pr-[48px] pb-[14px] pl-[16px] border border-[#E5E7EB] font-medium text-[16px] leading-[100%] tracking-[0] align-middle" placeholder='Enter your current password' />
            {passwordErrors.currentPassword && <p className="text-red-500 text-sm">{passwordErrors.currentPassword.message}</p>}
            <button  onClick={() => {setShowCurrentPassword(!showCurrentPassword);setPasswordFocus('currentPassword')}} className='absolute top-[13px] right-[13px]  pt-[3px] pb-[5px] cursor-pointer'>
           {showCurrentPassword ? (
              <FaEyeSlash
                 className="w-[20px] h-[16px] text-[#99A1AF]" />
            ) : (
               <FaEye className="w-[20px] h-[16px] text-[#99A1AF]" />
            ) }
            </button>
            </div>
            </div>

            <div>
            <label htmlFor="" className="mb-2 font-medium text-[14px] leading-[20px] tracking-[0] align-middle text-[#364153]">New Password</label>
            <div className="relative">
            <input  {...registerUpdatePassword("password")}  type={showNewPassword ? "text" : "password"} className="w-full rounded-[12px] border pt-[13px] pr-[48px] pb-[14px] pl-[16px] border border-[#E5E7EB] font-medium text-[16px] leading-[100%] tracking-[0] align-middle" placeholder='Enter your new password' />
            {passwordErrors.password && <p className="text-red-500 text-sm">{passwordErrors.password.message}</p>}
            <button onClick={() => {setShowNewPassword(!showNewPassword);setPasswordFocus('password')}} className='absolute top-[13px] right-[13px]  pt-[3px] pb-[5px] cursor-pointer'>
            {showNewPassword ? (
              <FaEyeSlash
                 className="w-[20px] h-[16px] text-[#99A1AF]" />
            ) : (
               <FaEye className="w-[20px] h-[16px] text-[#99A1AF]" />
            ) }
            </button>
            
            </div>
            <p className="font-medium text-[12px] leading-[16px] tracking-[0] align-middle text-[#6A7282]">Must be at least 6 characters</p>
            </div>

            <div>
            <label htmlFor="" className="mb-2 font-medium text-[14px] leading-[20px] tracking-[0] align-middle text-[#364153]">Confirm New Password</label>
            <div className="relative">
            <input {...registerUpdatePassword("rePassword")} type={showRePassword ? "text" : "password"} className="w-full rounded-[12px] border pt-[13px] pr-[48px] pb-[14px] pl-[16px] border border-[#E5E7EB] font-medium text-[16px] leading-[100%] tracking-[0] align-middle" placeholder='Confirm your new password' />
            {passwordErrors.rePassword && <p className="text-red-500 text-sm">{passwordErrors.rePassword.message}</p>}
            <button onClick={() => {setShowRePassword(!showRePassword);setPasswordFocus('rePassword')}} className='absolute top-[13px] right-[13px]  pt-[3px] pb-[5px] cursor-pointer'>
            {showRePassword ? (
              <FaEyeSlash
                 className="w-[20px] h-[16px] text-[#99A1AF]" />
            ) : (
               <FaEye className="w-[20px] h-[16px] text-[#99A1AF]" />
            ) }
            </button>
            </div>
            </div>

             <div className="mt-5 pt-4">
                <button disabled={isLoadingUpdatePassword} type='submit' className="flex items-center justify-center gap-4 rounded-[12px] py-[12px] px-[24px] bg-[#E17100] font-semibold text-[16px] leading-[20px] tracking-[0] text-center align-middle text-white cursor-pointer hover:bg-amber-700 transition-colors">
               {isLoadingUpdatePassword ? <Spinner/> :  <Image src={white_lock} alt='white_lock' />}  
                   Change Password
                </button>
             </div>
        </form>
       </div>
       </div>
       </div>
       </div>
      </div>
      </div>
     </div>
    <FeaturesBar variant='' />
     </>    
 )
}