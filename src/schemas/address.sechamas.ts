import * as z from "zod"

export const addressSchema = z.object({
   name:z.string().nonempty("Name Required").min(6,"min is 6 characters").max(20,"max is 20 characters"),
   details:z.string().nonempty("Details Required"),
   phone:z.string().nonempty("Phone Required").regex(/^01[0125][0-9]{8}$/),
   city:z.string().nonempty("City Required"),
})

export type addressTypeSchema = z.infer<typeof addressSchema>
