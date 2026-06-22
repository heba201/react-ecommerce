"use client"
import React, { useEffect, useState , useContext } from 'react'
import { PiHeartFill } from "react-icons/pi";
import Image from 'next/image'
import product1 from "@/assets/whishlist/product1.jpg";
import { IoCart } from "react-icons/io5";
import { IoMdTrash } from "react-icons/io";
import FeaturesBar from '@/components/featuresBar/FeaturesBar';
import { getWishlist, removeProductFromWishlist } from '@/actions/wishlist.action';
import { whishlistI } from '@/types/wishlist.type';
import Link from 'next/link'
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { cartI, cartProductI } from '@/types/cart.type';
import { addProductToCart, getCart } from '@/actions/cart.action';
import { FaCheck } from "react-icons/fa"; 
import { CartContext } from '@/provider/cart-provider';
import {  FaArrowRight  } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { WishlistContext } from '@/provider/wishlist-provider'

export default function Wishlist() {
const[isLoading,setIsLoading] = useState(false);
const[isLoadingWishlist,setIsLoadingWishlist] = useState(false);
const[wishlistId,setWishlistId] = useState("");
const[products,setProducts] = useState<whishlistI[]>([]);
const[cartProducts,setCartProducts] = useState<cartProductI[]>([]);
const[isLoadingAddToCart,setIsLoadingAddToCart] =useState(false);
const {getCartData} = useContext(CartContext);
const {noOfWishlistItems , getWishlistData} = useContext(WishlistContext);
  async function getAllProductWishlist(){
      try {
        setIsLoadingWishlist(true);
        const response  = await getWishlist();
         setProducts(response.data);
         console.log(response);
      } catch (error) {
        console.log(error);
      }finally{
        setIsLoadingWishlist(false);
      }
    }

     async function getAllProductCart(){
        try {
          const response : cartI = await getCart();
          setCartProducts(response.data.products);
          console.log(cartProducts,"cart");
        } catch (error) {
          console.log(error);
        } 
      }

     useEffect(()=>{
      getAllProductWishlist();
      getAllProductCart();
      },[])

      
    async function removeProduct(productId : string){
            try {
            setIsLoading(true);
            setWishlistId(productId);
            const response = await removeProductFromWishlist(productId);   
            toast.success(response.message);
            //setProducts(response.data);
            console.log(response);
            getAllProductWishlist();
            getWishlistData();
            } catch (error) {
                toast.error((error as Error).message) 
            }finally{
                  setIsLoading(false);
                   setWishlistId("");
            }  
        }
 
        async function addToCart(productId:string){
            try{
                setIsLoadingAddToCart(true);
                setWishlistId(productId);
                const response = await addProductToCart(productId);
                toast.success(response.message);
                getCartData();
                getAllProductCart();
                   }catch(error){
                toast.error((error as Error).message);
                  }finally{
                  setIsLoadingAddToCart(false);
                  setWishlistId("");  
                  }
                }



if(!isLoadingWishlist && products.length === 0){
    return  <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="relative mb-8">
          <div className="w-20 h-20 rounded-2xl bg-gray-100 flex items-center justify-center mb-6 mx-auto">
            <CiHeart className="text-5xl text-gray-300" />
          </div>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          Your wishlist is empty
        </h2>
        <p className="text-gray-500 mb-8 leading-relaxed">
          Looks like you haven't added anything to your wishlist yet.
          <br />
          Start exploring our products!
        </p>

        <a
          href="/products"
          className="inline-flex items-center gap-2 bg-[#16a34a] text-white py-3.5 px-8 rounded-xl font-semibold hover:bg-green-700 transition-all shadow-lg active:scale-[0.98]"
        >
          Browse Products
          <FaArrowRight className="text-sm" />
        </a>

      </div>
    </div>
  }


  return (
    <> 
    <div className='min-h-screen bg-[#F9FAFB80]'>
     <div className="xl:px-[192px] px-[4px] bg-white border-b border-[#F3F4F6]">
       <div className="px-[16px] py-[32px] gap-[16px]">
        <nav className="flex items-center gap-2">
          <a  className="flex items-center gap-2 font-medium text-[14px] leading-[20px] text-[#6A7282]">Home</a> 
          <span className="font-medium text-[14px] leading-[20px] align-middle text-[#6A7282]">/</span> 
          <span className="font-medium text-[14px] leading-[20px] tracking-normal align-middle text-[#101828]">Wishlist</span> 
        </nav>
        <div className="flex mt-4">
            <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-[48px] h-[48px] rounded-[12px] bg-[#FEF2F2]">
                <PiHeartFill className='w-[25px] h-[20px] text-[#FB2C36]' />
                </div>
                <div>
                <h1 className="font-bold text-[14px] leading-[16px] tracking-normal align-middle text-[#101828]">My Wishlist</h1>
                <p className="font-medium text-[14px] leading-[20px] tracking-normal align-middle text-[#6A7282]">{products?.length} items saved</p>
                </div>
            </div>
        </div>
       </div>
     </div>
     {/* px-[16px] px-[16px] */}
     <div className="xl:px-[192px]">
     <div className="px-4 py-[32px]">
         <div className="rounded-[16px] border  border-[#F3F4F6] bg-white">
      <div className="hidden md:grid grid-cols-12 px-[24px] py-[16px] md:gap-4 gap-[16px] bg-[#F9FAFB] border-b border-[#F3F4F6]">
        <div className="col-span-6 font-medium text-[14px] leading-[20px] tracking-normal align-middle text-[#6A7282]">
         Product
        </div>
        <div className="col-span-2  font-medium text-[14px] leading-[20px] tracking-normal align-middle text-[#6A7282]">
         Price
        </div>
        <div className="col-span-2  font-medium text-[14px] leading-[20px] tracking-normal align-middle text-[#6A7282]">
         Status
        </div>
         <div className="col-span-2  font-medium text-[14px] leading-[20px] tracking-normal align-middle text-[#6A7282]">
         Actions
        </div>

            </div>
           
            <div className='divide-y'>
                  {products.map((product) => (
                    <div
            key={product._id}
            className="grid grid-cols-1 md:grid-cols-12 xl:grid-cols-12 px-[16px] md:px-[12px] xl:px-[24px] py-[20px] md:gap-4 gap-[16px]"
          >
                  <div className="md:col-span-6 flex items-center gap-4">
                    <div className="flex items-center justify-center w-[80px] h-[80px] rounded-[12px] border bg-[#F9FAFB] border border-[#F3F4F6]">
                <Image src={product.imageCover} width={1000} height={1000} alt={product.slug} className='' />
                </div>
                <div>
                <Link href={`/products/${product._id}`} className="font-medium text-[16px] leading-[14px] tracking-normal align-middle text-[#101828]">{product.title}</Link>
                    <p className="font-medium text-[14px] leading-[20px] tracking-normal align-middle text-[#99A1AF]">{product.category.name}</p>
                </div>
            </div>
              <div className="md:col-span-2 flex items-center gap-2">
              <span className="xl:hidden md:hidden font-medium text-[14px] leading-[20px] tracking-normal align-middle text-[#6A7282]">
                Price:
              </span>
               <div className="text-right">
                    <div className="font-semibold text-[16px] leading-[14px] text-center align-middle text-[#101828]">
                    {product.price} EGP
                </div>
               </div>
             </div>
             <div className="md:col-span-2 flex items-center gap-2">
                <span className="xl:hidden md:hidden font-medium text-[14px] leading-[20px] tracking-normal align-middle text-[#6A7282]">
                Status:
              </span>
                <span className="flex items-center justify-center w-[80px] h-[24px] px-[12px] py-[4px] gap-[6px] rounded-full bg-[#F0FDF4] font-medium text-[12px] leading-[16px] tracking-normal align-middle text-[#008236]">
                 <span className="w-[6px] h-[6px] rounded-full bg-[#00C950]"></span>
                 
                 {cartProducts.some(cart => cart.product._id === product._id) ? 'In Cart' :'In Stock'}
                </span>
             </div>
                  <div className="md:col-span-2 flex items-center md:gap-1 gap-2 ">
                  {cartProducts.some(cart => cart.product._id === product._id) ? <>
                  <Link href='/cart' className="flex items-center justify-center flex-1 xl:px-[16px] md:px-[4px] px-[16px]  py-[10px] xl:gap-[8px]  md:gap-[4px] rounded-[8px] bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all">
                  <FaCheck className="w-[15px] h-[12px] text-[#16A34A]"/>
                  <span className="font-medium text-[14px] leading-[20px] text-center tracking-normal align-middle whitespace-nowrap">View Cart</span>
                  </Link>
                  </>:
                  <>
                  <Button disabled={wishlistId === product._id ? isLoadingAddToCart : false} onClick={()=>addToCart(product._id)} className="flex items-center justify-center flex-1 xl:px-[16px] md:px-[4px] px-[16px]  py-[10px] xl:gap-[8px]  md:gap-[4px] rounded-[8px] bg-[#16A34A] text-white cursor-pointer"> 
                 {wishlistId === product._id && isLoadingAddToCart ? <Spinner /> :<IoCart className="w-[15px] h-[12px] text-white" /> }   
                  <span className="font-medium text-[14px] leading-[20px] text-center tracking-normal align-middle text-white whitespace-nowrap">Add to Cart</span>
                </Button>
                 </>
                  }
                     
                <Button disabled={wishlistId === product._id ? isLoading : false}  onClick={()=>removeProduct(product._id)} className="flex items-center justify-center  w-[40px] h-[40px] rounded-[8px] border  border-[#E5E7EB] text-[#99A1AF] hover:text-red-500 bg-transparent cursor-pointer">
             {wishlistId === product._id && isLoading ? <Spinner/> :  <IoMdTrash className="w-[17.5px] h-[14px]  hover:text-red-500"/>}  
                </Button>
             </div>
            </div>
             ))}
            </div>
       
         </div>
         <div className="mt-8">
            <Link href="/products" className="font-medium text-[14px] leading-[20px] tracking-normal align-middle text-[#6A7282]">← Continue Shopping</Link>
         </div>
     </div>
     </div>
    </div>
      <FeaturesBar variant='' /> 
    </>
     )
    }