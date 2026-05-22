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

  const handlePrevious = () => {
    setSelectedImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setSelectedImage((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

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
    <div className="product-images h-[776px]  w-[26%] bg-blue-500">
      {/* Main Carousel */}
       
      <Carousel className="shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A] bg-white rounded-xl">
        <CarouselContent
          className="transition-transform duration-300"
          style={{
            transform: `translateX(-${selectedImage * 100}%)`,
          }}
        >
            <CarouselItem >
              
                <Image
                  src={woman_shawl}
                  alt='woman_shawl'
                  className="aspect-square w-[344px] h-[469.08px] max-h-[1120px] object-cover"
                />
               
            </CarouselItem>
        </CarouselContent>

      </Carousel>
 
      {/* Thumbnails */}
      <div>
      <div
        ref={thumbnailsRef}
        className="flex scroll-smooth scrollbar-hide h-[133.45px] top-[5px] gap-0.5"
      >
        {images.map((image, index) => (
            <div className="border-t-4 border-t-black w-[100px] h-[133.45px] border">
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`cursor-pointer w-full h-full shrink-0 overflow-hidden border-2 transition-all duration-300 ${
              selectedImage === index
                ? "border border-[rgb(51,122,118)]"
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
    </div>
  )
}
