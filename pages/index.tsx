"use client"
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import Financialinstruments from '@/components/landing/financialinstruments'
import SetApart from '@/components/landing/setApart'
import Hero from '@/components/landing/hero'
import Work from '@/components//landing/work'
import TerkarCapital from '@/components/landing/TerkarCapital'
import LeadingInvestment from '@/components/landing/leadingInvestment'
import InfoForm from '@/components/landing/infoForm'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="p-2">
      <div className=''>
        <Marquee pauseOnHover>
          <p className='text-[#7A7A7A] text-[17px] '>
              Terkar Capital is a Registered Brand of <b>Terkar Global Financial Development Private Limited.</b>
          </p>
        </Marquee>

        <Hero />
        <div className='text-center p-4 max-w-7xl m-auto'>
          <h1 className='text-[30px] font-bold p-2'>Investment Banking Firm in India</h1>
          <p className='text-left text-[17px] text-[#7A7A7A] md:p-4'>
            Terkar Capital, now a part of<b> Terkar Global Financial Development Pvt Ltd </b>, is an investment bank with a national footprint. We work extensively with professionals and businesses of all sizes to arrange debt funding instruments. 
          </p>
          <p className='text-left text-[17px] text-[#7A7A7A] md:p-4'>
            We conduct a comprehensive Financial SWOT analysis to design  appropriate financial instruments that align with the management’s expectations for raising funds and also ensure that the end use of the funds is justified.
          </p>
        </div>

        <div className='max-w-7xl m-auto '>
          <Financialinstruments />
          <SetApart />
          <Work />
          <TerkarCapital />
          <LeadingInvestment />
          <InfoForm />
        </div>
      </div>
    </main>
  )
}
