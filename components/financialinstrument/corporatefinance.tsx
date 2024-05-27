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
import { WhatSetApart } from "./WhatSetApart";
import FinanceForm from "./FinanceForm";

const corporateArray = [
  {
    id: 1,
    title: "1. Client Interaction",
    desc: "As soon as we get an inquiry from a client, first, we set up a meeting with him. We focus on understanding the requirements of the client and his expectations. This helps us to understand their financial situation, goals, and how to meet their expectations. We tailor everything to their needs.    ",
  },
  {
    id: 2,
    title: "2. SWOT Analysis of the proposal & Capitalising the strengths",
    desc: "Every industry has its own set of strengths and weaknesses. Similarly, every business has its own strengths and challenges. The strengths may include a good labour supply, cheap electricity, and good connectivity, while the challenges may include unstructured debt, high variable costs of raw materials, and so on. At Terkar Capital, we understand all industries and make an effort to understand each company from a financial perspective.Once we analyze the company, we prepare the Financial SWOT. And with the help of strengths and weaknesses, We begin by exploring possible debt options with the client’s expectations at the forefront. Thus, we will help the client with corporate lenders, strategic corporate finance, and so on.",
  },
  {
    id: 3,
    title: "3. Exploring the debt market options and Choosing the best",
    desc: "At this point, we clearly understand the client’s expectations and the company’s financial situation. We then connect the dots with the Indian debt market to explore conventional and non-conventional debt products that may suit the client. We share these options with the client and then discuss corporate finance institutions, interest rates, and other factors. Terkar Capital always keep the client’s best interests in mind and works with them to select one or a combination of debt products.",
  },
  {
    id: 4,
    title: "4.Soft Approval",
    desc: "There are many instances where files abruptly log in at many places and don’t know whether that gets approved or not. We are strictly against this process. So, every time we decide on a product, we take soft approval from the respective financial institutions. Thus, helping everyone to understand the proposal and to have a clear stand on the proposal.So, once we get the soft approval then only log in to the file and execute the whole process of debt fundraising smoothly.",
  },
  {
    id: 5,
    title: "5. Starting the success journey",
    desc: "Once we disburse the funds to the client our assignment doesn’t end here. Rather our relationship with the client starts. We being one of the leading corporate financial management companies, make sure the given debt products work in the best interest of the client and the client should be in a good position to return the debt funds to the lender.So, this will create a win-win condition for all the stakeholders in the debt fundraising process.",
  },
];

const corporatefinance = () => {
  return (
    <div className="p-2 max-w-7xl m-auto">

      <div className="flex justify-between items-center flex-col sm:flex-col md:flex-row lg:flex-row">
        <div className="py-4 ">
          <h1 className="text-[25px] font-bold py-4">
            Grow, optimize, & maximize your business
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
        Corporate Finance in India

        </h1>

        <p className="py-2 text-[17px] tracking-[0.7px]">
        Corporate finance encompasses the crucial aspects and the steps management takes to increase the value of a company. It is considered a liaison between the capital market and the institution. Thus, it deals with the capital formation and development of the corporation.


        </p>
        <p className="py-2 text-[17px] tracking-[0.7px]">
        In practical terms, Corporate finance includes the company’s decisions about its financial results, tools, and analysis used to prioritize and allocate financial resources. So, corporate financing ultimately aims to increase the value of the business by planning & implementing resources and balancing risk & profitability.


        </p>
      </div>

      <div className="py-4">
        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row gap-2">
          <div className="bg-black text-white p-10">
            <h3 className="text-[18px] font-bold">Corporate Finance</h3>
            <h1 className="text-[33px] font-bold">Key Features</h1>
            <ul className="p-5 list-disc tracking-[0.7px]">
              <li>Avail short-term loan </li>
              <li>Collateral-free facility</li>
              <li>Flexible terms</li>
              <li>Convenient funding</li>
              <li>Discounting up to 95% of the invoice amount</li>
            </ul>
          </div>

          {/* <div> */}
            {/* <h1 className="text-[25px] font-bold">What set us apart?</h1> */}
            {/* <div className=""> */}
              {/* {UBLarray.map((data, index) => ( */}
              {/* <div>
                <Tabs orientation="vertical" isFitted variant="enclosed">
                  <TabList
                    mb="1em"
                    className="text-black font-bold text-[20px]"
                  >
                    <Tab>1. Fast Turnaround Time</Tab>
                    <Tab>2. Confidentiality</Tab>
                    <Tab>3. Competitive ROI</Tab>
                    <Tab>4. Hassle-free Processing</Tab>
                    <Tab>5. High Level of Integrity</Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel className="">
                      We cordially track the deadlines and make our quality
                      tangible, while executing finance projects well ahead of
                      time.
                    </TabPanel>
                    <TabPanel>
                      We comply with the highest professional confidentiality
                      standards. All client information is discussed in strict
                      confidentiality.
                    </TabPanel>
                    <TabPanel>
                      We find you the right lenders with the similar terms and
                      the lowest rate of interest.
                    </TabPanel>
                    <TabPanel>
                      We create a stable ownership structure for financiers by
                      establishing a secure transaction process.
                    </TabPanel>
                    <TabPanel>
                      We are building our reputation through reliability,
                      integrity, and honesty. We connect to our clients on
                      personal grounds that include transparency and liability.
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </div> */}

              {/* ))} */}
            {/* </div> */}

          {/* </div> */}
          <WhatSetApart />

        </div>
      </div>


      <div className="text-[#7a7a7a] py-4">
        <h1 className="text-[25px]  text-black py-4 font-bold">
          Features of Private Debt Funding:
        </h1>

        <ol className="list-number">
          {corporateArray.map((data) => (
            <li>
              <h3 className="text-black font-bold text-[20px] py-2">
                {data.title}
              </h3>
              <p className="text-[#7a7a7a] tracking-[0.7px] py-2">{data.desc}</p>
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


      <div className="py-10 ">
        <h1 className="text-[25px] py-4 text-black  font-bold">Corporate Finance Company in India</h1>
        <p className="py-4 text-[17px] tracking-[0.7px]">
        Get a comprehensive understanding of Corporate Finance, Including funding, Capital formation, Resource Planning, and Value maximization. Apply for Corporate Funding with Terkar Capital, and learn how to balance risk and profitability to increase the value of your business.


        </p>
        <div className="border-[1px] ">
          <Accordion allowToggle>
            <AccordionItem>
              <h2 className="font-bold text-lg border-y-[1px] px-3 py-3">
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                  In-Depth Knowledge
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-5 tracking-[0.7px]">
              Terkar Capital understands the role of corporate finance. Also, the dedication that promoters of the company have given to building the business empire and we value that. Finance is a very important part of every business. We make sure all our actions are taken for debt fundraising in such a way that it should help the business to be perpetual.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2 className="font-bold text-lg border-y-[1px] py-3 px-3">
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                  Timely Delivery
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-5 tracking-[0.7px]">
              There is always a cost to the time and who can understand this better than the business people. We make sure, that whenever we take the assignment, it should be delivered timely. This is because a delay in the delivery of the funds, will hamper the promoter’s planning and even will add the cost to the execution.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2 className="font-bold text-lg border-y-[1px] py-3 px-3">
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                  Conventional and Unconventional Debt Products
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-5 tracking-[0.7px]">
              We always keep ourselves updated with the current national and international financial market trends. We always make sure that our clients must get the best products available in the debt market, which can justify their financial needs.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2 className="font-bold text-lg border-y-[1px] py-3 px-3">
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                  Perfect Combination of Compliance and Finance
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} className="p-5 tracking-[0.7px]">
              When a company grows with the turnover and experience it also grows with complexity. While raising the finance there are many areas we have to touch on, including compliance. We make sure the fundraising process should be so smooth that it can justify all the areas associated with it.
              </AccordionPanel>
            </AccordionItem>
            
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default corporatefinance;
