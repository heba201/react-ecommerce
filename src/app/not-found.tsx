import React from 'react'
import { FaCartShopping , FaCarrot } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";
import { FaAppleAlt , FaSeedling , FaLemon } from "react-icons/fa";


export default function NotFound() {
  return (
   <div className="min-h-screen bg-[#fafbfc] flex items-center justify-center px-4 py-16 relative overflow-hidden">

     
      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute top-[10%] left-[5%] text-green-200 text-4xl animate-[float_6s_ease-in-out_infinite]">
           <FaAppleAlt />
        </div>

        <div className="absolute top-[20%] right-[10%] text-green-200 text-3xl animate-[float_8s_ease-in-out_infinite_1s]">
          <FaCarrot />
        </div>

        <div className="absolute bottom-[25%] left-[8%] text-green-200 text-3xl animate-[float_7s_ease-in-out_infinite_0.5s]">
          <FaLemon />
        </div>

        <div className="absolute bottom-[15%] right-[15%] text-green-200 text-4xl animate-[float_9s_ease-in-out_infinite_2s]">
          <FaSeedling />
        </div>

      </div>

    
      <div className="relative z-10 max-w-xl w-full">

        {/* Card */}
        <div className="flex justify-center mb-10">
          <div className="relative w-72 h-60">

            <div className="absolute inset-0 bg-green-200/40 blur-2xl rounded-[32px]" />

            <div className="inset-x-0 top-4 mx-auto w-60 h-44 bg-white rounded-3xl shadow-xl border border-gray-100 flex items-center justify-center relative overflow-hidden">

              <div className="absolute inset-0 bg-linear-to-br from-green-50 via-transparent to-green-100/40" />

               <FaCartShopping  className="w-24 h-24 text-green-600"/>

            </div>

            <div className="absolute -top-2 -right-2">
              <div className="relative">
                <div className="absolute -inset-2 bg-white rounded-full shadow-lg" />
                <div className="relative w-20 h-20 rounded-full bg-green-600 flex items-center justify-center text-white font-black text-2xl">
                  404
                </div>
              </div>
            </div>

          </div>
        </div>

       
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-4">
            Oops! Nothing Here
          </h1>

          <p className="text-gray-500 text-lg max-w-md mx-auto">
            Looks like this page went out of stock!
          </p>
        </div>

      
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">

          <a
            href="/"
            className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-bold shadow-lg hover:-translate-y-1 transition-all"
          >
           <AiFillHome /> Go to Homepage
          </a>

          <button className="flex items-center justify-center gap-3 bg-white border border-gray-200 text-gray-700 px-8 py-4 rounded-2xl font-bold shadow hover:-translate-y-1 transition">
            ← Go Back
          </button>

        </div>
 
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 text-center">
          <p className="text-sm text-gray-400 uppercase mb-4">
            Popular Destinations
          </p>

          <div className="flex flex-wrap gap-3 justify-center">

            <a className="px-5 py-2 bg-green-50 text-green-700 rounded-xl font-semibold hover:bg-green-100" href="/products">
              All Products
            </a>

            <a className="px-5 py-2 bg-gray-100 rounded-xl font-semibold hover:bg-gray-200" href="/categories">
              Categories
            </a>

            <a className="px-5 py-2 bg-gray-100 rounded-xl font-semibold hover:bg-gray-200" href="#">
              Today's Deals
            </a>

            <a className="px-5 py-2 bg-gray-100 rounded-xl font-semibold hover:bg-gray-200" href="#">
              Contact
            </a>

          </div>
        </div>

      </div>
    </div> 
  )
}
