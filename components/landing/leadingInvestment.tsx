import React from 'react'

const leadingInvestment = () => {
  return (
    <div className='p-40'>
        <div className='flex gap-2 items-center'>
            <div className='bg-black text-white p-4'>

                <h1 className='text-[30px] font-bold '>Leading Investment Banking firm</h1>
                <div className='p-4'>
                <p className='text-[17px]'>
                We offer advice on all types of financial instruments and capital funding. Our philosophy is centred around empowering and enabling businesses of all sizes throughout India by providing support and creating growth opportunities. 
                </p>
                <p className='text-[17px]'>
                We aim to reach out to the unorganized and financially excluded sectors of SMEs. Our objective is to provide access to finance at affordable rates and with utmost transparency.
                </p>
                </div>
            </div>
            <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/d8yp2p3rTDg?si=HkQBOwp1oEaKQ5ep" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
        </div>
        <p className='text-[#7A7A7A] text-[17px] tracking-[0.7px] p-3'>
        Our head office is at Prabhat Road in Pune, and we extend our operations to Pimpri Chinchwad too. We also have a corporate office in BKC, Mumbai, serving the entire Mumbai metropolitan area. We provide capital to both urban and rural companies to meet their production needs when starting new businesses or growing an existing business. We help bridge the gap between eligible borrowers and capable lenders in India.
        </p>
      
    </div>
  )
}

export default leadingInvestment
