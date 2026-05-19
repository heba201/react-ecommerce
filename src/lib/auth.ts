import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function getUserToken(){
    // next-auth.session-token
    // __Secure-next-auth.session-token
 const decodedToken =  (await cookies()).get("__Secure-next-auth.session-token")?.value
 const token = await(decode({token:decodedToken , secret : process.env.AUTH_SECRET ! })) 
 return token?.token;
}