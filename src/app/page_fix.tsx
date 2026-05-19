import CarouselComponent from "@/components/commons/CarouselComponent";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import section_shipping from "@/assets/home/section_shipping.png";
import section_secure from "@/assets/home/section_secure.png";
import secion_return from "@/assets/home/secion_return.png";
import section_support from "@/assets/home/section_support.png";
import { FaArrowRightLong , FaLeaf } from "react-icons/fa6";
import CategoryCard from "@/components/category/CategoryCard";
import ProductCard from "@/components/product/ProductCard";
import { MdOutlineEmail } from "react-icons/md";
import { FaTruck , FaApple ,FaGooglePlay    } from "react-icons/fa";
import rect from "@/assets/home/rect.png";

export default function Home() {
  return (
    <>
     
    <CarouselComponent/>
    <section className="h-36 px-56 py-8 bg-[#F9FAFB]">
      <div className="grid h-20 gap-4 grid-cols-4">
     
     <div className="col-span-1 flex items-center h-20 p-4 gap-4 rounded-[12px] bg-white shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]">
           <div className="w-12 h-12 rounded-full bg-[#FEF2F2] flex items-center justify-center">
            <Image src={section_shipping} alt='section_shipping' />
           </div>

           <div className="h-9">
             <h3 className="text-[14px] font-semibold leading-5 text-[#1E2939]">Free Shipping</h3>
             <p className="text-[12px] font-medium leading-4 text-[#6A7282]">On orders over 500 EGP</p>
           </div>
      </div>

<div className="col-span-1 flex items-center h-20 p-4 gap-4 rounded-[12px] bg-white shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]">
           <div className="w-12 h-12 rounded-full bg-[#ECFDF5] flex items-center justify-center">
            <Image src={section_secure} alt='section_secure' />
           </div>

           <div className="h-9">
             <h3 className="text-[14px] font-semibold leading-5 text-[#1E2939]">Secure Payment</h3>
             <p className="text-[12px] font-medium leading-4 text-[#6A7282]">100% secure transactions</p>
           </div>
      </div>


      <div className="col-span-1 flex items-center h-20 p-4 gap-4 rounded-[12px] bg-white shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]">
           <div className="w-12 h-12 rounded-full bg-[#F3F4F6] flex items-center justify-center">
            <Image src={secion_return} alt='secion_return' />
           </div>

           <div className="h-9">
             <h3 className="text-[14px] font-semibold leading-5 text-[#1E2939]">Easy Returns</h3>
             <p className="text-[12px] font-medium leading-4 text-[#6A7282]">14-day return policy</p>
           </div>
      </div>
 

      <div className="col-span-1 flex items-center h-20 p-4 gap-4 rounded-[12px] bg-white shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]">
           <div className="w-12 h-12 rounded-full bg-[#F9FAFB] flex items-center justify-center">
            <Image src={section_support} alt='section_support' />
           </div>

           <div className="h-9">
             <h3 className="text-[14px] font-semibold leading-5 text-[#1E2939]">24/7 Support</h3>
             <p className="text-[12px] font-medium leading-4 text-[#6A7282]">Dedicated support team</p>
           </div>
      </div>

      </div>
    </section>
    
    <div className="container mx-auto  h-auto  top-174.25 left-48 px-4 py-4 gap-8  bg-white">
     <div className="h-25 flex justify-between items-center">
   
    <div className="pt-8 pb-8">
    <div className="flex  h-9  gap-3 items-center">
    <div className="w-1.5 h-8 bg-[linear-gradient(180deg,#00BC7D_0%,#007A55_100%)] rounded-full"></div>
    <h2 className="font-bold text-[30px] leading-9 tracking-normal align-middle">Shop By <span className="text-[#00BC7D]">Category</span></h2>
    </div>
    </div>
 
   <a className="h-6 flex items-center gap-0 font-medium text-[16px] leading-6 tracking-normal align-middle text-[#16A34A]">
    <span>View All Categories</span>  
   <FaArrowRightLong className='pl-2 text-[#16A34A] w-5 h-4' />
   </a>
    </div>

    <div className="grid grid-cols-6 gap-3">
            {Array.from({ length: 10 }).map((_, index) => (
               <CategoryCard key={index}/>
               ))}
           </div>
            <div className="grid grid-cols-2 gap-4">
     <div className="col-span-1 relative h-75 rounded-2xl p-8 bg-[linear-gradient(135deg,#00BC7D_0%,#007A55_100%)] overflow-hidden">
       <div className="absolute w-40 h-40 rounded-full bg-[#FFFFFF1A] top-[-70px] right-[-70px]"></div>
       <div className="absolute w-32 h-32 rounded-full bg-[#FFFFFF1A] bottom-[-58px] left-[-58px]"></div>
      <div className="relative h-59">
   
   <div className="flex w-[145px] h-[28px] px-3 py-1 gap-2 rounded-full bg-white/20">
   <span className="font-medium text-[14px] leading-5 tracking-normal align-middle">🔥</span>
   <span className="font-medium text-[14px] leading-5 tracking-normal align-middle text-white">Deal of the Day</span>
   </div>
   <a className="h-12 flex items-center absolute top-47 px-6 py-3 gap-2 rounded-full bg-[#FFFFFF]">
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

     <div className="col-span-1 relative h-75 rounded-2xl p-8 bg-[linear-gradient(135deg,#FF8904_0%,#FF2056_100%)] overflow-hidden">
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
    <a className="absolute h-12 flex items-center top-[188px] w-[171px]  px-6 py-3 gap-2 rounded-full bg-white">
          <span className="font-semibold text-[16px] leading-6 tracking-normal align-middle text-[#FF6900]">Explore Now</span>
    <FaArrowRightLong className='pl-2 text-[#FF6900] w-5 h-4' />
      </a>
    </div>
     </div>
    </div>

    
         
    </div>
    

<div className="w-full pt-6 pb-6 px-[208px] border-t border-b bg-[#F0FDF4] border-y border-x-0 border-solid border-[#DCFCE7]">
  <div className="grid grid-cols-4 gap-6">
     <div className="col-span-1 flex items-center gap-3">
      
      <div className="w-12 h-12 rounded-xl bg-[#DCFCE7] flex items-center justify-center">
      <FaTruck className="w-[22.5px] h-[18px] text-[#16A34A]" />
      </div>

      <div>
        <h4 className="font-semibold text-sm leading-5 align-middle text-[#101828]">Free Shipping</h4>
        <p className="font-medium text-xs leading-4 align-middle text-[#6A7282]">On orders over 500 EGP</p>
      </div>

     </div>


     <div className="col-span-1 flex items-center gap-3">
      
      <div className="w-12 h-12 rounded-xl bg-[#DCFCE7] flex items-center justify-center">
      <FaTruck className="w-[22.5px] h-[18px] text-[#16A34A]" />
      </div>

      <div>
        <h4 className="font-semibold text-sm leading-5 align-middle text-[#101828]">Free Shipping</h4>
        <p className="font-medium text-xs leading-4 align-middle text-[#6A7282]">On orders over 500 EGP</p>
      </div>

     </div>


  </div>
</div>


    </>
    
  );
}
