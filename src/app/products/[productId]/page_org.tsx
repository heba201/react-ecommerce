
import { productI } from '@/types/producttype'
import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import { Heart, ShoppingCart, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  
} from "@/components/ui/carousel"
import { getAllProducts } from '@/services/product.service'
import AddToCartBtn from '@/components/cart/AddToCartBtn'

export default async function ProductDetails({
  params}:{
params:Promise<{productId:string}>
  }) {
     const {productId} = await params
     const response = await fetch(`${process.env.BASE_URL}/products/${productId}`)
     const data = await response.json()
     const product : productI =  data.data
     const related =  await  getAllProducts(product.category._id);
     const relatedProducts : productI[] = related.data;
     console.log(relatedProducts);
  return (
     <>
     <main>
<div className="max-w-7xl mx-auto my-1">
<Breadcrumb className='pt-5'>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/" className='text-lg font-semibold'>Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/products" className='text-lg font-semibold'>Products</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage className='text-xl font-bold'>{product.title}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>


       <Card className='grid grid-cols-3 mt-10'>
        <div className="col-span-1">
                           

       <Carousel>
  <CarouselContent>
    {/* loading='eager' fetchPriority='high'  using with slider*/}
      {product.images.map((img,index)=><React.Fragment key={index}>
        <CarouselItem>
    <Image src={img} width={1000}  height={1000} className='w-full object-cover h-90' alt='p' loading='eager' fetchPriority='high'/>
      </CarouselItem> 
      </React.Fragment>)}
     
 
  </CarouselContent>
  
</Carousel>
        </div>
        <div className="col-span-2">
         <div className='flex flex-col justify-center items-center'>
                
  <CardHeader className='w-full space-y-3'>
   <div className="card-brand text-gray-400 text-lg">
    {product.brand.name}
   </div>
    <CardTitle className='text-xl font-bold'> {product.title}</CardTitle>
    <div className="card-desc text-lg">
      {product.description}
    </div>
    <CardDescription className=" text-gray-400 text-sm"> {product.category.name}</CardDescription>
   
   <div className="flex gap-2">
    <div className="flex gap-1 items-center">
    {[0,1,2,3,4].map((star,index)=>{
      const filledStar = index < Math.floor(product.ratingsAverage)
      return <React.Fragment key={index}><Star className={filledStar ? 'text-yellow-500 fill-yellow-500' : 'text-gray-500 fill-gray-500'} /></React.Fragment>
})}
   </div>
   <div className="product-rating text-gray-400">
    ({product.ratingsAverage})
   </div>
   </div>
    
  </CardHeader>
  </div>
  <CardContent>
    <p className='text-xl font-bold mt-4'>EGP: {product.price}</p>
  </CardContent>
  <CardFooter className='gap-2 items-center border-0 bg-transparent'>
    <Button className='grow cursor-pointer mt-4'><ShoppingCart /> Add To Cart</Button>
    <Heart className='cursor-pointer'/>
  </CardFooter>
        </div>
       
</Card>

</div>

     </main>




      <main>
      <div className="max-w-7xl mx-auto pt-8">
        <h2 className='text-3xl'>Related Products</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 xl:grid-cols-12 gap-6">
           {relatedProducts.map((product)=>
            <React.Fragment key={product._id}>
            <div className="col-span-3">
              <Card>
                <Link href={`products/${product._id}`}>
                
                 {/* <Image src={product.imageCover} width={1000}  height={1000} className='w-full object-cover h-90' alt='p'/> */}
  
  
   <Carousel>
    <CarouselContent>
      {/* loading='eager' fetchPriority='high'  using with slider*/}
        {product.images.map((img,index)=><React.Fragment key={index}>
          <CarouselItem>
      <Image src={img} width={1000}  height={1000} className='w-full object-cover h-90' alt='p' loading='eager' fetchPriority='high'/>
        </CarouselItem> 
        </React.Fragment>)}
       
   
    </CarouselContent>
    
  </Carousel>
  
  
  <CardHeader>
   <div className="card-brand text-gray-400 text-lg">
    {product.brand.name}
   </div>
    <CardTitle className='text-xl font-bold'> {product.title}</CardTitle>
    <CardDescription className=" text-gray-400 text-sm"> {product.category.name}</CardDescription>
   
   <div className="flex gap-2">
    <div className="flex gap-1 items-center">
    {[0,1,2,3,4].map((star,index)=>{
      const filledStar = index < Math.floor(product.ratingsAverage)
      return <React.Fragment key={index}><Star className={filledStar ? 'text-yellow-500 fill-yellow-500' : 'text-gray-500 fill-gray-500'} /></React.Fragment>
})}
   </div>
   <div className="product-rating text-gray-400">
    ({product.ratingsAverage})
   </div>
   </div>
    
  </CardHeader>
  </Link>
  <CardContent>
    <p className='text-xl font-bold'>EGP: {product.price}</p>
  </CardContent>
  <CardFooter className='gap-2'>
    <AddToCartBtn produtId={product._id}/>
    <Heart className='cursor-pointer'/>
  </CardFooter>
</Card>
            </div>
            </React.Fragment>
           )}
        </div>
      </div>
     </main>
     </>
  )
}
