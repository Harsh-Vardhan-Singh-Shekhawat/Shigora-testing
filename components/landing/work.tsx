import React from 'react'

const work = () => {
  return (
    <div className='text-center '>
      <h1 className='text-[30px] font-bold py-10'>How do we work?</h1>

      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 text-white  tracking-[0.7px] text-left text-[20px] justify-center'>
        <div className=" h-[300px] bg-[url('/How-do-we-work-5-1024x512.webp')] bg-blur-sm p-10 bg-no-repeat bg-cover transition-shadow ">
            We offer you a comprehensive suite of finances with easy and convenient steps. Choose the type of loan that best fits your needs, and we will assist you in less than five minutes.
            <div className="relative inset-0 bg-gradient-to-b from-[#141715] to-[#141715] opacity-50"></div>
        </div>
        <div className="h-[300px] bg-[url('/How-do-we-work-1-1024x512.webp')] bg-no-repeat bg-cover ">
        </div>
        <div className="h-[300px]  bg-[url('/How-do-we-work-4-1024x512.webp')] p-10 bg-no-repeat bg-cover backdrop-brightness-50">
        We will collect your documents and also check your eligibility. we will identify the lender that best fits your requirements and offers the most competitive interest rate.


        </div>
        <div className="h-[300px] bg-[url('/How-do-we-work-2-1024x512.webp')] bg-no-repeat bg-cover">
        </div>
        <div className="h-[300px] bg-[url('/How-do-we-work-6-1024x512.webp')] p-10 bg-no-repeat bg-cover backdrop-brightness-50">
        It is not always necessary that we shall wait for months for approval. We raise the funds from Domestic / International Fund Houses, Govt. Banks, Private Banks, Cooperative Banks, and NBFCs.
        </div>
        <div className="h-[300px] bg-[url('/How-do-we-work-3-1024x512.webp')] bg-no-repeat bg-cover">
        </div>
      </div>
    </div>
  )
}

export default work
