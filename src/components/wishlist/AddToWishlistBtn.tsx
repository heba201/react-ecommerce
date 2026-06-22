"use client"
import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'sonner';
import { redirect } from 'next/navigation';
import { addProductToWishlist, getWishlist, removeProductFromWishlist } from '@/actions/wishlist.action'
import { whishlistI } from '@/types/wishlist.type';
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
import { Spinner } from '../ui/spinner';
import { WishlistContext } from '@/provider/wishlist-provider'

export default function AddToWishlistBtn({productId}:{productId:string}) {
      const[isLoadingWishlist,setIsLoadingWishlist] =  useState(false);
      const[productsWishlist,setProductsWishlist]=  useState<whishlistI[]>([]);
      const {getWishlistData} = useContext(WishlistContext);
     const isInWishlist  :boolean = productsWishlist.some(wishlist => wishlist._id === productId) ;
    async function addToWishlist(){
        try{
            setIsLoadingWishlist(true);
            const response = await addProductToWishlist(productId);
            console.log(response);
            toast.success(response.message);
            getAllProductWishlist();
            getWishlistData();
               }catch(error){
            toast.error((error as Error).message);
            redirect("/login");
              }finally{
              setIsLoadingWishlist(false);  
              }
            }

            async function getAllProductWishlist(){
            try {
              const response  = await getWishlist();
                setProductsWishlist(response.data);
            } catch (error) {
              console.log(error);
            }
          }

          async function removeWishlistProduct(){
            try {
                setIsLoadingWishlist(true);   
            const response = await removeProductFromWishlist(productId);   
            toast.success(response.message);
            getAllProductWishlist();
            } catch (error) {
                toast.error((error as Error).message) 
            }finally{
              setIsLoadingWishlist(false);        
            }  
        }

        useEffect(()=>{
        getAllProductWishlist();

        })
        console.log(productsWishlist)
          return (
          <button disabled={isLoadingWishlist && !!isInWishlist ?isLoadingWishlist:false} onClick={()=>{!isInWishlist ? addToWishlist():removeWishlistProduct()}} className={`flex items-center justify-center flex-1  h-[52px] rounded-xl gap-2 px-4 py-3 border  font-medium text-base leading-6 text-center align-middle ${isInWishlist ? "text-red-600 bg-red-50 border-red-200":"text-[#364153] border-t-2 border-t-[#E5E7EB]"}  cursor-pointer hover:border-green-300 hover:text-green-600 transition text-gray-700`}>
            {isInWishlist ? (
            <>
                {isLoadingWishlist ? <Spinner /> :  <FaHeart className="w-5 h-4 text-red-500" />}
                In Wishlist
            </>
            ) : (
            <>
             {isLoadingWishlist ?  <Spinner /> : <CiHeart className="w-5 h-5" />}
               Add to Wishlist
            </>
            )}    
     </button>
   )
}
