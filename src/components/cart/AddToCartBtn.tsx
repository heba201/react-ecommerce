"use client"
import React, { useContext, useState } from 'react'
import { Button } from '../ui/button'
import { ShoppingCart } from 'lucide-react'
import { addProductToCart } from '@/actions/cart.action';
import { toast } from 'sonner';
import { Spinner } from '../ui/spinner';
import { CartContext } from '@/provider/cart-provider';
import { redirect } from 'next/navigation';
import { IoCart } from "react-icons/io5";

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
       {/* <Button disabled={isLoading} className='grow cursor-pointer' onClick={()=>addToCart(produtId)}>
       {isLoading ? <Spinner/> : <ShoppingCart/>} 
        Add To Cart
        </Button> */}
    <Button disabled={isLoading} onClick={()=>addToCart(produtId)} className="flex items-center justify-center  w-1/2 h-[52px] rounded-xl cursor-pointer px-6 py-[14px] bg-[#16A34A] hover:shadow-[0px_4px_6px_-4px_#16A34A40,0px_10px_15px_-3px_#16A34A40] font-medium text-base leading-6 text-center align-middle text-white hover:bg-green-700 active:scale-[0.98] transition-all">
     {isLoading ? <Spinner/> :<IoCart className="w-5 h-4 text-white"/>} Add to Cart
     </Button>
    </>
  )
}
