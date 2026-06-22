"use client"
import React, { useEffect, useState } from 'react'
import { FaLocationDot , FaGear , FaPhone  } from "react-icons/fa6";
import Image from 'next/image'
import { FaTrash } from "react-icons/fa";
import fax from "@/assets/user/fax.png";
import pencil from "@/assets/user/pencil.png";
import { deleteAddress, getAddress } from '@/actions/address.action';
import { AddressArrI } from '@/types/address.type';
import { toast } from 'sonner';
import { Button } from '../ui/button';
import { Spinner } from '../ui/spinner';

export default function AddressCard({address,fetchAddress}:{address:AddressArrI,fetchAddress:()=>void}) {
    const [addresseData, setAddresseData] = useState({});
    const[isLoading,setIsLoading] = useState(false);
   async function fetchAddressData(){
           try {
          const data = await getAddress(address._id);
           setAddresseData(data.data);
             }catch (error) {
            }finally{
             }
           }


           
      async function deleteUserAddress(){
              try {
                 setIsLoading(true);
                 const response =   await deleteAddress(address._id);   
                  toast.success(response.message);
                  fetchAddress();
              } catch (error) {
                   toast.error((error as Error).message)
                    console.log(error)  
              }finally{
           setIsLoading(false);
          } 
          }

            useEffect(()=>{
            fetchAddressData();
        },[address._id])  
            return (
              <div className='col-span-1 mt-2 mb-2 bg-white rounded-[16px]  p-[20px] border border-[#F3F4F6] shadow-[0px_1px_2px_-1px_rgba(0,0,0,0.1),0px_1px_3px_0px_rgba(0,0,0,0.1)]'>
                 <div className="flex items-start justify-between gap-4">
                     
                    <div className="flex items-center justify-center shrink-0 w-[44px] h-[44px] rounded-[12px] bg-[#F0FDF4]">
                      <FaLocationDot className="w-[22.5px] h-[18px] text-[#16A34A]"/>
                    </div>
                     
                    <div className="flex-1">
                    <h3 className="mb-1 font-bold text-[16px] leading-[20px] tracking-[0] align-middle text-[#101828]">Sadat City</h3>
                    <p className="mb-1 font-medium text-[14px] leading-[20px] tracking-[0] align-middle text-[#4A5565]">Sadat City</p>
                    <div className="flex flex-col xl:flex-row  md:items-start xl:items-center gap-4">
                        <span className="flex items-center gap-1.5 font-medium text-[14px] leading-[20px] tracking-[0] align-middle text-[#6A7282]">
                           <FaPhone className="w-[15px] h-[12px] text-[#6A7282]" />
                            01097514862
                        </span>
                        <span className="flex items-center gap-1.5 font-medium text-[14px] leading-[20px] tracking-[0] align-middle text-[#6A7282]">
                        <Image src={fax} alt='' />
                         Sadat City
                        </span>
                    </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center justify-center w-9 h-9 rounded-[8px] bg-[#F3F4F6]">
                       <Image src={pencil} alt='' />
                        </div> 

                        <Button disabled={isLoading}  onClick={()=>deleteUserAddress()}  className="flex items-center justify-center w-9 h-9 rounded-[8px] bg-[#F3F4F6] cursor-pointer ">
                      {isLoading  ? <Spinner className='text-green-500'/> : <FaTrash className="w-[14px] h-[14px] text-[#4A5565] hover:text-red-500" />}     
                        </Button>

                    </div>
                 </div>
                </div>
  )
}
