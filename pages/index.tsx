"use client"

import Financialinstruments from '@/components/landing/financialinstruments'
import SetApart from '@/components/landing/setApart'
import Hero from '@/components/landing/hero'
import Work from '@/components//landing/work'
import TerkarCapital from '@/components/landing/TerkarCapital'
import InvestmentBanking from '@/components/landing/investmentBanking'
import GrowBusiness from '@/components/landing/growBusiness'
import LeadingInvestment from '@/components/landing/leadingInvestment'
import InfoForm from '@/components/landing/infoForm'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="p-2">
      <div className=''>
        

        <Hero />
        

        <div className='max-w-7xl m-auto '>
          <InvestmentBanking />
          <Financialinstruments />
          <SetApart />
          </div>
          <Work />
          <div className=' max-w-7xl m-auto'>
          
          <TerkarCapital />
          <GrowBusiness />
          <LeadingInvestment />
          <InfoForm />
        </div>
      </div>
    </main>
  )
}
