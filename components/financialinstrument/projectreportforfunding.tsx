import React from "react";
import Marquee from "react-fast-marquee";
import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator } from "@chakra-ui/react";

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

const projectReportFunding = () => {

  return (
    <div className="px-2">
      <div>
        <Marquee pauseOnHover>
          <p className="text-[#7a7a7a] text-[17px]">
            Due to heavy web traffic, if you find the inquiry form is not
            functional, feel free to{" "}
            <b className="text-black tracking-[0.7px]">Book a call</b> with us!!
          </p>
        </Marquee>
      </div>

      <div className=" px-40">
        <div>
        <h1 className="text-[25px] font-bold m-auto  p-2">Project Report for Funding</h1>
        </div>
        <p className="p-2 py- text-[17px] text-[#7a7a7a] tracking-[0.7px]">
        Benjamin Franklin very well said, Fail to plan is planning to fail. So, whenever you’re planning to expand through your existing setup or through your new unit, or through vertical or horizontal expansion, you must be ready with the projections and the plan. There are many questions you need to clarify.
        </p>
      </div>

      <div className=" px-40">
        <div>
        <h1 className="text-[25px] font-bold m-auto  p-2">Key Considerations for Project Evaluation</h1>
        </div>
        <p className="p-2 py- text-[17px] text-[#7a7a7a] tracking-[0.7px]">
        For example, How much time you may be required to set up the unit? How much time is required to make the unit profitable? What is the amount of funds required? What is the discounted value of the cash throughout the project? And many more. We understand how many projections you need to consider and what aspects you need to take care of before starting the projects.

We at Terkar Capital, understand the whole project. Thus, we prepare the project report with the best possible outcomes.
        </p>
      </div>

      <div className=" px-40">
        <div>
        <h1 className="text-[25px] font-bold m-auto  p-2">Avail of Project Report for Funding with Terkar Capital</h1>
        </div>
        <p className="p-2 py- text-[17px] text-[#7a7a7a] tracking-[0.7px]">
        We at Terkar Capital provide a comprehensive analysis of your project, covering all its aspects from conception to execution. It goes beyond simply outlining tasks and timelines, acting as a bridge between your vision and potential external influences. By utilizing financial instruments, the report meticulously analyzes potential outcomes, presenting not just one ideal scenario, but a range of possibilities.

This detailed analysis empowers you to make informed decisions by equipping you with a clear understanding of the various paths your project can take.
        </p>
      </div>

     

      {/* <div className="px-40 w-full">
        <div className="flex gap-2 ">
          <div className="bg-black text-white p-3 w-1/3">
            <h3 className="text-[18px] font-bold">Project report for Funding</h3>
            <h1 className="text-[33px] font-bold">Key Features</h1>
            <ul className="p-5 list-disc tracking-[0.7px]">
              <li>CA-certified project report </li>
              <li>Covering 360-degree aspects to execute the projects</li>
              <li>Connecting the dots between your expectations and externally affecting factors</li>
              <li>Analyze projects with financial tools, and share viable outcomes</li>
              <li>Sharing all the scenarios as input to take your project decisions</li>
            </ul>
          </div>

          <WhatSetApart />
        </div>
      </div> */}

      <OtherFinancialInstrument />


      
    </div>
  );
};

export default projectReportFunding;

const projectImage  = () => {
  
}