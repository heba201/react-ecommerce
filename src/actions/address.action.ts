"use server"
import { getUserToken } from "@/lib/auth"
import { AddressDataI } from "@/types/address.type";

export async function addAddress(shippingData:AddressDataI){
    const token = await getUserToken();
    if(!token){
        throw new Error("You are not authorized to do this action")
    }
    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/addresses`,{
    method:'POST',
    body:JSON.stringify({shippingData:shippingData}),
    headers:{
        token : token as string,
        "content-type":"application/json"
       }
    })
 const data = await response.json();
 return data;
}

export async function getAddress(addressId ?:string){
    const token = await getUserToken();
    if(!token){
        throw new Error("You are not authorized to do this action")
    }
    const base = `https://ecommerce.routemisr.com/api/v1/addresses`;
    const url = addressId ? `${base}/${addressId}` : base
    const response = await fetch(url,{
    method:'GET',
    headers:{
        token : token as string,
        "content-type":"application/json"
       }
    })
 const data = await response.json();
 return data;
}


export async function deleteAddress(addressId:string){
    const token = await getUserToken();
    if(!token){
        throw new Error("You are not authorized to do this action")
    }
    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/addresses/${addressId}`,{
    method:'DELETE',
    headers:{
        token : token as string,
        "content-type":"application/json"
       }
    })
 const data = await response.json();
 return data;
}