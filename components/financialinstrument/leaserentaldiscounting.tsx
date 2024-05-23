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

const leaserentaldiscounting = () => {
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

      <div className="text-[#7a7a7a]">
        <h1 className="text-[25px] py-4 text-black  font-bold">
          Lease Rental Discounting (LRD Loan)
        </h1>

        <p className="py-4 text-[17px] tracking-[0.7px]">
          The Lease Rental Discounting (LRD) facility is a term loan. The
          borrower gets this loan based on their income from the rented
          property. A major aspect that affects the LRD loan is the availability
          of rent receipts from the tenants or any other relevant proof of
          receiving rent. So, there are several other factors that matter when
          obtaining a lease rental discounting facility.
        </p>
        <p className="py-4 text-[17px] tracking-[0.7px]">
          Owing to the rise of businesses in the country, there are several
          options available for funding in the Indian Debt Market. Lease rental
          discounting (LRD facility) is one such loan. Despite the fact that
          rented property is a steady source of income, the providers of the
          loan are quite limited. Thus, The LRD loan acquires several purposes.
          That includes starting a new business, investing in another property,
          personal reasons, and others.
        </p>
      </div>

      <div className="py-4">
        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row gap-2">
          <div className="bg-black text-white p-10">
            <h3 className="text-[18px] font-bold">Lease Rental Discounting</h3>
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
          Types of LAP Facility
        </h1>

        <div>
          <Tabs orientation="horizontal" isFitted variant="enclosed">
            <TabList mb="1em" className="text-black font-bold text-[20px]">
              <Tab>a. Criteria </Tab>
              <Tab>b. Borrowers </Tab>
              <Tab>c. Loan Amount </Tab>
              <Tab>d. Repayment of the Loan </Tab>
            </TabList>
            <TabPanels className="border-2 p-4 text-[17px]">
              <TabPanel className="">
                <ul className="list-disc">
                  <li>
                    It is a secured loan in which the rented property is the
                    collateral.
                  </li>
                  <li>Provide loans against future expected rent.</li>
                  <li>
                    Leased property with a lease of 5 to 10 years provided with
                    this loan.
                  </li>
                </ul>
              </TabPanel>
              <TabPanel className="">
                <ul className="list-disc">
                  <li>
                    The loan is available to salaried employees, professionals,
                    and self-employed individuals.
                  </li>
                  <li>Firms of all types can get loans</li>
                  <li>
                    Property owners with known brands and corporate tenants are
                    preferred borrowers. Retail also qualifies.
                  </li>
                </ul>
              </TabPanel>
              <TabPanel className="">
                <ul className="list-disc">
                  <li>
                    Loan amounts range from 20 lakhs to 1 Cr, with some
                    organizations offering up to 10 cr.
                  </li>
                  <li>
                    To get a LRD loan, your EMI must be less than 80% of your
                    monthly rent. The loan amount and tenure will be based on
                    this.
                  </li>
                  <li>
                    The loan amount is based on the expected rental income, but
                    less than 80% of that amount. The loan term is shorter than
                    the lease term.
                  </li>
                  <li>
                    The market value of the property is another factor in
                    determining the loan amount. The loan amount is less than
                    70% of the market value of the rented property.
                  </li>
                  <li>
                    They have a maximum tenure of 10-15 years but can be less.
                  </li>
                </ul>
              </TabPanel>
              <TabPanel className="">
                <ul className="list-disc">
                  <li>Escrow account created for loan repayment.</li>
                  <li>This account is for EMI and rent.</li>
                  <li>
                    Lease rental discounting interest rates are 7-11%, similar
                    to property loans.
                  </li>
                </ul>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>

      <OtherFinancialInstrument />
      <div className="text-[#7a7a7a] ">
        <h1 className="text-[25px] p-4 text-black  font-bold">
          LRD Loan Eligibility Criteria
        </h1>

        <p className="py-4 text-[17px] tracking-[0.7px]">
          The eligibility criteria for the loan differ from organization to
          organization. However, there are certain factors as well that will
          affect the eligibility criteria for the loan. A few of the general
          parameters are listed as follows:
        </p>
        <ul className="py-4 px-7 text-[17px] tracking-[0.7px] list-decimal">
          <li>The income of the applicant should be stable.</li>
          <li>Age criteria:
            <ul className="list-disc p-4">
                <li>For salaried applicants: 21 to 60</li>
                <li>For self-employed applicants: 21 to 65</li>
            </ul> 
          </li>
          <li>
            Other liabilities that come along or that might occur in the case of
            loans taken by the individual or firms.
          </li>
        </ul>
      </div>

      <div className="text-[#7a7a7a] ">
        <h1 className="text-[25px] py-4 text-black  font-bold">
        Lease Rental Discounting Facilitator

        </h1>

        <p className="py-4 text-[17px] tracking-[0.7px]">
        The financial institutions that participate in providing such are plenty. However, what makes Terkar Capital stand out is the support and hassle-free service that we have rendered over the years. We have successfully sanctioned LRD loans for the fitted candidates. Thus, supported the candidates throughout the process.


        </p>
      </div>
    </div>
  );
};

export default leaserentaldiscounting;
