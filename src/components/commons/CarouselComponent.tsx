"use client"
import React, { useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'
import Slide_1 from "@/assets/home/Slide_1.jpg";

export default function CarouselComponent() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
     <div className="relative w-full bg-blue-500 h-100 mt-0 ">
    <Carousel className="w-full relative">
      <CarouselContent  className="h-100" >
        {Array.from({ length: 3 }).map((_, index) => (
          <CarouselItem key={index} className="w-full h-100">
            <div className="w-full">
              <Image src={Slide_1} alt='Slide-1'   className="w-full h-full object-cover"/>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden xl:block md:block absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1),0_10px_15px_-3px_rgba(0,0,0,0.1)] text-[#00C950]" />
      <CarouselNext className="hidden xl:block md:block absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-[0_4px_6px_-4px_rgba(0,0,0,0.1),0_10px_15px_-3px_rgba(0,0,0,0.1)] text-[#00C950] " />
    </Carousel>

     {/* Pagination */}
      <div className="flex items-center justify-center gap-2 absolute bottom-7 left-1/2 -translate-x-1/2 z-20">
       {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`transition-all duration-300 cursor-pointer ${
              activeIndex === index
                ? "w-8 h-3 rounded-md bg-white"
                : "w-3 h-3 rounded-full bg-white/50"
            }`}
          />
        ))}
      </div>


       {/*  Overlay */}
  <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,201,80,0.9)_0%,rgba(5,223,114,0.5)_100%)] flex items-center justify-center">

    <div className="absolute top-21 xl:left-31.25 pt-8.5 xl:pr-8 md:pr-8 pb-[33.42px] xl:pl-21.5 gap-4 md:left-[100.25px]  pl-[32px] pr-[32px] left-0">

      <h2 className="w-89 max-w-[384px] h-18 font-bold text-[30px] leading-9 tracking-normal align-middle text-white ">
       Fresh Products Delivered to your Door
      </h2>
      <p className="text-white h-6 font-medium text-base leading-snug tracking-normal align-middle mt-2">
       Get 20% off your first order
      </p>

       <div className="flex items-center w-215 h-[44.58px] pt-[0.58px] gap-2 opacity-[0.9783] mt-4">

        <a
          href="#"
          className="flex items-center justify-center w-31.75 h-11 py-2 px-6 rounded-lg border-2 text-[#00C950] bg-white border-t-2 border-t-[#FFFFFF80] font-semibold text-base leading-snug tracking-normal align-middle"
        >
          Shop Now
        </a>

        <a
          href="#"
          className="flex items-center justify-center w-33.5 h-11 py-2 px-6 rounded-lg border-2 border-t-2 border-white/50 font-semibold text-base leading-snug tracking-normal align-middle text-[#FFFFFF]"
        >
          View Deals
        </a>

      </div>

      </div>


     

    

  </div>

    </div>
  )
}
