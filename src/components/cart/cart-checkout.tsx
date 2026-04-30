import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {   FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Field, FieldDescription, FieldError, FieldLabel } from '@/components/ui/field'
import { Controller,useForm } from "react-hook-form"
import { ShippingDataI } from "@/types/cart.type"
import { cashCheckout } from "@/actions/cart.action"
import { useContext, useState } from "react"
import { CartContext } from "@/provider/cart-provider"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { Spinner } from "../ui/spinner"

export function CartCheckout() {
    const[isLoading,setIsLoading] =  useState(false)
    const router = useRouter();
    const {cartId,getCartData} = useContext(CartContext);
    const form =  useForm({
    defaultValues:{
    shippingAddress: {
    details: " ",
    phone: " ",
    city: " ",
    postalCode: " "
      }  
    }
    })


    async function handleCheckout(data:ShippingDataI){
        try {
            setIsLoading(true);
            const response = await cashCheckout(data,cartId);
            if(response.status === "success"){
            toast.success(response.message);
            getCartData();
            router.push("/products");
            }
        } catch (error) {
           toast.error((error as Error).message);
        }finally{
          setIsLoading(false);  
        }
}

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          
         <Button className="h-12 w-full bg-blue-500 rounded focus:outline-none text-white hover:bg-blue-600">Check Out</Button>    
          
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Cart Payment</DialogTitle>
            <DialogDescription>
              Please fill form in order to checkout
            </DialogDescription>
          </DialogHeader>
           <form onSubmit={form.handleSubmit(handleCheckout)} className='space-y-4'>
   

  <Controller
  name="shippingAddress.details"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Details</FieldLabel>
      <Input
        {...field}
        id={field.name}
        type='text'
        aria-invalid={fieldState.invalid}
        placeholder="Enter Details"
        autoComplete="off"
      />
      
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>

 <Controller
  name="shippingAddress.phone"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Phone</FieldLabel>
      <Input
        {...field}
        id={field.name}
        type='number'
        aria-invalid={fieldState.invalid}
        placeholder="Enter Phone"
        autoComplete="off"
      />
      
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>


<Controller
  name="shippingAddress.city"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>City</FieldLabel>
      <Input
        {...field}
        id={field.name}
        type='text'
        aria-invalid={fieldState.invalid}
        placeholder="Enter City"
        autoComplete="off"
      />
      
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>

<Controller
  name="shippingAddress.postalCode"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Postal Code</FieldLabel>
      <Input
        {...field}
        id={field.name}
        type='number'
        aria-invalid={fieldState.invalid}
        placeholder="Enter Postal Code"
        autoComplete="off"
      />
      
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>


<Button className='w-full my-7' type='submit'>
   {isLoading ? <Spinner/> : 'CheckOut'} 
    </Button>
          </form>
          
        </DialogContent>
      </form>
    </Dialog>
  )
}
