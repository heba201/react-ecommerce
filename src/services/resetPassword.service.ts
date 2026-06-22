import { resetPasswordTypeSchema } from "@/schemas/resetPassword.sechamas";

export async function resetPassword(data:resetPasswordTypeSchema){
 const base = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/resetPassword`;
 const response = await fetch(base,{
    method:'PUT',
    body:JSON.stringify(data),
    headers:{
        "content-type":"application/json"
    }
 })
 const responseData = await response.json()
 return responseData
}