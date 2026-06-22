import axios from "axios"
export async function getAllCategories(categoryId ?:string){
 const base = `${process.env.NEXT_PUBLIC_BASE_URL}/categories`;
 const url = categoryId ? `${process.env.NEXT_PUBLIC_BASE_URL}/categories/${categoryId}` : base
 const response = await fetch(url,{
    method:'GET',
    headers:{
        "content-type":"application/json"
    }
 })
 const responseData = await response.json()
 return responseData
}

export async function getCategoriesFiltered(categoryName:string[]){
const url = `${process.env.NEXT_PUBLIC_BASE_URL}/categories`;
const response = await axios.get(url,{
     headers:{
        "content-type":"application/json"
    },
    params: {
     name:categoryName,   
    }
});
 return response;
}