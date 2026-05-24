import { removeProductFromCart, updateProductFromCart } from '@/actions/cart.action'
import { cartProductI } from '@/types/cart.type'
import { Spinnaker } from 'next/font/google';
import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'sonner';
import { tr } from 'zod/locales';
import { Spinner } from '../ui/spinner';
import { CartContext } from '@/provider/cart-provider';

export default function CartItem({product,setProducts}:{product : cartProductI,setProducts:(products:cartProductI[])=>void}) {
    const {getCartData} = useContext(CartContext);
    const[isLoading,setIsLoading] = useState(false);
    const[isLoadingUpdateInc,setIsLoadingUpdateInc] = useState(false);
    const[isLoadingUpdateDec,setIsLoadingUpdateDec] = useState(false);
    const[productCounter,setProductCounter] = useState(0);

useEffect(()=>{
  setProductCounter(product.count);
},[product])

console.log(product.count);
    async function removeProduct(productId : string){
        try {
        setIsLoading(true);
        const response = await removeProductFromCart(productId);   
        toast.success(response.message);
        setProducts(response.data.products);
        getCartData();
        } catch (error) {
           toast.error((error as Error).message) 
        }finally{
             setIsLoading(false);
             setIsLoadingUpdateInc(false);
             setIsLoadingUpdateDec(false);
        }
       
    }
    async function updateCart(productId : string ,count:number){
        try {
          console.log(productCounter);
          if(count > productCounter){
            setIsLoadingUpdateInc(true);
          }else{
           setIsLoadingUpdateDec(true);
          }
           const response =   await updateProductFromCart(productId,count);   
            toast.success(response.message);
            setProducts(response.data.products);
            getCartData();
        } catch (error) {
             toast.error((error as Error).message)
              console.log(error)  
        }finally{
     setIsLoadingUpdateInc(false);
     setIsLoadingUpdateDec(false);
    } 
    }
 
  return (
    <>
    <div className="flex justify-between items-center mt-6 pt-6">
                <div className="flex  items-center">
                  <Image  src={product.product.imageCover} sizes='200'  height={70}   width={70} className="object-cover rounded" alt="product-img"/>
                  <div className="flex flex-col ml-3">
                    <span className="md:text-md font-medium">{product.product.title}</span>
                    <p className='text-gray-500 text-sm mb-4'>{product.product.brand.name} {product.product.category.name}</p>
                    <span className="text-xs font-light text-gray-400">#41551</span>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <div className="pr-8 flex ">
                    <button className="font-semibold cursor-pointer" onClick={()=>updateCart(product.product._id,productCounter-1)} disabled={isLoadingUpdateDec}>{isLoadingUpdateDec ? <Spinner/>: "-"}</button>
                    <input type="text" className="focus:outline-none bg-gray-100 border h-6 w-8 rounded text-sm px-2 mx-2" value={productCounter} />
                    <button className="font-semibold cursor-pointer"  onClick={()=>updateCart(product.product._id,productCounter+1)} disabled={isLoadingUpdateInc}>{isLoadingUpdateInc ? <Spinner/>: "+"}</button>
                  </div>
                  <div className="pr-8">
                    <div className='font-bold text-black text-lg  flex flex-col items-end'>
                      {/* <span className="text-xs font-medium">{product.price} /Item EGP</span> */}
                      <p className='text-gray-500 text-sm'> {product.price} /Item EGP </p>
                      <p className='lg'> Total {product.price * productCounter}  EGP </p>
                    </div>
                    
                
                    <button disabled={isLoading}  onClick={()=>removeProduct(product.product._id)} className='text-red-500 text-sm hover:underline border cursor-pointer border-red-500 rounded-md px-4 py-2 ml-3 disabled:cursor-not-allowed disabled:bg-gray-400'>
                       {isLoading ? <Spinner/> : 'Remove'}
                        
                        </button>
                  </div>
                  <div>
                    <i className="fa fa-close text-xs font-medium" />
                  </div>
                </div>
              </div>
               <div className="flex justify-between items-center mt-6 pt-6 border-t"></div>
    </>
  )
}
