import React from "react";
import Marquee from "react-fast-marquee";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
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

const unsecuredbusiness = () => {
  return (
    <div className="p-4 max-w-7xl m-auto">
     

      <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row justify-center gap-2">
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
          Unsecured Business Loans
        </h1>

        <p className="py-4 text-[17px] tracking-[0.7px]">
          Unsecured business loans are a popular choice among Indian businesses
          for addressing short-term financial needs as they advance forward.
          However, Lack of machinery, worker payments, pending bills, and buying
          new stock are just some of the short-term hassles that occur. So, to
          address these hassles Unsecured business loans provide funding
          facilities.
        </p>
        <p className="py-4 text-[17px] tracking-[0.7px]">
          UBL is an unsecured business loan, without collateral. It’s available
          to businesses of all sizes in India, where small and medium businesses
          often struggle without proper financial arrangements. This can impact
          the country’s economy, so banks, lending firms, and financial
          institutions offer these loans with higher interest rates and shorter
          terms.
        </p>
      </div>

      <div className="">
        <div className="flex flex-col sm:flex-col md:flex-crow lg:flex-row gap-2">
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

      <div className="text-[#7a7a7a] py-4">
        <h1 className="text-[25px] py-4 text-black  font-bold">
          Unsecured Business Loans Eligibility
        </h1>

        <p className="py-4 text-[17px] tracking-[0.7px]">
          The eligibility depends on the lending firms or their usual way of
          conduct. So, most of the time, the eligibility criteria for obtaining
          unsecured funding are kept similar by the financial lending
          institutions, As –
        </p>
        <ul className="p-5 list-disc">
          <li>A CIBIL score of over 750 is required in most cases. </li>
          <li>
            The ages of the applicants must be between 25–55. Again, this is not
            applicable to all financial institutions.{" "}
          </li>
          <li>
            The minimum turnover must be 40 lac INR or 50 lac INR depending on
            the lending institution.
          </li>
        </ul>
      </div>

      <div className="text-[#7a7a7a]">
        <h1 className="text-[25px] py-4 text-black  font-bold">
          Interest rate Benefits:
        </h1>

        <p className="py-4 text-[17px] tracking-[0.7px]">
          There are generally two types of interest structures. They are fixed
          interest rates and floating interest rates. In a fixed interest rate
          structure, the amount of EMI remains constantly the same. On a
          floating interest rate structure, the interest is calculated on the
          balance amount.
        </p>
      </div>

      <div className="text-[#7a7a7a]">
        <h1 className="text-[25px]  text-black  font-bold">
          Why choose an Unsecured Business Loans?
        </h1>

        <ul className="list-disc p-5 trackin-[0.7px] text-[17px]">
          <li>
            Unsecured Funding helps with day-to-day operational financial needs,
            such as asset renovation and vendor payments.
          </li>
          <li>
            Businesses can use collateral-free loans to address unexpected
            financial circumstances, such as economic downturns or new taxation
            systems.
          </li>
          <li>
            Unsecured funding can be obtained without the need for collateral
            and can be used to address short-term discrepancies in order to
            achieve long-term goals.
          </li>
          <li>
            It is a business-friendly option that can help companies avoid debt
            and repay loans smoothly.
          </li>
          <li>Unsecured funding helps businesses grow and pay off loans.</li>
        </ul>
      </div>

      <div className="">
        <h1 className="text-[25px]  text-black  font-bold">
          Why Terkar Capital?
        </h1>

        <p className="py-4 text-[#7a7a7a] text-[17px] tracking-[0.7px]">
          Terkar Capital is a financial development firm that provides business
          loans without collateral. We are one of the most modern and
          specialized unsecured business loan facilitators in India. Our
          executives are trained to expedite the process and assist with
          documentation. Thus, the borrower will be fully informed about the
          loan procedure, including the repayment plan. The unsecured funding
          process only begins once both parties have a clear understanding of
          the situation.
        </p>
      </div>
    </div>
  );
};

export default unsecuredbusiness;
