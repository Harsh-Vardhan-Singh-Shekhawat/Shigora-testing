import React from "react";
import Marquee from "react-fast-marquee";
import OtherFinancialInstrument from "./OtherFinancialInstrument";
import { WhatSetApart } from "./WhatSetApart";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
  } from "@chakra-ui/react";

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

const Professionalloanforca = () => {
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
        Professional Loan for Chartered Accountants


        </h1>

        <p className="py-4 text-[17px] tracking-[0.7px]">
        Chartered accountants can apply for a professional loan based on the duration of their experience in the field. They must present a CoP (certificate of Practice) that was obtained at least two years before the loan application date. Various banks and Non-Banking Financial Institutions (NBFCs) in India issue business loans to chartered accountants.


        </p>
        <p className="py-4 text-[17px] trackinng-[0.7px]">
        We at Terkar Capital Assist you in availing professional loans for chartered accountants. The funding amounts start from 25 lakhs, while the ROI is as competitive as 10.5%, subject to financial ratios. Our CA professional loans are designed to be hassle-free to apply for, quickly disbursed, and have convenient repayment terms with no additional fees.


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
        Documents Required to Chartered Accountants Loan


        </h1>

        <p className="py-5 text-[17px] tracking-[0.7px]">
        The following are the essential documents required for a Chartered Accountants Loan:


        </p>

        <div className="p-4 text-[17px] tracking-[0.7px]">
          <ul className="list-disc">
            <li>Business Proof:  Practice Certificate, Partnership Deed (in case of partnership firm), Qualification Certificate, Shop Act Licence, MOA, AOA.
</li>
            <li>
            Address proofs:  Aadhaar card, Passport, Sales deed, Driving Licence, Ration Card, Telephone Bill, Electricity Bill, or Property Purchase Agreement (If the purpose of the loan is to purchase a property).

            </li>
            <li>
            Photo Identity proof

            </li>
            <li>Income Proof: Bank statement, Latest ITR, Latest Audited Financials
</li>
          </ul>
        </div>
      </div>

      <div className="text-[#7a7a7a] ">
        <h1 className="text-[25px] py-4 text-black  font-bold">
        Eligibility to Apply for Chartered Accountants Loan


        </h1>

        <div className="p-4 text-[17px] tracking-[0.7px]">
          <ul className="list-disc">
            <li>3+ years of post-qualification work experience
</li>
            <li>A minimum annual income of ₹1 lakh
</li>
            <li>Age between 23 to 65 when the loan matures
</li>
            <li>
            Good CIBIL score

            </li>
            <li>
            Profession must have been profitable in the past two years

            </li>
          </ul>
        </div>
      </div>

      <div className="text-[#7a7a7a] ">
        <h1 className="text-[25px] py-4 text-black  font-bold">
        Benefits of Professional Loan for Chartered Accountants


        </h1>

        <div className="p-4 text-[17px] tracking-[0.7px]">
          <ul className="list-disc">
            <li>Expand or renovate the existing space

</li>
            <li>Scale-up operations

</li>
            <li>Establish or buy new office space

</li>
            <li>
            Pay for overhead costs


            </li>
            <li>
            Upgrade your office infrastructure


            </li>
            <li>
            Hiring new staff

            </li>
            <li>
            Meeting working capital requirements

            </li>
          </ul>
        </div>
      </div>


      <div className="text-[#7a7a7a] ">
        <h1 className="text-[25px] py-4 text-black  font-bold">
        Terkar Capital for Chartered Accountants Loan


        </h1>

        <p className="py-4 text-[17px] tracking-[0.7px]">
        Terkar Capital facilitates professional loans tailored specifically for chartered accountants in India. We conduct a financial SWOT of the company and capitalise on its strengths to raise the funds at the lowest cost of borrowing. However, the loans aim to assist chartered accountants in expanding, renovating, scaling up operations, establishing new offices, covering overhead costs, upgrading infrastructure, hiring staff, and meeting working capital requirements. So, Let’s Explore!!


        </p>
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
                  1. What is the rate of interest for a CA Professional Loan?




                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-5 tracking-[0.7px]">
              The CA Professional Loan is a competitive financing option with one of the lowest rates available. It starts with as low as 10.5% PA, subjecting to the financial ratios.



              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2 className="font-bold py-2">
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                  2. What are the charges for prepayment of a Professional loan?



                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-5 tracking-[0.7px]">
              Our loans can help you pay down your debt faster, which can save you money in the long run. There are no prepayment penalties or fees for CA Professional Loans.


              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2 className="font-bold py-2">
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                  3. When Is the Best Time for Chartered Accountants to Consider Business Loans?


                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-5 tracking-[0.7px]">
              Chartered accountants should consider business loans when they anticipate expansion, investment in technology, or during periods of low interest rates. It’s advisable to assess the firm’s financial health and have a clear business plan before seeking financing.


              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2 className="font-bold py-2">
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                  4. Do I need to put up collateral to qualify for a professional loan?




                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-5 tracking-[0.7px]">
              Not really, as this is an unsecured funding. As such, you do not need to provide collateral to qualify for the sanction.



              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2 className="font-bold py-2">
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                  5. How to get unsecured loans for chartered accountants?


                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-5 tracking-[0.7px]">
              Chartered accountants can get unsecured loans through a strong credit history, steady income, and a sound business plan.



              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Professionalloanforca;
