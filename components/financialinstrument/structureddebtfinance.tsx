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
import FinanceForm from "./FinanceForm";

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

const structuredebt = () => {
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
            Facilitating Stuctured Debt for easy access to business loans
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
        Structured Debt Financing
        </h1>

        <p className="py-4 text-[17px] tracking-[0.7px]">
        Every company has its own unique structure. The company’s operations, financial requirements, and everything else changes in response to changes in the industry and the company’s stage of development. At one point in time, the company cannot raise funds without security. So, Collateral becomes an integral part of the debt capital raising process. However, what if the company crosses the turnover of Rs. 500 crores and needs the working capital facility or expansion fund of Rs. 100 crores or 150 crores? In this case, the structured debt fund comes into the picture.
        </p>
      </div>

      <div className="py-4">
        <div className="flex flex-col sm:flex-col mf:flex-row lg:flex-row gap-2">
          <div className="bg-black text-white p-10">
            <h3 className="text-[18px] font-bold">Stuctured Debt Finance </h3>
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


      <div className="text-[#7a7a7a] py-10">
        <h1 className="py-4 text-[25px]  text-black  font-bold">
        Structured Debt Financing at Terkar Capital


        </h1>

        <p className=" text-[17px] tracking-[0.7px]">
        Empower your company’s growth with Terkar Capital’s specialized structured debt financing instrument. Our tailored financial instruments are designed to meet the unique needs of your company, whether you require working capital or expansion funds. So, With Terkar Capital, you don’t need to worry about collateral or credit ratings. We understand the strength areas of your business and raise funding based on your cash flow and potential. So, take the next step towards success by reaching out to Terkar Capital.


        </p>
      </div>

    

      <div className="text-[#7a7a7a] py-0">
        <h1 className="text-[25px] text-black py-4 font-bold">
        What is Structured Debt Finance?


        </h1>

        <p className="py-2 text-[17px] tracking-[0.7px]">
        Structured debt is the financial product which is the combination of many financial instruments and if required, syndication as well. This is 100% tailor-made – meant for company solutions only. 


        </p>
      </div>


    
      <div className="text-[#7a7a7a] py-10">
        <h1 className="text-[25px] text-black py-4 font-bold">
        Why Structured Debt Financing?

        </h1>

        <div className="list-decimal text-[17px] tracking-[0.7px]">
          <ul>
            <li>The business should be across the service or manufacturing sector in order to avail of the Loans for MSMEs in India.</li>
            <li>The investments in the service sector should not exceed Rs. 5 crores.</li>
            <li>Age above 25 years.</li>
            <li>The business should have been in operation for more than six months if the fund is borrowed for business expansion.</li>
            <li>The business setup should not be in the blacklist categories.</li>
          </ul>
        </div>
      </div>

      <OtherFinancialInstrument />

      <div className="py-10">
        <h1 className="text-[25px] p-4 text-black  font-bold">Advantages of Loan for Professionals</h1>

        <div>
          <Accordion allowToggle>
            <AccordionItem>
              <h2 className="font-bold py-2">
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                  1. No Collateral Funding
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-5 tracking-[0.7px]">
              Professional Loan is the area of the business where the promoters do not need to create fixed assets. This class generally creates intellectual capital. So there is always a grave area for funding – where professionals need the funding and lenders need to safeguard their interest. However, considering the qualification and contribution to society, the optimum amount of funds can be arranged.


              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2 className="font-bold py-2">
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                  2. Cheap Cost of Funds



                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-5 tracking-[0.7px]">
              The rate of interest offered to the professional is way lower than the regular cases, even though it is without security. So it really does not make much of a difference if you offer collateral or not. Still, you as a professionally qualified have an edge to get the funding at the best possible rate.



              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2 className="font-bold py-2">
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                  3. Fast Turnaround Time



                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-5 tracking-[0.7px]">
              The turnaround time to raise the funds under Professional Loan is as low as a day’s time. Same day it will be analyzed – processed – and disbursed. So whenever there is an emergency of funds, this is the best way to raise the fast and cheap cost of funds. 



              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2 className="font-bold py-2">
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                  4. Flexible Repayment



                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-5 tracking-[0.7px]">
              Under a professional loan, there is good flexibility to use the funds. You can take the funds in term loan format, or Drop line OD format or you can also take for one year or 5 years. There is not much of an obligation levied on the uses and tenure of the funds.


              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2 className="font-bold py-2">
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                  5. To Set-Up or Expand the Facility


                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-5 tracking-[0.7px]">
              This being the service industry, the professional does not require the funds for the working capital, as they do not need to purchase the raw materials or sell the finished goods. In most of cases, the funds are required to set up the unit or expand the existing facility or office. Thus, for all these uses the funds can be made available. 

              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
        
      </div>

      


    </div>
  );
};

export default structuredebt;
