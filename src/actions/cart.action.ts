"use server"
import { getUserToken } from "@/lib/auth"
import { ShippingDataI } from "@/types/cart.type";
import { error } from "console";

export async function addProductToCart(productId:string){
    const token = await getUserToken();
    if(!token){
        throw new Error("You are not authorized to do this action")
    }
    const response = await fetch(`https://ecommerce.routemisr.com/api/v2/cart`,{
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


export async function getCart(){
    const token = await getUserToken();
    if(!token){
        throw new Error("Unauthenticated User")
    }
    const response = await fetch(`https://ecommerce.routemisr.com/api/v2/cart`,{
    method:'GET',
    headers:{
        token : token as string,
        "content-type":"application/json"
    }
 })
 const data = await response.json();
 return data;
}

export async function removeProductFromCart(productId:string){
    const token = await getUserToken();
    if(!token){
        throw new Error("Unauthenticated User")
    }
    const response = await fetch(`https://ecommerce.routemisr.com/api/v2/cart/${productId}`,{
    method:'DELETE',
    headers:{
        token : token as string,
        "content-type":"application/json"
    }
 })
 const data = await response.json();
 return data;
}


export async function updateProductFromCart(productId:string,count:number){
    const token = await getUserToken();
    if(!token){
        throw new Error("Unauthenticated User")
    }
    const response = await fetch(`https://ecommerce.routemisr.com/api/v2/cart/${productId}`,{
    method:'PUT',
    body:JSON.stringify({count}),
    headers:{
        token : token as string,
        "content-type":"application/json"
    }
 })
 const data = await response.json();
 return data;
}

export async function clearCart(){
    const token = await getUserToken();
    if(!token){
        throw new Error("Unauthenticated User")
    }
    const response = await fetch(`https://ecommerce.routemisr.com/api/v2/cart/`,{
    method:'DELETE',
    headers:{
        token : token as string,
        "content-type":"application/json"
    }
 })
 const data = await response.json();
 return data;
}

export async function cashCheckout(cartData:ShippingDataI ,cartId:string){
    const token = await getUserToken();
    if(!token){
        throw new Error("You are not authorized to do this action")
    }
    const response = await fetch(`https://ecommerce.routemisr.com/api/v2/orders/${cartId}`,{
    method:'POST',
    body:JSON.stringify({cartData}),
    headers:{
        token : token as string,
        "content-type":"application/json"
    }
 })
 const data = await response.json();
 return data;
}


export async function sessionCheckout(cartData:ShippingDataI ,cartId:string){
    const token = await getUserToken();
    if(!token){
        throw new Error("You are not authorized to do this action")
    }
    const url='http://localhost:3000'
    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}/?url=${url}`,{
    method:'POST',
    body:JSON.stringify({cartData}),
    headers:{
        token : token as string,
        "content-type":"application/json"
    }
 })
 const data = await response.json();
 return data;
}