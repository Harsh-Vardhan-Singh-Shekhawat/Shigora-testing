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
        link:"/corporate-finance"
        
    },
    {
        id:2,
        title:'Unsecured Debt Products',
        img:img2,
        link:"/unsecured-debt-products"
        
    },
    {
        id:3,
        title:'Secured Debt Products',
        img:img3,
        link:"/secured-debt-products"
        
    },
    {
        id:4,
        title:'Funding for Doctors/CA',
        img:img4,
        link:"/loan-for-professionals"
        
    },
    {
        id:5,
        title:'Machinery Loan',
        img:img5,
        link:"/machinery-loan"
        
    },
    {
        id:6,
        title:'Unsecured Working Capital',
        img:img6,
        link:"/unsecured-working-capital-loan"
    },
    {
        id:7,
        title:'Loan Under CGTMSE',
        img:img7,
        link:"cgtmse-loan"
    },
    {
        id:8,
        title:'MSME Loan',
        img:img8,
        link:"/msme-loan"
        
    },
    {
        id:9,
        title:'LAP Facility',
        img:img9,
        link:"loan-against-property-service"
        
    },
    {
        id:10,
        title:'Project Funding',
        img:img10,
        link:"/project-funding"
        
    },
    {
        id:11,
        title:'Structured Debt Funding',
        img:img11,
        link:"/loan-against-securites"
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
    <div className='text-center px-40'>
      <h1 className='text-[30px] font-bold'>Top Financial Instruments We Arrange</h1>
      <div className='grid grid-cols-4 gap-2'>
            {financeArray.map((data) => (
                <div>
                {
                    data.id < 12 ? (
                        <div className='shadow-xl p-[10px]'>
                    <Image src={data.img} alt='img' />
                    <h1 className='text-[18px] font-semibold'>{data.title}</h1>
                    <button className='uppercase bg-black text-white px-3 py-2 rounded-full'> Read More</button>
                </div>
                    ) : (
                        <Link href="/financial-instruments">View All</Link>
                    )
                }
                </div>
            ))}
      </div>    
    </div>
  )
}

export default financialinstruments
