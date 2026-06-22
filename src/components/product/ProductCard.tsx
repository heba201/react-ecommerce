"use client"
import React ,{ useContext, useEffect, useState } from 'react'
import woman_shawl from "@/assets/home/woman_shawl.png";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";
import { LuRefreshCw } from "react-icons/lu";
import { FaStar } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { GoPlus } from "react-icons/go";
import { productI } from '@/types/producttype';
import Link from 'next/link'
import { CartContext } from '@/provider/cart-provider';
import { addProductToCart } from '@/actions/cart.action';
import { toast } from 'sonner';
import { redirect } from 'next/navigation';
import { Button } from '../ui/button'
import { Spinner } from '../ui/spinner';
import { addProductToWishlist, getWishlist, removeProductFromWishlist } from '@/actions/wishlist.action';
import { FaHeart } from "react-icons/fa6";
import { whishlistI } from '@/types/wishlist.type';
import { WishlistContext } from '@/provider/wishlist-provider'
import Rating from './Rating';
export default function ProductCard({variant , product}: { variant: string ,product:productI}) {
  const {getCartData} = useContext(CartContext);
  const {getWishlistData} = useContext(WishlistContext);
  const[isLoading,setIsLoading] =  useState(false);
  const[isLoadingWishlist,setIsLoadingWishlist] =  useState(false);
  const[productsWishlist,setProductsWishlist]=  useState<whishlistI[]>([]);
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


        async function addToWishlist(productId:string){
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

              async function removeWishlistProduct(productId : string){
                          try { 
                          const response = await removeProductFromWishlist(productId);   
                          toast.success(response.message);
                          console.log(response);
                          getAllProductWishlist();
                           getWishlistData();
                          } catch (error) {
                              toast.error((error as Error).message) 
                          }finally{
                                 
                          }  
                      }

              useEffect(()=>{
                getAllProductWishlist();
              },[])
  return (
    <div className="col-span-1 left-[1196.8px]  rounded-[8px] border shadow-none transform-none hover:shadow-lg hover:scale-102 transition duration-300">
     <div className="relative p-5">
      {product.priceAfterDiscount &&
        <span className="absolute xl:top-4 md:top-3  top-3 left-[11.99px] w-11.75 h-6 px-2 py-1 rounded-md bg-[#FB2C36] text-white font-medium text-[12px] leading-[16px] tracking-normal align-middle">
           - {`${Math.round((product.priceAfterDiscount/product.price)*100)}%`}
        </span>
      }
    <Link href={`/products/${product._id}`}>
     <Image src={product.imageCover} width={1000} height={1000} alt={product.slug} />
     </Link>
        <div className="absolute w-[32px] h-[112px] flex flex-col pb-2 top-3 top-2 right-[11.99px]">
         <div className='flex items-center justify-center  w-[32px] h-[40px] pb-2'>
          
           {productsWishlist.some(wishlist => wishlist._id === product._id) ? <Button disabled={isLoadingWishlist} onClick={()=>removeWishlistProduct(product._id)} className='flex items-center justify-center h-[32px] w-[32px] rounded-full bg-white shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A] cursor-pointer'>
            {isLoadingWishlist ? <Spinner className='text-green-500'/> :<FaHeart className='w-5 h-4 text-red-500'/>}
            </Button> 
           
           : <Button disabled={isLoadingWishlist} onClick={()=>addToWishlist(product._id)} className='flex items-center justify-center h-[32px] w-[32px] rounded-full bg-white shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A] cursor-pointer'>
            {isLoadingWishlist ? <Spinner className='text-green-500'/> :<FaRegHeart className='w-5 h-4 text-[#4A5565]'/>}
            </Button>}
         </div>

         <div className='flex items-center justify-center w-[32px] h-[40px] pb-2'>
            <button className='flex items-center justify-center h-[32px] w-[32px] rounded-full bg-white shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A]'>
                <LuRefreshCw className='w-5 h-4 text-[#4A5565]'/>
            </button>
         </div>

         <div className='flex items-center justify-center w-[32px] h-[40px] pb-2'>
            <Link href={`/products/${product._id}`} className='flex items-center justify-center h-[32px] w-[32px] rounded-full bg-white shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A] cursor-pointer'>
                <FaRegEye  className='w-5 h-4 text-[#4A5565]'/>
            </Link>
         </div>

        </div>
      </div>
      <div className="xl:p-4 md:p-2  p-4 gap-1">
        <div className="font-medium text-[12px] leading-[16px] tracking-normal align-middle text-[#6A7282]">
            {product.category.name}
        </div>
        <Link href={`products/${product._id}`} className="font-medium text-[16px] leading-[24px] tracking-normal align-middle text-[#364153]">
         {product.title.length > 61 ? product.title.slice(0, 61) + "...": product.title}
        </Link>
        
           <div className="flex items-center">
             <div className='pr-2'>
                <div className={`flex items-center`}>
                    <div className={`text-[#FCC800] pt-[3px] pb-[5px] flex items-center ${variant === 'product_search' ? 'md:flex-wrap' : ''}`}>
                     <Rating  rating={product.ratingsAverage}/>
                    </div>
                </div>
             </div>

             <span className={`font-medium text-[12px] leading-[16px] tracking-normal align-middle text-[#6A7282] ${variant === 'products'  || 'product_search' ? '' : 'whitespace-nowrap'}`}>{product.ratingsAverage} ({product.ratingsQuantity})</span>
           </div>
           <div className="flex items-center xl:justify-between md:gap-2 justify-between">
                <div className={`flex  ${variant === 'products' ? 'xl:flex-row md:flex-col' : ''} items-center xl:gap-2 md:gap-1`}>
                    <span className={`font-bold ${variant === 'product_search' ? 'md:text-[14px]' :  'md:text-[18px]'}  xl:text-lg leading-7 tracking-normal align-middle text-[#16A34A] ${variant === 'products' ? '' : 'whitespace-nowrap'}`}>
                        {product.priceAfterDiscount ? product.priceAfterDiscount : product.price} EGP
                        </span>
                 <span className={`font-medium text-[14px] leading-[20px] tracking-normal line-through align-middle top-[5.5px] left-[79.06px] text-[#6A7282] whitespace-nowrap`}>{product.priceAfterDiscount ? `${product.price} EGP`  : ''} </span>   
                </div>
                <Button onClick={()=>addToCart(product._id)} disabled={isLoading} className="cursor-pointer shrink-0 xl:w-[40px] xl:h-[40px] md:w-5 md:h-5  w-[40px] h-[40px]  rounded-full bg-[#16A34A] flex items-center justify-center">
                    
                     {isLoading ? <Spinner/> :<GoPlus className='w-[20px] h-[16px]  text-white' />} 
                </Button>
           </div>
      </div>
    </div>
  )
}
