import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ProductCard from './ProductCard';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function ProductsSwipper() {
  return (
   <Swiper
  modules={[Navigation, Pagination]}
  spaceBetween={16}
  slidesPerView={4}
  navigation
  pagination={{ clickable: true }}
  className="mt-6"
>
  {Array.from({ length: 10 }).map((_, index) => (
    <SwiperSlide key={index}>
      <ProductCard variant="product_details" />
    </SwiperSlide>
  ))}
</Swiper>
  )
}
