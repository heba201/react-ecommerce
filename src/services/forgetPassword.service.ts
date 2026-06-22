import { forgetPasswordTypeSchema } from "@/schemas/forgetPassword.sechamas";

export async function sendEmailforgetPassword(data:forgetPasswordTypeSchema){
 const base = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/forgotPasswords`;
 const response = await fetch(base,{
    method:'POST',
    body:JSON.stringify(data),
    headers:{
        "content-type":"application/json"
    }
 })
 const responseData = await response.json()
 return responseData
}