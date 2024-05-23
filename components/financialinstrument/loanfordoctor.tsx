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

const loanfordoctor = () => {
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
            Professional Loan for Doctors
        </h1>

        <p className="py-4 text-[17px] tracking-[0.7px]">
        Like white-collar workers, medical professionals or doctors need adequate loans to stay up-to-date on the most recent healthcare procedures and treatments. At various points in a physician’s career, the money might be used to build their medical practice, set up a clinic, buy expensive medical equipment, or rent hospital space.

        </p>
        <p className="py-4 text-[17px] trackinng-[0.7px]">
        Terkar Capital is aware of this and provides doctors with or without collateral loans to assist them in achieving their financial objectives. Our doctor loans are designed to be adaptable and affordable. They also provide several appealing benefits, such as quick disbursement, a customisable repayment period, and no foreclosure fees.

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
        Terkar Capital for a professional loan for Doctors


        </h1>

        <p className="py-4 text-[17px] tracking-[0.7px]">
        Terkar Capital understands the specific financial requirements of doctors and offers flexible and affordable doctor loans to set up clinics, increase bed capacity, purchase medical equipment and other expenses.
        </p>
        <p className="py-4 text-[17px] tracking-[0.7px]">
        Our doctor’s working capital finances are designed to be versatile, providing benefits such as rapid disbursement, a tailored repayment period, and no foreclosure fees. Doctors can use their property as collateral to obtain unsecured business loans with us, which can help them achieve their financial goals.</p>
      </div>

      <div className="text-[#7a7a7a] ">
        <h1 className="text-[25px] py-4 text-black  font-bold">
        Documents Required to Apply for Professional Loan for Doctors
        </h1>

        <p className="py-5 text-[17px] tracking-[0.7px]">
        Securing a professional loan for doctors depends on submitting the necessary documents. The success and duration of the loan application process are directly affected by the availability and accuracy of the required documents.
        </p>

        <div className="p-4 text-[17px] tracking-[0.7px]">

        <ul className="list-disc">
            <li>The highest professional degree confirms qualification.
</li>
            <li>MCI Registration Proof
</li>
            <li>KYC Proof: Aadhaar, Passport, Voter ID, Driver’s license, and PAN cards 
</li>
            <li>Address Proof: Aadhaar, Passport, Voter ID, or a Driver’s license
</li>
            <li>A six-month bank statement.
</li>
            <li>CA certified/audited ITR and financial statements for the past 2 years. Proof of continued operation (ITR, trade license, establishment certificate, sales tax certificate).
</li>
            <li>Additional Required Documents, such as the Sole Proprietary Declaration Certified Copies of the Partnership Agreement
</li>       
            <li>Director-certified original copy of MOA, AOA, and Board Resolution.
</li>

        </ul>
        </div>
      </div>

      
      

      <div className="text-[#7a7a7a] ">
        <h1 className="text-[25px] py-4 text-black  font-bold">
        Eligibility to Apply for a Professional Loan for Doctors


        </h1>

        <div className="p-4 text-[17px] tracking-[0.7px]">

        <ul className="list-disc">
            <li>The applicant should possess a recognized medical degree such as MBBS, MD, MS, or equivalent.
 </li>
            <li>May require professional experience often ranging from 3 to 5 years in medical practice.
</li>
            <li>An age range of 25 to 65 years A good credit history and score is essential.</li>
            <li>The doctor should be registered with the respective medical council in India.
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
                  1. Is CIBIL score important for availing doctor loan?


                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-5 tracking-[0.7px]">
              Indeed, banks take into account your CIBIL report and repayment history when deciding how much money to lend you.


              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2 className="font-bold py-2">
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                  2. What are the charges for prepayment of a doctor’s loan?


                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-5 tracking-[0.7px]">
              Prepayment penalties for doctor’s loans may vary by lender and terms.

starting at 10.5% per annum, subject to financial
                ratios.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2 className="font-bold py-2">
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                  3. Is a loan against property available for doctors?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-5 tracking-[0.7px]">
              Yes, by mortgaging their property, doctors can profit from this financing opportunity. Depending on the mortgaged property, a loan amount of up to 5 cr may be offered.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default loanfordoctor;
