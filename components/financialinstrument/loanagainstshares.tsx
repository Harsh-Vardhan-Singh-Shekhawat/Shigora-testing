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
      <div>
        <Marquee pauseOnHover>
          <p className="text-[#7a7a7a] text-[17px]">
            Due to heavy web traffic, if you find the inquiry form is not
            functional, feel free to{" "}
            <b className="text-black tracking-[0.7px]">Book a call</b> with us!!
          </p>
        </Marquee>
      </div>

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
          Loan Against Shares (LAS) Facility
        </h1>

        <p className="py-4 text-[17px] tracking-[0.7px]">
          LAS is also known as Loan Against Shares or securities. As per the
          Indian banking system, it is always important to have the security to
          raise funds. The higher the security the better the possibility, of
          course, business cash flow is one of the important parts of the
          consideration.
        </p>
        <p className="py-4 text-[17px] tracking-[0.7px]">
          When it comes to security, financial institutions will consider
          security which includes – Fixed assets, Gold, bonds, Shares, Mutual
          Funds, Fixed deposits etc. Under LAS, Financial Institutions consider
          Bonds, Shares, and Mutual Funds as security to arrange debt funding
          security.
        </p>
      </div>

      <div className=" py-4">
        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row gap-2">
          <div className="bg-black text-white p-10">
            <h3 className="text-[18px] font-bold">Loan Against Shares</h3>
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
          Loan Against Shares in India
        </h1>

        <p className="py-4 text-[17px] tracking-[0.7px]">
          At Terkar Capital, we understand the importance of providing financial
          solutions that meet your needs. That’s why we offer a service called
          Loan Against Shares or Securities (LAS facility). In the Indian
          banking system, having security is crucial when raising funds. The
          more secure your assets, the higher the likelihood of obtaining the
          funds you require. Of course, we also take your business’s cash flow
          into account, as it plays a significant role in our evaluation
          process.
        </p>
        <p className="py-4 text-[17px] tracking-[0.7px]">
          So, with our head office in Pune and a corporate office in Mumbai, we
          are strategically positioned to serve you nationwide.
        </p>
      </div>

      <OtherFinancialInstrument />

      <div className="py-10 ">
        <h1 className="text-[25px] p-4 text-black  font-bold">FAQs</h1>

        <div>
          <Accordion allowToggle>
            <AccordionItem>
              <h2 className="font-bold py-2">
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    What is the Turnaround time to raise the funds?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-5 tracking-[0.7px]">
                This is one of the liquid tradable securities. And does not
                require much due diligence. So the turnaround time to raise the
                funds will be of 5-6 working days.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2 className="font-bold py-2">
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    What is the interest rate?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-5 tracking-[0.7px]">
                There is no specific consideration for the interest rate. It
                will be regular and based on the repo rate.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2 className="font-bold py-2">
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    What is the Loan to Value Ratio?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-5 tracking-[0.7px]">
                The loan to value ratio depends on the rating of the security.
                It starts with 40% and may go up to Rs. 90% of the market value.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default factoringservices;
