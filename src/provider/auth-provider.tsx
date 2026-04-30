"use client"
import { SessionProvider } from 'next-auth/react'
import React, { ReactNode } from 'react'
// { children }: { children: React.ReactNode }
export default function AuthProvider({children}:{children:React.ReactNode}) {
  return (
     <SessionProvider>
        {children}
     </SessionProvider>
  )
}
