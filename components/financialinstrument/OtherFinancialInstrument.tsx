import React from 'react'
import Image from 'next/image'
const OtherFinancialInstrument = () => {
  return (
    <div className='text-center p-10'>
      <h1 className="text-[25px] p-4 text-black  font-bold">
        Other Financial Instruments
      </h1>
      <div className='flex justify-center gap-5 '>
        <div >
            <Image className='shadow-lg' width={250} height={200} src="/Secured-Debt-Products2.webp" alt="secured-img" />
            <p className='bg-black text-white rounded-full p-2 m-4'>Secured Debt Products</p>
        </div>
        <div>
            <Image className='shadow-lg' width={250} height={200} src="/UnSecured-Debt-Products2.webp" alt="secured-img" />
            <p className='bg-black text-white rounded-full p-2 m-4'>Unsecured Debt Products</p>
        </div>
        <div >
            <Image className='shadow-lg' width={250} height={200} src="/Loan-for-professionals-square2.webp" alt="secured-img" />
            <p className='bg-black text-white rounded-full p-2 m-4'>Professional Funding</p>
        </div>
      </div>
    </div>
  )
}

export default OtherFinancialInstrument
