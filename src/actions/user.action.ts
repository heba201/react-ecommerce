"use server"

import { getUserToken } from "@/lib/auth"
import { updatePasswordTypeSchema, updateTypeSchema } from "@/schemas/user.sechamas";
export async function updateUserData(userData:updateTypeSchema){
    const token = await getUserToken();
    if(!token){
        throw new Error("You are not authorized to do this action")
    }
    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/users/updateMe/`,{
    method:'PUT',
    body:JSON.stringify(userData),
    headers:{
        token : token as string,
        "content-type":"application/json"
    }
 })
 const data = await response.json();
 return data;
}


export async function updateUserPassword(Data:updatePasswordTypeSchema){
    const token = await getUserToken();
    if(!token){
        throw new Error("You are not authorized to do this action")
    }
    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/users/changeMyPassword/`,{
    method:'PUT',
    body:JSON.stringify(Data),
    headers:{
        token : token as string,
        "content-type":"application/json"
    }
 })
 const data = await response.json();
 return data;
}