"use client"
import { getCart } from '@/actions/cart.action';
import { getWishlist } from '@/actions/wishlist.action';
import { cartI } from '@/types/cart.type';
import { useSession } from 'next-auth/react';
import React, { createContext, useEffect, useState } from 'react'

interface WishlistContextI{
  noOfWishlistItems : number,
  getWishlistData : ()=> void, 
}
export const WishlistContext = createContext<WishlistContextI>({
    noOfWishlistItems : 0,
    getWishlistData : ()=>{},
})
export default function WishlistContextProvider({children}:{children:React.ReactNode}) {
    const[noOfWishlistItems,setnoOfWishlistItems] = useState(0);
    const[isLoading,setIsLoading] = useState(false);
    const {data:session ,status} = useSession();
    
   async function getWishlistData(){
        try {
            setIsLoading(true);
            const response  = await getWishlist();
            setnoOfWishlistItems(response.count);
        } catch (error) {
            
        }finally{
           setIsLoading(false);   
        }
    }

    useEffect(()=>{
       if(status==='unauthenticated') return;
       if(status==='authenticated'){
           getWishlistData();
       } 
    },[status])
  return (
     <>
     <WishlistContext.Provider value={{noOfWishlistItems,getWishlistData}}>
        {children}
        </WishlistContext.Provider> 
     </>
  )
}
