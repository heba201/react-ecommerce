import FeaturesBar from '@/components/featuresBar/FeaturesBar';
import { getAllCategories } from '@/services/category.service';
import { getSubCategoriesOnCategory } from '@/services/subcategory.service';
import { categoryI } from '@/types/category.type';
import { subcategoryI } from '@/types/subcategory.type';
import React from 'react'
import { FaArrowLeft , FaFolderOpen ,FaArrowRight  } from "react-icons/fa6";
import Link from 'next/link'
import Image from "next/image";

export default async function SubCategories({params}:{params:Promise<{categoryId:string}>}) {
    const {categoryId} = await params ;
    const subcategoriesResponse =  await  getSubCategoriesOnCategory(categoryId);
    const subcategories : subcategoryI[] =  subcategoriesResponse.data;
    const categoryRespopnse =  await getAllCategories(categoryId);
    const category : categoryI = categoryRespopnse.data;
  console.log(category);
  return (
    <>
      <div className='min-h-screen bg-[#F9FAFB80] pb-30'>
         <div className='xl:px-[192px] bg-[linear-gradient(135deg,#16A34A_0%,#22C55E_50%,#4ADE80_100%)]'>
            <div className='pt-16 pb-16 px-4'>
             <nav className="flex items-center gap-2 mb-6">
              <a href="/" className='font-medium not-italic text-[14px] leading-[20px] align-middle text-[#FFFFFFB2]'>Home</a>
              <span className='font-medium not-italic text-[14px] leading-[20px] align-middle text-[#FFFFFF66]'>/</span>
             <Link  href="/categories" className='font-medium not-italic text-[14px] leading-[20px] align-middle text-white'>Categories</Link>
               <span className='font-medium not-italic text-[14px] leading-[20px] align-middle text-[#FFFFFF66]'>/</span>
               <span  className='font-medium not-italic text-[14px] leading-[20px] align-middle text-white'>{category.name}</span>
             </nav>
             <div className="flex items-center gap-5">
                <div className='w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30 overflow-hidden'>
               <Image src={category.image} alt={category.slug} width={1000} height={1000} className="w-12 h-12 object-contain" />
              </div>
              <div>
                <h1 className='font-bold text-[36px] leading-[40px] tracking-[-0.9px] align-middle text-white'>{category.name}</h1>
             <p className='mt-1 font-medium text-[16px] leading-normal align-middle text-white'>Choose a subcategory to browse products</p>
              </div>
             </div>
            </div>
            </div>

    <div className='md:px-4 xl:px-[208px] px-4 mt-[40px] md:mb-[40px] xl:mb-[204.78px]'>
           <a
      href="/categories"
      className="inline-flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors mb-6"
    >
      <FaArrowLeft className="w-4 h-4" />
      <span>Back to Categories</span>
    </a>
   <div className="mb-6"><h2 className="text-lg font-bold text-gray-900">{subcategories.length} Subcategories in {category.name}</h2></div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {subcategories.map((subcategory) => (
    <a key={subcategory._id}
      href={`/products?subcategory=${subcategory._id}&&subcategory_name=${subcategory.name}`}
      className="col-span-1 group bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-xl hover:border-green-200  transition-all duration-300 hover:-translate-y-1"
    >
      <div className="w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center mb-4 group-hover:bg-green-100 transition-colors">
        <FaFolderOpen  className="text-2xl text-green-600"/>
      </div>

      <h3 className="font-bold text-gray-900 text-lg group-hover:text-green-600 transition-colors mb-2">
        {subcategory.name}
      </h3>
      <div className="flex items-center gap-2 text-sm text-green-600 opacity-0 transition-opacity group-hover:opacity-100">
        <Link href={`/products?subcategory=${subcategory._id}&&subcategory_name=${subcategory.name}`}>Browse Products</Link>

         <FaArrowRight className='text-xs' />
      </div>
    </a>
     ))}
     </div>
     </div>
     </div>
       <FeaturesBar variant="" /> 
       </>
  );
}
