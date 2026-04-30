import { getUserToken } from '@/lib/auth'
import { authOptions } from '@/lib/authOptions'
import { getServerSession } from 'next-auth'
import React from 'react'

export default async function Brans() {
 const data = await getServerSession(authOptions)
 console.log(data)
 const myToken = await getUserToken();
 console.log(myToken);
  return (
    <div>Brans</div>
  )
}
