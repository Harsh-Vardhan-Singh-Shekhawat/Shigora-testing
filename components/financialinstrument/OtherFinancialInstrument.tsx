import React from 'react'
import Image from 'next/image'
const OtherFinancialInstrument = () => {
  return (
    <div className='text-center p-10'>
      <h1 className="text-[25px] p-4 text-black  font-bold">
        Other Financial Instruments
      </h1>
      <div className='flex flex-col md:flex-row lg:flex-row justify-center gap-5 '>
        <div>
            <Image className='shadow-lg hover:scale-95 transition duration-500 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]' width={250} height={200} src="/Secured-Debt-Products2.webp" alt="secured-img" />
            <p className='bg-black text-white rounded-full p-2 m-4'>Secured Debt Products</p>
        </div>
        <div>
            <Image className='shadow-lg hover:scale-95 transition duration-500 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]' width={250} height={200} src="/UnSecured-Debt-Products2.webp" alt="secured-img" />
            <p className='bg-black text-white rounded-full p-2 m-4'>Unsecured Debt Products</p>
        </div>
        <div >
            <Image className='shadow-lg hover:scale-95 transition duration-500 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]' width={250} height={200} src="/Loan-for-professionals-square2.webp" alt="secured-img" />
            <p className='bg-black text-white rounded-full p-2 m-4'>Professional Funding</p>
        </div>
      </div>
    </div>
  )
}

export default OtherFinancialInstrument
