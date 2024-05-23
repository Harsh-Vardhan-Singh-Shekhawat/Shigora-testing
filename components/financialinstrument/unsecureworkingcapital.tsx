import React from "react";
import Marquee from "react-fast-marquee";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
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

const unsecureworkingcapital = () => {
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

      <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row justify-center items-center gap-2 ">
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
        Unsecured Working Capital Loan

        </h1>

        <p className="py-4 text-[17px] tracking-[0.7px]">
        Finance can be appealing for companies in need of working capital, but at times securing a loan is no easy feat. For a business to get a loan, they usually need to pledge some kind of collateral or asset. So, unsecured working capital becomes a very powerful instrument. It is perhaps the most convenient type of loan to apply for, requiring minimal or no upfront money, and eliminating the necessity to pledge any collateral.
        </p>
        <p className="py-4 text-[17px] tracking-[0.7px]">
        Cash is considered the blood for business health. The better it circulates, the healthier the condition remains. However, the cash is in working capital format. It is one of the prime requirements of every business. The reason is very simple – to justify the growing demand in the market. Be it any industry – manufacturing, service, or trading, all industries require working capital. The working capital facility is given by the bankers, which major includes – OD Facility, Dropline OD, Cash Credit, BG facility, etc.
        </p>
      </div>

      <div className="py-10">
        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row  gap-2">
          <div className="bg-black text-white p-10">
            <h3 className="text-[18px] font-bold">Unsecured Business Loan</h3>
            <h1 className="text-[33px] font-bold">Key Features</h1>
            <ul className="p-5 list-disc tracking-[0.7px]">
              <li>The minimum funding amount of 25 Lacs</li>
              <li>Smooth Processing</li>
              <li>Simple terms and less paperwork</li>
              <li>Loan repayment period: 12-96 months.</li>
              <li>End-to-end Execution</li>
            </ul>
          </div>

         <WhatSetApart />
        </div>
      </div>


      <div className="text-[#7a7a7a]">
        <h1 className="text-[25px] py-4 text-black  font-bold">
        Collateral Requirement
        </h1>

        <p className="py-4 text-[17px] tracking-[0.7px]">
        Conventionally, all these instruments require collateral. Most of the time, the collateral is available to the manufacturing industry. But how the service and trading industry can justify their working capital requirement? Because the service and trading industry creates the intellectual properties of fixed assets, like the manufacturing industry.

        </p>
        <p className="py-4 text-[17px] tracking-[0.7px]">
            
We at Terkar Capital understand the promoter’s requirement for working capital and the financial institutions’ requirement for collateral. And so is the reason we have to find out the middle way where we can arrange the working capital loan without collateral, that is unsecured working capital.
        </p>
      </div>

      <div className="text-[#7a7a7a]">
        <h1 className="text-[25px]  text-black  font-bold">
        Unsecured Working Capital Loan Eligibility
        </h1>

        <ul className="list-disc p-5 trackin-[0.7px] text-[17px]">
          <li>
          The age of the owner/shareholder must be between 21 and 65 years old.
          </li>
          <li>
          Business Vintage – A minimum of 3 years of business vintage is required. (Annual turnover and profitability criteria may vary as per the financial institutions).
          </li>
          <li>
          A good credit score, financial stability, and repayment history are all important factors.
          </li>
          <li>
          There should be no previous loan defaults with any financial institution.
          </li>
          <li>This facility can be arranged for all financial institutions except HUF. </li>
        </ul>
      </div>

      <div className="">
        <h1 className="text-[25px] py-4  text-black  font-bold">
        Why choose unsecured working capital?
        </h1>

        <p className="py-4 text-[17px] tracking-[0.7px]">
        A working capital loan is a pivotal component for a business- be it small/medium or large scale, that is striving to succeed. However, sometimes procuring a debt is not an easy feat without pledging an asset or collateral. That’s where an unsecured working capital loan comes to your rescue – a powerful tool to support your business growth without the need for collateral.
        </p>
      </div>

      <OtherFinancialInstrument />


      <div className="">
        <h1 className="text-[25px]  text-black  font-bold">
        Why Terkar Capital?
        </h1>

        <p className="py-4 text-[17px] tracking-[0.7px]">
            Terkar Capital is a leading financial firm in India that specializes in providing efficient and expeditious unsecured working capital loans. Our firm is committed to offering cutting-edge business financing solutions. When it comes to securing working capital for your expanding company, Terkar Capital is the ultimate go-to source. We understand the challenges faced by businesses and ensure a seamless experience in obtaining collateral-free working capital.
        </p>
      </div>
    </div>
  );
};

export default unsecureworkingcapital;
