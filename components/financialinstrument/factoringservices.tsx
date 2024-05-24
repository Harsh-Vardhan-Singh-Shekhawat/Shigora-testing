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
          Factoring Services in India
        </h1>

        <p className="py-4 text-[17px] tracking-[0.7px]">
          Businesses that offer high-quality services and products always have
          the potential to expand. In fact, the growth of such businesses can be
          exponential. Expanding a business always requires good resources,
          including financial ones. When it comes to financial resources most
          businesses need working capital support.
        </p>
        <p className="py-4 text-[17px] tracking-[0.7px]">
          The working capital support without any collateral adds real value to
          the business. Hence, Factoring is one such financial instrument that
          can be used to meet working capital requirements.
        </p>
      </div>

      <div className="">
        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row gap-2">
          <div className="bg-black text-white p-10">
            <h3 className="text-[18px] font-bold">Factoring Services</h3>
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
          About Factoring Funding
        </h1>

        <p className="y-4 text-[17px] tracking-[0.7px]">
          Every business takes a particular number of days to convert its
          service or raw material to cash, and that is the reason every business
          needs a credit period, may it be a big or small business. And when the
          service or the raw material is sold on credit, that party becomes the
          debtor of the business. Factoring is the service where a business
          sells its debtors to the factoring company. So, generally, factoring
          companies take charge of the debtors and release the funds to the
          company. Thus, factoring is one of the best-unsecured working capital
          instruments.
        </p>
      </div>

      <div className="text-[#7a7a7a] ">
        <h1 className="text-[25px] py-4 text-black  font-bold">
          Parties Involved In Factoring Services
        </h1>

        <p className="py-4 text-[17px] tracking-[0.7px]">
          In the factoring process, there are three parties involved. One
          company (who sells the debtors), the second party is the Factor, (who
          purchases the debtors), and the third party is the client, (the
          debtor). The whole process of factoring rotates among these three
          stakeholders of the process.
        </p>
        <p className="py-4 text-[17px] tracking-[0.7px]">
          Understand the process of factoring funding from the case study.
        </p>
      </div>

      <div className=" text-[#7a7a7a]">
        <h1 className="text-[25px] py-4 text-black  font-bold">
          Why Factoring Funding?
        </h1>
        <p className="py-1 text-[17px]">
          There are many reasons why one should opt for factoring services.
          Below are a few of them –
        </p>

        <ul className="list-disc tracking-[0.7px] p-5">
          <li>Unsecured Working Capital Funding</li>
          <li>Interest is charged only for the factoring duration.</li>
          <li>Low-Interest rate.</li>
          <li>
            No geo limits for factoring in the debtors. It can be worked out
            across the globe as well.
          </li>
          <li>Easy process to factor in the debtors.</li>
          <li>Long-term working capital solution.</li>
          <li>Can get the benefit of LIBOR + Spread.</li>
          <li>Helps for instant liquidity to the business.</li>
        </ul>
      </div>

      <div className="text-[#7a7a7a] ">
        <h1 className="text-[25px] py-4 text-black  font-bold">
          How Terkar Capital Helps in Factoring Facility Arrangement?
        </h1>

        <p className="py-4 text-[17px] tracking-[0.7px]">
          Terkar Capital stands as one of India’s premier investment banking
          firms, renowned for its professionalism and excellence. We work to
          arrange funds for businesses, be it secured or unsecured funding. So,
          when it comes to factoring, we understand the customer and check the
          feasibility of how well factoring can suit your business. Once we
          analyze and confirm the feasibility of factoring, we search for the
          most suitable factor for your debtors and execute the whole process
          smoothly. We do not factor in the debtors directly.
        </p>
      </div>

      <OtherFinancialInstrument />


      <div className="py-10 ">
        <h1 className="text-[25px] py-4 text-black  font-bold">FAQs</h1>

        <div>
          <Accordion allowToggle>
            <AccordionItem>
              <h2 className="font-bold py-2">
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Do we need to mortgage anything to avail factoring service?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-5 tracking-[0.7px]">
                No. The factoring service does not require any kind of fixed
                asset to be mortgaged. So this helps all kinds of industries.
                Capital and Non-capital intensive industries.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2 className="font-bold py-2">
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    What is the factoring interest rate?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-5 tracking-[0.7px]">
                The rate of interest varies as the geo limit. For domestic
                factoring, the rate of interest will be around 10–12% pa. And
                for the international client, the rate of interest can be around
                4–6% pa (LIBOR+Spread).
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2 className="font-bold py-2">
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Can it be clubbed with other working capital facilities?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-5 tracking-[0.7px]">
                Generally, under CC there is always a charge on the debtors of
                the company. However, under factoring, a factor can take the
                opinion from the existing core banker and can factor the
                debtors. So factoring can be clubbed with any working capital
                facilities you have opted for.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2 className="font-bold py-2">
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Need to change the existing banker?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-5 tracking-[0.7px]">
                No, there is not such requirement or obligation to change the
                existing banker.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2 className="font-bold py-2">
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Does factoring help international clients?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-5 tracking-[0.7px]">
                Yes. In fact, you will get more benefits for international
                clients, as you will get exposure to LIBOR+Spread (generally
                this will be around 3–5% pa).
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2 className="font-bold py-2">
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Does factoring help Indian Clients?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-5 tracking-[0.7px]">
                Yes, It helps to get more benefits for indian clients, as you
                will get exposed to LIBOR+Spread (generally this will be around
                3–5% pa).
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2 className="font-bold py-2">
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Factoring will disturb client credit terms?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-5 tracking-[0.7px]">
                No. Under factoring, there are no changes in the payment terms.
                There are only a few changes like the account where to transfer
                the funds. So there are no disturbances to the credit terms
                between you and the client.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default factoringservices;
