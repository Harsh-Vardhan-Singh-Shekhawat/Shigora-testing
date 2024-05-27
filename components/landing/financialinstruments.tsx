import React from 'react'
import img1 from '@/public/Unsecured-working-capital-loan.webp'
import img2 from '@/public/UnSecured-Debt-Products.webp'
import img3 from '@/public/Loan-against-property.webp'
import img4 from '@/public/Loan-for-professionals-square.webp'
import img5 from '@/public/Project-funding.webp'
import img6 from '@/public/Working-capital-finance.webp'
import img7 from '@/public/Secured-Debt-Products.webp'
import img8 from '@/public/CGTMSE-loan.webp'
import img9 from '@/public/CGTMSE-loan.webp'
import img10 from '@/public/CGTMSE-loan.webp'
import img11 from '@/public/CGTMSE-loan.webp'
import Image from 'next/image'
import Link from  'next/link'

const financeArray  = [
    {
        id:1,
        title:'Corporate Finance',
        img:img1,
        link:"/financial-instruments/corporate-finance"
        
    },
    {
        id:2,
        title:'Unsecured Debt Products',
        img:img2,
        link:"/financial-intruments/unsecured-debt-products"
        
    },
    {
        id:3,
        title:'Secured Debt Products',
        img:img3,
        link:"/financial-intruments/secured-debt-products"
        
    },
    {
        id:4,
        title:'Funding for Doctors/CA',
        img:img4,
        link:"/financial-intruments/loan-for-professionals"
        
    },
    {
        id:5,
        title:'Machinery Loan',
        img:img5,
        link:"/financial-intruments/machinery-loan"
        
    },
    {
        id:6,
        title:'Unsecured Working Capital',
        img:img6,
        link:"/financial-intruments/unsecured-working-capital-loan"
    },
    {
        id:7,
        title:'Loan Under CGTMSE',
        img:img7,
        link:"/financial-intruments/cgtmse-loan"
    },
    {
        id:8,
        title:'MSME Loan',
        img:img8,
        link:"/financial-intruments/msme-loan"
        
    },
    {
        id:9,
        title:'LAP Facility',
        img:img9,
        link:"/financial-intruments/loan-against-property-service"
        
    },
    {
        id:10,
        title:'Project Funding',
        img:img10,
        link:"/financial-intruments/project-funding"
        
    },
    {
        id:11,
        title:'Structured Debt Funding',
        img:img11,
        link:"/financial-intruments/loan-against-securites"
    },
    {
        id:12,
        title:'Financial Instrument',
        img:img11,
        link:"/financial-instruments"
    }
]
const financialinstruments = () => {
  return (
    <div className='text-center  '>
      <h1 className='text-[30px] py-4 font-bold'>Top Financial Instruments We Arrange</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-2'>
            {financeArray.map((data) => (
                <div className=''>
                {
                    data.id < 12 ? (
                        <div className='shadow-xl p-[10px]'>
                    <Image className=' hover:scale-105 duration-300' src={data.img} alt='img' />
                    <h1 className='text-[20px] p-2 font-semibold'>{data.title}</h1>
                    <div>
                <Link
                  href="/financial-intruments/unsecured-debt-products"
                  className="text-md font-semibold tracking-wide uppercase bg-black hover:bg-white hover:text-black border-2 border-black duration-300 rounded-full text-white py-2 px-4"
                >
                  Let's Explore
                </Link>
                </div>
                </div>
                    ) : (
                        <div className='flex justify-center items-center relative w-full h-[350px] mt-3 bg-white shadow-xl'>
                            <Link href="/financial-instruments" className='absolute flex justify-center items-center font-semibold  hover:scale-105 duration-300 '>View All</Link>
                        </div>
                    )
                }
                </div>
            ))}
      </div>    
    </div>
  )
}

export default financialinstruments
