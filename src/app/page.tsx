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
import { getAllCategories } from "@/services/category.service";
import { categoryI } from "@/types/category.type";
import { getAllProducts } from "@/services/product.service";
import { productI } from "@/types/producttype";
import PromoCards from "@/components/commons/PromoCards";
import Newsletter from "@/components/commons/Newsletter";

export default async function Home() {
  
  const categoryResponse = await  getAllCategories();
  const categories : categoryI[]= categoryResponse.data; 
  const productResponse = await  getAllProducts();
  const products : productI[]= productResponse.data; 
  //console.log(productResponse,"pppp");
  return (
    <>
     
    <CarouselComponent/>
    <section className="xl:px-56 md:px-4 py-8 bg-[#F9FAFB] pl-[16px] pr-[16px] pt-[32px] overflow-x-hidden">
      <div className="grid md:h-[84px] xl:h-[80px] xl:gap-4 md:gap-2  xl:grid-cols-4 md:grid-cols-4 grid-cols-1 gap-4">
     
     <div className="col-span-1 flex items-center p-4 gap-4 rounded-[12px] bg-white shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] hover:shadow-md transition-shadow duration-300 feature-card delay-100">
           <div className="xl:w-12 xl:h-12 md:w-8 md:h-8 rounded-full bg-[#FEF2F2] flex items-center justify-center">
            <Image src={section_shipping} alt='section_shipping'  />
           </div>

           <div className="">
             <h3 className="text-[14px] font-semibold leading-5 text-[#1E2939]">Free Shipping</h3>
             <p className="text-[12px] font-medium leading-4 text-[#6A7282]">On orders over 500 EGP</p>
           </div>
      </div>

         <div className="col-span-1 flex items-center p-4 gap-4 rounded-[12px] bg-white shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] hover:shadow-md transition-shadow duration-300 feature-card delay-200">
           <div className="xl:w-12 xl:h-12 md:w-8 md:h-8 rounded-full bg-[#ECFDF5] flex items-center justify-center">
            <Image src={section_secure} alt='section_secure' />
           </div>

           <div className="">
             <h3 className="text-[14px] font-semibold leading-5 text-[#1E2939]">Secure Payment</h3>
             <p className="text-[12px] font-medium leading-4 text-[#6A7282]">100% secure transactions</p>
           </div>
      </div>

      <div className="col-span-1 flex items-center  p-4 gap-4 rounded-[12px] bg-white shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] hover:shadow-md transition-shadow duration-300 feature-card delay-300">
           <div className="xl:w-12 xl:h-12 md:w-8 md:h-8 rounded-full bg-[#F3F4F6] flex items-center justify-center">
            <Image src={secion_return} alt='secion_return' />
           </div>

           <div className="">
             <h3 className="text-[14px] font-semibold leading-5 text-[#1E2939]">Easy Returns</h3>
             <p className="text-[12px] font-medium leading-4 text-[#6A7282]">14-day return policy</p>
           </div>
      </div>
 

      <div className="col-span-1 flex items-center  p-4 gap-4 rounded-[12px] bg-white shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)] hover:shadow-md transition-shadow duration-300 feature-card delay-400">
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
         {categories.map((category) => (
           <CategoryCard key={category._id} category={category}/>
           ))}
       </div>

     <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 xl:gap-4 md:gap-4 gap-6 mb-[112px]">
     
         <PromoCards />
     
    </div>

     {/* products */}
     <div className="container">
      <div className="flex  h-9 gap-3 my-8">
        <div className="w-[6px] h-[32px] opacity-100 rounded-full bg-gradient-to-b from-[#00BC7D] to-[#007A55]"></div>
        <h2 className="font-bold text-[30px] leading-[36px] tracking-normal align-middle">Featured <span className="text-[#00BC7D]">Products</span></h2>
      </div>
      <div className="grid xl:grid-cols-5 md:grid-cols-4 gap-y-4 gap-x-5">
          {products.map((product) => (
        <ProductCard key={product.id} variant="home" product={product}/>
           ))}
      </div>
     </div>

       {/* NewsLetter  xl:p-[64px] md:p-[64px]*/}
         <Newsletter />
    </div>

  <FeaturesBar variant=""/>


    </>
    
  );
}
