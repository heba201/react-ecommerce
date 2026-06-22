import React from 'react'
import { IoIosSearch } from "react-icons/io";
export default function NoProductsFound({clearFilters}:{clearFilters :() => void}) {
  return (
    <div className="grid grid-cols-1 md:gap-4  xl:gap-4 gap-2 mb-6">
    <div className="col-span-1 text-center py-20">
      {/* Icon */}
      <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-5">
       <IoIosSearch  className="w-8 h-8 text-gray-400" />
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">
        No Products Found
      </h3>
      <p className="text-gray-500 mb-6">
        Try adjusting your search or filters to find what you're looking for.
      </p>
      <button
        onClick={() => {clearFilters()}}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors cursor-pointer"
      >
        Clear Filters
      </button>
    </div>
    </div>
  );
  
}
