"use client";
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ProductCard from './ProductCard';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef } from "react";
import { MdChevronRight , MdChevronLeft } from "react-icons/md";
export default function ProductsSwipper() {
    const swiperRef = useRef<any>(null);
  return (
     <>
     {/* <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[12px]">
                    <div className='w-[6px] h-[32px] rounded-full bg-gradient-to-b from-[#00BC7D] to-[#007A55]'></div>
                      <h2 className='font-bold text-[20px] leading-[24px] align-middle text-[#1E2939]'>You May Also <span className='text-[#16A34A]'>Like</span></h2>
                  </div>
                  <div className="flex items-center">
                    <div className="pr-[8px]">
                    <button onClick={() => swiperRef.current?.slidePrev()} className="w-10 h-10 rounded-full bg-[#F3F4F6] flex items-center justify-center cursor-pointer hover:bg-[#F0FDF4] transition">
                      <MdChevronLeft className='w-[20px] h-[16px] text-[#4A5565]' />
                    </button>
                    </div>
                     <button  onClick={() => swiperRef.current?.slideNext()} className="w-10 h-10 rounded-full bg-[#F3F4F6] flex items-center justify-center cursor-pointer hover:bg-[#F0FDF4] transition">
                      <MdChevronRight  className='w-[20px] h-[16px] text-[#4A5565]' />
                    </button>
                  </div>
                 </div>
                 <div className="swiper mt-6">
                <div className="swiper-wrapper">
                 <Swiper
        modules={[Navigation, Pagination]}
       navigation
       pagination={{ clickable: true }}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      spaceBetween={16}
       breakpoints={{
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 4,
    },
    1280: {
      slidesPerView: 5,
    },
  }}
        >
        {Array.from({ length: 10 }).map((_, index) => (
            <SwiperSlide key={index}>
            <ProductCard variant="product_details" />
            </SwiperSlide>
        ))}
        </Swiper>
        </div>
        </div> */}
        </>
  )
}
