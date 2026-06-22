import React from 'react'
import { FaLocationDot , FaGear   } from "react-icons/fa6";
import { HiMiniChevronRight  } from "react-icons/hi2";
import { usePathname } from "next/navigation";
export default function SideMenu(){
       const pathname = usePathname();
 return (
     <>
     <aside className="xl:w-72 w-full shrink-0">
            <nav className="rounded-[16px] border border-[#F3F4F6] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] bg-white">
             <div className='p-4 border-b border-b-[#F3F4F6]'>
               <h2 className='font-bold text-[16px] leading-[20px] tracking-[0] align-middle text-[#101828]'>My Account</h2>
             </div>
             <ul className="p-2">
                 <a href="/user/address" className={`flex items-center justify-between py-[12px] px-[16px] ${pathname === "/user/address"? "bg-[#F0FDF4]": ""}`}>
                     <div className={`flex items-center  justify-center w-[36px] h-[36px] rounded-[8px]  ${pathname === "/user/address"? "bg-[#22C55E] text-white": "bg-[#F3F4F6] text-[#6A7282]"}`}>
                      <FaLocationDot className="w-[17.5px] h-[14px]" />
                     </div>
                     <span className={`font-medium text-[16px] leading-[20px] tracking-[0] align-middle ${pathname === "/user/address"? "text-[#15803D]": "text-[#4A5565]"}`}>My Addresses</span>
                  <HiMiniChevronRight className={`w-[15px] h-[12px] ${pathname === "/user/address"? "text-[#22C55E]": "text-[#99A1AF]"}`} />
                    </a>
                 <a href="/user/profile" className={`flex items-center justify-between rounded-[12px] pt-[12px] pr-[16px] pb-[12px] pl-[16px] ${pathname === "/user/profile"? "bg-[#F0FDF4]": ""}`}>
                     <div className={`flex items-center  justify-center w-[36px] h-[36px] rounded-[8px] bg-[#22C55E] ${pathname === "/user/profile"? "bg-[#22C55E] text-white": "bg-[#F3F4F6] text-[#6A7282]"}`}>
                     <FaGear className="w-[17.5px] h-[14px]" />
                     </div>
                     <span className={`font-medium text-[16px] leading-[20px] tracking-[0] align-middle ${pathname === "/user/profile"? "text-[#15803D]": "text-[#4A5565]"}`}>Settings</span>
                     <HiMiniChevronRight className={`w-[15px] h-[12px] ${pathname === "/user/profile"? "text-[#22C55E]": "text-[#99A1AF]"}`} />
                 </a>
             </ul>
            </nav>
            </aside>
     </>
        )
}