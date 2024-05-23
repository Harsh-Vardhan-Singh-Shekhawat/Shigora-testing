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

const loanforarchitect = () => {
  return (
    <div className="px-2 max-w-7xl m-auto">
      <div>
        <Marquee pauseOnHover>
          <p className="text-[#7a7a7a] text-[17px]">
            Due to heavy web traffic, if you find the inquiry form is not
            functional, feel free to{" "}
            <b className="text-black tracking-[0.7px]">Book a call</b> with us!!
          </p>
        </Marquee>
      </div>

      <div className="text-[#7a7a7a]">
        <h1 className="text-[25px] py-4 text-black  font-bold">
          Loan for Architect Professionals
        </h1>

        <p className="py-4 text-[17px] tracking-[0.7px]">
          Architect professionals often require funding to keep pace with the
          ever-evolving industry standards. Whether it’s expanding their
          architecture firm, Investing in advanced design software, or securing
          office space in prime locations, architecture loan plays a pivotal
          role.
        </p>
        <p className="py-4 text-[17px] trackinng-[0.7px]">
          At Terkar Capital, we understand the unique needs of architects, and
          we’re here to offer tailored solutions. Our loans for architect
          professionals are versatile and competitive, ensuring you have the
          financial freedom you need. With our usps like speedy loan disbursal,
          flexible repayment plans, and zero foreclosure charges, we’re
          committed to helping you achieve your financial goals effortlessly.
        </p>
      </div>

      <div className="py-4 sm:py-4 md:py-10 lg:py-10">
        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row justify-center gap-2">
          <div className="bg-black text-white p-10">
            <h3 className="text-[18px] font-bold">Bill Discounting</h3>
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

      <div className="text-[#7a7a7a] ">
        <h1 className="text-[25px] py-4 text-black  font-bold">
          Terkar Capital for Architect Professionals Loan
        </h1>

        <p className="py-4 text-[17px] tracking-[0.7px]">
          At Terkar Capital, we comprehend the diverse financial requirements of
          architects in this dynamic field. We provide customized loans tailored
          to their needs, be it expanding their firms, Invest in design
          software, or securing prime office spaces. We facilitates quick loan
          approvals, flexible repayment plans, and no foreclosure charges to
          help architects reach their financial goals in a changing industry.
        </p>
      </div>

      <div className="text-[#7a7a7a] ">
        <h1 className="text-[25px] py-4 text-black  font-bold">
          Documents required to Apply for Architect Professionals Loan
        </h1>

        <p className="py-5 text-[17px] tracking-[0.7px]">
          The following documentation is required to apply for a Professional
          Loan for Architect:
        </p>

        <div className="p-4 text-[17px] tracking-[0.7px]">
          <ul className="list-disc">
            <li>Photo identity and Address proof</li>
            <li>Proof of continuation</li>
            <li>Ownership proof of residence</li>
            <li>
              Business Proof: Shop Act License/MOA & AOA/GST registration/ITR,
              Partnership Deed.
            </li>
            <li>
              Based on Banking: 1-year ITR & Computation, 12 months banking
            </li>
            <li>On the Basis of Degree: 3 months of banking</li>
            <li>
              On the Basis of Income: 2 years ITR & financials, 12 months
              banking
            </li>
            <li>
              Director-certified original copy of MOA, AOA, and Board
              Resolution.
            </li>
          </ul>
        </div>
      </div>

      <div className="text-[#7a7a7a] ">
        <h1 className="text-[25px] py-4 text-black  font-bold">
          Eligibility to Apply for a Loan for Architect Professionals
        </h1>

        <div className="p-4 text-[17px] tracking-[0.7px]">
          <ul className="list-disc">
            <li>You need to be an Indian resident.</li>
            <li>Must be a licensed architect professional.</li>
            <li>The age must be 25-64 to apply.</li>
            <li>
              You must be able to showcase a professional diploma or degree in
              your current job field.
            </li>
            <li>
              The loan applicant must be a non-salaried individual. (In case of
              business loan for Architect)
            </li>
          </ul>
        </div>
      </div>

      <OtherFinancialInstrument />

      <div className="py-10">
        <h1 className="text-[25px] p-4 text-black  font-bold">FAQs</h1>

        <div className=" border-gray-200">
          <Accordion allowToggle>
            <AccordionItem>
              <h2 className="font-bold py-2">
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    1. Is CIBIL score important for availing architect
                    professionals loan?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-5 tracking-[0.7px]">
                Banks consider your CIBIL report and repayment history when
                determining how much money to lend you.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2 className="font-bold py-2">
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    2. Are repayment and interest rates fixed throughout the
                    loan term?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-5 tracking-[0.7px]">
                The loan repayment and interest charges will remain the same for
                the entire loan term.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2 className="font-bold py-2">
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    3. How can I get a professional loan for an architect?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-5 tracking-[0.7px]">
                There are several lenders available to meet your finance needs
                in this extremely competitive business. However, Terkar Capital
                can help you find the best lender for your financial needs, with
                low fees and interest rates. They can also help with long-term
                loan issues.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2 className="font-bold py-2">
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    4. What minimum gross receipts must be shown in order to
                    qualify for an architect loan?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-5 tracking-[0.7px]">
                To qualify for an architect loan, a minimum of 5 lakh in gross
                revenue must be presented.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default loanforarchitect;
