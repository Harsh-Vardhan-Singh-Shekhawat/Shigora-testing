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

const medicalequipment = () => {
  return (
    <div className="px-2 max-w-7xl m-auto">
      <div>
        <Marquee pauseOnHover>
          <p className="text-[#7a7a7a] text-[17px]">
            Due to heavy web traffic, if you find the inquiry form is not
            functional, feel free to{" "}
            <b className="text-black tracking-[0.7px]">Book a call</b> with us!!
          </p>
        </Marquee>
      </div>

      

      <div className="text-[#7a7a7a]">
        <h1 className="text-[25px] py-4 text-black  font-bold">
        Medical Equipment Loans


        </h1>

        <p className="py-4 text-[17px] tracking-[0.7px]">
        Medical/hospital equipment is often expensive, which can hinder the provision of quality healthcare. Healthcare providers may not have the financial resources to purchase equipment outright, which can limit their ability to provide the most up-to-date and best care to their patients. There are several ways that healthcare providers can overcome this barrier, such as leasing equipment, financing it through a loan, or partnering with a medical equipment company.


        </p>
        <p className="py-4 text-[17px] trackinng-[0.7px]">
        So, we understand the importance of improving healthcare facilities. Whether you’re looking to expand your medical unit with cutting-edge equipment through a doctor’s loan or explore equipment financing options, we’re here to help. Our financing options are intended to be flexible and affordable.


        </p>
      </div>

      <div className="py-4 sm:py-4 md:py-10 lg:py-10">
        <div className="flex flex-col sm:felex-col md:flex-row lg:flex-row justify-center gap-2">
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

      <div className="text-[#7a7a7a] ">
        <h1 className="text-[25px] py-4 text-black  font-bold">
        Medical Equipment Loans at Terkar Capital




        </h1>

        <p className="py-4 text-[17px] tracking-[0.7px]">
        Terkar Capital is a leading medical equipment financing company. We arrange funding or loans to help healthcare organizations acquire medical equipment. This allows them to upgrade their technology, which improves medical services and patient care. So, the influx of funds strengthens our commitment to upgrading healthcare facilities, ensuring better access to equipment and advancing medical treatment capabilities within their network. So, Finance Your Medical Equipment with Terkar Capital Today!!

</p>
      </div>

      <div className="text-[#7a7a7a] ">
        <h1 className="text-[25px] py-4 text-black  font-bold">
        Documents Required to Apply for a Medical Equipment Loans


        </h1>

        <p className="py-5 text-[17px] tracking-[0.7px]">
        The following documentation is required to apply for Medical Equipment Loans.</p>

        <div className="p-4 text-[17px] tracking-[0.7px]">

        <ul className="list-disc">
            <li>Identifying Proof: PAN Card, Aadhar Card

</li>
            <li>Ownership Proof: Electricity bill or Lease Agreement, Passport size Photo

</li>
            <li>Company Documents: Pan Card, Certificate of Incorporation, Udyam Certificate, GST certificate, Rent Agreement or Electricity Bill

</li>
            <li>Financial Audited Report

</li>
            <li>Current Account Banking Statement

</li>
            <li>Medical Degree Certificate

</li>
            <li>vCertificate of Practice

</li>       
        

        </ul>
        </div>
      </div>

      
      

      <div className="text-[#7a7a7a] ">
        <h1 className="text-[25px] py-4 text-black  font-bold">
        Eligibility to Apply for a Medical Equipment Loans



        </h1>

        <div className="p-4 text-[17px] tracking-[0.7px]">

        <ul className="list-disc">
            <li>Indian residents with a minimum of one year of experience

 </li>
            <li>The age range of 25 to 65 years

</li>
            <li>Should have a healthy cash flow and A good credit history
</li>
            <li>Capable of making a down payment of 10-20% of the price of the equipment

</li>

        </ul>
        </div>
      </div>

      <OtherFinancialInstrument />

      
      
    </div>
  );
};

export default medicalequipment;
