import * as z from "zod"
 
export const registerSchema = z.object({
   name:z.string().nonempty("Name Required").min(6,"min is 6 characters").max(20,"max is 20 characters"),
   email:z.string().nonempty("Email Required").email("Email is not vaild"),
   password:z.string().nonempty("Password Required").min(8,"min is 8 characters"),
   rePassword:z.string().nonempty("Re-Password Required").min(8,"min is 8 characters"),
   phone:z.string().nonempty("Phone Required").regex(/^01[0125][0-9]{8}$/)
}).refine((data)=>data.password === data.rePassword,{
    path:["rePassword"],
    error:"Passwords not match"
} )

export type registerTypeSchema = z.infer<typeof registerSchema>


export const loginSchema = z.object({
   
   email:z.string().nonempty("Email Required").email("Email is not vaild"),
   password:z.string().nonempty("Password Required").min(7,"min is 7 characters"),
    
}) 

export type loginTypeSchema = z.infer<typeof loginSchema>