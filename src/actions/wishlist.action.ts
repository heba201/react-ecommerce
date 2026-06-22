"use server"
import { getUserToken } from "@/lib/auth"


export async function addProductToWishlist(productId:string){
    const token = await getUserToken();
    if(!token){
        throw new Error("You are not authorized to do this action")
    }
    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`,{
    method:'POST',
    body:JSON.stringify({productId:productId}),
    headers:{
        token : token as string,
        "content-type":"application/json"
    }
 })
 const data = await response.json();
 return data;
}


export async function getWishlist(){
    const token = await getUserToken();
    if(!token){
        throw new Error("Unauthenticated User")
    }
    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist`,{
    method:'GET',
    headers:{
        token : token as string,
        "content-type":"application/json"
    }
 })
 const data = await response.json();
 return data;
}


export async function removeProductFromWishlist(productId:string){
    const token = await getUserToken();
    if(!token){
        throw new Error("Unauthenticated User")
    }
    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist/${productId}`,{
    method:'DELETE',
    headers:{
        token : token as string,
        "content-type":"application/json"
    }
 })
 const data = await response.json();
 return data;
}