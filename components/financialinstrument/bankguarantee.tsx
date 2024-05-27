import React from "react";
import Marquee from "react-fast-marquee";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import FinanceForm from "./FinanceForm";
import { WhatSetApart } from "./WhatSetApart";
import OtherFinancialInstrument from "./OtherFinancialInstrument";

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

const businessguarantee = () => {
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

      <div className="text-[#7a7a7a] py-4">
        <h1 className="text-[25px] text-black  font-bold">
          Bank Guarantee Facility
        </h1>

        <p className="py-4 text-[17px] tracking-[0.7px]">
          In the Indian traditional working capital format, Cash Credit (CC) and
          Overdraft ( OD) are the most famous and commonly known working capital
          facilities. However, over the period, the banking industry has
          developed many products. They have designed considering the
          characteristics of the nature of the businesses. Few of them are
          developed to build trust between buyer and seller. So, among the
          financial instruments, a bank guarantee facility has gained
          prominence.
        </p>
        <p className="py-4 text-[17px] tracking-[0.7px]">
          Generally, working capital facilities can bifurcate into two segments.
          One is fund-based and the other is non-fund-based. However, a Bank
          Guarantee is a non-fund-based credit facility. It is an unsecured debt
          funding instrument. Terkar Capital arranges loans against the bank
          guarantee.
        </p>
      </div>

      <div className=" py-10">
        <div className="flex gap-2">
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

      <div className="text-[#7a7a7a] ">
        <h1 className="text-[25px] py-4 text-black  font-bold">
          Advantages to Apply for a Bank Guarantee Facility
        </h1>
        <ul className="py-4 px-5  list-disc">
          <li>Builds the confidence of performance in the transaction.</li>
          <li>The issuing bank takes the assurance of the payment.</li>
          <li>
            Safeguards the interest of both issuing and receiving parties.
          </li>
          <li>Ease of doing the large value transaction.</li>
          <li>
            Supports the oral commitment and integrity of the issuing party.
          </li>
        </ul>
      </div>

      <div className="text-[#7a7a7a]">
        <h1 className="text-[25px] py-4 text-black  font-bold">
          Documents Required for Bank Guarantee Facility
        </h1>

        <p className="py-4 text-[17px] tracking-[0.7px]">
          To obtain a bank guarantee in India, applicants typically need to
          submit a duly filled application form along with KYC documents,
          business registration papers, and a board resolution for corporate
          entities. Financial statements, collateral documents (if applicable),
          and details of the transaction are also crucial. Legal opinions may be
          sought, and an application fee is usually charged by the issuing bank.
          Applicants should check with the specific bank for any additional
          requirements and follow their guidelines for a smooth application
          process.
        </p>
      </div>

      <div className="text-[#7a7a7a] ">
        <h1 className="text-[25px]  text-black  font-bold">
          Process of BG Backed Transactions
        </h1>

        <p className="py-4 text-[17px] tracking-[0.7px]">
          Whenever the buyer and seller need assurance on the payment and
          delivery of the product or service bank guarantees come into the
          picture. Below is the standard process followed for the BG-backed
          transaction.
        </p>

        <ul className=" py-6 trackin-[0.7px] text-[17px]">
          <h3 className="text-black text-[20px] font-semibold py-4">Step 1</h3>
          <li>
            The buyer/applicant approaches the bank to issue the bank guarantee
            to the seller. The applicant provides all the necessary inputs which
            include, the amount, date, validity period, the purpose of the
            issuance, etc.
          </li>
          <h3 className="text-black text-[20px] font-semibold py-4">Step 2</h3>
          <li>
            Once the bank receives the required documents, it issues the bank
            guarantee to the seller. The bank may charge fees to the
            buyer/applicant. The bank will consider its mortgage/collateral
            before issuing the BG. If the requested amount is more than the
            bank’s comfort, the buyer/applicant may need to arrange for more
            security deposit. circumstances, such as economic downturns or new
            taxation systems.
          </li>
          <h3 className="text-black text-[20px] font-semibold py-4">Step 3</h3>

          <li>
            Once the seller receives the BG from the Buyer, it confirms to the
            seller his assured payment. So the seller can start the execution of
            the order and delivery of the goods and services.
          </li>
          <h3 className="text-black text-[20px] font-semibold py-4">Step 4</h3>

          <li>
            When the seller has performed all the terms and conditions of the
            payments, the buyer has to make the payment to the seller. In any
            case, if the buyer refrains from making the payment or delays the
            payment, then the BG issuing bank is liable to make the payment
            without question to the seller. And if the buyer makes the committed
            payment, then the bank guarantee stands void.
          </li>
        </ul>
      </div>

      <div className="">
        <h1 className="text-[25px]  text-black  font-bold">
          Bank Guarantee Facility at Terkar Capital
        </h1>

        <p className="py-4 text-[17px] text-[#7a7a7a] tracking-[0.7px]">
          Regarding the bank guarantee, multiple banks provide BG issuance and
          discounting facilities. The buyer or seller may be confused about
          which one to opt for. Terkar Capital provides loans against bank
          guarantee. We understand the role of the bank guarantee in India from
          both sides, from the buyer side and the seller side. It is not only
          limited to the issuance of the bank guarantee but also to the
          discounting of the guarantee. We make sure that our professional
          execution helps all the parties (Bank, buyer, and seller) to complete
          the transaction without any hassle.
        </p>
      </div>

      <OtherFinancialInstrument />
    </div>
  );
};

export default businessguarantee;
