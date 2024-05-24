import React from 'react'
import Link from 'next/link'
import  {AiOutlineClockCircle} from 'react-icons/ai'
import {FaMobileAlt} from 'react-icons/fa'
const booking = () => {
  return (
    <div className=' w-full  bg-gray flex p-2 border-b-[1px] border-[#e6e6e6]  m-auto '>
      <div className='w-full flex flex-col sm:flex-row md:fkex-row lg:flex-row  items-center justify-between max-w-7xl m-auto'>
        <div className='flex items-center gap-2'>
          <span><b><AiOutlineClockCircle /></b></span> 
          <b>Office Hours:</b>Mon:Sat 9:00 AM - 6:00 PM
        </div>
        <div className='flex justify-evenly items-center rounded-2xl border-b-4 border-[#999] shadow-lg my-1 p-2 hover:scale-105 transition'>
          <Link href="/book-a-call" className='font-bold px-3  no-underline text-black'>Book a Call</Link>
          <FaMobileAlt />
        </div>
      </div>
    </div>
  )
}

export default booking
