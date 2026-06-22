"use client"
import { brandI } from '@/types/brand.type';
import { categoryI } from '@/types/category.type';
import React, { useState } from 'react'

export default function FilterAside({
  categories,
  brands,
  selectedBrands,
  setSelectedBrands,
  selectedCategories,
  setSelectedCategories,
  setMinPrice,
  setMaxPrice,
  minPrice,
  maxPrice,
  setQ,
  q,
  handleBrandChange,
  handleCategoryChange,
  clearFilters
}: {
  categories: categoryI[],
  brands: brandI[],
  selectedBrands:string[],
  selectedCategories:string[],
  setSelectedBrands:React.Dispatch<React.SetStateAction<string[]>>,
  setSelectedCategories:React.Dispatch<React.SetStateAction<string[]>>,
  setMinPrice: React.Dispatch<React.SetStateAction<string>>,
  setMaxPrice: React.Dispatch<React.SetStateAction<string>>,
  setQ: React.Dispatch<React.SetStateAction<string>>,
  minPrice:string,
  maxPrice:string,
  q:string,
  handleBrandChange: (id: string) => void,
  handleCategoryChange: (id: string) => void,
  clearFilters:() => void,
}) {
   
const handlePriceRange = (range: string) => {
  switch (range) {
    case "under500":
      setMinPrice("0");
      setMaxPrice("500");
      break;

    case "under1k":
      setMinPrice("500");
      setMaxPrice("1000");
      break;

    case "under5k":
      setMinPrice("1000");
      setMaxPrice("5000");
      break;

    case "under10k":
      setMinPrice("5000");
      setMaxPrice("10000");
      break;

    default:
      setMinPrice("0");
      setMaxPrice("0");
  }
};

  return (
      <aside>
            <div className="bg-white h-full rounded-[16px]  md:p-4 xl:p-6  p-4  border border-[#F3F4F6]">
                <div className='space-y-6'>
                <div>
                    <div className="mb-4 flex items-center">
                        <h3 className="font-bold text-base leading-6 align-middle text-[#101828]">Categories</h3>
                        </div>
                        <div className='space-y-2 w-full max-h-72 overflow-y-aut'>
                           {categories.map((category) => (
                         <label key={category._id} className="flex items-center gap-3 cursor-pointer">
                         <input type="checkbox" checked={selectedCategories.includes(category._id)}  onChange={() => handleCategoryChange(category._id)}  className="w-4 h-4 rounded-[2.5px] border border-[#767676]" />
                         <span className="font-medium text-sm leading-5 align-middle text-[#4A5565]">{category.name}</span>
                         </label>
                          ))}
                        </div>
                      </div>
                     <div className="h-px border-t border-[#F3F4F6]"></div> 
                        <div>
                            <h3 className="mb-4 font-bold text-base leading-6 align-middle text-[#101828]">Price Range</h3>
                            <div className="grid grid-cols-2">
                            <div className="col-span-1">
                            <label className='mb-1 block font-medium text-[12px] leading-[16px] align-middle text-[#6A7282]'>Min (EGP)</label>
                            <input  type='number' value={minPrice}  onChange={(e) =>setMinPrice(e.target.value)} placeholder='0' className="w-[97px] h-[38px] py-[9px] pl-[13px] rounded-[8px] border bg-[#F9FAFB80] font-medium not-italic text-[14px] leading-none align-middle text-[#36415380]"/>
                            </div>

                           <div className="col-span-1">
                            <label className='mb-1 block font-medium text-[12px] leading-[16px] align-middle text-[#6A7282]'>Max (EGP)</label>
                            <input  type='number'  value={maxPrice}  onChange={(e) => setMaxPrice(e.target.value)} placeholder='No limit' className="w-[97px] h-[38px] py-[9px] pl-[13px] rounded-[8px] border bg-[#F9FAFB80] font-medium not-italic text-[14px] leading-none align-middle text-[#36415380]"/>
                            </div>
                            </div>
                            <div className="mt-3 flex flex-wrap gap-[7.97px] w-[206px] h-[64px]">
                             <button onClick={() => handlePriceRange("under500")} className='w-[81px] h-[28px] py-[6px] px-[12px] rounded-full bg-[#F3F4F6] font-medium text-[12px] leading-[16px] text-center align-middle text-[#4A5565] cursor-pointer'>
                              Under 500
                            </button>

                           <button onClick={() => handlePriceRange("under1k")} className='w-[81px] h-[28px] py-[6px] px-[12px] rounded-full bg-[#F3F4F6] font-medium text-[12px] leading-[16px] text-center align-middle text-[#4A5565] cursor-pointer'>
                             Under 1K
                            </button>

                           <button onClick={() => handlePriceRange("under5k")} className='w-[81px] h-[28px] py-[6px] px-[12px] rounded-full bg-[#F3F4F6] font-medium text-[12px] leading-[16px] text-center align-middle text-[#4A5565] cursor-pointer'>
                             Under 5K
                            </button>

                            <button onClick={() => handlePriceRange("under10k")} className='w-[81px] h-[28px] py-[6px] px-[12px] rounded-full bg-[#F3F4F6] font-medium text-[12px] leading-[16px] text-center align-middle text-[#4A5565] cursor-pointer'>
                              Under 10K
                            </button>
                            </div>
                        </div>
                     <div className="h-px border-t border-[#F3F4F6]"></div> 
                     <div>
                    <div className="mb-4 flex items-center">
                        <h3 className="font-bold text-base leading-6 align-middle text-[#101828]">Brands</h3>
                        </div>
                        <div className='space-y-2 w-full h-full max-h-52 overflow-y-auto'>
                          {brands.map((brand) => (
                         <label key={brand._id} className="flex items-center gap-3 cursor-pointer">
                         <input type="checkbox" checked={selectedBrands.includes(brand._id)} onChange={() => handleBrandChange(brand._id)}  className="w-4 h-4 rounded-[2.5px] border border-[#767676]" />
                         <span className="font-medium text-sm leading-5 align-middle text-[#4A5565]">{brand.name}</span>
                         </label>
                          ))}
                        </div>
                      </div>
 
               {(q !="" || selectedCategories.length > 0 || selectedBrands.length > 0 || (maxPrice !="" && minPrice !="")) && <>
                       <div className="h-px border-t border-[#F3F4F6]"></div> 
                       <button onClick={()=>clearFilters()}  className="w-full py-2.5 rounded-lg border border-gray-200 text-gray-600 text-sm font-medium hover:bg-gray-50 hover:border-gray-300 transition-colors cursor-pointer">Clear All Filters</button>
                </>}
                </div>
            </div>
         </aside>
  )
}
