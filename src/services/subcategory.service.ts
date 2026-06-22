
export async function getSubCategoriesOnCategory(categoryId ?:string){
 const url = `${process.env.NEXT_PUBLIC_BASE_URL}/categories/${categoryId}/subcategories` ;
 const response = await fetch(url,{
    method:'GET',
    headers:{
        "content-type":"application/json"
    }
 })
 const responseData = await response.json()
 return responseData
}