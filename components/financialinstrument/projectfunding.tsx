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

const tradingfinance = () => {
  return (
    <div className="px-4 max-w-7xl m-auto">
      

      <div className=" flex items-center flex-col sm:flex-col md:flex-row lg:flex-row">
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

      <div className="text-[#7a7a7a]">
        <h1 className="text-[25px] py-4 text-black  font-bold">
          Trade Financing Solutions
        </h1>

        <p className="py-4 text-[17px] tracking-[0.7px]">
          Today, the calculations of businesses have changed and are changing
          drastically every day, like never before. Now is a great opportunity
          to explore business at the international level, whether it be product
          manufacturing or the services you provide. However, there are several
          challenges associated with dealing with products in the international
          market, such as the challenge of working capital, payment assurance,
          credit periods, and more. Therefore, we are here to offer you trade
          financing solutions that facilitate international trade by providing
          funding and managing financial risks.
        </p>
      </div>

      <div className="">
        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row gap-2">
          <div className="bg-black text-white p-10">
            <h3 className="text-[18px] font-bold">Project Funding</h3>
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
          What is Trade Finance?
        </h1>

        <p className="py-4 text-[17px] tracking-[0.7px]">
          Trade Finance is one of the investment banking instruments that helps
          you to bridge the gap between you and your export business working
          capital. Many companies do not indulge in the export of goods and
          services due to the challenge of working capital and the surety of the
          payment. We at Terkar Capital arrange international trade finance
          solutions for our clients so that they don’t have a working capital
          crunch and can easily explore the international market.
        </p>
        <p className="py-4 text-[17px] tracking-[0.7px]">
          Learn in detail, how we process trade finance here.
        </p>
      </div>

      <div className="text-[#7a7a7a]">
        <h1 className="text-[25px] y-4 text-black  font-bold">
          Why Terkar Capital?
        </h1>

        <p className="py-4 text-[17px] tracking-[0.7px]">
          Terkar Capital is one of the best trade finance companies in India. We
          provide a hassle-free arrangement for trade finance solutions. We
          always stand by business owners and the business community to minimize
          risks and help them achieve the best possible rewards. When dealing
          with international trade and exporting various goods, we can assist
          you with Trade Finance.
        </p>
      </div>

      <OtherFinancialInstrument />


      <div className="py-10">
        <h1 className="text-[25px] p-4 text-black  font-bold">FAQs</h1>

        <div>
          <Accordion allowToggle>
            <AccordionItem>
              <h2 className="font-bold py-2">
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                  Is collateral Required for Trade Finance?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-5 tracking-[0.7px]">
              The most financial product comes with some kind of mortgage, especially in the debt market. However, we at Terkar Capital, arrange the Export Finance without any kind of mortgage.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2 className="font-bold py-2">
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                  At which stage will we get the funding?

                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-5 tracking-[0.7px]">
              The process of business trade finance starts when you receive the Purchase Order (PO). Once we receive a purchase order, we will complete all the required documentation related to the export. Once the goods are shipped, the amount will be released to you.


              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2 className="font-bold py-2">
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                  Should the full amount of the invoice be paid?

                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-5 tracking-[0.7px]">
              There is a risk involved while dealing with unknown customers. When you ship your goods you will be paid almost 90% of the invoice amount (Maximum, depending upon the client and the export country). Once your customer makes the payment to the respective financial institutions, you receive the remaining balance.


              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2 className="font-bold py-2">
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                  How will the interest be charged?

                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-5 tracking-[0.7px]">
              The interest will start only when you will receive the amount. The interest will be applicable until the customer makes the payment. Once the financial institution receives the payment from the client, the process stops charging interest.


              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2 className="font-bold py-2">
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                  What will be the basis of the limit?

                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-5 tracking-[0.7px]">
              The amount of export finance will vary depending on the exporter and the country of the exporter. The better the country, the better the finance you will get.


              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
        
      </div>
    </div>
  );
};

export default tradingfinance;
