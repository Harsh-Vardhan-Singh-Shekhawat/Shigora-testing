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

const msmeloan = () => {
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

      <div className="flex items-center px-40">
        <div className="p-5">
          <h1 className="text-[25px] font-bold py-4">
            Facilitating MSMEs with easy access to business loans
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

        <div className="shadow-lg w-1/2  p-4 m-4">
          <div className="w-full  ">
            <form className="  rounded px-4 mb-4">
              <div className="mb-4">
                <input
                  className="border-[#d7d7d7] border-[1px] text-[#4e4e4e] appearance-none  w-full py-4 px-4 text-gray-700 leading-tight shadow focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Full Name"
                />
              </div>
              <div className="mb-4">
                <input
                  className="border-[#d7d7d7] border-[1px] text-[#4e4e4e] appearance-none  w-full py-4 px-4 text-gray-700 leading-tight shadow focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email Address"
                />
              </div>
              <div className="mb-4">
                <input
                  className="border-[#d7d7d7] border-[1px] text-[#4e4e4e] appearance-none  w-full py-4 px-4 text-gray-700 leading-tight shadow focus:outline-none focus:shadow-outline"
                  id="mobile"
                  type="text"
                  placeholder="Cell Number"
                />
              </div>

              <div className="flex">
                <div className="mb-4 w-1/2">
                  <input
                    className="border-[#d7d7d7] border-[1px] text-[#4e4e4e] appearance-none  w-full py-4 px-4 text-gray-700 leading-tight shadow focus:outline-none focus:shadow-outline"
                    id="location"
                    type="text"
                    placeholder="Business Location"
                  />
                </div>
                <div className="mb-4 w-1/2">
                  <input
                    className="border-[#d7d7d7] border-[1px] text-[#4e4e4e] appearance-none  w-full py-4 px-4 text-gray-700 leading-tight shadow focus:outline-none focus:shadow-outline"
                    id="location"
                    type="text"
                    placeholder="Company Vintage"
                  />
                </div>
              </div>

              <div className="flex ">
                <div className="mb-4 w-1/2">
                  <input
                    className="border-[#d7d7d7] border-[1px] text-[#4e4e4e] appearance-none  w-full py-4 px-4 text-gray-700 leading-tight shadow focus:outline-none focus:shadow-outline"
                    id="location"
                    type="text"
                    placeholder="Amount Looking FOr"
                  />
                </div>
                <div className="mb-4 w-1/2">
                  <input
                    className="border-[#d7d7d7] border-[1px] text-[#4e4e4e] appearance-none  w-full py-4 px-4 text-gray-700 leading-tight shadow focus:outline-none focus:shadow-outline"
                    id="location"
                    type="text"
                    placeholder="Company Turnover"
                  />
                </div>
              </div>

              <div>
                <textarea
                  rows={5}
                  placeholder="Soft Comment on Company & Director CIBIL"
                  className="border-[#d7d7d7] border-[1px] text-[#4e4e4e] appearance-none  w-full py-4 px-4 text-gray-700 leading-tight shadow focus:outline-none focus:shadow-outline"
                ></textarea>
              </div>

              <div className="">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-5  focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="text-[#7a7a7a] px-40">
        <h1 className="text-[25px] p-4 text-black  font-bold">
          Business Loans for MSMEs
        </h1>

        <p className="p-5 text-[17px] tracking-[0.7px]">
          The GOI enacted the MSMED Act 2006. As the name states, the definition
          of MSMEs consists of Micro, small, and medium-scale enterprises. This
          sector accounts for almost one-third of India’s economy and plays a
          significant role in driving growth. So, accelerating your MSME
          business needs simplified processes and easy access to business loans
          without collateral. That’s why we are here to assist in expediting
          growth by providing hassle-free access to business loans for MSMEs in
          India.
        </p>
      </div>

      <div className="px-40">
        <div className="flex gap-2">
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

          <div>
            <h1 className="text-[25px] font-bold">What set us apart?</h1>
            <div className="">
              {/* {UBLarray.map((data, index) => ( */}
              <div>
                <Tabs orientation="vertical" >
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
              </div>
              {/* ))} */}
            </div>
          </div>
        </div>
      </div>

      <OtherFinancialInstrument />

      <div className="text-[#7a7a7a] px-40">
        <h1 className="text-[25px] p-4 text-black  font-bold">
          Challenges Faced by MSMEs in India
        </h1>

        <p className="p-5 text-[17px] tracking-[0.7px]">
          Micro, Small, and Medium Enterprises (MSMEs) are the backbone of the
          Indian economy. They contribute to 45% of India’s total industrial
          employment and 50% of India’s total exports. MSME industries currently
          manufacture more than 6000 types of products. Therefore, when these
          industries grow, the country’s economy will also thrive. Several
          financial institutions offer unsecured business loans to MSMEs to
          cover business-related expenses. The applicant must meet the MSME loan
          eligibility requirements. The Reserve Bank of India (RBI) and the
          Government of India define MSME loans as loans to businesses to help
          them in areas such as infrastructure, finance, and others. There are
          certain government schemes under which certain financial institutions
          offer loans for MSMEs. For instance, CGTMSE, PMEGP, MUDRA Loan, RAMP,
          CBFTE, PMS and others.
        </p>
      </div>

      <div className="text-[#7a7a7a] px-40">
        <h1 className="text-[25px] p-4 text-black  font-bold">
          Machinery Loan Providers
        </h1>

        <p className="p-5 text-[17px] tracking-[0.7px]">
          MSMEs play a vital role in India’s growth but face funding challenges.
          That’s where our expertise in Machinery loans for businesses comes in.
          A machinery loan is a term loan that allows MSMEs to purchase
          state-of-the-art equipment to increase productivity. At Terkar
          Capital, we specialize in providing effortless loans against machinery
          in India. It provides small or medium-sized businesses with the
          capital they need to grow their business and compete in their
          industry.
        </p>
      </div>

      <div className="text-[#7a7a7a] px-40">
        <h1 className="text-[25px] p-4 text-black  font-bold">
          Challenges Faced by MSMEs in India
        </h1>

        <p className="p-5 text-[17px] tracking-[0.7px]">
          Micro, Small, and Medium Enterprises (MSMEs) are the backbone of the
          Indian economy. They contribute to 45% of India’s total industrial
          employment and 50% of India’s total exports. MSME industries currently
          manufacture more than 6000 types of products. Therefore, when these
          industries grow, the country’s economy will also thrive. Several
          financial institutions offer unsecured business loans to MSMEs to
          cover business-related expenses. The applicant must meet the MSME loan
          eligibility requirements. The Reserve Bank of India (RBI) and the
          Government of India define MSME loans as loans to businesses to help
          them in areas such as infrastructure, finance, and others. There are
          certain government schemes under which certain financial institutions
          offer loans for MSMEs. For instance, CGTMSE, PMEGP, MUDRA Loan, RAMP,
          CBFTE, PMS and others.
        </p>
      </div>
      <div className="text-[#7a7a7a] px-40">
        <h1 className="text-[25px] p-4 text-black  font-bold">
        MSME loan eligibility
        </h1>

        <div className="p-5 text-[17px] tracking-[0.7px]">
          <ul>
            <li>The business should be across the service or manufacturing sector in order to avail of the Loans for MSMEs in India.</li>
            <li>The investments in the service sector should not exceed Rs. 5 crores.</li>
            <li>Age above 25 years.</li>
            <li>The business should have been in operation for more than six months if the fund is borrowed for business expansion.</li>
            <li>The business setup should not be in the blacklist categories.</li>
          </ul>
        </div>
      </div>

      <div className="text-[#7a7a7a] px-40">
        <h1 className="text-[25px] p-4 text-black  font-bold">
        Govt schemes for MSMEs in Pharmaceutical Sector
        </h1>

        <div className="p-5 text-[17px] tracking-[0.7px]">
        The government of India launched 3 schemes to make the pharma industry Atma nirbhar, additional resilient and future-ready. Those are as below –

        <ul className="list-disc">
            <li>PTUAS Scheme </li>
            <li>API-CF Scheme</li>
            <li>PMPDS Scheme</li>
        </ul>
        </div>
      </div>

      <div className="text-[#7a7a7a] px-40">
        <h1 className="text-[25px] p-4 text-black  font-bold">
        Business Loans for MSMEs at Terkar Capital
        </h1>

        <p className="p-5 text-[17px] tracking-[0.7px]">
        Terkar Capital offers easy access to business loans for MSMEs in India, supporting this crucial sector that contributes significantly to the country’s economy. We offer MSME loans for new businesses, with a deep understanding of customers’ financial strengths and weaknesses, We provide personalized financial solutions, ensuring a smooth loan process.
        </p>
      </div>

      <div className="text-[#7a7a7a] px-40">
        <h1 className="text-[25px] p-4 text-black  font-bold">
        Government Measures to Support MSMEs during the COVID-19 Pandemic
        </h1>

        <div className="p-5 text-[17px] tracking-[0.7px]">
        On 13 May 2020, the government announced a COVID-19 relief package for the MSMEs. Here are some key highlights:
        <ol className="list-decimal">
            <li>
                <div>
                Banks and NBFCs to provide Emergency Credit Line to MSMEs to up to 20% of entire outstanding credit as of 29.2.2020
                <ul className="list-disc">
                    <li>Eligible Borrowers- Up to Rs 25 crore of the outstanding loan and up to Rs 100 crore of turnover.</li>
                    <li>The tenure of the loan is 4 years with a 1-year moratorium.</li>
                    <li>100% credit guarantee covered by the government to Banks and NBFCs.</li>
                    <li>Interest Capped and No Guarantee Fee</li>
                    <li>Scheme available till 31st Oct 2020</li>
                </ul>
                </div>
            </li>
            <li>Subordinated Debt along with partial guarantee support from the government to banks for providing Rs 20,000 crore subordinated debt to stressed and NPA MSMEs. The government took the risk to cover up to the first 20% of the loss.</li>
            <li>Fund of Funds with a corpus of Rs 10,000 crore to be set up to provide equity funding support to MSMEs with high growth potential</li>
            <li>Global Tenders for any government procurement of up to Rs 200 crore are disallowed which means more opportunities for domestic MSMEs</li>
            <li>All MSME receivables from the Government and CPSEs will be released in the next 45 days.</li>
        </ol>
        
        </div>
      </div>
    </div>
  );
};

export default msmeloan;
