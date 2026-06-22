"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import box from "@/assets/product_detials/box.png";
import { FaStar } from "react-icons/fa6";
import { FaBolt , FaTruckFast , FaTruck , FaCheck } from "react-icons/fa6";
import { productI } from '@/types/producttype';
import { IoRefreshOutline } from "react-icons/io5";
import { IoShieldHalfOutline } from "react-icons/io5";
import { FaBoxOpen } from "react-icons/fa6";
import Rating from './Rating';


export default function ProductTabs({product}:{product:productI}) {

    const[showDetails,setShowDetails] =  useState(true);
    const[showReviews,setShowReviews] =  useState(false);
    const[showShipping,setShowShipping] =  useState(false);
    
    function handleShowDetails(){
      setShowDetails(true);
      setShowReviews(false);
      setShowShipping(false);
    }

    function handleShowReviews(){
      setShowDetails(false);
      setShowReviews(true);
      setShowShipping(false);
    }

    function handleShowShipping(){
      setShowDetails(false);
      setShowReviews(false);
      setShowShipping(true);
    }

     const reviews = product.reviews;
     const totalReviews = reviews.length;
     const fiveCount = reviews.filter(item => item.rating === 5).length;
     const fivePercentage = Math.round((fiveCount/totalReviews)*100) ;
     const fourCount = reviews.filter(item => item.rating === 4).length;
     const fourPercentage = Math.round((fourCount/totalReviews)*100) ;
     const threeCount = reviews.filter(item => item.rating === 3).length;
     const threePercentage = Math.round((threeCount/totalReviews)*100) ;
     const twoCount = reviews.filter(item => item.rating === 2).length;
     const twoPercentage = Math.round((twoCount/totalReviews)*100) ;
     const oneCount = reviews.filter(item => item.rating === 1).length;
     const onePercentage = Math.round((oneCount/totalReviews)*100) ;
     console.log(fourCount,fourPercentage,totalReviews,"four stars");
  return (
    <>
    
      <div className='mt-[56px] xl:pl-[24px] xl:pr-[24px] pl-4 pr-4 xl:w-[75%] md:w-[96%] w-[100%] relative xl:left-52 xl:right-52  left-4  right-4 pb-6 gap-6  bg-white rounded-lg shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A]'>
               <div className='border-b border-b-[#E5E7EB] xl:-mx-[24px] md:-mx-4'>
                   <div className="flex items-center">
                   
                    <button onClick={()=>handleShowDetails()} className={`flex items-center gap-[8px] px-6 py-4  ${showDetails ? 'border-b-2 border-b-[#16A34A] text-[#16A34A] bg-[#F0FDF480]':'text-[#4A5565]'}    font-medium text-[16px] leading-none text-center align-middle  cursor-pointer`}>
                     <FaBoxOpen />
                    Product Details
                    </button>

                    <button  onClick={()=>handleShowReviews()} className={`flex items-center gap-[8px] px-6 py-4  font-medium text-[16px] leading-none text-center align-middle cursor-pointer ${showReviews ? 'border-b-2 border-b-[#16A34A] text-[#16A34A] bg-[#F0FDF480]':'text-[#4A5565]'} `}>
                     <FaStar className='w-[17.5px] h-[14px]' />
                     Reviews ({product.ratingsQuantity})
                    </button>
  
                    <button onClick={()=>handleShowShipping()} className={`hidden xl:flex md:flex items-center gap-[8px] px-6 py-4  font-medium text-[16px] leading-none text-center align-middle cursor-pointer ${showShipping ? 'border-b-2 border-b-[#16A34A] text-[#16A34A] bg-[#F0FDF480]':'text-[#4A5565]'} `}>
                     <FaTruck  className='w-[17.5px] h-[14px]' />
                      Shipping & Returns
                    </button>

                   </div>
               </div>
               
               <div className='space-y-6'>
                {showDetails && <>
                <div className='p-6'>
                  <h3 className='font-semibold text-[18px] leading-[28px] text-[#101828]'>About this Product</h3>
                  <p className='font-medium text-[16px] leading-[26px] align-middle text-[#4A5565]'>Material Polyester Blend Colour Name Multicolour Department Women</p>
                 </div>
                <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-[24px] mt-[24px]">
                   <div className='col-span-1  bg-[#F9FAFB] p-4'>
                   <h4 className='font-medium text-[16px] leading-none align-middle text-[#101828]'>
                    Product Information
                   </h4>
                   <ul className='space-y-2 list-none mt-[12px]'>
                    <li>
                       <div className="flex items-center justify-between">
                     <span className='font-medium text-sm leading-5 align-middle text-[#6A7282]'>Category</span>
                     <span className='font-medium text-[14px] leading-[20px] align-middle text-[#101828]'>Women's Fashion</span>
                    </div>
                    </li>
                    
                    <li>
                       <div className="flex items-center justify-between">
                     <span className='font-medium text-sm leading-5 align-middle text-[#6A7282]'>Subcategory</span>
                     <span className='font-medium text-[14px] leading-[20px] align-middle text-[#101828]'>Women's Clothing</span>
                    </div>
                    </li>

                    <li>
                       <div className="flex items-center justify-between">
                     <span className='font-medium text-sm leading-5 align-middle text-[#6A7282]'>Brand</span>
                     <span className='font-medium text-[14px] leading-[20px] align-middle text-[#101828]'>DeFacto</span>
                    </div>
                    </li>

                    <li>
                       <div className="flex items-center justify-between">
                     <span className='font-medium text-sm leading-5 align-middle text-[#6A7282]'>Items Sold</span>
                     <span className='font-medium text-[14px] leading-[20px] align-middle text-[#101828]'>4.565875507206704e+305+ sold</span>
                    </div>
                    </li>

                   </ul>
                   </div>

                   <div className='col-span-1  bg-[#F9FAFB] p-4'>
                   <h4 className='font-medium text-[16px] leading-none align-middle text-[#101828]'>
                    Key Features
                   </h4>
                   <ul className='space-y-2 list-none mt-[12px]'>
                    <li>
                      <div className="flex items-center font-medium text-[14px] leading-[20px] align-middle text-[#4A5565]">
                       <FaCheck  className='w-[17.5px] h-[14px] text-[#16A34A] pr-[8px]'/>
                       Premium Quality Product
                      </div>
                    </li>

                    <li>
                      <div className="flex items-center font-medium text-[14px] leading-[20px] align-middle text-[#4A5565]">
                       <FaCheck  className='w-[17.5px] h-[14px] text-[#16A34A] pr-[8px]'/>
                       100% Authentic Guarantee
                      </div>
                    </li>

                    <li>
                      <div className="flex items-center font-medium text-[14px] leading-[20px] align-middle text-[#4A5565]">
                       <FaCheck  className='w-[17.5px] h-[14px] text-[#16A34A] pr-[8px]'/>
                       Fast & Secure Packaging
                      </div>
                    </li>

                      <li>
                      <div className="flex items-center font-medium text-[14px] leading-[20px] align-middle text-[#4A5565]">
                       <FaCheck  className='w-[17.5px] h-[14px] text-[#16A34A] pr-[8px]'/>
                      Quality Tested
                      </div>
                    </li>

                   </ul>
                   </div>

                 </div>
                </>
                }
                {showReviews && <>
                <div className='p-6'>
         <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
    
         <div className="text-center min-w-[120px]">
          <div className="text-5xl font-bold text-gray-900 mb-2">{product.ratingsAverage}</div>
          <div className="flex justify-center items-center gap-1 text-yellow-400">
            <Rating  rating={product.ratingsAverage}/> 
          </div>
          <p className="text-xs text-gray-500 mt-2">Based on {totalReviews} reviews</p>
        </div>

    <div className="flex-1 w-full space-y-2">  
      <div className="flex items-center gap-4 w-full bg-white p-2 rounded-lg">
      <div className="flex flex-col text-center text-sm font-medium text-gray-600 w-12 shrink-0 leading-tight">
        <span>5</span>
        <span className="text-xs text-gray-400">star</span>
      </div>
      <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden shadow-inner">
        <div className={`h-full bg-amber-400 rounded-full w-[${fivePercentage}%]`}></div>
      </div>
      <span className="text-sm font-semibold text-gray-500 w-10 text-right shrink-0">{fivePercentage}%</span>
    </div>

     <div className="flex items-center gap-4 w-full  bg-white p-2 rounded-lg">
        <div className="flex flex-col text-center text-sm font-medium text-gray-600 w-12 shrink-0 leading-tight">
          <span>4</span>
          <span className="text-xs text-gray-400">star</span>
        </div>
        <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden shadow-inner">
          <div className={`h-full bg-amber-400 rounded-full w-[${fourPercentage}%]`}></div>
        </div>
        <span className="text-sm font-semibold text-gray-500 w-10 text-right shrink-0">{fourPercentage}%</span>
      </div>

      <div className="flex items-center gap-4 w-full  bg-white p-2 rounded-lg">
        <div className="flex flex-col text-center text-sm font-medium text-gray-600 w-12 shrink-0 leading-tight">
          <span>3</span>
          <span className="text-xs text-gray-400">star</span>
        </div>
        <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden shadow-inner">
          <div className={`h-full bg-amber-400 rounded-full w-[${threePercentage}%]`}></div>
        </div>
        <span className="text-sm font-semibold text-gray-500 w-10 text-right shrink-0">{threePercentage}%</span>
      </div>
      <div className="flex items-center gap-4 w-full  bg-white p-2 rounded-lg">
      <div className="flex flex-col text-center text-sm font-medium text-gray-600 w-12 shrink-0 leading-tight">
        <span>2</span>
        <span className="text-xs text-gray-400">star</span>
      </div>
      <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden shadow-inner">
        <div className={`h-full bg-amber-400 rounded-full w-[${twoPercentage}%]`}></div>
      </div>
      <span className="text-sm font-semibold text-gray-500 w-10 text-right shrink-0">{twoPercentage}%</span>
    </div>

        <div className="flex items-center gap-4 w-full bg-white p-2 rounded-lg">
      <div className="flex flex-col text-center text-sm font-medium text-gray-600 w-12 shrink-0 leading-tight">
        <span>1</span>
        <span className="text-xs text-gray-400">star</span>
      </div>
      <div className="flex-1 h-2.5 bg-gray-100 rounded-full overflow-hidden shadow-inner">
        <div className={`h-full bg-amber-400 rounded-full w-[${onePercentage}%]`}></div>
      </div>
      <span className="text-sm font-semibold text-gray-500 w-10 text-right shrink-0">{onePercentage}%</span>
    </div>
    </div>
  </div>
  <div className="border-t border-gray-100 pt-6">
    <div className="text-center py-6 bg-gray-50/50 rounded-xl border border-dashed border-gray-200">
     <FaStar className="w-8 h-8 text-gray-300 mx-auto mb-2 fill-current"/>
      <p className="text-sm text-gray-500">Customer reviews will be displayed here.</p>
      <button className="mt-3 inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-green-600  hover:text-green-700 rounded-lg transition-colors duration-200">
       Write a Review
      </button>
    </div>
  </div>
   </div>
                </>}  
                {showShipping  && <>
                
        <div className='p-6'>      
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    
    
    <div className="bg-linear-to-br from-green-50 to-green-100 rounded-lg p-6 shadow-xs">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-12 w-12 bg-green-600 text-white rounded-full flex items-center justify-center">
         
          <FaTruck  className="h-6 w-6"/>
        </div>
        <h4 className="font-semibold text-gray-900 text-lg">Shipping Information</h4>
      </div>
      
      <ul className="space-y-3">
        <li className="flex items-start gap-2 text-sm text-gray-700">
           
          <FaCheck   className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
          <span>Free shipping on orders over $50</span>
        </li>
        <li className="flex items-start gap-2 text-sm text-gray-700">
           <FaCheck   className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
          <span>Standard delivery: 3-5 business days</span>
        
        </li>
        <li className="flex items-start gap-2 text-sm text-gray-700">
          
            <FaCheck   className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
          <span>Express delivery available (1-2 business days)</span>
        </li>
        <li className="flex items-start gap-2 text-sm text-gray-700">
          <FaCheck   className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
          <span>Track your order in real-time</span>
        </li>
      </ul>
    </div>

    
    <div className="bg-linear-to-br from-green-50 to-green-100 rounded-lg p-6 shadow-xs">
      <div className="flex items-center gap-3 mb-4">
        <div className="h-12 w-12 bg-green-600 text-white rounded-full flex items-center justify-center">
          
          <IoRefreshOutline className="h-6 w-6 scale-x-[-1]"/>
        </div>
        <h4 className="font-semibold text-gray-900 text-lg">Returns & Refunds</h4>
      </div>
      
      <ul className="space-y-3">
        <li className="flex items-start gap-2 text-sm text-gray-700">
          
           <FaCheck   className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
          <span>30-day hassle-free returns</span>
        </li>
        <li className="flex items-start gap-2 text-sm text-gray-700">
           <FaCheck   className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
           
          <span>Full refund or exchange available</span>
        </li>
        <li className="flex items-start gap-2 text-sm text-gray-700">
          <FaCheck   className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
          
          <span>Free return shipping on defective items</span>
        </li>
        <li className="flex items-start gap-2 text-sm text-gray-700">
          <FaCheck   className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
          <span>Easy online return process</span>
        </li>
      </ul>
    </div>
  </div>

 
  <div className="mt-5 bg-gray-50 rounded-lg p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 border border-gray-100">
    <div className="h-14 w-14 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center shrink-0">
    
      <IoShieldHalfOutline className="h-7 w-7"/>
    </div>
    <div className="text-center sm:text-left">
      <h4 className="font-semibold text-gray-900 mb-1 text-lg">Buyer Protection Guarantee</h4>
      <p className="text-sm text-gray-600 leading-relaxed">
     Get a full refund if your order doesn't arrive or isn't as described. We ensure your shopping experience is safe and secure.
      </p>
    </div>
  </div>
    </div>  
                </>}
               </div>
              </div>
              
  </>
   )
}
