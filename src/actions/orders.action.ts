"use server"
import { getUserToken } from "@/lib/auth"
import { jwtDecode } from "jwt-decode";

export async function getUserOrders(){
//     type TokenType = {
//   id: string;
// };
    const token = await getUserToken();
    if(!token){
        throw new Error("Unauthenticated User")
    }

    const decoded = jwtDecode(token);
    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/user/${decoded?.id}`,{
    method:'GET',
    headers:{
        "content-type":"application/json"
    } 
 })
 const data = await response.json();
 return data;
}