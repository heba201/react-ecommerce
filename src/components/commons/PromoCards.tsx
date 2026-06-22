"use client"
import React, { useEffect } from 'react'
import { FaArrowRightLong , FaLeaf } from "react-icons/fa6";
export default function PromoCards() {

    useEffect(() => {
        const cards = document.querySelectorAll(".boxes");
    
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("show");
              }
            });
          },
          { threshold: 0.2 }
        );
    
        cards.forEach((card) => observer.observe(card));
        return () => observer.disconnect();
      }, []);

  return (
    <>
    <div className="col-span-1 relative  rounded-2xl p-8 bg-[linear-gradient(135deg,#00BC7D_0%,#007A55_100%)] overflow-hidden boxes left">
           <div className="absolute w-40 h-40 rounded-full bg-[#FFFFFF1A] top-[-70px] right-[-70px]"></div>
           <div className="absolute w-32 h-32 rounded-full bg-[#FFFFFF1A] bottom-[-58px] left-[-58px]"></div>
          <div className="relative h-59">
       
       <div className="flex w-[145px] h-[28px] px-3 py-1 gap-2 rounded-full bg-white/20">
       <span className="font-medium text-[14px] leading-5 tracking-normal align-middle">🔥</span>
       <span className="font-medium text-[14px] leading-5 tracking-normal align-middle text-white">Deal of the Day</span>
       </div>
       <a href="/products" className="h-12 flex items-center absolute top-47 px-6 py-3 gap-2 rounded-full bg-[#FFFFFF] hover:bg-gray-100 transition-colors">
         <span className="font-semibold text-[16px] leading-6 tracking-normal align-middle text-[#009966]">Shop Now</span>
         <FaArrowRightLong className='pl-2 text-[#16A34A] w-5 h-4' />
       </a>
    
    <div className="w-[660px] h-[36px] flex items-center absolute top-32 gap-4 opacity-100">
    <div className="h-[36px] font-bold text-[30px] leading-9 tracking-normal align-middle text-[#FFFFFF]">
      40% OFF
    </div>
    <div className="h-[20px] font-medium text-[14px] leading-5 tracking-normal align-middle text-white/50">
     Use code: <span className="font-bold text-[14px] leading-5 tracking-normal align-middle text-white"> ORGANIC40 </span>
    </div>
    </div>
    
       <h3 className="top-11 font-bold text-[30px] leading-9 tracking-normal align-middle text-white h-9">Fresh Organic Fruits</h3> 
        <p className="font-medium text-[16px] leading-6 tracking-normal align-middle text-white/80 top-22 mb-4 h-6">Get up to 40% off on selected organic fruits</p>
    
         </div>
         </div>

         <div className="col-span-1 relative  rounded-2xl p-8 bg-[linear-gradient(135deg,#FF8904_0%,#FF2056_100%)] overflow-hidden boxes right">
               <div className="absolute h-40 w-40 rounded-full bg-[#FFFFFF1A] top-[-80px] right-[-80px]"></div>
                <div className="absolute h-32 w-32 rounded-full bg-[#FFFFFF1A] bottom-[-58px] left-[-58px]"></div>
             
             <div className="relative h-[236px]">
         
         <div className="flex items-center w-[129px] h-[28px] px-3 py-1  gap-2 rounded-full text-white/20 bg-white/20">
              <span className="font-medium text-[14px] leading-[20px] tracking-normal align-middle">✨</span>
              <span className="font-medium text-[14px] leading-[20px] tracking-normal align-middle text-[#FFFFFF]">New Arrivals</span>
             </div>
         
            <h3 className="top-[44px] h-[36px] text-white font-bold text-[30px] leading-[36px] tracking-normal align-middle">Exotic Vegetables</h3> 
         <p className="top-[88px] h-[24px] font-medium text-[16px] leading-[24px] tracking-normal align-middle text-white/80">Discover our latest collection of premium vegetables</p>
         
           <div className="absolute  top-32 flex items-center gap-4 h-9">
                 <div className="h-[36px] text-white font-bold text-[30px] leading-[36px] tracking-normal align-middle">
                    25% OFF
                 </div>
                 <div className="h-[20px] font-medium text-[14px] leading-[20px] tracking-normal align-middle text-white/50">
              Use code: <span className="font-bold text-[14px] leading-[20px] tracking-normal align-middle text-white">FRESH25</span>
                 </div>
               </div>
             <a href="/products" className="absolute h-12 flex items-center top-[188px] w-[171px]  px-6 py-3 gap-2 rounded-full bg-white hover:bg-gray-100 transition-colors">
                   <span className="font-semibold text-[16px] leading-6 tracking-normal align-middle text-[#FF6900]">Explore Now</span>
             <FaArrowRightLong className='pl-2 text-[#FF6900] w-5 h-4' />
               </a>
             </div>
              </div>
    </>
  )
}
