"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
export default function DealsWrapper({children,product}) {
    const router=useRouter();
  return (
    <div onClick={()=>router.push(`product/${product.name}?id=${product.id }`)}>
      {children}
    </div>
  )
}
