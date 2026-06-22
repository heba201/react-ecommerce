import React from 'react'
import Image from 'next/image'
import layers from "@/assets/categories/layers.png";
import CategoryCardTwo from '@/components/category/CategoryCardTwo';
import FeaturesBar from '@/components/featuresBar/FeaturesBar';
import { getAllCategories } from '@/services/category.service';
import { categoryI } from '@/types/category.type';
export default async function Categories() {
  const response = await  getAllCategories();
  const categories : categoryI[]= response.data; 
  return (
    <>
    <div className='min-h-screen bg-[#F9FAFB80] pb-30'>
    <div className='xl:px-[192px] bg-[linear-gradient(135deg,#16A34A_0%,#22C55E_50%,#4ADE80_100%)]'>
    <div className='pt-16 pb-16 px-4'>
     <nav className="flex items-center gap-2 mb-6">
      <a href="" className='font-medium not-italic text-[14px] leading-[20px] align-middle text-[#FFFFFFB2]'>Home</a>
      <span className='font-medium not-italic text-[14px] leading-[20px] align-middle text-[#FFFFFF66]'>/</span>
     <span className='font-medium not-italic text-[14px] leading-[20px] align-middle text-white'>Categories</span>
     </nav>
     <div className="flex items-center gap-5">
        <div className='flex items-center justify-center w-16 h-16 rounded-[16px] bg-[#FFFFFF33] backdrop-blur-md shadow-[0_8px_10px_-6px_rgba(0,0,0,0.1),0_20px_25px_-5px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.3)]'>
       <Image src={layers} alt='layers' />
      </div>
      <div>
        <h1 className='font-bold text-[36px] leading-[40px] tracking-[-0.9px] align-middle text-white'>All Categories</h1>
     <p className='mt-1 font-medium text-[16px] leading-normal align-middle text-white'>Browse our wide range of product categories</p>
      </div>
     </div>
    </div>
    </div>
    <div className='md:px-4 xl:px-[208px] px-4 mt-[40px] md:mb-[40px] xl:mb-[204.78px]'>
    <div className="grid md:grid-cols-5 xl:grid-cols-5 grid-cols-2 gap-4 md:gap-4 xl:gap-6">
      {categories.map((category) => (
     <CategoryCardTwo key={category._id} category={category} />
      ))}
    </div>
    </div>
    </div>
     <FeaturesBar variant='' /> 
    </>
  )
}
