import React from 'react'
import { FaUser } from "react-icons/fa6";

export default  function UserHeader(){
 return (
     <>
     <div className="px-4 md:px-4 xl:px-48 bg-[linear-gradient(135deg,_#16A34A_0%,_#22C55E_50%,_#4ADE80_100%)]">
            <div className="xl:px-4 py-12">
             <nav className="flex items-center gap-2 mb-6">
             <a href="" className="text-[14px] leading-5 font-medium text-[#FFFFFFB2]">Home</a>
             <span className="font-medium text-sm leading-5 text-[#FFFFFF66]">/</span>
             <span className="text-sm font-medium leading-5 text-white">My Account</span>
             </nav>
             <div className="flex items-center gap-5">
               <div className="flex items-center  justify-center  w-16 h-16 rounded-2xl bg-[#FFFFFF33] backdrop-blur-md shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.1),_0px_20px_25px_-5px_rgba(0,0,0,0.1),_0px_0px_0px_1px_rgba(255,255,255,0.3)]">
             <FaUser className="w-[37.5px] h-[30px] text-white" />
               </div>
               <div>
                 <h1 className="font-bold text-[30px] leading-[36px] tracking-[-0.75px] align-middle text-white">My Account</h1>
               <p className='mt-1 font-medium text-[16px] leading-[20px] tracking-[0] align-middle text-[#FFFFFFCC]'>Manage your addresses and account settings</p>
               </div>
             </div>
            </div>
           </div>
     </>

    
        )
}