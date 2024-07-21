import Image from 'next/image'
import React from 'react'

export default function BgImage() {
  return (
    <div className=' bg-black relative w-full h-full flex justify-center items-center'>
      <h1 className=' text-white text-4xl font-bold'>Word<span className=' text-gray-400 font-semibold'>Counter</span></h1>
    </div>
  )
}
