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
import { FaTruck , FaApple ,FaGooglePlay ,FaShieldAlt     } from "react-icons/fa";
import rect from "@/assets/home/rect.png";
import FeaturesBar from "@/components/featuresBar/FeaturesBar";

export default function Home() {
  return (
    <>
     
    <CarouselComponent/>
    <section className="xl:px-56 md:px-4 py-8 bg-[#F9FAFB] pl-[16px] pr-[16px] pt-[32px]">
      <div className="grid md:h-[84px] xl:h-[80px] xl:gap-4 md:gap-2  xl:grid-cols-4 md:grid-cols-4 grid-cols-1 gap-4">
     
     <div className="col-span-1 flex items-center p-4 gap-4 rounded-[12px] bg-white shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]">
           <div className="xl:w-12 xl:h-12 md:w-8 md:h-8 rounded-full bg-[#FEF2F2] flex items-center justify-center">
            <Image src={section_shipping} alt='section_shipping'  />
           </div>

           <div className="">
             <h3 className="text-[14px] font-semibold leading-5 text-[#1E2939]">Free Shipping</h3>
             <p className="text-[12px] font-medium leading-4 text-[#6A7282]">On orders over 500 EGP</p>
           </div>
      </div>

<div className="col-span-1 flex items-center p-4 gap-4 rounded-[12px] bg-white shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]">
           <div className="xl:w-12 xl:h-12 md:w-8 md:h-8 rounded-full bg-[#ECFDF5] flex items-center justify-center">
            <Image src={section_secure} alt='section_secure' />
           </div>

           <div className="">
             <h3 className="text-[14px] font-semibold leading-5 text-[#1E2939]">Secure Payment</h3>
             <p className="text-[12px] font-medium leading-4 text-[#6A7282]">100% secure transactions</p>
           </div>
      </div>

      <div className="col-span-1 flex items-center  p-4 gap-4 rounded-[12px] bg-white shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]">
           <div className="xl:w-12 xl:h-12 md:w-8 md:h-8 rounded-full bg-[#F3F4F6] flex items-center justify-center">
            <Image src={secion_return} alt='secion_return' />
           </div>

           <div className="">
             <h3 className="text-[14px] font-semibold leading-5 text-[#1E2939]">Easy Returns</h3>
             <p className="text-[12px] font-medium leading-4 text-[#6A7282]">14-day return policy</p>
           </div>
      </div>
 

      <div className="col-span-1 flex items-center  p-4 gap-4 rounded-[12px] bg-white shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]">
           <div className="xl:w-12 xl:h-12 md:w-8 md:h-8 rounded-full bg-[#F9FAFB] flex items-center justify-center">
            <Image src={section_support} alt='section_support' />
           </div>

           <div className="">
             <h3 className="text-[14px] font-semibold leading-5 text-[#1E2939]">24/7 Support</h3>
             <p className="text-[12px] font-medium leading-4 text-[#6A7282]">Dedicated support team</p>
           </div>
      </div>

      </div>
    </section>
    
    {/* Categories */}
    <div className="container mx-auto  h-auto  xl:top-174.25 md:top-174.25 top-[40px]  left-48 xl:px-4 md:px-2.5 py-4 gap-8  pl-[16px] pr-[16px]  bg-white">
   
    <div className="flex  justify-between items-center">
   
    <div className="pt-8 pb-8">
    <div className="flex gap-3 items-center">
    <div className="w-1.5 h-8 bg-[linear-gradient(180deg,#00BC7D_0%,#007A55_100%)] rounded-full"></div>
    <h2 className="font-bold text-[30px] leading-9 tracking-normal align-middle whitespace-nowrap">Shop By <span className="text-[#00BC7D]">Category</span></h2>
    </div>
    </div>
 
   <a className="flex items-center gap-0 font-medium text-[16px] leading-6 tracking-normal align-middle text-[#16A34A] whitespace-nowrap mt-[80px] mr-[100px]  xl:mt-0 xl:mr-0 md:mt-0 md:mr-0">
    <span>View All Categories</span>  
   <FaArrowRightLong className='xl:pl-2 md:pl-2 text-[#16A34A] w-5 h-4' />
   </a>
    </div>

       <div className="grid xl:grid-cols-6 md:grid-cols-6   gap-3 grid-cols-2  mb-[80px] mt-[32px] xl:mt-0 md:mt-0">
        {Array.from({ length: 10 }).map((_, index) => (
           <CategoryCard key={index}/>
           ))}
       </div>

     <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 xl:gap-4 md:gap-4 gap-6 mb-[112px]">
     <div className="col-span-1 relative  rounded-2xl p-8 bg-[linear-gradient(135deg,#00BC7D_0%,#007A55_100%)] overflow-hidden">
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

     <div className="col-span-1 relative  rounded-2xl p-8 bg-[linear-gradient(135deg,#FF8904_0%,#FF2056_100%)] overflow-hidden">
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

     {/* products */}
     <div className="container">
      <div className="flex  h-9 gap-3">
        <div className="w-[6px] h-[32px] opacity-100 rounded-full bg-gradient-to-b from-[#00BC7D] to-[#007A55]"></div>
        <h2 className="font-bold text-[30px] leading-[36px] tracking-normal align-middle">Featured <span className="text-[#00BC7D]">Products</span></h2>
      </div>
      <div className="grid xl:grid-cols-5 md:grid-cols-4 gap-y-4 gap-x-5">
 {Array.from({ length: 10 }).map((_, i) => (
        <ProductCard key={`product-${i}`} variant="home"/>
           ))}
      </div>
     </div>

       {/* NewsLetter  xl:p-[64px] md:p-[64px]*/}
       <section className="w-full  top-[5229px] pt-[65px] bg-blue-500">
   
    <div className="w-full bg-red-500  px-[17px] py-[32px] relative rounded-[40px] border-t border-t-[1px] border-t-[#D0FAE580] bg-[linear-gradient(135deg,#F3F4F6_0%,#FFFFFF_50%,#FEF2F2_100%)] overflow-hidden shadow-[0px_25px_50px_-12px_rgba(0,188,125,0.1)]" >
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
          <button className="w-full xl:w-[40%] md:w-[40%]  flex  items-center justify-center px-8 py-[18px] gap-3 rounded-2xl bg-[linear-gradient(90deg,#009966_0%,#00BC7D_100%)] shadow-[0px_4px_6px_-4px_#00BC7D4D,0px_10px_15px_-3px_#00BC7D4D]">
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
<div className="xl:w-[30%] md:w-[40%]  w-[100%] mt-[32px]  xl:mt-0  md:mt-0  xl:pl-8 md:pl-8 pt-[32px] pb-[32px]  xl:border-l xl:border-[#D0FAE5]  md:border-l md:border-[#D0FAE5]">
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
     <a className="w-full flex items-center h-[59px] p-4 py-3 px-4 gap-3 rounded-xl border border-[1px] bg-[#FFFFFF1A] border-t border-[#FFFFFF1A] backdrop-blur-[8px]">
      <FaApple className="w-[25px] h-5 text-white" />
      <div className="flex flex-col gap-[-2px]">
         <div className="text-[10px] font-medium leading-[15px] tracking-[0.25px] uppercase align-middle text-[#99A1AF]">Download on</div>
      <div className="text-[14px] font-semibold leading-5 tracking-normal align-middle text-[#FFFFFF]">App Store</div>
      </div>
     </a>

     <a className="w-full flex items-center p-4 py-3 px-4 gap-3 rounded-xl border border-[1px] bg-[#FFFFFF1A] border-t border-[#FFFFFF1A] backdrop-blur-[8px]">
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
    </div>

  <FeaturesBar variant=""/>


    </>
    
  );
}
