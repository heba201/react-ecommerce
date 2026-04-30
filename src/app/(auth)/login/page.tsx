"use client"
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Field, FieldDescription, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { loginSchema, loginTypeSchema } from '@/schemas/auth.sechamas'
import { loginUser } from '@/services/auth.services'
import { zodResolver } from '@hookform/resolvers/zod'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'sonner'

export default function Login() {
const router = useRouter()
const form =  useForm({
  resolver:zodResolver(loginSchema),
  defaultValues:{
 email:"",
 password:"",
  
  }
})

async function handleLogin(data:loginTypeSchema){
//  const response = await  loginUser(data)
// console.log(response)
// if(response.message === 'success'){
// router.push("/products")
// toast.success("User Login Successfully")
// }else{
//   toast.error("User Login Failed")
// }

const response = await signIn("credentials",{
  email:data.email,
  password:data.password,
  redirect:false,
  // callbackUrl:"/products"
})
console.log(response,"response dt");
if(response?.ok){
 router.push("/products")
 toast.success("User Login Successfully")
}else{
toast.error(response?.error || "User Login Failed")
}
// const loginRes = await response.json()
// console.log(loginRes)
}
  return (
    <>
    <main className='mt-30'>
      <div className="max-w-5xl mx-auto">

        <Card className='p-10'>
          <h2 className='text-2xl font-bold my-4'>Login now and start shopping</h2>
          <form onSubmit={form.handleSubmit(handleLogin)} className='space-y-4'>
   

  <Controller
  name="email"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Email</FieldLabel>
      <Input
        {...field}
        id={field.name}
        type='email'
        aria-invalid={fieldState.invalid}
        placeholder="Enter Email"
        autoComplete="off"
      />
      
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>

 <Controller
  name="password"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Password</FieldLabel>
      <Input
        {...field}
        id={field.name}
        type='password'
        aria-invalid={fieldState.invalid}
        placeholder="Enter Password"
        autoComplete="off"
      />
      
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>

<Button className='w-full my-7' type='submit'>Login</Button>
          </form>
        </Card>
      </div>
    </main>
    </>
  )
}
