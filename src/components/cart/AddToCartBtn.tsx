"use client"
import React, { useContext, useState } from 'react'
import { Button } from '../ui/button'
import { ShoppingCart } from 'lucide-react'
import { addProductToCart } from '@/actions/cart.action';
import { toast } from 'sonner';
import { Spinner } from '../ui/spinner';
import { CartContext } from '@/provider/cart-provider';
import { redirect } from 'next/navigation';

export default function AddToCartBtn({produtId}:{produtId :string}) {
  const {getCartData} = useContext(CartContext);
const[isLoading,setIsLoading] =  useState(false)
    async function addToCart(productId:string){
    try{
        setIsLoading(true);
        const response = await addProductToCart(productId);
        toast.success(response.message);
        getCartData();
           }catch(error){
        toast.error((error as Error).message);
        redirect("/login");
          }finally{
          setIsLoading(false);  
          }
        }
  return (
    <>
       <Button disabled={isLoading} className='grow cursor-pointer' onClick={()=>addToCart(produtId)}>
       {isLoading ? <Spinner/> : <ShoppingCart/>}
         
        Add To Cart
        </Button>

    </>
  )
}
