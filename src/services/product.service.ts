import { selectedCategoryI } from "@/types/category.type";
import axios from "axios"

export async function getAllProducts(categoryId ?:string){
 const base = `${process.env.NEXT_PUBLIC_BASE_URL}/products`;
 const url = categoryId ? `${process.env.NEXT_PUBLIC_BASE_URL}/products?category[in]=${categoryId}` : base
 const response = await fetch(url,{
    method:'GET',
    headers:{
    "content-type":"application/json"
    }
 })
 const responseData = await response.json()
 return responseData
}

export async function getAllProductsFiltered(page?:number,sort?:string,q?:string,selectedBrands?:string[],selectedCategories?:string[],maxPrice?:string,minPrice?:string,selectedSubcategories?:string[]){
const url = `${process.env.NEXT_PUBLIC_BASE_URL}/products`;
const params ={
    page:page,
    keyword:q,
    sort:sort,
    brand: selectedBrands,
    "category[in]": selectedCategories,
    "price[gte]":Number(minPrice),
    "price[lte]":Number(maxPrice),
    "subcategory[in]": selectedSubcategories,
};
const filteredParams = filterEmptyParams(params);
const response = await axios.get(url,{
     headers:{
        "content-type":"application/json"
    },
    params: filteredParams
});
 return response;
}

function filterEmptyParams(params: Record<string, any>) {
  return Object.fromEntries(
    Object.entries(params).filter(([_, value]) => {
      if (
        value === "" ||
        value === null ||
        value === undefined ||
        value === 0
      ) {
        return false;
      }
      if (Array.isArray(value) && value.length === 0) {
        return false;
      }
      return true;
    })
  );
}

export async function getProduct(productId:string){
 const base = `${process.env.NEXT_PUBLIC_BASE_URL}/products/${productId}`;
 const response = await fetch(base,{
    method:'GET',
    headers:{
        "content-type":"application/json"
    }
 })
 const responseData = await response.json()
 return responseData
}