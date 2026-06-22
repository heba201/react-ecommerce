import * as z from "zod"
 
export const forgetPasswordSchema = z.object({
   email:z.string().nonempty("Email Required").email("Email is not vaild"),
})

export type forgetPasswordTypeSchema = z.infer<typeof forgetPasswordSchema>