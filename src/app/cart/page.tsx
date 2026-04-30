"use client"
import { clearCart, getCart } from '@/actions/cart.action'
import { CartCheckout } from '@/components/cart/cart-checkout';
import CartItem from '@/components/cart/cart-item';
import { Avatar } from '@/components/ui/avatar';
import { Spinner } from '@/components/ui/spinner';
import { CartContext } from '@/provider/cart-provider';
import { cartI, cartProductI } from '@/types/cart.type';
import { Trash2 } from 'lucide-react';
import { finalizeLayoutVaryPath } from 'next/dist/client/components/segment-cache/vary-path';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react'

export default function Cart() {
  const {getCartData,totalCartPrice,noOfCartItems} = useContext(CartContext);
  const[products,setProducts] = useState<cartProductI[]>([]);
  const[isLoading,setIsLoading] = useState(false);
  const[isLoadingClear,setIsLoadingClear] = useState(false);

  async function getAllProductCart(){
    try {
      setIsLoading(true);
      const response : cartI = await getCart();
       setProducts(response.data.products);
    } catch (error) {
      console.log(error);
    }finally{
      setIsLoading(false);
      
    }
  }
  async function clearOurCart(){
    try {
      setIsLoadingClear(true);
      const response = await clearCart();
          setProducts(response.data.products);
          getCartData();
    } catch (error) {
      console.log(error);
    }finally{
       setIsLoadingClear(false);
    }
  }
  useEffect(()=>{
getAllProductCart();
  },[])
  if(isLoading){
    return <>
     <div className='flex h-screen items-center justify-center flex-col gap-4'>
 <div className="nav-logo">
         <div  className='text-3xl font-bold flex items-center gap-2'>
         <Avatar className='rounded-lg text-white bg-black flex items-center justify-center'>
 S
  
</Avatar>
         ShopMart
         </div>
        </div>

<Spinner  className='size-8'/>
<p>Loading Cart ...</p>
    </div>
    </>
  }


  if(products.length == 0){
    return <>
     <div className='flex h-screen items-center justify-center flex-col gap-4'>
 <div className="nav-logo">
         <div  className='text-3xl font-bold flex items-center gap-2'>
         <Link href="/products" className='inline-flex h-16 min-w-56 items-center justify-center rounded-2xl border-2 border-black bg-black px-10 text-lg text-white hover:text-black hover:bg-white'>
         Go Shopping
         </Link>  
         </div>
        </div>
<p>Your Cart is empty</p>
    </div>
    </>
  }

  return (
    <>
    <div className="h-scree">
  <div className="py-12">
    <div className="max-w-md mx-auto bg-gray-100 shadow-lg rounded-lg  md:max-w-5xl">
       <div className="flex justify-end mt-3 pb-2 pr-5 pt-3">
  <button onClick={()=>clearOurCart()} className="flex cursor-pointer items-center gap-2 text-red-500 hover:underline border border-red-500 rounded-md px-4 py-4">
   <Trash2 className='w-4 h-4'/>
   { isLoadingClear ? <Spinner/> : <span>Clear Cart</span>}
    
  </button>
  
  </div>
  
      <div className="md:flex ">
        <div className="w-full p-4 px-5 py-5">
          <div className="md:grid md:grid-cols-3 gap-2 ">
            <div className="col-span-2 p-5">
              <h1 className="text-xl font-medium ">Shopping Cart</h1>
              <p>{noOfCartItems} item in your cart</p>
              {products && products.map((product)=>  <CartItem key={product._id} product={product} setProducts={setProducts}/>)}
              
               
               
              
            </div>
             <div className="p-5 bg-gray-800 rounded overflow-visible">
               
             
              <div className="overflow-visible flex justify-between items-center mt-2">
               
                <div className="flex justify-center items-end">
                  <span className="text-sm font-medium text-gray-400 mr-1">Subtotal: {noOfCartItems}  Items</span>
                   <span className="text-lg font-bold text-white">{totalCartPrice} EGP</span>
                </div>
              </div>
                <div className="focus:outline-none w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"></div>
             
              <div className="overflow-visible flex justify-between items-center mt-2">
              <div className="flex justify-center items-end">
                <span className="text-sm font-medium text-gray-400 mr-1">Total:</span>
                   <span className="text-lg font-bold text-white">{totalCartPrice} EGP</span>
              </div>
              </div>
                <div className="w-full h-6 bg-gray-800 text-white placeholder-gray-300 text-sm border-b border-gray-600 py-4"></div>
              <div className="pt-2 mb-3"></div>
              <CartCheckout/>
              <Link href="/products" className="h-12 w-full block  bg-blue-500 rounded focus:outline-none text-white hover:bg-blue-600 p-4 mt-3 text-center">Continue Shopping</Link>
            </div>  
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</>
  )
}
