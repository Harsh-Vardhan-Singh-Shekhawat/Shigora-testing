import React from "react";
import Marquee from "react-fast-marquee";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { WhatSetApart } from "./WhatSetApart";
import FinanceForm  from "./FinanceForm";
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

const billdiscounting = () => {
  return (
    <div className="p-4 max-w-7xl m-auto">
      

      <div className="flex items-center flex-col sm:flex-col md:flex-row lg:flex-row">
        <div className="py-4">
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
          Bill Discounting Facility
        </h1>

        <p className="py-4 text-[17px] tracking-[0.7px]">
          Bill discounting, also known as invoice discounting, is a business
          practice in which a seller receives payment immediately after issuing
          an invoice to their customer, provided they meet certain requirements.
          You can get your payment by submitting the invoice to the relevant
          financial institutions along with minimal documentation. Bill
          discounting facility not only helps you get working capital but also
          helps your company grow quickly.
        </p>
      </div>

      <div className="py-4">
        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row gap-2">
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

      {/* <div>
        <Tabs orientation="vertical" isFitted variant="enclosed">
          <TabList mb="1em" className="text-black font-bold text-[20px]">
            <Tab>1. Speeding up the Working Capital cycle</Tab>
            <Tab>2. More working capital, more expansion</Tab>
            <Tab>3. Pay interest only on the money that you discounted</Tab>
            <Tab>4. Early Payment to Suppliers</Tab>
            <Tab>5. No Mortgage</Tab>
            <Tab>6. Suitable For Working Capital</Tab>
          </TabList>
          <TabPanels 
          >
            <TabPanel className="">
            Many times working capital gets blocked in an unpaid invoice which can be problematic for the companies. In other words, bill discounting can help you get your cash quickly by allowing you to sell your bills of exchange at a discount.
            </TabPanel>
            <TabPanel>
            If you have more working capital, it can lead to faster growth of your business. You don’t have to wait for 50 days or 90 days for your payments. Through bill discounting you can get the payment almost immediately.
            </TabPanel>
            <TabPanel>
            You will only pay interest for the amount of money you discount and for the time period you use the money. This is a very convenient and flexible option for most businesses and firms. Best fit for working capital management.
            </TabPanel>
            <TabPanel>
            Many businesses have cash flow problems, and they can’t pay suppliers on time. So, Bill discounting can help you pay suppliers early, which can strengthen your relationship with them.
            </TabPanel>
            <TabPanel>
            We offer bill discounting facility without a mortgage or collateral.
            </TabPanel>
            <TabPanel>
            We offer bill discounting facility without a mortgage or collateral.
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div> */}

      <div className="text-[#7a7a7a]">
        <h1 className="text-[25px] py-4 text-black  font-bold">
          Bill Discounting companies for MSMEs
        </h1>

        <p className="py-4 text-[17px] tracking-[0.7px]">
          Indian financial institutions are still not in a better position to
          understand the needs of MSMEs and provide them with adequate funding.
          Approximately 75% of the MSMEs do not possess any collateral to offer
          to the banks, leading to a constant shortage of working capital. In
          order to address this working capital problem, a bill discounting
          facility in India emerges as the most favourable and suitable option
          from all perspectives.
        </p>
      </div>

      <div className="text-[#7a7a7a]">
        <h1 className="text-[25px] py-4 text-black  font-bold">
          Bill Discounting Rate of Interest
        </h1>

        <p className="py-4 text-[17px] tracking-[0.7px]">
          Currently, in the Indian debt market, unsecured funding starts with
          16% PA, that too in the term loan format. When you consider the option
          of Bill Discounting, this comes under working capital financial
          instruments. Even if this is an unsecured product the rate of interest
          starts with 12% PA and you have to pay only for the period you use the
          bill discounting facility. As soon as your customer pays the invoice,
          the interest living cycle stops.
        </p>
      </div>

      <div className="text-[#7a7a7a] py-4">
        <h1 className="text-[25px]  text-black  font-bold">Documentation</h1>

        <p className="py-4 text-[17px] tracking-[0.7px]">
          The whole process of the documentation is very simple and time-saving.
          Initially, when you approach us we get all the major documentation
          done. Once the limit is approved you only have to submit the invoice
          and in a day or two, the amount gets credited to your account.
        </p>
      </div>

      <div>
        <h1 className="text-[25px]  text-black  font-bold">
          Bill Discounting Facility Provider
        </h1>

        <p className="py-4 text-[17px] tracking-[0.7px]">
          Terkar Capital is one of the leading bill discounting companies in
          India. We help businesses reduce risk, access better financial
          instruments, and ultimately lower costs and improve their bottom line.
          We are one of the most advanced and highly specialized bill
          discounting syndication companies. Terkar Capital takes the time to
          comprehend our clients’ financial strengths and weaknesses before
          recommending the most appropriate financial products.
        </p>
      </div>
    </div>
  );
};

export default billdiscounting;
