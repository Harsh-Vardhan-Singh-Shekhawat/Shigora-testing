import React from "react";
import Marquee from "react-fast-marquee";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import OtherFinancialInstrument from "./OtherFinancialInstrument";
import FinanceForm from "./FinanceForm";
import { WhatSetApart } from "./WhatSetApart";

const UBLarray = [
  {
    id: 0,
    title: "1. Fast Turnaround Time",
    desc: "We cordially track the deadlines and make our quality tangible, while executing finance projects well ahead of time.",
  },
  {
    id: 1,
    title: "2. Confidentiality",
    desc: "We comply with the highest professional confidentiality standards. All client information is discussed in strict confidentiality.",
  },
  {
    id: 2,
    title: "3. Competitive ROI",
    desc: "We find you the right lenders with the similar terms and the lowest rate of interest.",
  },
  {
    id: 3,
    title: "4. Hassle-free Processing",
    desc: "We create a stable ownership structure for financiers by establishing a secure transaction process.",
  },
  {
    id: 4,
    title: "5. High Level of Integrity",
    desc: "We are building our reputation through reliability, integrity, and honesty. We connect to our clients on personal grounds that include transparency and liability.",
  },
];

const factoringservices = () => {
  return (
    <div className="p-4 max-w-7xl m-auto">
      

      <div className="flex items-center flex-col sm:flex-col md:flex-row lg:flex-row">
        <div className="p-5">
          <h1 className="text-[25px] font-bold py-4">
            Take your business to the next level with Unsecured Business Loans
          </h1>
          <ul className="py-4 grid gap-4">
            <li>Industry-best rate of interest</li>
            <li>Fast turnaround time in arranging funds</li>
            <li>Conventional & Non-conventional debt products</li>
            <li>End to end execution of process</li>
            <li>Associated with more than 100+ financial institution</li>
            <li>Strong experience in dealing with 400+ corporate clients</li>
          </ul>

          <button className="rounded-full bg-blue-500 hover:bg-blue-700 text-white p-4 font-bold tracking-wide">
            Calculate Business Loan EMI
          </button>
        </div>

        <FinanceForm />
      </div>

      <div className="text-[#7a7a7a] ">
        <h1 className="text-[25px] py-4 text-black  font-bold">
          Loan against property in india
        </h1>

        <p className="py-4 text-[17px] tracking-[0.7px]">
          A Loan against property is a type of loan that can be obtained for
          resolving various financial hurdles. The hurdles that come in front of
          companies in the business. So, this type of loan is a long-term-based
          loan. The security here is the equitable mortgage of the immovable
          property. Thus, the features are the most secure type of loan for
          lending institutions. It is, so, the most easily available loan for
          borrowers in normal circumstances.
        </p>
        <p className="py-4 text-[17px] tracking-[0.7px]">
          The beneficial features of a loan against property are basic and can
          be realized by the borrowers before they apply. This loan is the most
          suitable because the property is one strong form of collateral
          security. The property is mortgaged for various purposes of finance.
          So, the borrower avails loan in accordance with the property’s current
          market value.
        </p>
      </div>

      <div className="">
        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row gap-2">
          <div className="bg-black text-white p-10">
            <h3 className="text-[18px] font-bold">Loan Against Property</h3>
            <h1 className="text-[33px] font-bold">Key Features</h1>
            <ul className="p-5 list-disc tracking-[0.7px]">
              <li>Avail short-term loan </li>
              <li>Collateral-free facility</li>
              <li>Flexible terms</li>
              <li>Convenient funding</li>
              <li>Discounting up to 95% of the invoice amount</li>
            </ul>
          </div>

          <WhatSetApart />
        </div>
      </div>


    

      <div className="text-[#7a7a7a]">
        <h1 className="text-[25px] py-4 text-black  font-bold">
          LAP Interest rates
        </h1>

        <p className="py-4 text-[17px] tracking-[0.7px]">
          Interest rates depend upon the repayment schedule, EMI tenure etc. It
          ranges from 9%-15% depending on the lender, for a period ranging
          anywhere from 7 to 15 years.
        </p>
        <p className="py-4 text-[17px] tracking-[0.7px]">
          Learn the Myths about loans against property here.
        </p>
      </div>

      <div className="text-[#7a7a7a]">
        <h1 className="text-[25px] py-4 text-black  font-bold">
          Types of LAP Facility
        </h1>

        <div>
          <Tabs orientation="horizontal" isFitted variant="enclosed">
            <TabList mb="1em" className="text-black font-bold text-[20px]">
              <Tab>1. Loan against commercial and residential properties </Tab>
              <Tab>2. LAP for Self-employed individuals</Tab>
            </TabList>
            <TabPanels>
              <TabPanel className="">
                Based on the current market value, borrowers can mortgage their
                residential or commercial properties to obtain the amount of
                loan, to support any type of financial requirement.
              </TabPanel>
              <TabPanel>
                Self-employed individuals can obtain a loan against property,
                they can avail of a higher amount than regularly employed
                individuals, the specific amount varies from firm to firm. Thus,
                it requires to meet the property eligibility criteria.
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>

      <div className="text-[#7a7a7a]">
        <h1 className="text-[25px] py-4 text-black  font-bold">
          LAP Eligibility Criteria
        </h1>

        <div className="p-5  text-[17px] tracking-[0.7px]">
          <ul className="list-disc">
            <li>
              Age eligibility criteria: 18 to 70 years or 25 to 65 years old
            </li>
            <li>
              Minimum work experience requirement for salaried individuals: 3
              years and above
            </li>
            <li>Business stability requirement: Last 5 years of stability</li>
            <li>Good CIBIL score for a hassle-free loan process</li>
            <li>
              Eligible properties for a mortgage: Personal, residential,
              commercial, and rented properties
            </li>
          </ul>
        </div>
      </div>
      

      <div className="text-[#7a7a7a]">
        <h1 className="text-[25px] py-4 text-black  font-bold">
          LAP Facility at Terkar Capital
        </h1>

        <p className="py-4 text-[17px] tracking-[0.7px]">
          At Terkar Capital, we understand that financial hurdles can arise for
          individuals and businesses alike. However, the features of the Loan
          Against Property facility, provide a long-term loan option secured by
          an equitable mortgage of immovable property. This type of loan is
          easily accessible and offers several benefits, including flexible loan
          tenure, low interest rates, and a hassle-free application process. The
          loan amount is determined based on the current market value of the
          property.
        </p>
      </div>
      <OtherFinancialInstrument />

    </div>
  );
};

export default factoringservices;
