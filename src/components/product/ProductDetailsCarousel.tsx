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
    <div className="w-full max-w-[500px] space-y-4">
      {/* Main Carousel */}
      <Carousel className="w-full">
        <CarouselContent
          className="transition-transform duration-300"
          style={{
            transform: `translateX(-${selectedImage * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="overflow-hidden rounded-xl bg-white">
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
          onClick={handlePrevious}
        />

        <CarouselNext
          className="right-4"
          onClick={handleNext}
        />
      </Carousel>

      {/* Thumbnails */}
      <div
        ref={thumbnailsRef}
        className="flex gap-3 overflow-x-auto scroll-smooth scrollbar-hide"
      >
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`w-20 h-20 shrink-0 overflow-hidden rounded-xl border-2 transition-all duration-300 ${
              selectedImage === index
                ? "border-black scale-105"
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
