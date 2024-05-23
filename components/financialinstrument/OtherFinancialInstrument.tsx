import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const OtherFinancialInstrument = () => {
  return (
    <div className='text-center py-4 sm:py-4 md:py-10 lg:py-10 m-auto'>
      <h1 className="text-[25px] p-4 text-black  font-bold">
        Other Financial Instruments
      </h1>
      <div className='flex flex-col md:flex-row lg:flex-row justify-center gap-3 '>
        <div className=' '>
            <Image className='shadow-lg hover:scale-95 transition duration-500 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]' width={250} height={200} src="/Secured-Debt-Products2.webp" alt="secured-img" />
            <div className='mt-6 '>
            <Link href='/financial-instruments/structured-debt-financing' className='bg-black text-white border-2 border-black rounded-full p-3 mt-5 hover:bg-white hover:text-black duration-300'>Secured Debt Products</Link>

            </div>
        </div>
        <div className=''>
            <Image className='shadow-lg hover:scale-95 transition duration-500 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]' width={250} height={200} src="/UnSecured-Debt-Products2.webp" alt="secured-img" />
            <div className='mt-6'>
            <Link href="/financial-instruments/unsecured-debt-products" className='bg-black text-white border-2 border-black rounded-full p-3  hover:bg-white hover:text-black duration-300'>Unsecured Debt Products</Link>

            </div>
        </div>
        <div className=''>
            <Image className='shadow-lg hover:scale-95 transition duration-500 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]' width={250} height={200} src="/Loan-for-professionals-square2.webp" alt="secured-img" />
            <div className='mt-6'>
            <Link href="/financial-instruments/loan-for-professional" className='bg-black text-white border-2 border-black rounded-full p-3  hover:bg-white hover:text-black duration-300'>Professional Funding</Link>

            </div>
        </div>
      </div>
    </div>
  )
}

export default OtherFinancialInstrument
