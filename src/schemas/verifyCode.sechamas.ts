import * as z from "zod"
 
export const verifyCodeSechamas = z.object({
   resetCode: z.string().nonempty("Code Required").regex(/^\d+$/, "code must be numbers")
})

export type verifyCodeTypeSchema = z.infer<typeof verifyCodeSechamas>