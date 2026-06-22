"use client"
import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import paper_note from "@/assets/cart/paper_note.png";
import fax from "@/assets/cart/fax.png";
import fax2 from "@/assets/cart/fax2.png";
import visa from "@/assets/cart/visa.png";
import cash from "@/assets/cart/cash.png";
import visa_card from "@/assets/cart/visa_card.png";
import visa_img from "@/assets/cart/visa_img.png";
import mastercard from "@/assets/cart/mastercard.png";
import amex from "@/assets/cart/amex.png";
import jacket from "@/assets/cart/jacket.jpg"; 
import closed_box from "@/assets/cart/closed_box.png";
import orange_box from "@/assets/cart/orange_box.png";
import { GoArrowLeft } from "react-icons/go";
import { FaHome } from "react-icons/fa";
import { TiHomeOutline } from "react-icons/ti";
import { FaBookmark, FaLocationDot , FaCheck , FaTruck } from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import lock from "@/assets/cart/lock.png";
import { IoIosInformationCircle } from "react-icons/io";
import FeaturesBar from '@/components/featuresBar/FeaturesBar';
import { CartContext } from '@/provider/cart-provider';
import { cartI, cartProductI, ShippingDataI } from '@/types/cart.type';
import { cashCheckout, getCart, sessionCheckout } from '@/actions/cart.action';
import Link from 'next/link';
import { useRouter } from "next/navigation"
import { Controller,useForm } from "react-hook-form"
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';

export default function checkout() {
        const {cartId,getCartData,totalCartPrice,noOfCartItems} = useContext(CartContext);
        const[products,setProducts] = useState<cartProductI[]>([]);
        const[isLoading,setIsLoading] = useState(false);
        const[paymentMethod,setPaymentMethod] = useState("cash");
        const router = useRouter();
        async function getAllProductCart(){
          try {
          const response : cartI = await getCart();
            setProducts(response.data.products);  
          } catch (error) {
            console.log(error);
          }
        }
          useEffect(()=>{
            getAllProductCart();
            },[]);

  const form =  useForm({
      defaultValues:{
      shippingAddress: {
      details: "Street name, building number, floor, apartment...",
      phone: "01xxxxxxxxx",
      city: "e.g. Cairo, Alexandria, Giza",
      postalCode: " "
        }  
      }
      })


       async function handleCheckout(data:ShippingDataI){
              try {
                  setIsLoading(true);
                  if(paymentMethod === 'cash'){
                   const response = await cashCheckout(data,cartId);
                  if(response.status === "success"){
                  toast.success(response.message);
                  getCartData();
                  router.push("/products");
                  }
                  }else{
                  const response = await sessionCheckout(data,cartId);
                  console.log(response);
                  router.push(response.session.url);
                  } 
              } catch (error) {
                 toast.error((error as Error).message);
              }finally{
                setIsLoading(false);  
              }
      }

      function getPaymentMethod(payMethod:string){
       setPaymentMethod(payMethod);
      }
      console.log(paymentMethod);
  return (
    <>
    
    <div>
      <form onSubmit={form.handleSubmit(handleCheckout)}>
        <div className='pt-8 pb-8 bg-linear-to-b from-[#F9FAFB] to-[#FFFFFF] xl:px-48'>
          <div className="container px-4">
            <div className="mb-8">
              <nav className="flex items-center gap-2 mb-6">
              <a className="font-medium text-[14px] leading-5 align-middle text-[#6A7282]">Home</a>
              <span className='font-medium text-[14px] leading-5 align-middletext-[#D1D5DC]'>
                 /
              </span>
                <a className="font-medium text-[14px] leading-5 align-middle text-[#6A7282]">Cart</a>
                 <span className='font-medium text-[14px] leading-5 align-middletext-[#D1D5DC]'>
                 /
              </span>
              <span className="font-medium text-[14px] leading-5 align-middle text-[#101828]">Checkout</span>
              </nav>
              <div className="flex xl:flex-row md:flex-row flex-col items-center xl:justify-between md:justify-between">
                <div>
                    <h1 className="flex items-center  gap-3 mb-2  font-bold text-[30px] leading-9 align-middle text-[#101828]">
                        <span className="flex items-center justify-center w-12 h-12 rounded-[12px] bg-linear-to-br from-[#16A34A] to-[#15803D] shadow-[0px_4px_6px_-4px_#16A34A33,0px_10px_15px_-3px_#16A34A33]">
                            <Image src={paper_note} alt='paper_note' className="w-[22.5px] h-7.5"/>
                        </span>
                        Complete Your Order
                    </h1>
                    <p className="font-medium text-[16px] leading-6 align-middle text-[#6A7282]">Review your items and complete your purchase</p>
                </div>
                <Link href='/cart' className="flex items-center gap-2 font-medium text-[16px] leading-6 align-middle text-[#16A34A]">
                    <GoArrowLeft className='w-5 h-4 text-[#16A34A]' />
                    Back to Cart
                </Link>
              </div>
            </div>

            <div className="grid xl:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-8">
                <div className="xl:col-span-2 md:col-span-2 col-span-1">
                    <div className="space-y-6">
                        <div className="rounded-[16px] bg-white border border-t border-t-[#F3F4F6] shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A]">
                          <div className="px-6 py-4 gap-1 bg-linear-to-r from-[#16A34A] to-[#15803D] rounded-tl-lg rounded-tr-lg">
                             <h2 className="flex items-center gap-2 font-bold text-[18px] leading-7 align-middle text-white">
                               <TiHomeOutline className="w-[22.5px] h-4.5 text-white"/>
                               Shipping Address
                             </h2>
                             <p className="font-medium text-[14px] leading-5 align-middle text-[#DCFCE7]">Where should we deliver your order?</p>
                          </div>

                          <div className="p-6">
                           
                         <div className="pb-5 border-b border-b-[#F3F4F6]">
                              <div className="flex items-center gap-2">
                                <FaBookmark className="w-[17.5px] h-3.5 text-[#22C55E]"/>
                                <span className="font-semibold text-[16px] leading-6 align-middle text-[#1E2939]">Saved Addresses</span>
                              </div>
                              
                              <div className="space-y-3">
                               <p className="font-medium text-[14px] leading-5 align-middle text-[#4A5565]">Select a saved address or enter a new one below</p>
                              <div className="w-full rounded-[12px] border-2 xl:p-4 md:p-4 p-2 border-t-2 border-t-[#E5E7EB]">
                                <div className="flex items-center justify-center xl:gap-3 md:gap-3 gap-2">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-[#F3F4F6]">
                                      <FaLocationDot className="w-5 h-4 text-[#6A7282]"/>
                                    </div>
                                    <div className="flex-1">
                                    <p className="font-semibold text-[16px] leading-6 align-middle text-[#101828]">Sadat City</p>
                                    <p className="font-medium text-[14px] leading-5 align-middle text-[#4A5565]">Sadat City</p>
                                    <div className="flex items-center xl:gap-4 md:gap-4 gap-3">
                                    <span className="flex items-center  gap-1 font-medium text-[12px] leading-4 align-middle">
                                     <FaPhoneAlt className='w-[12.5px] h-2.5 text-[#6A7282]' />
                                     01097514862
                                    </span>
                                    <span className="flex items-center gap-1 font-medium text-[12px] leading-4 align-middle whitespace-nowrap">
                                     <Image src={fax} alt='fax' className='w-[12.5px] h-2.5 text-[#6A7282]' />
                                     Sadat City
                                    </span>
                                </div>
                                </div>
                                </div> 
                              </div>
                             
                                <div className="w-full flex items-center xl:gap-3 md:gap-3 gap-2 rounded-[12px] border-2 border-dashed p-4  border-[#22C55E] bg-[#F0FDF4]">
                                   <div className='flex items-center justify-center w-10 h-10 rounded-lg bg-[#22C55E]'>
                                    <FaPlus className="w-5 h-4 text-white" />
                                   </div>
                                   <div>
                                        <p className='font-semibold text-[16px] leading-6 align-middle text-[#15803D whitespace-nowrap'>Use a different address</p>
                                    <p className='font-medium text-[12px] leading-4 align-middle text-[#6A7282]'>Enter a new shipping address manually</p>
                                   </div>
                                </div>
                              </div>
                          </div>
                          
                           <div className="mt-5 flex items-center gap-3 rounded-[12px] border p-4 border-t border-t-[#DCFCE7] bg-[#F0FDF4]">
                            <div className="flex items-center justify-center w-8 h-8 bg-[#DCFCE7] rounded-full">
                             <IoIosInformationCircle className="w-[17.5px] h-3.5 text-[#155DFC]" />
                            </div>
                            <div>
                             <p className="font-medium text-[14px] leading-5 align-middle text-[#193CB8]">Delivery Information</p>
                             <p className="font-medium text-[12px] leading-4 align-middle text-[#155DFC]">Please ensure your address is accurate for smooth delivery</p>
                            </div>
                           </div>
                          <div className="mt-5">
                            <label className='block font-semibold text-[14px] leading-5 align-middle'>City <span className='text-red-500'>*</span></label>
                          <div className="relative">
                            <input {...form.register("shippingAddress.city")} placeholder='e.g. Cairo, Alexandria, Giza' className="w-full pt-3.75 pr-4 pb-4 pl-14 rounded-[12px] border-2 border-t-2 border-t-[#E5E7EB] font-medium text-[16px] leading-none align-middle" />
                         <div className="absolute top-3 bottom-3 left-4 flex items-center justify-center w-8 h-8 rounded-lg bg-[#F3F4F6]">
                           <Image src={fax2} alt='fax2' />
                         </div>
                          </div>
                          </div>
                          <div className="mt-5">
                          <label className='block font-semibold text-[14px] leading-5 align-middle'>Street Address <span className='text-red-500'>*</span></label>
                            <div className="relative">
                                <textarea {...form.register("shippingAddress.details")} className='w-full pt-3.5 pr-4 pb-15.5 pl-14 rounded-[12px] border-t-2 border-t-[#E5E7EB] border-2 font-medium text-[16px] leading-6 align-middle' placeholder='Street name, building number, floor, apartment...'>
                                </textarea>
                                <div className="flex items-center justify-center absolute top-4 left-4 bottom-14 w-8 h-8 rounded-lg bg-[#F3F4F6]">
                                  <FaLocationDot className="w-[17.5px] h-3.5 text-[#6A7282]" />
                                </div>
                            </div>
                          </div>
                          <div className="mt-5">
                        <label className='block font-semibold text-[14px] leading-5 align-middle'>Phone Number <span className='text-red-500'>*</span></label>
                          <div className="relative">
                            <input {...form.register("shippingAddress.phone")} placeholder='01xxxxxxxxx'  className="w-full pt-3.75 pr-4 pb-4 pl-14 rounded-[12px] border-2 border-t-2 border-t-[#E5E7EB]" />
                          <div className="flex items-center justify-center absolute left-4 top-3 bottom-3 w-8 h-8 rounded-lg bg-[#F3F4F6]">
                           <FaPhoneAlt className='w-[17.5px] h-3.5 text-[#6A7282]' />
                          </div>
                          <div className="absolute right-[15.08px] top-5 bottom-5 font-medium text-[12px] leading-4 align-middle text-[#99A1AF]">
                            Egyptian numbers only
                          </div>
                          </div>
                          </div>
                          </div>

                        </div>
                        
                        <div className="w-full rounded-[16px] bg-white border border-t border-t-[#F3F4F6] shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A]">
                        <div className="w-full px-6 py-4 gap-1 bg-linear-to-r from-[#16A34A] to-[#15803D] rounded-tl-lg rounded-tr-lg">
                        <h2 className='flex items-center gap-2 font-bold text-[18px] leading-7 align-middle text-white'>
                         <Image src={visa} alt='visa' />
                         Payment Method
                        </h2>
                        <p className="font-medium text-[14px] leading-5 align-middle text-[#DCFCE7]">Choose how you'd like to pay</p>
                        </div>
                        
                        <div className="p-6">
                         <div onClick={()=>getPaymentMethod("cash")} className={`mb-4 flex items-center justify-between w-full gap-4 rounded-[12px] p-5 bg-linear-to-r from-[#F0FDF4] to-[#F3F4F6] border-2   shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A] cursor-pointer ${paymentMethod === 'cash' ? 'border-[#22C55E]' :''}`}>
                          <div className={`flex items-center justify-center w-14 h-14 rounded-[12px] ${paymentMethod === 'cash' ?'bg-linear-to-br from-[#22C55E] to-[#16A34A]' :'bg-[#F3F4F6]'}` }>
                         <Image src={cash} alt='cash'/>
                         </div>
                         <div className='flex-1'>
                        <h3 className="font-bold text-[16px] leading-6 align-middle text-[#15803D]">
                            Cash on Delivery
                        </h3>
                        <p className="font-medium text-[14px] leading-5 align-middle text-[#6A7282]">Pay when your order arrives at your doorstep</p>
                         </div>
                           <div className={`flex items-center justify-center w-7 h-7 rounded-full bg-[#16A34A] ${paymentMethod === 'cash' ? 'bg-[#16A34A]' :'bg-[#E5E7EB]'}`}>
                           {paymentMethod === 'cash' ? <FaCheck className="w-3.75 h-3 text-white" /> : ''} 
                           </div>
                         </div>
                         
                         <div onClick={()=>getPaymentMethod("card")} className={`mb-4 flex items-center justify-between w-full gap-4 rounded-[12px] border-2 p-5  cursor-pointer ${paymentMethod === 'card' ? 'border-[#22C55E]' :'border-t-2 border-t-[#E5E7EB]'}`}>
                          <div className={`flex items-center justify-center w-14 h-14 rounded-[12px] ${paymentMethod === 'card' ? 'bg-[#16A34A]' :'bg-[#F3F4F6]'}`}>
                           
                            <Image src={visa_card} alt='visa_card' />
                          </div>
                          <div className='flex-1'>
                            <h3 className="font-bold text-[16px] leading-6 align-middle text-[#101828]">
                                Pay Online
                            </h3>
                            <p className="font-medium text-[14px] leading-5 align-middle text-[#6A7282]">Secure payment with Credit/Debit Card via Stripe</p>
                           <div className="flex  items-center gap-2">    
                              <Image  src={visa_img} alt='visa_img' className='w-4 h-4'/>
                              <Image  src={mastercard} alt='mastercard' className='w-4 h-4'/>
                              <Image  src={amex} alt='amex' className='w-4 h-4'/>
                          </div>
                          </div>
                          <div className={`flex items-center justify-center w-7 h-7 rounded-full border-2 ${paymentMethod === 'card' ? 'bg-[#16A34A]' :'bg-[#E5E7EB]'}` }>
                            {paymentMethod === 'card' ? <FaCheck className="w-3.75 h-3 text-white" /> : ''} 
                          </div>
                         </div>
                          
                         <div className="flex items-center gap-3  w-full  rounded-[12px]  p-4 bg-linear-to-r from-[#F0FDF4] to-[#F3F4F6] border border-[#DCFCE7]">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#DCFCE7]">
                             <FaShieldAlt className="w-5 h-4 text-[#00A63E]" />
                            </div>
                            <div>
                            <p className="font-medium text-[14px] leading-5 align-middle text-[#016630]">Secure & Encrypted</p>
                            <p className="font-medium text-[12px] leading-4 align-middle text-[#00A63E]">Your payment info is protected with 256-bit SSL encryption</p>
                            </div>
                           
                         </div>
                        </div>
                        </div>
                    </div>

                </div>

                <div className="col-span-1">
                <div className="rounded-[16px] border border-t border-t-[#F3F4F6] shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A] bg-white">
                 <div className="px-6 py-4 gap-1 bg-linear-to-r from-[#16A34A] to-[#15803D] rounded-tl-lg rounded-tr-lg">
                 <h2 className="flex items-center gap-2 font-bold text-[18px] leading-7 align-middle text-white">
                  <Image src={lock} alt='lock'/>
                  Order Summary
                 </h2>
                 <p className="font-medium text-[14px] leading-5 align-middle tex-[#DCFCE7]">{noOfCartItems} items</p>
                 </div>

                 <div className='p-5'>
                    <div className='space-y-3 overflow-auto h-[200px]'>
                     
                        {products.map((product) => (
                        <div key={product._id} className="flex items-center justify-between  gap-3 rounded-[12px] p-3 bg-[#F9FAFB]">
                        <div className="w-14 h-14 rounded-lg border p-1 border-t border-t-[#F3F4F6]">
                         <Image  src={product.product.imageCover} width={1000} height={1000} alt='jacket' className="w-full h-full" />
                        </div>
                        <div className="flex-1">
                        <p className="font-medium text-[14px] leading-5 align-middle text-[#101828]">
                           {product.product.title.length > 61 ? product.product.title.slice(0, 40) + "...": product.product.title}
                        </p>
                        <p className="font-medium text-[12px] leading-4 align-middle text-[#6A7282]">{product.count} × {product.price} EGP</p>
                        </div>
                        <p className='font-bold text-[14px] leading-5 align-middle text-[#101828]'>{Math.round(product.count * product.price)}</p>
                        </div>
                         ))}
                         
                    </div>
                      
                      <hr className="mt-5 w-full h-px left-5 border-t border-t-[#F3F4F6]"/>
                    
                      <div className="mt-4 space-y-3">
                    
                       <div className="flex items-center justify-between">
                        <span className="font-medium text-[16px] leading-6 align-middle text-[#4A5565]">Subtotal</span>
                        <span className="font-medium text-[16px] leading-6 align-middle">{totalCartPrice} EGP</span>
                       </div>

                       <div className="flex items-center justify-between">
                       <span className="flex items-center pb-px gap-2 font-medium text-[16px] leading-6 align-middle text-[#4A5565]">
                       <FaTruck className="w-5 h-4 text-[#99A1AF]"/>
                       Shipping
                       </span>
                       <span className="font-semibold text-[16px] leading-6 align-middle text-[#00A63E]">FREE</span>
                       </div>
                      <hr className="w-full h-px border-t border-t-[#F3F4F6]" />
                      <div className="flex items-center justify-between">
                       <span className="font-bold text-[18px] leading-7 align-middle text-[#101828]">Total</span>
                       <div className="text-right font-bold text-[16px] leading-6 align-middle text-[#16A34A]">
                        <span className="font-medium text-[14px] leading-5 text-right align-middle mt-[21.5]">
                            EGP
                        </span>
                        {totalCartPrice} 
                       </div>
                      </div>
                      </div>
                     
                      <Button disabled ={isLoading} type='submit' className="mt-5.75 w-full flex items-center justify-center gap-2 left-5 py-4  rounded-[12px]  bg-linear-to-r from-[#16A34A] to-[#15803D] font-bold text-[16px] leading-6 text-center align-middle text-white cursor-pointer">
                     {isLoading ? <Spinner/> : <Image src={closed_box} alt='closed_box' />}    
                        Place Order
                      </Button>
                   
                    <div className="mt-4 flex items-center xl:justify-center xl:gap-4 md:gap-1 gap-4  xl:left-5 py-3  border-t border-t-[#F3F4F6]">
                      <div className="flex items-center gap-1.5">
                        <FaShieldAlt className=" text-[#00C950]" />
                        <span className="font-medium text-[12px] leading-4 align-middle text-[#6A7282]">Secure</span>
                      </div>
                      <div className="w-px h-4 bg-[#E5E7EB]"></div>
                      <div className="flex items-center gap-1.5">
                        <FaTruck className=" text-[#2B7FFF]" />
                        <span className="font-medium text-[12px] leading-4 align-middle text-[#6A7282]">Fast Delivery</span>
                      </div>
                       <div className="w-px h-4 bg-[#E5E7EB]"></div>

                       <div className="flex items-center gap-1.5"> 
                        <Image src={orange_box} alt='orange_box'   />
                        <span className="font-medium text-[12px] leading-4 align-middle text-[#6A7282]">Easy Returns</span>
                      </div>

                    </div>
                 </div>
                </div>
                </div>
            </div>
          </div>
        </div>
       </form>
    </div>
     <FeaturesBar variant=""/>
    </>
  )
}