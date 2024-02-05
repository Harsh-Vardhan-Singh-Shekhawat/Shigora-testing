import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const blog = () => {

const blogArray = [
    {
        id:1,
        img:"/Grow-Your-Healthcare-industry-with-Medical-Equipment-Finance-768x403.webp",
        title:"Revolutionize the Healthcare industry with Cutting-Edge Medical Equipment Financing Solutions",
        desc:"Medical Equipment Finance In today’s rapidly changing healthcare industry, staying ahead of the..."
        // link:"/"
    },
    {
        id:2,
        img:"/MSME-Loans-FAQs-768x403.webp",
        title:"FAQs on Business loans for MSME",
        desc:"Overview The MSME sector is a significant part of the Indian economy, providing jobs and contributing..."
    },
    {
        id:3,
        img:"/Myths-About-Loan-Against-Property-768x403.webp",
        title:"Loan Against Property Myths",
        desc:"Loans against property Myths It is a market full of endless possibilities where anything can happen at..."
    },
    {
        id:4,
        img:"/Services-Investment-Banking-in-India-768x403.webp",
        title:"All you need to know about Investment Banking Services in India",
        desc:"Investment Banking Services in India India is considered to be the fastest-growing market and the most..."
    },
    {
        id:5,
        img:"/A-Brief-Description-of-Lease-Rental-Discounting-768x403.webp",
        title:"A Brief Description of Lease Rental Discounting: Benefits, Eligibility, And the Process",
        desc:"Overview LRD Loans The leased properties can source you funds!! Yes, you read it correctly. The leased..."
    },
    {
        id:6,
        img:"/Dropline-Overdraft-768x403.webp",
        title:"Dropline Overdraft: Meaning, Application and Significance",
        desc:"Dropline Overdraft (DLOD) Drop-line Overdraft (DLOD) is a facility granted to the customer by the financial..."
    },
    {
        id:7,
        img:"/Empowering-Medical-Professionals-with-Terkar-Capitals-Financial-Support-2-768x403.webp",
        title:"Empowering Medical Professionals with Terkar Capital's Financial Options",
        desc:"Loans for Medical Professionals (Doctors) In a country like India with billions of people, the value..."
    },
    {
        id:8,
        img:"/Understanding-CIBIL-Score-768x403.webp",
        title:"What do you need to know about your credit score?",
        desc:"CIBIL score for Business loan approval CIBIL (Credit Information Bureau India Limited) or credit score..."
    },
    {
        id:9,
        img:"/Dropline-Overdraft-768x403.webp",
        title:"Overdraft Facility - Meaning, Advantage, and Significance",
        desc:"Overdraft facility An overdraft facility is a financial arrangement between a bank and a customer, that..."
    },
    {
        id:10,
        img:"/A-Guide-to-Tailor-Made-Financing-for-CAs-CSs-and-Healthcare-Professionals-768x403.webp",
        title:"A Guide to Tailor-Made Financing for CAs, CSs, and Healthcare Professionals",
        desc:"Tailor-made Financing for Professionals A professional loan is a type of financing that is specifically..."
    },  
]

  return (
    <div className='px-40 '>
      <div>
        <p className="p-5 text-[17px] tracking-[0.7px] text-[#7a7a7a]">Welcome to Terkar Capital’s blog, your go-to resource for valuable insights and strategies on raising funds and designing debt instruments that align with your financial objectives. Our mission is to assist businesses in achieving their financial goals by offering comprehensive guidance and innovative solutions. Let’s explore.
        </p>
      </div>
      <div className='grid grid-cols-3 gap-5 p-5'>
        {blogArray.map((data) => (
            <div className='border-[1px] border-black tracking-[0.7px] text-[#7a7a7a]'>
                <Image width={400} height={300} src={data.img} objectFit='' alt='blog-img' /> {/*fill:true*/}
                <div className='p-2'>
                    <h3 className='font-bold text-black text-[17px]'>
                    <Link href="/blog">
                    {data.title}
                    </Link></h3>
                    <p>{data.desc}</p>
                    <button className='bg-black uppercase text-white p-3'>Learn More</button>
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default blog
