"use client"
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Heart, ShoppingCart, UserRound } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { signOut, useSession } from 'next-auth/react'
import { CartContext } from '@/provider/cart-provider'
import { Spinner } from '../ui/spinner'
import shipping from "@/assets/navbar/shipping.png";
import Image from 'next/image';
import Topbar from './Topbar'
import fresh_cart from "@/assets/navbar/fresh_cart.png";
import search from "@/assets/navbar/search.png";
import arrow_down from "@/assets/navbar/arrow_down.png";
import support from "@/assets/navbar/support.png";
import heart from "@/assets/navbar/heart.png";
import cart from "@/assets/navbar/cart.png";
import contact_book from "@/assets/navbar/contact_book.png";
import { FaBars ,FaSignOutAlt } from "react-icons/fa";
import { IoIosClose , IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { IoCart } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { BiSupport } from "react-icons/bi";
import { categoryI } from '@/types/category.type'
import { getCategoriesFiltered } from '@/services/category.service'
import { FaChevronDown } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { FaRegUserCircle } from "react-icons/fa";
import { RiUserLine } from "react-icons/ri";
import { WishlistContext } from '@/provider/wishlist-provider'

export default function Navbar() {
  const {data:session , status} =  useSession();
  const {noOfCartItems,isLoading} = useContext(CartContext);
  const {noOfWishlistItems} = useContext(WishlistContext);
  const[open,setOpen] =useState(false);
  const[categories,setCategories] =useState<categoryI[]>([]);
  const [searchVal , setSearchVal] = useState(""); 
  const[openDropDown,setOpenDropDown] =useState(false);
  const router = useRouter();

  function handleLogout(){
    signOut({callbackUrl:"/login"})
  }
  async function getCategories(){
  
        try {
            const categName =["Electronics","Women's Fashion","Men's Fashion","Beauty & Health"];
            const response = await getCategoriesFiltered(categName);
            setCategories(response.data.data) ;  
           } catch (error) {
          }     
          }
          useEffect(()=>{
            getCategories();
          });
            
  const handleSubmit = (e :React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/products/search?q=${encodeURIComponent(searchVal)}`);
    setSearchVal("");
  };

  return (
   <>
     <Topbar/>
    <header className='bg-white sticky z-100 py-[20px] top-0  md:shadow-[0_1px_2px_-1px_rgba(0,0,0,0.1),0_1px_3px_0_rgba(0,0,0,0.1)]  xl:shadow-[0px_1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A]'>

<div className="px-6 xl:px-52 xl:pr-52 md:px-1 bg-white  md:w-full xl:w-full">

  <div className="flex items-center justify-between xl:gap-3 md:gap-0 gap-1">
    <a className='shrink-0'>
    <Image src={fresh_cart} alt='fresh-cart' className=''/>
    </a>

    <form onSubmit={handleSubmit} className="h-11.5 hidden xl:block md:block">
      <div className="relative h-11.5">
        <input  value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)} className='xl:w-2xl md:[542.84px] w-full px-12 py-[12px_13px] rounded-full border bg-[#F9FAFB]/50 border-t border-gray-200 font-font1 font-medium text-[14px] leading-none tracking-normal align-middle color-[#36415380]' placeholder='Search for products, brands and more...'/>
        <button type='submit' className="absolute w-9 h-9 rounded-full bg-[#16A34A] right-1 top-1 text-center cursor-pointer hover:bg-green-700 transition-colors">
          <Image src={search} alt='search' className="relative  w-3.5 h-3.5 left-[10.75px]"/>
        </button>
      </div>
    </form>
      <nav  className="h-10  items-center gap-6 hidden md:flex  xl:flex">
      <Link href='/'  className="h-6 font-medium text-base leading-snug tracking-normal align-middle tex-[#364153] hover:text-green-600  transition-colors">
      Home
      </Link>
      <Link  href='/products' className="h-6 font-medium text-base leading-snug tracking-normal align-middle tex-[#364153] hover:text-green-600  transition-colors">
      Shop
      </Link>

      <div className="relative h-10 flex items-center group">
      <button  className="flex items-center gap-0.5 hover:text-green-600  transition-colors">
      Categories
      {/* <Image src={arrow_down} alt='arrow-down' className='absolute w-[8.7529296875px] h-[5.0009765625px] top-[20.12px] left-[70.87px]' /> */}
       <FaChevronDown className="absolute  top-[17px] right-[-15px] text-[10px] transition-transform duration-200 group-hover:rotate-180" />
      </button>
       
      {/* Dropdown */}
      <div className="absolute left-0 top-full invisible pt-1 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 z-50">
        <div className="min-w-[200px] rounded-xl border border-gray-100 bg-white py-2 shadow-xl">
          <Link
            href="/categories"
            className="block px-4 py-2.5 text-gray-600 transition-colors hover:bg-green-50 hover:text-green-600"
          >
            All Categories
          </Link>
          {categories.map((category) => (
            <Link
              key={category._id}
              href={`/products?category=${category._id}&&category_name=${category.name}&&category_img=${category.image}`}
              className="block px-4 py-2.5 text-gray-600 transition-colors hover:bg-green-50 hover:text-green-600"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>


      </div>
      <Link href='/brands'  className="h-6 font-medium text-base leading-snug tracking-normal align-middle tex-[#364153] hover:text-green-600  transition-colors">
      Brands
      </Link>
      </nav>
      
        <a className="hidden xl:flex md:flex items-center h-[44.5px] gap-2 border-r border-r-[#E5E7EB] hover:opacity-80 transition-opacity" href="#">
        <div className='w-10 h-10 bg-[#F0FDF4] rounded-full flex items-center justify-center'>
        <Image src={support} alt='support' className='w-3.5 h-4'/>
        </div>

        <div className="h-8">
        <div className="w-14 h-4 font-medium text-xs leading-4 tracking-normal align-middle text-[#99A1AF]">
          Support
        </div>

        <div className='h-4 font-semibold text-xs leading-4 tracking-normal align-middle text-[#364153]'>
        24/7 Help
        </div>
        </div>
        </a>
        <Link href='/wishlist' className='relative hover:bg-gray-100 shrink-0  p-2 xl:p-2.5  md:p-2.5 rounded-full' >
        <Image
            src={heart}
            alt="heart"
            className="w-5 h-[17.49609375px]"
          />
         {noOfWishlistItems > 0 &&  <span className="absolute top-0.5 right-0.5 size-[18px] rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white">{noOfWishlistItems}</span>}
        </Link>
 
      <Link href='/cart' className="relative shrink-0 cursor-pointer  hover:bg-gray-100 transition-color xl:pt-2.5 md:pt-2.5 pt-2  pb-[14.5px] md:pr-2.5 md:pl-2.5 rounded-full xl:ml-[-18px]">
        <Image
          src={cart}
          alt="cart"
          className="w-[22.24453353881836px] h-[20.625px]"
        />
        {noOfCartItems > 0 && <span className="absolute top-0.5 right-0.5 size-[18px] rounded-full bg-green-600 text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white">{noOfCartItems}</span>}
      </Link>
 
     
         
      {session ? <>
      <div className="relative hidden xl:block md:block">
      <button onClick={() => setOpenDropDown(!openDropDown)}  className="relative p-2.5 rounded-full hover:bg-gray-100 transition-colors group cursor-pointer">
        <FaRegUserCircle className='text-xl w-6 h-6 text-gray-500 group-hover:text-green-600 transition-colors' />
      </button>  
      {openDropDown && (
        <div className="absolute right-3 top-full mt-2 w-64 bg-white border border-gray-100 rounded-2xl shadow-xl transition-all origin-top-right">
          <div className="p-4 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <FaRegUserCircle className='text-xl text-green-500' />
              </div>

              <div className="min-w-0">
                <p className="text-sm font-semibold text-gray-800 truncate">
                  {session.user?.name}
                </p>
                <p className="text-xs text-gray-400 truncate">
                 {session.user?.email}
                </p>
              </div>
            </div>
          </div>

          
          <div className="py-2">
            <a href='/user/profile' className="block px-4 py-2 text-gray-600 hover:text-primary-600 hover:bg-green-50 transition-colors">
              My Profile
            </a>

            <a className="block px-4 py-2 text-gray-600 hover:text-primary-600 hover:bg-green-50 transition-colors"   href="/allorders">
              My Orders
            </a>

            <a className="block px-4 py-2 text-gray-600 hover:text-primary-600 hover:bg-green-50 transition-colors" href="/wishlist">
              My Wishlist
            </a>

            <a className="block px-4 py-2 text-gray-600 hover:text-primary-600 hover:bg-green-50 transition-colors" href="/user/address">
              Addresses
            </a>

            <a className="block px-4 py-2 text-gray-600 hover:text-primary-600 hover:bg-green-50 transition-colors" href="/user/profile">
              Settings
            </a>
          </div>

          {/* Logout */}
          <div className="border-t border-gray-100 py-2">
            <button onClick={()=>handleLogout()} className="w-full text-left px-4 py-2 text-red-500 hover:bg-red-50 cursor-pointer">
              Sign Out
            </button>
          </div>
        </div>
      )}
  </div>
   
      </> : <>
     
       <Link href='/login' className="whitespace-nowrap hidden xl:flex md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-600 hover:bg-green-700 text-white text-sm font-semibold transition-colors shadow-sm shadow-green-600/20 cursor-pointer">
       
        <RiUserLine  className='w-4 h-4'/>
        Sign In
      </Link>
      </>}
      

      <div className="relative md:hidden">
      <button  onClick={() => setOpen(!open)} className='relative flex items-center justify-center rounded-full  bg-[#16A34A] w-[40px] h-[40px] mt-1'>
        <FaBars className='w-[14px] h-[12px] text-white'/>
      </button>

        {/* Sidebar */}
          <div
            className={`absolute top-[70px] right-0 w-[320px] bg-white z-50   shadow-[0px_25px_50px_-12px_#00000040] transition-all duration-300 overflow-hidden ${
              open
                ? "opacity-100 visible translate-y-0"
                : "opacity-0 invisible -translate-y-2"
            }`}
          >

            {/* Top */}
            <div className="w-full flex items-center justify-between border-b border-[#F3F4F6]  pt-[18px] pb-[18px] pr-[16px] pl-[16px]">
              <Image src={fresh_cart} alt='fresh_cart' />
              <button
                onClick={() => setOpen(false)}
                className="flex items-center justify-center w-[36px] h-[36px] rounded-full bg-[#F3F4F6]"
              >
              <IoIosClose className='text-[#4A5565] w-5 h-4' />
              </button>
          </div>
    

              {/* Search */}
              <form onSubmit={handleSubmit} className="w-full p-[16px] border-b border-[#F3F4F6]">
              <div className="relative">
                <input
                  type="text"   value={searchVal}
                  onChange={(e) => setSearchVal(e.target.value)}
                  placeholder="Search products..."
                  className="w-full  font-medium text-sm leading-none text-[#36415380] w-[288px] h-[46px] rounded-[12px] border border-[1px] px-[48px] pl-[16px] pt-[12px] pb-[13px] bg-[#F9FAFB] border-t border-[#E5E7EB]"
                />
                <button type='submit' className="absolute top-[7px] bottom-[7px] right-[8px] flex items-center justify-center w-8 h-8 rounded-lg bg-[#16A34A] text-white cursor-pointer">
                  <IoIosSearch className='w-[17.5px] h-[14px]' />
                </button>
              </div>    
              </form>

          <div className='pt-[16px] pb-[16px]'>
          <a  className="flex items-center pt-[12px] pb-[12px] pl-[16px] pr-[16px] text-[#364153] font-medium text-base leading-6">
            Home
          </a>

          <a  className="flex items-center pt-[12px] pb-[12px] pl-[16px] pr-[16px] text-[#364153] font-medium text-base leading-6">
            Shop
          </a>

          <a  className="flex items-center pt-[12px] pb-[12px] pl-[16px] pr-[16px] text-[#364153] font-medium text-base leading-6">
            Categories
          </a>

          <a  className="flex items-center pt-[12px] pb-[12px] pl-[16px] pr-[16px] text-[#364153] font-medium text-base leading-6">
            Brands
          </a>
        </div>

     <div className='border-t border-[#F3F4F6] p-[16px]'></div>
      <div className='pt-[16px] pb-[16px]'>
         <a className="flex items-center justify-between">
               <div className="flex  items-center gap-[12px] pt-[12px] pl-[12px] pb-[16px]">
                <div className="flex  items-center  justify-center bg-[#FEF2F2] rounded-full w-[36px] h-[36px]">
                 <CiHeart className='w-5 h-4 text-[#FB2C36]' />
                </div>
                <span className='font-medium text-base leading-6 text-[#64153]'>Wishlist</span>
               </div>
               <span className='flex items-center justify-center text-center font-medium text-base leading-6 text-white bg-[#FB2C36] w-[28px] h-[24px] rounded-full px-[10px] py-[4px]'>5</span>
          </a>

              <a className="flex items-center justify-between">
               <div className="flex  items-center gap-[12px] pt-[12px] pl-[12px] pb-[16px]">
                <div className="flex  items-center  justify-center bg-[#F0FDF4] rounded-full w-[36px] h-[36px]">
                 <IoCart className='w-5 h-4 text-[#16A34A]' />
                </div>
                 <span className='font-medium text-base leading-6 text-[#364153]'>Cart</span>
               </div>
                <span className='flex items-center justify-center font-medium text-base leading-6 text-white bg-[#16A34A] w-[27px] h-[24px] rounded-full px-[10px] py-[4px]'>3</span>
          </a>   
     </div>

     <div className='border-t border-[#F3F4F6] p-[16px]'></div>

     <div className='pt-[16px] pb-[16px]'>
         <a className="flex items-center justify-between">
               <div className="flex  items-center gap-[12px] pt-[12px] pl-[12px] pb-[16px]">
                <div className="flex  items-center  justify-center bg-[#F3F4F6] rounded-full w-[36px] h-[36px]">
                 <FiUser className='w-5 h-4 text-[#6A7282]' />
                </div>
                <span className='font-medium text-base leading-6 text-[#64153]'>Usama</span>
               </div>
          </a>

         <button className="flex items-center justify-between">
               <div className="flex  items-center gap-[12px]  pt-[12px] pl-[12px] pb-[16px]">
                <div className="flex  items-center  justify-center bg-[#FEF2F2] rounded-full  w-[36px] h-[36px]">
                 <FaSignOutAlt className='w-5 h-4 text-[#16A34A]' />
                </div>
                <span className='font-medium text-base leading-6 text-[#FB2C36]'>Sign Out</span>
               </div>
         </button>
           <div className='border-t border-[#F3F4F6] pl-[16px] pr-[16px]'></div>
     </div>

     <a className='flex items-center gap-[12px] bg-[#F9FAFB] border-t border-[#F3F4F6]  p-[16px] rounded-xl border border-[1px]'>
       <div className='flex items-center justify-center bg-[#DCFCE7] rounded-full w-[40px] h-[40px]'>
        <BiSupport className='w-5 h-4 text-[#16A34A]' />
       </div>
       <div>
        <div className='font-semibold text-sm leading-5 tracking-normal align-middle text-[#364153]'>
          Need Help?
        </div>
        <div className='font-medium text-sm leading-5 tracking-normal align-middle text-[#16A34A]'>
         Contact Support
        </div>
       </div>
     </a>

     </div>
 
    </div>

     </div>
     </div>
    </header>
   </>
  )
}
