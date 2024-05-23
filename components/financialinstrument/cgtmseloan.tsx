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

const cgtmseloan = () => {
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
          Business Loan under CGTMSE
        </h1>

        <p className="py-4 text-[17px] tracking-[0.7px]">
          As a developing country, India has a large number of micro and small
          enterprises. The Government of India has introduced the CGTMSE Scheme
          in response to this particular situation in the Indian economy. It has
          proven to be very beneficial for MSMEs to apply for business loans up
          to 5 cr under CGTMSE, assisting them in growing and revitalizing their
          businesses.
        </p>
        <p className="py-4 text-[17px] tracking-[0.7px]">
          There is much more to the CGTMSE scheme. It has even encouraged
          aspiring entrepreneurs to give a push to their ideas and establish a
          firm. The manufacturing sector, which dominates the landscape of
          Indian MSMEs, has particularly witnessed the positive impact of the
          CGTMSE scheme.
        </p>
      </div>

      <div className="py-4">
        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row gap-2">
          <div className="bg-black text-white p-10">
            <h3 className="text-[18px] font-bold">Bill Discounting</h3>
            <h1 className="text-[33px] font-bold">Key Features</h1>
            <ul className="p-5 list-disc tracking-[0.7px]">
              <li>Government-backed loan</li>
              <li>Collateral-free loan up to 5 Cr</li>
              <li>Finance equipment purchases</li>
              <li>
                Help small businesses grow and expand in a competitive market.
              </li>
              <li>Cover other business expenses</li>
            </ul>
          </div>

          <WhatSetApart />
        </div>
      </div>

      <div className="text-[#7a7a7a] ">
        <h1 className="text-[25px] py-4 text-black  font-bold">
          CGTMSE Loan Coverage
        </h1>

        <p className="py-4 text-[17px] tracking-[0.7px]">
          The Government of India introduced the CGTMSE scheme in the year 2000
          to support small businesses. It stands for Credit Guarantee Fund Trust
          for Micro and Small Enterprises.
        </p>
        <p className="py-4 text-[17px] tracking-[0.7px]">
          The scheme aims at aiding Indian firms that are in their initial
          phases or fall under the MSME. The scheme focuses on providing credit
          guarantees to financial institutions providing loans to MSMEs. The
          applicant owns a small/medium scale business and gets a loan of up to
          5 Crores under CGTMSE. However, there are certain eligibility criteria
          that the candidate needs to match.
        </p>
      </div>

      <OtherFinancialInstrument />
      <div className="text-[#7a7a7a]">
        <h1 className="text-[25px] py-4 text-black  font-bold">
          CGTMSE Loan Documents
        </h1>

        <p className="py-4 text-[17px] tracking-[0.7px]">
          The documents required for CGTMSE loans vary from lender to lender.
          Also from case to case. However, in all scenarios, there is a standard
          set of documents. Those are as follows.
        </p>

        <div>
          <Tabs orientation="vertical"  variant="enclosed-colored">
            <TabList mb="1em" className="text-black font-bold text-[20px]">
              <Tab>KYC Documents</Tab>
              <Tab>Proprietary Firm</Tab>
              <Tab>Private / Public Limited Company/One Person Company:</Tab>
              <Tab>Partnership Firm</Tab>
            </TabList>
            <TabPanels className="border-[1px] border-gray-200 p-4">
              <TabPanel className="">
                <ul className="list-disc">
                  <li>A copy of PAN Card.</li>
                  <li>Proof of Address: (Passport Copy / Aadhaar Card / Electricity Bill / Registered Rent Agreement)</li>
                  <li>Statutory documents</li>

                </ul>
              </TabPanel>
              <TabPanel>
              <ul className="list-disc">
                  <li>Shop Act</li>
                  <li>GST Registration Certificate</li>
                  <li>Udyog Aadhaar Memorandum</li>
                  <li>VAT Registration</li>
                  <li>GST certificate</li>
                  <li>other Registrations Applicable.</li>
                </ul>
              </TabPanel>
              <TabPanel>
              <ul className="list-disc">
                  <li>MOA & AOA, Certificate of Incorporation</li>
                  <li>Certificate of commencement of business in case of a public limited company</li>
                  <li>GST Registration Certificate</li>
                  <li>Shop Act</li>
                  <li>Udyog Aadhaar Memorandum</li>
                  <li>VAT Registration</li>
                  <li>and other Registrations Applicable.</li>
                </ul>
              </TabPanel>
              <TabPanel>
                <div>
                  <h3 className="font-bold py-2">Registered Partnership Deed</h3>

                  <div>
                    <h3 className="font-bold py-3">In Case of LLP</h3>
                    <ul className="list-disc">
                      <li>LLP Agreement</li>
                      <li>Shop Act</li>
                      <li>Udyog Aadhaar Memorandum</li>
                      <li>GST Registration Certificate</li>
                      <li>VAT Registration and</li>
                      <li>Other Registrations Applicable.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold py-3">Income Documents</h3>
                    <ul className="list-disc">
                      <li>Last 3 years Financials (IT Returns, Computation Sheet & Balance-sheet). Proof of turnover vide latest sales/service tax returns and Invoice / Purchase Order Copy (for the loan against receivables)</li>
                      <li>Last 1-year bank statement of all operative bank accounts.</li>
                      <li>Details of all existing loans: Sanction Letter and Loan Account Statement for the last 1 year.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold py-3">Property Documents</h3>
                    <ul className="list-disc">
                      <li>Previous & current sales deed</li>
                      <li>Plant & machinery list</li>
                      <li>Plant & machinery current valuation report</li>
                      <li>Margin money</li>
                      <li>Property photographs</li>
                      <li>Previous property search & valuation report</li>
                    </ul>
                  </div>
                </div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </div>

      <div className="text-[#7a7a7a] ">
        <h1 className="text-[25px] py-4 text-black  font-bold">
        How to apply for a Business Loan under CGTMSE?
        </h1>

        <p className="py-4 text-[17px] tracking-[0.7px]">
        The loan application is submitted to banks, which are then eligible to provide loans under the CGTMSE scheme. Government and private banks are involved in the scheme, which is available even in rural areas. So, here are the steps in obtaining a business loan under the CGTMSE scheme:
        </p>

        <div>
          <Tabs orientation="vertical"  variant="enclosed-colored">
            <TabList mb="1em" className="text-black font-bold text-[20px]">
              <Tab>1. Start your business</Tab>
              <Tab>2. Prepare a project report</Tab>
              <Tab>3. Apply for the sanction of a loan</Tab>
              <Tab>4. Get the CGTMSE coverage</Tab>
            </TabList>
            <TabPanels className="border-[1px] border-gray-200 p-4">
              <TabPanel className="">
              This includes registering your business. Starting the required bank account. And completing other formalities to start your business.
              </TabPanel>
              <TabPanel>
              This is extremely crucial as the chances of your loan getting approved will significantly depend on this. You will have to provide a thorough business plan with all the required details.
              </TabPanel>
              <TabPanel>
              Along with the project report, visit a reputed financial institution or bank to apply for your loan.
              </TabPanel>
              <TabPanel>
              Once your loan is approved, the institution or bank will apply to the relevant CGTMSE scheme. After approval, you can get the loan by paying the required service charges and CGTMSE charges.
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
        
      </div>

      <div className="text-[#7a7a7a] py-4">
        <h1 className="text-[25px] py-4 text-black  font-bold">
        Business Loan under CGTMSE at Terkar Capital
        </h1>

        <p className="py-4 text-[17px] tracking-[0.7px]">
        Terkar Capital, a reliable financial institution and your trusted CGTMSE loan consultant, offers hassle-free unsecured funding of up to 5 cr under the CGTMSE scheme. We provide personalized assistance to help business decision-makers understand the scheme thoroughly and make the best choice for their needs. Our commitment extends beyond the loan process as we value our relationship with borrowers. We strive to ensure their satisfaction with both the loan and our services.
        </p>


        
      </div>
      
    </div>
  );
};

export default cgtmseloan;
