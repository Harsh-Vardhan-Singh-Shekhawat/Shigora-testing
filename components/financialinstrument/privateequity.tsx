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
import OtherFinancialInstrument from "@/components/financialinstrument/OtherFinancialInstrument";
import TabFeature from "@/components/Tab";
import { WhatSetApart } from "./WhatSetApart";
import FinanceForm from "./FinanceForm";
const privateDebtArray = [
  {
    id: 1,
    title: "1. Right Time Funding",
    desc: "Every idea and every promoter has the exponential capacity to excel. But it is all about the right time, the right decision, and execution. If the idea has the capacity to go global and if it is supported by the proper infrastructure, the business can expand in a very short time. This is exactly what happens with private equity. So, Private Equity firms understand the stage of the scalability of the business and the proper infrastructure required for the business. We can arrange the required funding at the very right time to excel and go global.",
  },
  {
    id: 2,
    title: "2. Economies of Large Scale",
    desc: "Expansion is essential. Whenever promoters start a business, they have the vision to expand their business at the global level. So, when a Private Equity firm enters into the business they just don’t enter with money. They enter with all the required resources to make the bigger picture.",
  },
  {
    id: 3,
    title: "3. Experts On Board",
    desc: "Along with the equity stake, most of the private equity firms and venture capital take part in the management of the company. So, this helps the overall ecosystem of the company to get better control and create a road map for success.",
  },
  {
    id: 4,
    title: "4. Global Expertise",
    desc: "Private equity firms in India and venture capital operate globally. They are not bound to work in any specific geographical location. This helps to have cross-border expertise. Let’s say your company may have the potential to grow 5 times in India but have the capacity to grow by 10 times in some parts of the world, which you may not know. Thus, global expertise will help you to explore the international market in the best possible ways.",
  },
  {
    id: 5,
    title: "5. Dilution of Equity & Risk",
    desc: "When it comes to equity investment, of course, there is a dilution of the equity. However, the interesting part for the promoters is that it is not just diluting the ownership, it is the dilution of risk associated with the business. So, the private equity players become your partners in all stages of the business as long as they stay invested in your business.",
  },
  {
    id: 6,
    title: "6. No limit on Funding",
    desc: "There is no limit on the maximum amount of funding. If you have a good idea and have the vision to expand the business, then there is no limit on the maximum exposure private equity firms can take on your business.",
  },
  {
    id: 7,
    title: "7. Mutually Agreed Terms",
    desc: "Private Equity investment does not get infused into the business unless the terms and conditions of the agreement are mutually agreed upon. So there is no risk for the promoters to have a hostile takeover of any part of the company management.",
  },
];

const privateEquity = () => {
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
          <h1 className="text-[24px] font-bold py-2">
            Secure funding for your business through Private Debt Instrument
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
          Private Equity Funds
        </h1>

        <p className="py-4 text-[17px] tracking-[0.7px]">
          Private Equity, Venture Capital, and debt funding are all the subject
          of curiosity. But very short road maps are available to reach these
          destinations. Big ideas require Big Execution and Big Execution
          requires Big Money. That’s why we specialize in facilitating private
          equity funds to transform your ideas into tangible realities.
        </p>

        <p className="py-4 text-[17px] tracking-[0.7px]">
          In the Indian economy, there are two major ways of raising capital for
          the business. One is through debt and another is through private
          equity. Both the markets  ( Private Equity and Debt markets) have
          different modes of operations, expectations, and criteria to work
          upon.
        </p>
      </div>

      <div className="py-4">
        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row gap-2">
          <div className="bg-black text-white p-10">
            <h3 className="text-[18px] font-bold">Private Equity</h3>
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

      {/* <TabFeature /> */}

      <div className="text-[#7a7a7a]">
        <h1 className="text-[25px] py-4 text-black  font-bold">
          Features of Private Debt Funding:
        </h1>

        <ol className="list-number">
          {privateDebtArray.map((data) => (
            <li>
              <h3 className="text-black font-bold text-[20px] py-4">
                {data.title}
              </h3>
              <p className="text-[#7a7a7a] tracking-[0.7px] py-4">
                {data.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>

      <div className="text-[#7a7a7a]">
        <h1 className="text-[25px] py-4 text-black  font-bold">
          Private Equity Firm
        </h1>

        <p className="py-4 text-[17px] tracking-[0.7px]">
          We at Terkar Capital work with many national and international debt
          and private equity players. Our deep understanding of client’s needs
          enables us to tailor financing solutions specific to their
          requirements. Drawing upon our expertise, we diligently explore and
          secure financing options from both the Indian and international
          markets. As one of India’s premier private equity firms, we pride
          ourselves on delivering exceptional end-to-end execution throughout
          the fundraising process.
        </p>
      </div>

      <OtherFinancialInstrument />

      <div className="py-10">
        <h1 className="text-[25px] p-4 text-black  font-bold">FAQs</h1>

        <div>
          <Accordion allowToggle>
            <AccordionItem>
              <h2 className="font-bold text-lg border-y-[1px] py-3">
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    The funds will be in dollars or rupees?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-5 tracking-[0.7px]">
                The debt fund can be arranged in dollars (any other foreign
                currency) or in rupees, as per the convenience of the borrower.
                However, it is suggested that if the borrower is not exposed to
                the foreign currency (either through income or expenses), then
                funding should be taken in rupees only.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2 className="font-bold text-lg border-y-[1px] py-3">
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    What will be the rate of interest?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-5 tracking-[0.7px]">
                The rate of interest will be in sync with the Indian economy,
                inflation rate, and MCLR. However, funding currency will be a
                determining factor.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2 className="font-bold text-lg border-y-[1px] py-3">
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Is there a geo limit to private debt?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-5 tracking-[0.7px]">
                As long as the project and business are good, there is no geo
                limit to it. The private debt funding can be arranged in Pune,
                Mumbai, Maharashtra, and any part of India.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2 className="font-bold text-lg border-y-[1px] py-3">
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    What will be the turnaround time to process?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-5 tracking-[0.7px]">
                As the private debt funds follow the flat operational structure,
                there is no time taking process for the sanctions. It works way
                faster than normal banking channel operations.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2 className="font-bold text-lg border-y-[1px] py-3">
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Are the lenders new to the Indian Market?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-5 tracking-[0.7px]">
                The lenders have operated in the Indian Market since 1997. The
                Indian market and the Indian economy are not new to them.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2 className="font-bold text-lg border-y-[1px] py-3">
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Is collateral required?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-5 tracking-[0.7px]">
                Yes. As this funding is in debt format, collateral is required.
                However, there will be total flexibility on the collateral part
                which can be mutually decided.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2 className="font-bold text-lg border-y-[1px] py-3">
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Are the Private Debt players following the Legal Framework?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-5 tracking-[0.7px]">
                Yes. Very much. Private debt players follow all the rules and
                guidelines laid down by RBI and the Government of India.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default privateEquity;
