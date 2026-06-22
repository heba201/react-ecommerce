import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaShieldAlt } from "react-icons/fa";
import small_lock from "@/assets/user/small_lock.png";
import green_lock from "@/assets/user/green_lock.png";
import Image from 'next/image'

export default function ResetPassword() {
  return (
    // <div className='text-center'>
    //   <div className="mb-6  w-full rounded-[16px] pt-[115.15px] pb-[118px] bg-[linear-gradient(135deg,#F0FDF4_0%,#F0FDF4_50%,#F3F4F6_100%)] shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
    //    <div className="absolute w-24 h-24 rounded-full bg-[#DCFCE780]"></div>
    //   <div className="absolute w-32 h-32 rounded-full bg-[#DCFCE780]"></div>
    //   <div className="absolute w-16 h-16 rounded-full bg-[#D0FAE580]"></div> 
    //  <div className="relative">
    //     <div className="flex items-center justify-center w-[112px] h-[112px] -rotate-3 rounded-[24px] bg-white shadow-[0px_8px_10px_-6px_#0000001A,0px_20px_25px_-5px_#0000001A]">
    //     <div className="flex items-center justify-center w-[80px] h-[80px] -rotate-3 rounded-2xl bg-[#DCFCE7]">
    //          <Image src={green_lock} alt='green_lock' />
    //        </div>
    //     </div>
    //         <div className="mt-[21.14px] flex items-center gap-3">
    //         <div className="w-3 h-3 rounded-full bg-[#4ADE80]"></div>
    //         <div className="w-3 h-3 rounded-full bg-[#22C55E]"></div>
    //         <div className="w-3 h-3 rounded-full bg-[#16A34A]"></div>
    //     </div> 
    //      <div className="absolute  flex items-center justify-center w-[56px] h-[56px] rotate-12 rounded-xl bg-white shadow-[0px_4px_6px_-4px_#0000001A,0px_10px_15px_-3px_#0000001A]">
    //         <MdEmail className="w-[25px] h-[20px] rotate-12 text-[#22C55E]" />
    //     </div> 
    //      <div className="absolute flex items-center justify-center w-[56px] h-[56px] -rotate-12 rounded-xl bg-white shadow-[0px_4px_6px_-4px_#0000001A,0px_10px_15px_-3px_#0000001A]">
    //         <FaShieldAlt className="w-[25px] h-[20px] rotate-12 text-[#22C55E]" />
    //     </div>
    //    </div>
    //    </div>
    //     <div className='space-y-4'>
    //      <h2 className="font-bold text-[30px] leading-[36px] tracking-normal text-center align-middle text-[#1E2939]">Reset Your Password</h2>
    //      <p className="font-medium text-[18px] leading-[28px] tracking-normal text-center align-middle text-[#4A5565]">Don't worry, it happens to the best of us. We'll help you get back into your
    //        account in no time.</p>
    //        <div className="flex items-center justify-center">
    //          <div className="flex items-center pr-8">
    //             <div className="flex items-center font-medium text-[14px] leading-[20px] tracking-normal text-center align-middle text-[#6A7282]">
    //             <MdEmail className="w-[25.5px] h-[14px] pr-2 text-[#16A34A]"/>
    //                 Email Verification
    //             </div>
    //          </div>
    //          <div className="flex items-center pr-8">
    //             <div className="flex items-center font-medium text-[14px] leading-[20px] tracking-normal text-center align-middle text-[#6A7282]">
    //             <FaShieldAlt className="w-[25.5px] h-[14px] pr-2 text-[#16A34A]"/>
    //                 Secure Reset
    //             </div>
    //          </div>
    //          <div className="flex items-start font-medium text-[14px] leading-[20px] tracking-normal text-center align-middle text-[#6A7282]">
    //            <Image src={small_lock} alt='small_lock' className='mr-2' />
    //             Encrypted
    //          </div>
    //        </div>
    //     </div>
    //    </div>

    <div className="text-center mb-[24.25px]">
  <div className="relative mb-6 w-full rounded-[16px] pt-[115.15px] pb-[118px] bg-[linear-gradient(135deg,#F0FDF4_0%,#F0FDF4_50%,#F3F4F6_100%)] shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.1),0px_10px_15px_-3px_rgba(0,0,0,0.1)] overflow-hidden">

    {/* background circles */}
    <div className="absolute w-24 h-24 rounded-full bg-[#DCFCE780] top-[32px] left-[32px]"></div>
    <div className="absolute w-32 h-32 rounded-full bg-[#DCFCE780] bottom-[48px] right-[40px]"></div>
    <div className="absolute w-16 h-16 rounded-full bg-[#D0FAE580]  top-[80px] right-[80px]"></div>

    <div className="relative flex flex-col items-center">
      <div className="flex items-center justify-center w-[112px] h-[112px] -rotate-3 rounded-[24px] bg-white shadow-[0px_8px_10px_-6px_#0000001A,0px_20px_25px_-5px_#0000001A]">
        <div className="flex items-center justify-center w-[80px] h-[80px] -rotate-3 rounded-2xl bg-[#DCFCE7]">
          <Image src={green_lock} alt="green_lock" />
        </div>
      </div>
      {/* dots */}
      <div className="mt-[21px] flex items-center gap-3">
        <div className="w-3 h-3 rounded-full bg-[#4ADE80]" />
        <div className="w-3 h-3 rounded-full bg-[#22C55E]" />
        <div className="w-3 h-3 rounded-full bg-[#16A34A]" />
      </div>
      {/* floating icons */}
      <div className="absolute top-[20px] md:left-[50.79px] xl:left-[123.8px] flex items-center justify-center w-[56px] h-[56px] -rotate-12 rounded-xl bg-white shadow-[0px_4px_6px_-4px_#0000001A,0px_10px_15px_-3px_#0000001A]">
        <MdEmail className="w-[25px] h-[20px] rotate-12 text-[#22C55E]" />
      </div>
      <div className="absolute top-[25px] md:right-[50.79px]  xl:right-[123.8px] flex items-center justify-center w-[56px] h-[56px] rotate-12 rounded-xl bg-white shadow-[0px_4px_6px_-4px_#0000001A,0px_10px_15px_-3px_#0000001A]">
        <FaShieldAlt className="w-[25px] h-[20px] -rotate-12 text-[#22C55E]" />
      </div>
    </div>
  </div>

  {/* text */}
  <div className="space-y-4">
    <h2 className="font-bold text-[30px] leading-[36px] text-center text-[#1E2939]">
      Reset Your Password
    </h2>

    <p className="font-medium text-[18px] leading-[28px] text-center text-[#4A5565]">
      Don't worry, it happens to the best of us. We'll help you get back into your account in no time.
    </p>

    {/* features */}
    <div className="flex items-center justify-center gap-6">
      
      <div className="flex items-center gap-2 text-[14px] font-medium text-[#6A7282] whitespace-nowrap">
        <MdEmail className="w-[16px] h-[16px] text-[#16A34A]" />
        Email Verification
      </div>

      <div className="flex items-center gap-2 text-[14px] font-medium text-[#6A7282] whitespace-nowrap">
        <FaShieldAlt className="w-[16px] h-[16px] text-[#16A34A]" />
        Secure Reset
      </div>

      <div className="flex items-center gap-2 text-[14px] font-medium text-[#6A7282] whitespace-nowrap">
        <Image src={small_lock} alt="small_lock" className="w-4 h-4" />
        Encrypted
      </div>

    </div>
  </div>
</div>
  )
}
