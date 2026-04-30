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