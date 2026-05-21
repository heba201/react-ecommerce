import React from 'react'
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function ProductDetailsCarousel() {
         const [selectedImage, setSelectedImage] = useState(0); 
   const images = [
    "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/shoes/product-view/1.jpeg",
    "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/shoes/product-view/2.jpeg",
    "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/shoes/product-view/3.jpeg",
    "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/shoes/product-view/4.jpeg",
    "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/shoes/product-view/5.jpeg",
    "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/shoes/product-view/6.jpeg",
  ];
  
  return (
     <div className="w-full max-w-[376px] space-y-4">
      <Carousel className="w-full">
        <CarouselContent
          style={{ transform: `translateX(-${selectedImage * 100}%)` }}
          className="transition-transform duration-300"
        >
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="overflow-hidden rounded-xl">
                <img
                  src={image}
                  alt={`Product ${index + 1}`}
                  className="aspect-square w-full object-cover"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious
          className="left-4"
          onClick={() =>
            setSelectedImage((prev) =>
              prev === 0 ? images.length - 1 : prev - 1
            )
          }
        />

        <CarouselNext
          className="right-4"
          onClick={() =>
            setSelectedImage((prev) =>
              prev === images.length - 1 ? 0 : prev + 1
            )
          }
        />
      </Carousel>

      {/* Thumbnails */}
      <div className="flex gap-2 overflow-x-hidden scrollbar-hide">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`w-16 h-16 shrink-0 overflow-hidden rounded-xl border transition ${
              selectedImage === index
                ? "border-black"
                : "border-gray-200"
            }`}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
