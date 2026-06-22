import * as z from "zod"

export const updateDataSchema = z.object({
  name:z.string(),
  email:z.string().email("Email is not vaild").optional(),
  phone:z.string().regex(/^01[0125][0-9]{8}$/).optional(),
    })


export type updateTypeSchema = z.infer<typeof updateDataSchema>

export const updatePasswordSchema = z.object({
    currentPassword: z.string().nonempty("Current Password Required"),
    password:z.string().nonempty("Password Required").min(8,"min is 8 characters"),
    rePassword:z.string().nonempty("Re-Password Required").min(8,"min is 8 characters"),
    }).refine((data)=>data.password === data.rePassword,{
    path:["rePassword"],
    error:"Passwords not match"
})

export type updatePasswordTypeSchema = z.infer<typeof updatePasswordSchema>