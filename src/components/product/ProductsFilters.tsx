import { brandI } from "@/types/brand.type";
import { categoryI } from "@/types/category.type";
import { useState } from "react";
import FilterAside from "./FilterAside";

export default function ProductsFilters({ 
 isOpen, 
 onClose,
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
}:
{isOpen:boolean,
onClose:()=>void,
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
 
 if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 lg:hidden">
      <div
        className="absolute inset-0 bg-black/50"
       onClick={onClose}
      />
      <div className="absolute right-0 top-0 bottom-0 w-80 bg-white p-6 overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold">Filters</h2>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center"
          >
            ✕
          </button>
        </div>

         <FilterAside  categories={categories}
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
            handleCategoryChange={handleCategoryChange} clearFilters={clearFilters}  />
      </div>
    </div>
  );
}