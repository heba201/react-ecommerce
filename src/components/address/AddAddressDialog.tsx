"use client"
import React, { useState } from 'react'
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
import { Spinner } from "../ui/spinner"
import { AddressDataI } from '@/types/address.type'
import { addAddress, getAddress } from '@/actions/address.action'
import { FiPlus } from "react-icons/fi";
import { addressSchema, addressTypeSchema } from '@/schemas/address.sechamas'
import { toast } from 'sonner'
import { zodResolver } from '@hookform/resolvers/zod'

export default function AddAddressDialog() {
    const [open, setOpen] = useState(false);
    const[isLoadingAdd,setIsLoadingAdd] =  useState(false);
     const form =  useForm({
        resolver: zodResolver(addressSchema),
       defaultValues:{
        name: "",
        details: "",
        phone: "",
        city: "",
        }
      }
    )
         async function handleAddAddress(data:addressTypeSchema){
                try {
                    setIsLoadingAdd(true);
                    const response = await addAddress(data);
                    form.reset();
                     if(response.status === "success"){
                     toast.success(response.message);
                    // getCartData();
                    // router.push("/products");
                    }
                  }catch (error) {
                   toast.error((error as Error).message);
                  }finally{
                     setIsLoadingAdd(false);  
                   }
                 }
   return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
       <button className="flex items-center justify-center gap-2 py-[10px] px-[20px] rounded-[12px] bg-[#16A34A] shadow-[0px_4px_6px_-4px_rgba(22,163,74,0.25),0px_10px_15px_-3px_rgba(22,163,74,0.25)] font-semibold text-[16px] leading-[20px] tracking-[0] text-center align-middle text-white">
                            <FiPlus className="w-[17.5px] h-[14px] text-white" />
                           Add Address
                        </button> 
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Address</DialogTitle>
            <DialogDescription>
              Please fill form in order to add address
            </DialogDescription>
          </DialogHeader>
           <form onSubmit={form.handleSubmit(handleAddAddress)} className='space-y-4'>
            <Controller
            name="name"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                <Input
                  {...field}
                  id={field.name}
                  type='text'
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter Name"
                  autoComplete="off"
                />
                
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          <Controller
            name="details"
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
            name="phone"
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
          name="city"
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
          <Button className='w-full my-7 bg-[#16A34A] cursor-pointer' type='submit'>
          {isLoadingAdd ? <Spinner/> : 'Add Address'} 
            </Button>
             </form>
             </DialogContent>
            </form>
            </Dialog>
  )
}
