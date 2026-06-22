"use client"
import React, { useEffect, useState } from 'react'
import SideMenu from '@/components/user/SideMenu'
import UserHeader from '@/components/user/UserHeader'
import { FiPlus } from "react-icons/fi";
import Image from 'next/image'
import FeaturesBar from '@/components/featuresBar/FeaturesBar';
import AddAddressDialog from '@/components/address/AddAddressDialog';
import { getAddress } from '@/actions/address.action';
import AddressCard from '@/components/address/AddressCard';
import { AddressArrI, AddressDataI } from '@/types/address.type';


export default function Address(){

    const [addresses, setAddresses] = useState<AddressArrI[]>([]);
        async function fetchAddress(){
         try {
          const response = await getAddress();
          setAddresses(response.data);
          console.log(addresses);
           }catch (error) {
          }finally{
           }
         }
         useEffect(()=>{
            fetchAddress();
         },[])
 return (
     <>
      <div className='min-h-screen bg-[#F9FAFB80]'>
       <UserHeader />
       <div className='px-4 md:px-4 xl:px-[208px] mt-8 py-8'>
        <div className="flex flex-col md:flex-col xl:flex-row items-start gap-6 xl:gap-8">
        <SideMenu />
        <div className="flex-1 w-full">
            <div>
                <div className="flex items-center justify-between">
                 <div>
                  <h2 className="mb-1 font-bold text-[20px] leading-[28px] tracking-[0] align-middle text-[#101828]">My Addresses</h2>
                 <p className="font-medium text-[14px] leading-[20px] tracking-[0] align-middle text-[#6A7282]">Manage your saved delivery addresses</p>
                 </div>
                 <AddAddressDialog />
                </div>
                <div className="grid xl:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
                {addresses.map((address) => (
               <AddressCard  key={address._id} address={address} fetchAddress={fetchAddress}/>
                ))}
                </div>
                
            </div>
        </div>
        </div>
       </div>
       </div>
       <FeaturesBar variant='' />
     </>
     )
}