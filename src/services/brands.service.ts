export async function getAllBrands(brandId ?:string){
 const base = `${process.env.NEXT_PUBLIC_BASE_URL}/brands`;
 const url = brandId ? `${process.env.NEXT_PUBLIC_BASE_URL}/brands/${brandId}` : base
 const response = await fetch(url,{
    method:'GET',
    headers:{
        "content-type":"application/json"
    }
 })
 const responseData = await response.json()
 return responseData
}