
"use client"
import React, { useEffect, useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { BiGridVertical } from "react-icons/bi";
import { TfiMenuAlt } from "react-icons/tfi";
import ProductCard from '@/components/product/ProductCard';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
   PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

import { HiMiniChevronLeft , HiMiniChevronRight  } from "react-icons/hi2";
import FeaturesBar from '@/components/featuresBar/FeaturesBar';

import Image from 'next/image'
import filters from "@/assets/orders/filters.png";
import { getAllProducts, getAllProductsFiltered } from '@/services/product.service';
import { productI } from '@/types/producttype';
import { categoryI } from '@/types/category.type';
import { getAllCategories } from '@/services/category.service';
import { getAllBrands } from '@/services/brands.service';
import { brandI } from '@/types/brand.type';
import { FaFilter } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import NoProductsFound from '@/components/product/NoProductsFound';
import ProductsFilters from '@/components/product/ProductsFilters';
import FilterAside from '@/components/product/FilterAside';
import { useSearchParams } from "next/navigation";
import Link from 'next/link'

export default function Search(){
   const [totalPages, setTotalPages] = useState(1);
   const [page, setPage] = useState(1);
   const [products, setProducts] = useState<productI[]>([]); 
   const [categories, setCategories] = useState<categoryI[]>([]);
   const [brands, setBrands] = useState<brandI[]>([]);
   const searchParams = useSearchParams();
   const keyword = searchParams.get("q") ??  "";
   const [q, setQ] = useState(keyword);
   const [sort, setSort] = useState("");
   const [minPrice, setMinPrice] = useState("");
   const [maxPrice, setMaxPrice] = useState("");
   const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
   const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
   const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  async function getAllProducts(page:number){
      try {
        
        const response = await getAllProductsFiltered(page,sort,q,selectedBrands,selectedCategories,maxPrice,minPrice);
        setProducts(response.data.data) ; 
        setTotalPages(response.data.metadata.numberOfPages);
      } catch (error) {
        console.log(error);
      }
    }

  async function fetchAllCategories(){
      try {
        const response = await getAllCategories();
        setCategories(response.data) ; 
      } catch (error) {
        console.log(error);
      }
    }

      async function fetchAllBrands(){
      try {
        const response = await getAllBrands();
        console.log
        setBrands(response.data) ; 
      } catch (error) {
        console.log(error);
      }
    }

 const handleCategoryChange = (id: string): void => {
  setSelectedCategories((prev: string[]) =>
    prev.includes(id)
      ? prev.filter((item: string) => item !== id)
      : [...prev, id]
  );
};

const handleBrandChange = (id: string): void => {
  setSelectedBrands((prev: string[]) =>
    prev.includes(id)
      ? prev.filter((item: string) => item !== id)
      : [...prev, id]
  );
};

function clearFilters(){
   setQ("");
   setMinPrice("");
   setMaxPrice("");
   setSelectedCategories([]);
   setSelectedBrands([]);
 }

    useEffect(() => {
    getAllProducts(page);
    fetchAllCategories();
    fetchAllBrands();
  }, [page,sort,q,selectedBrands,selectedCategories,maxPrice,minPrice]);

 return (
     <>
     <div className='min-h-screen overflow-x-hidden'>
       <div className="bg-white xl:px-[192px] border-b border-[#F3F4F6]">
            <div className="px-4 py-6">
            <nav className="mb-4 flex items-center gap-2">
            <a href="" className="font-medium text-[14px] leading-5 align-middle text-[#6A7282]">Home</a>
            <span className="font-medium text-sm leading-5 align-middle text-[#D1D5DC]">/</span>
            <span className="font-medium text-sm leading-5 align-middle text-[#101828]">Search Results</span>
            </nav>
            <div className="relative xl:w-[672px]  md:w-[672px] w-full h-[54px]">
                <input type='text'  onChange={(e) => setQ(e.target.value)} value={q}  className="w-full px-4 py-[14px] pl-12 rounded-xl border border-[1px] border-[#E5E7EB] font-medium text-[18px] leading-none align-middle" placeholder='Search for products...' />
            <IoIosSearch  className="absolute bottom-[19px] left-[19px] w-5 h-4 text-[#99A1AF]" />
            </div>
            </div>
       </div>
     
       <div className="flex  xl:items-start md:gap-2 xl:gap-8 xl:px-[192px] md:px-4 px-4 mt-8">
       <div className='hidden md:block xl:block'>
          <FilterAside categories={categories}
            brands={brands}
            selectedBrands={selectedBrands}
            setSelectedBrands={setSelectedBrands}
            selectedCategories ={selectedCategories}
            setSelectedCategories ={setSelectedCategories}
            setMinPrice ={setMinPrice}
            setMaxPrice ={setMaxPrice}
            minPrice ={minPrice}
            maxPrice ={maxPrice}
            setQ={setQ}
            q={q}
            handleBrandChange={handleBrandChange}
            handleCategoryChange={handleCategoryChange} clearFilters={clearFilters} />
           </div>
         <div className="flex-1">
            <div className="flex md:flex-row xl:flex-row flex-wrap items-start md:justify-between xl:justify-between gap-4 mb-6">
                <button onClick={() => setIsFiltersOpen(true)} className='md:hidden xl:hidden flex items-center justify-center gap-2 w-[101.5px] h-[38px] py-[8px] px-[16px] rounded-[8px] border border-[#E5E7EB] bg-white font-medium text-[14px] leading-[20px] text-center align-middle text-[#364153] cursor-pointer'>
                  <Image src={filters} alt='filters' />
                  Filters
                  </button>
               <div className="flex items-center gap-[4px] p-[4px] rounded-[8px] bg-white border border-[#E5E7EB]">
                    <button className='flex items-center justify-center w-[36px] h-[40px] pt-[11px] pr-[8px] pb-[13px] pl-[8px] rounded-[6px] bg-[#16A34A]'>
                    <BiGridVertical className='w-5 h-4 text-white' />
                    </button>
                    <button className='flex items-center justify-center w-[36px] h-[40px] pt-[11px] pb-[13px] px-[8px] rounded-[6px] bg-white'>
                 <TfiMenuAlt className='w-5 h-4 text-[#6A7282]'/>
                </button>
                </div>

              <div className="flex items-center gap-[7.99px]">
                <span className='font-medium text-[14px] leading-[20px] align-middle text-[#6A7282]'>Sort by:</span>
               
                <select value={sort} onChange={(e) => setSort(e.target.value)} className='pt-[8px] pb-[8px] pr-[28px] pl-[16px] rounded-[8px] border border-[#E5E7EB] font-medium not-italic text-[14px] leading-[19px] align-middle text-[#364153] focus:border-green-500 focus:ring-1 focus:ring-green-500 outline-none bg-white'>
                  <option value="">Relevance</option>
                  <option value="price">Price: Low to High</option>
                  <option value="-price">Price: High to Low</option>
                  <option value="-ratingsAverage">Rating: High to Low</option>
                  <option value="title">Name: A to Z</option>
                  <option value="-title">Name: Z to A</option>
                </select>
                </div>  
            </div>
            <div className="mb-6 flex items-center gap-2 flex-wrap">
              {(q !="" || selectedCategories.length > 0 || selectedBrands.length > 0 || (maxPrice !="" && minPrice !="")) && <>
              <span className="text-sm text-gray-500 flex items-center gap-1">
              <FaFilter />
             Active:      
              </span>
              {q !=""  && <>
              {keyword ? <><Link href='/products/search' className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gray-100 text-gray-700 text-xs cursor-pointer">{q}
               <FaXmark /></Link></>:<>
               <span  onClick={()=>setQ("")} className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gray-100 text-gray-700 text-xs cursor-pointer">
                {q}
               <FaXmark />
               </span>
               </>} 
               
               </>
               }
                { selectedCategories.length > 0  && selectedCategories.map((selCat) => {
                  const category = categories.find((c) => c._id === selCat);
                 return(
                <span key={selCat} onClick={() =>setSelectedCategories((prev) =>prev.filter((item) => item !== category?._id))} className="cursor-pointer inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs">
                  {category?.name}
                  <FaXmark />
                </span>
                 );
                })}
                {selectedBrands.length > 0 && selectedBrands.map((selBrand) => {
                   const brand = brands.find((b) => b._id === selBrand);
               return(
               <span  key={selBrand} onClick={() =>setSelectedBrands((prev) =>prev.filter((item) => item !== brand?._id))}  className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-violet-200 text-violet-700 text-xs cursor-pointer">
                {brand?.name}
                <FaXmark />    
             </span>  
              );
               })}
        
              {(maxPrice !="" && minPrice !="")  &&
                    <span onClick={()=>{setMinPrice("");setMaxPrice("")}} className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-amber-100 text-amber-700 text-xs cursor-pointer">
                        {minPrice} - {maxPrice}
                        <FaXmark />    
                    </span>
              }
               <button onClick={()=>clearFilters()} className="text-xs text-gray-500 hover:text-gray-700 underline ml-2 cursor-pointer">Clear all</button>
              </>}
               </div>
           
            { totalPages === 0  ? <NoProductsFound clearFilters={clearFilters} /> : <>
            <div className="grid md:grid-cols-3 xl:grid-cols-4 grid-cols-2 md:gap-4  xl:gap-4 gap-2 mb-6">
                 {products.map((product) => (
                <div  key={product.id} className="col-span-1">
                    <ProductCard  variant='product_search' product={product}/>
                </div>
                ))}
            </div>
              
            <div className="flex pt-4 mb-8 gap-2">
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                      <button   disabled={page === 1}
              onClick={() => setPage(page - 1)} className='cursor-pointer flex items-center justify-center w-10 h-10 rounded-[8px] border border-[#E5E7EB]'>
              <HiMiniChevronLeft className='w-5 h-4 text-[#4A5565]'/>
                </button>
                </PaginationItem>
        {Array.from({ length: totalPages }, (_, index) => (
          <PaginationItem key={index + 1}>
          <PaginationLink  href="#"
                isActive={page === index + 1}
                onClick={(e) => {
                  e.preventDefault();
                  setPage(index + 1);
                }} className={`cursor-pointer w-[40px] h-[40px] pt-[7.5px] pb-[8.5px] rounded-[8px] border text-center align-middle transition-colors text-[#E5E7EB] ${
                page === index + 1
                  ? "bg-[#16A34A] text-white border-[#16A34A]"
                  : "bg-white text-[#4A5565] border-[#E5E7EB] hover:bg-[#16A34A] hover:text-white"
              }`}>
                   {index + 1}
                </PaginationLink>
              </PaginationItem>
           ))}
         <PaginationItem>
         <button disabled={page === totalPages}
           onClick={() => setPage(page + 1)} className='cursor-pointer flex items-center justify-center w-10 h-10 rounded-[8px] border border-[#E5E7EB]'>
          <HiMiniChevronRight className='w-5 h-4 text-[#4A5565]'/>
          </button>
          </PaginationItem>
            </PaginationContent>
          </Pagination>
            </div>
            </>
            }
         </div>
       </div>
     </div>
           {/* filters on mobile */}
       <ProductsFilters   isOpen={isFiltersOpen} onClose={() => setIsFiltersOpen(false)}
         categories={categories}
            brands={brands}
            selectedBrands={selectedBrands}
            setSelectedBrands={setSelectedBrands}
            selectedCategories ={selectedCategories}
            setSelectedCategories ={setSelectedCategories}
            setMinPrice ={setMinPrice}
            setMaxPrice ={setMaxPrice}
            minPrice ={minPrice}
            maxPrice ={maxPrice}
            setQ={setQ}
            q={q}
            handleBrandChange={handleBrandChange}
            handleCategoryChange={handleCategoryChange} clearFilters={clearFilters} 
          />

        <FeaturesBar variant='' /> 
       
     </>
 )
}