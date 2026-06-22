import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export async function getUserToken():Promise<{ token: string } | null> {
    // next-auth.session-token
    // __Secure-next-auth.session-token on production
 const decodedToken =  (await cookies()).get("__Secure-next-auth.session-token")?.value
 const token = await(decode({token:decodedToken , secret : process.env.AUTH_SECRET ! })) 
 //return token?.token;
 return typeof token === "string"
  ? { token }
  : null;
}