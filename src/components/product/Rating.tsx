import React from 'react'
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

export default function Rating({rating}:{rating:number }) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  return (
   <>
      {[...Array(5)].map((_, i) => {
        if (i < fullStars) {
          return <FaStar key={i} />;
        } else if (i === fullStars && hasHalf) {
          return <FaStarHalfAlt key={i} />;
        } else {
          return <FaRegStar key={i} />;
        }
      })}
    </>
  )
}
