import * as z from "zod"
export const resetPasswordSchema = z.object({ 
   email:z.string().nonempty("Email Required").email("Email is not vaild"),
   newPassword:z.string().nonempty("Password Required").min(8,"min is 8 characters"),
   rePassword:z.string().nonempty("Re-Password Required").min(8,"min is 8 characters"), 
}).refine((data)=>data.newPassword === data.rePassword,{
    path:["rePassword"],
    error:"Passwords not match"
})

export type resetPasswordTypeSchema = z.infer<typeof resetPasswordSchema>