"use client"
import React from 'react'
import { useState , useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import woman_shawl from "@/assets/home/woman_shawl.png";
import Image from 'next/image';
export default function ProductDetailsCarousel() {
         const [selectedImage, setSelectedImage] = useState(0); 
   const images = [
    "https://ecommerce.routemisr.com/Route-Academy-products/1680403156555-3.jpeg",
    "https://ecommerce.routemisr.com/Route-Academy-products/1680403156555-2.jpeg",
    "https://ecommerce.routemisr.com/Route-Academy-products/1680403156554-1.jpeg",
    "https://ecommerce.routemisr.com/Route-Academy-products/1680403156556-4.jpeg",
  ];
  
  const thumbnailsRef = useRef<HTMLDivElement | null>(null);

  // Auto scroll thumbnails
  useEffect(() => {
    if (!thumbnailsRef.current) return;

    const activeThumbnail =
      thumbnailsRef.current.children[selectedImage];

    activeThumbnail?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [selectedImage]);
  
  return (
    <div className="product-images w-[26%]">
      {/* Main Carousel */}
      <Carousel className="bg-white w-full  shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A] rounded-xl p-4">
        <CarouselContent
          className="transition-transform duration-300"
          style={{
            transform: `translateX(-${selectedImage * 100}%)`,
          }}
        >
             {images.map((image, index) => (
            <CarouselItem >
              
                <Image
                  src={image}
                  alt='product-image'
                  className="w-full h-[469.1px] object-cover"
                />
               
            </CarouselItem>
             ))}
        </CarouselContent>

      {/* Thumbnails */}
      <div className='overflow-hidden'>
      <div
        ref={thumbnailsRef}
        className="flex items-center scroll-smooth scrollbar-hide w-[344px] h-[133.45px] mt-[5px] gap-0.5 overflow-hidden"
      >
        {images.map((image, index) => (
            <div className="h-full">
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`cursor-pointer w-full h-full shrink-0 overflow-hidden transition-all duration-300 ${
              selectedImage === index
                ? "border-4 border-[#6A7282]"
                : ""
            }`}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover overflow-hidden"
            />
          </button>
          </div>
        ))}
      </div>
    </div>
      </Carousel>   
    </div>
  )
}
