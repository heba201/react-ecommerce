"use client"
import Link from 'next/link'
import React, { useContext } from 'react'
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
export default function Navbar() {
  const {data:session , status} =  useSession();
  const {noOfCartItems,isLoading} = useContext(CartContext);
  function handleLogout(){
    signOut({callbackUrl:"/login"})
  }
  return (
   <>
   <nav className='bg-gray-100 p-5 fixed top-0 w-full z-50'>
    <div className="container mx-auto flex justify-between items-center">
        <div className="nav-logo">
         <Link href="/" className='text-3xl font-bold flex items-center gap-2'>
         <Avatar className='text-white bg-black flex items-center justify-center rounded-lg'>
 S
  
</Avatar>
         ShopMart
         </Link>
        </div>
        <div className="nav-links">
<NavigationMenu>
<NavigationMenuItem className='list-none flex gap-3 items-center'>
     
     <NavigationMenuLink asChild className='text-black bg-transparent hover:text-white hover:bg-black transition-all duration-300 text-lg'>
        <Link href="/">Home</Link>
      </NavigationMenuLink>

      <NavigationMenuLink asChild className='text-black bg-transparent hover:text-white hover:bg-black transition-all duration-300 text-lg'>
        <Link href="/products">Products</Link>
      </NavigationMenuLink>
    

     <NavigationMenuLink asChild className='text-black bg-transparent hover:text-white hover:bg-black transition-all duration-300 text-lg'>
        <Link href="/categories">Categories</Link>
      </NavigationMenuLink>

  <NavigationMenuLink asChild className='text-black bg-transparent hover:text-white hover:bg-black transition-all duration-300 text-lg'>
        <Link href="/brands">Brands</Link>
      </NavigationMenuLink>


    </NavigationMenuItem>
    </NavigationMenu>
        </div>
        <div className="nav-icons flex items-center gap-4">
        {session && <><p>{`Welcome ${session.user?.name}`}</p></>}
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <UserRound className='cursor-pointer' />
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuGroup>
      <DropdownMenuLabel>My Account</DropdownMenuLabel>
       <DropdownMenuSeparator />
       {session ? <> <Link href="all-orders">
        <DropdownMenuItem>Your Orders</DropdownMenuItem>
       </Link>

      <DropdownMenuItem onClick={()=>handleLogout()}>Logout</DropdownMenuItem>
       </> : <><Link href="/login">
        <DropdownMenuItem>Login</DropdownMenuItem>
       </Link>
     
     <Link href="/register">
        <DropdownMenuItem>Register</DropdownMenuItem>
       </Link> </>}
       
      
    </DropdownMenuGroup>
    {/* <DropdownMenuSeparator /> */}
    <DropdownMenuGroup>
      
     
    </DropdownMenuGroup>
  </DropdownMenuContent>
</DropdownMenu>
{session && <><Link href="/cart" className='cursor-pointer relative'>
    <ShoppingCart />
   <Badge className='absolute start-full bottom-full -translate-x-1/2  translate-y-1/2'>
   {isLoading ? <Spinner/> : noOfCartItems}
   </Badge>
</Link>
</>}
        </div>
    </div>
   </nav>
   </>
  )
}
