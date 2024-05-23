import React from 'react'
import Image from 'next/image'

const TerkarCapital = () => {
  return (
    <div className=' py-20 '>
      <div className='flex justify-between flex-col md:flex-row items-center gap-2 m-auto'>
        <div className='bg-zinc-900 text-white w-full md:w-1/2'>
        <h1 className="p-4 text-[30px]">
            Why Terkar Capital?
        </h1>
        <ul className='list-disc p-5'>
            <li className=''>Leading Investment Banking firm in India</li>
            <li>We are best at providing end-to-end funding needs and financial solutions to Corporate clients.</li>
            <li>Offers a broad range of advanced, tailored, affordable funding solutions along with world-class financial expertise.</li>
            <li>We take professional, innovative, and proactive steps in solving multifaceted Financial business problems.</li>
            <li>We value and promote seamless interaction with clients.</li>
        </ul>
        </div>
        <div className='w-full md:w-1/2'>
        <Image  width={590} height={400} className=' bg-contain' src="/why-terkar-capital.webp" alt="why-terkar-img" />

        </div>
      </div>
    </div>
  )
}

export default TerkarCapital
