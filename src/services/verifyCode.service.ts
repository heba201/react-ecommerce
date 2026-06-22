import { verifyCodeTypeSchema } from "@/schemas/verifyCode.sechamas";

export async function verifyCode(data:verifyCodeTypeSchema){
 const base = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/verifyResetCode`;
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