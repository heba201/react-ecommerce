"use client"
import React, { useEffect, useRef, useState } from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { FaTruck , FaApple ,FaGooglePlay ,FaShieldAlt     } from "react-icons/fa";
import { FaArrowRightLong , FaLeaf } from "react-icons/fa6";
import Image from "next/image";
import rect from "@/assets/home/rect.png";

export default function Newsletter() {
 const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);


  return (
    <>
     <section  ref={ref} className={`w-full  top-[5229px] pt-[65px] py-16 news-letter ${isVisible ? "show" : ""}`}>
   
    <div className="w-full  px-[17px] py-[32px] relative rounded-[40px] border-t border-t-[1px] border-t-[#D0FAE580] bg-[linear-gradient(135deg,#F3F4F6_0%,#FFFFFF_50%,#FEF2F2_100%)] overflow-hidden shadow-[0px_25px_50px_-12px_rgba(0,188,125,0.1)]" >
    <div className="absolute w-[320px] h-[320px] rounded-full xl:bg-[linear-gradient(135deg,_rgba(164,244,207,0.4)_0%,_rgba(164,244,207,0)_100%)] md:bg-[linear-gradient(135deg,_rgba(164,244,207,0.4)_0%,_rgba(164,244,207,0)_100%)] bg-[linear-gradient(135deg,rgba(164,244,207,0.4)_0%,rgba(164,244,207,0)_100%)] backdrop-blur-[64px] top-[-80px] right-[-80px]"></div>
     <div className="absolute w-[256px] h-[256px] rounded-full xl:bg-[linear-gradient(45deg,_rgba(150,247,228,0.3)_0%,_rgba(150,247,228,0)_100%)] md:bg-[linear-gradient(45deg,_rgba(150,247,228,0.3)_0%,_rgba(150,247,228,0)_100%)] bg-[linear-gradient(45deg,rgba(150,247,228,0.3)_0%,rgba(150,247,228,0)_100%)] backdrop-filter: blur(64px) bottom-[-64px] left-[-64px]"></div>
    
    <div className="w-full relative xl:p-[56px] md:p-[32px] xl:gap-8 md:gap-3 flex items-center flex-col xl:flex-row md:flex-row">

   {/* first div */}
<div className="xl:w-[70%] md:w-[60%] w-[100%] space-y-6 text-white">
   
   <div className="flex  items-center gap-4">
     <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[linear-gradient(135deg,#00BC7D_0%,#00BBA7_100%)] shadow-[0px_4px_6px_-4px_#00BC7D4D,0px_10px_15px_-3px_#00BC7D4D]">
    <MdOutlineEmail className="w-[25px] h-5 text-[#FFFFFF]" />
     </div>
     <div>
      <h3 className="text-[14px] font-semibold leading-5 tracking-[0.35px] uppercase text-[#009966]">Newsletter</h3>
      <p className="text-xs font-medium leading-4 tracking-normal align-middle text-[#6A7282]">50,000+ subscribers</p>
     </div>
   </div>

    <div className="">
     <h2 className="text-[36px] font-bold leading-[49.5px] tracking-normal align-middle text-black">
      Get the Freshest Updates <span className="text-[#009966]">Delivered Free</span>
     </h2>
     <p className="text-[18px] font-medium leading-7 tracking-normal align-middle text-[#6A7282]">
      Weekly recipes, seasonal offers & exclusive member perks.
     </p>
    </div>

    <div className="flex flex-wrap items-center pt-[1px] gap-3">
     
     {/* one */}
     <div className="flex items-center w-[197px] h-[50px] px-4 py-[10px] gap-2.5 rounded-full border border-t border-[#D0FAE5] bg-white/80">
        <div className="flex items-center justify-center w-7 h-7 rounded-full bg-[#D0FAE5]">
             <FaLeaf className="w-[15px] h-[12px] text-[#009966]"/>
        </div>
        <span className="text-[14px] font-medium leading-5 tracking-normal align-middle text-[#364153]">
          Fresh Picks Weekly
        </span>
     </div>

        {/* two */}

<div className="flex items-center w-[208px] h-[50px] px-4 py-[10px] gap-2.5 rounded-full border border-t border-[#D0FAE5] bg-white/80">
        <div className="flex items-center justify-center w-7 h-7 rounded-full bg-[#D0FAE5]">
             <FaTruck className="w-[15px] h-[12px] text-[#009966]"/>
        </div>
        <span className="text-[14px] font-medium leading-5 tracking-normal align-middle text-[#364153]">
          Free Delivery Codes
        </span>
     </div>
 
   {/* three */}

   <div className="flex items-center w-[208px]   h-[50px] px-4 py-[10px] gap-2.5 rounded-full border border-t border-[#D0FAE5] bg-white/80">
        <div className="flex items-center justify-center w-7 h-7 rounded-full bg-[#D0FAE5]">
             <Image src={rect} alt='' className="w-[15px] h-[12px] text-[#009966]"/>
        </div>
        <span className="text-[14px] font-medium leading-5 tracking-normal align-middle text-[#364153]">
          Members-Only Deals
        </span>
     </div>

 
    </div>
  <form className="xl:pt-[9px]   w-full">
        <div className="flex xl:flex-row md:flex-row flex-col  items-center gap-3">
          <div className="xl:w-[70%] md:w-[70%] flex w-full">
             <input className="w-full px-5 pt-[17px] pb-[18px] rounded-2xl border-2 border-t-2 border-[#E5E7EB] bg-white shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A]" />
          </div>
          <button className="w-full xl:w-[40%] md:w-[40%]  flex  items-center justify-center px-8 py-[18px] gap-3 rounded-2xl bg-[linear-gradient(90deg,#009966_0%,#00BC7D_100%)] shadow-[0px_4px_6px_-4px_#00BC7D4D,0px_10px_15px_-3px_#00BC7D4D] hover:from-emerald-500 hover:to-teal-500 text-white shadow-emerald-500/30 hover:shadow-emerald-500/40 hover:scale-[1.02] transition-all duration-300 cursor-pointer">
            <span className="text-base font-semibold leading-6 text-center align-middle text-white">Subscribe</span>
          <FaArrowRightLong  className="w-[17.5px] h-[14px]" />
          </button>
        </div>
        <p className="pl-1 pt-[12px] text-xs font-medium leading-4 tracking-normal align-middle text-[#99A1AF]">
     ✨ Unsubscribe anytime. No spam, ever.
        </p>
       </form>
  </div>
{/* second div */}
<div className="xl:w-[30%] md:w-[40%]  w-[100%] mt-[32px]  xl:mt-0  md:mt-0  xl:pl-8 md:pl-4 pl-4 pt-[32px] pb-[32px]  xl:border-l xl:border-[#D0FAE5]  md:border-l md:border-[#D0FAE5]">
 <div className="relative h-full bg-[linear-gradient(135deg,#101828_0%,#1E2939_100%)] rounded-3xl p-8">
  
   <div className="absolute w-32 h-32 rounded-full bg-[#00BC7D33] backdrop-blur-2xl top-0 right-0"></div>
    <div className="absolute w-24 h-24 rounded-full bg-[#00BBA733] backdrop-blur-2xl left-0 bottom-0"></div>
   
   <div className="relative h-full">
    
    <div className="inline-block w-fit px-3 py-[6px] rounded-full border border-[1px] bg-[#00BC7D33] border-t border-[#00BC7D4D] text-xs font-semibold leading-4 tracking-normal align-middle text-[#00D492]">
   📱 MOBILE APP 
    </div>

    <h3 className="top-[50px] text-base font-bold leading-[30px] tracking-normal align-middle text-[#FFFFFF]">Shop Faster on Our App</h3>
    <p className="top-[99px] pb-[0.75px] text-[14px] font-medium leading-[22.75px] tracking-normal align-middle text-[#99A1AF]">Get app-exclusive deals & 15% off your first order.</p>

    <div  className="flex flex-col top-[142.75px] pt-2 gap-3">
     <a className="w-full flex items-center h-[59px] p-4 py-3 px-4 gap-3 rounded-xl border border-[1px] bg-[#FFFFFF1A] border-t border-[#FFFFFF1A] backdrop-blur-[8px] hover:bg-white/15 transition-all hover:scale-[1.02]" href="#">
      <FaApple className="w-[25px] h-5 text-white" />
      <div className="flex flex-col gap-[-2px] ">
         <div className="text-[10px] font-medium leading-[15px] tracking-[0.25px] uppercase align-middle text-[#99A1AF]">Download on</div>
      <div className="text-[14px] font-semibold leading-5 tracking-normal align-middle text-[#FFFFFF]">App Store</div>
      </div>
     </a>

     <a className="w-full flex items-center p-4 py-3 px-4 gap-3 rounded-xl border border-[1px] bg-[#FFFFFF1A] border-t border-[#FFFFFF1A] backdrop-blur-[8px] hover:bg-white/15 transition-all hover:scale-[1.02]" href="#">
      <FaGooglePlay  className="w-[25px] h-5 text-white" />
      <div className="flex flex-col gap-[-2px]">
         <div className="text-[10px] font-medium leading-[15px] tracking-[0.25px] uppercase align-middle text-[#99A1AF]">Get it on</div>
      <div className="text-[14px] font-semibold leading-5 tracking-normal align-middle text-[#FFFFFF]">Google Play</div>
      </div>
     </a>
    </div>

   
   <div className="flex items-center top-[300.75px] pt-2 gap-2">
       <span className="h-5 min-w-[58.31px] text-[14px] font-medium leading-5 tracking-normal align-middle text-[#FDC700]">
          ★★★★★
       </span>
       <span className="text-[14px] font-medium leading-5 tracking-normal align-middle text-[#99A1AF] whitespace-nowrap">4.9 • 100K+ downloads</span>
     </div>

   </div>
 </div>
</div>
    </div>
    </div>
</section>
    </>
  )
}
