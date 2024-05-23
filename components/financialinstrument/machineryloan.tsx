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

const machineryloan = () => {
  return (
    <div className="p-4 max-w-7xl m-auto">
      <div>
        <Marquee pauseOnHover>
          <p className="text-[#7a7a7a] text-[17px]">
            Due to heavy web traffic, if you find the inquiry form is not
            functional, feel free to{" "}
            <b className="text-black tracking-[0.7px]">Book a call</b> with us!!
          </p>
        </Marquee>
      </div>

      <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row justify-center gap-2">
        <div className="py-4">
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
          Machinery Loan for Business
        </h1>

        <p className="py-4 text-[17px] tracking-[0.7px]">
          Micro, Small and medium-scale enterprises (MSMEs) are crucial in
          driving India’s economic growth. Unfortunately, these enterprises
          often face obstacles due to a lack of sufficient capital, which
          hinders their progress. In fact, many businesses struggle to compete
          with more prominent industry players and eventually fail.
        </p>
        <p className="py-4 text-[17px] tracking-[0.7px]">
          The machinery loan acts as a saviour for your business, providing a
          much-needed boost. It allows MSMEs to easily obtain loans for
          machinery purchase, ultimately propelling their enterprise to new
          heights.
        </p>
      </div>

      <div className="py-4">
        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row gap-2">
          <div className="bg-black text-white p-10">
            <h3 className="text-[18px] font-bold">Machinery Loan</h3>
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
          Machinery Loan Providers
        </h1>

        <p className="py-4 text-[17px] tracking-[0.7px]">
          MSMEs play a vital role in India’s growth but face funding challenges.
          That’s where our expertise in Machinery loans for businesses comes in.
          A machinery loan is a term loan that allows MSMEs to purchase
          state-of-the-art equipment to increase productivity. At Terkar
          Capital, we specialize in providing effortless loans against machinery
          in India. It provides small or medium-sized businesses with the
          capital they need to grow their business and compete in their
          industry.
        </p>
      </div>


      <div className="text-[#7a7a7a] ">
        <h1 className="text-[25px] py-4 text-black  font-bold">
          How to Apply for a Machinery Finance?
        </h1>

        <p className="py-4 text-[17px] tracking-[0.7px]">
          Financing machinery is fairly straightforward, provided, you meet the
          eligibility. Therefore, obtaining a machinery loan for business in
          cities like Pune, Mumbai, Delhi, and other metro cities has been made
          more convenient through Terkar Capital. You can proceed with the
          following steps.
        </p>

        <div>
          <Tabs orientation="horizontal" isFitted variant="enclosed">
            <TabList mb="1em" className="text-black font-bold text-[20px]">
              <Tab>1. Know your requirements</Tab>
              <Tab>2. Check the eligibility</Tab>
              <Tab>3. Put Forth the proposal</Tab>
              <Tab>4. Submit documents</Tab>
            </TabList>
            <TabPanels>
              <TabPanel className="">
                The first step is to understand what type of machinery you
                require, how much funding you will need, and other details.
              </TabPanel>
              <TabPanel>
                Check if your company meets the eligibility, and if it doesn’t,
                meet them before you apply for the loan.
              </TabPanel>
              <TabPanel>
                Once you’ve understood the eligibility, submit a proposal for
                the loan. This must contain information about your company, the
                machinery you plan on purchasing, the total amount of funds you
                require, etc.
              </TabPanel>
              <TabPanel>
                Once the lender has accepted your proposal, you will have to
                submit the required documents. The authorities will then proceed
                with the verification and then sanction your loan.
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>

      
      <OtherFinancialInstrument />


      <div className="py-10 ">
        <h1 className="text-[25px] p-4 text-black  font-bold">FAQs</h1>

        <div className="border-[1px] border-gray-200">
          <Accordion allowToggle>
            <AccordionItem>
              <h2 className="font-bold py-2">
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    1. Can I get a machinery loan without security?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-5 tracking-[0.7px]">
                Yes, Machinery loan facilities can be obtained with or without
                the need for collateral or assets.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2 className="font-bold py-2">
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    2. What are the interest rates offered?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-5 tracking-[0.7px]">
                The interest rate for machinery loans is highly flexible and
                attractive, starting at 10.5% per annum, subject to financial
                ratios.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2 className="font-bold py-2">
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    3. How does Terkar Capital determine loan eligibility?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-5 tracking-[0.7px]">
                Terkar Capital understands that you need funding to purchase new
                machinery or upgrade existing equipment. We conduct a financial
                SWOT analysis of your business and use the results to secure
                funding.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default machineryloan;
