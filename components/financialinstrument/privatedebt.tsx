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

const privateDebtArray = [
  {
    id: 1,
    title: "1. Works under Government Regulations",
    desc: "Private Debt funds work internationally. So they are always very much clear on government rules and regulations. All private debt players are RBI (Reserve Bank of India) and SEBI (Security Exchange Board of India) license holders. Lenders always make sure the funding should not violate any of the government or RBI norms. It is 100% safe and secure to borrow money.        ",
  },
  {
    id: 2,
    title: "2. Highly Flexible",
    desc: "Unlike the banking system, the norms in private debt are very much flexible. The solution can be arranged at the convenience of the client. There is no hard and fast structure to be followed. The amount can be arranged in term loan format or maybe in other required formats, the term can be flexible, the repayment structure can be flexible, and the EMI structure can be flexible. So, in short, all the possibilities can be arranged as long as it helps the business to grow.",
  },
  {
    id: 3,
    title: "3. Fast Execution",
    desc: "The turnaround time to execute the proposal under private debt is very short. It is because there are not many authority levels involved. The structure in the fund houses is very much flat. And the fund houses are very much aggressive about the funding.",
  },
  {
    id: 4,
    title: "4. High Exposure Amount",
    desc: "The private debt players work in international markets with high ticket sizes. So, there is no upper limit on the required amount. As long as the client matches the expectations and meets the fund houses’ criteria, there will not be any concern about the upper exposure limit. The fund houses can take exposure up to some thousand crores.",
  },
  {
    id: 5,
    title: "5. No Equity Dilution",
    desc: "The amount is lent in debt format. So there is no question of equity dilution. Lenders will be comfortable as long as they are getting paid for their interests and principles. However, there is always flexibility in the repayment of the debt. The lender may propose some equity. However, the terms and conditions are mutually agreed upon. Nothing goes forward unless it is mutually agreed upon by both parties.",
  },
  {
    id: 6,
    title: "6. Growth Hacking",
    desc: "When any private debt player infuses funds into any business, they make sure the business must get all the required fuel to grow. The fund houses will make sure you get connected to all the required major players from the market where you can push the growth.",
  },
  {
    id: 7,
    title: "7. Long Term Association",
    desc: "The long-term association helps everyone. The same applies to private debt players. Whenever private debt players infuse the funds, they make sure there should be a long-term association with the client. So, this will stand a win-win condition for both private debt players and clients.",
  },
  {
    id: 8,
    title: "8. Industry Expert",
    desc: "Private debt players do not infuse the funds unless they are well-versed in the industry. So the borrower does not have to put in the effort to make the lender understand industry challenges. Rather, lenders help borrower to deal with the industry challenges in the best way possible.",
  },
  {
    id: 9,
    title: "9. Professional Approach",
    desc: "The lenders work across the globe. They understand their areas of expertise and operation. They always have a professional approach to dealing with the borrower. Lenders will always make sure there should not be any operational obligation to the borrower. So, the borrower can execute the operation in his own style.",
  },
];

const privateDebt = () => {
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
              </div>
              {/* ))} */}
            </div>
          </div>
        </div>
      </div>

      <OtherFinancialInstrument />

      <div className="text-[#7a7a7a] px-40">
        <h1 className="text-[25px] p-2 text-black  font-bold">
          Features of Private Debt Funding:
        </h1>

        <ol className="list-number">
          {privateDebtArray.map((data) => (
            <li>
              <h3 className="text-black font-bold text-[20px] p-2">
                {data.title}
              </h3>
              <p className="text-[#7a7a7a] tracking-[0.7px] p-2">{data.desc}</p>
            </li>
          ))}
        </ol>
      </div>

      <div className="text-[#7a7a7a] px-40">
        <h1 className="text-[25px] p-4 text-black  font-bold">
          Why Terkar Capital?
        </h1>

        <p className="p-5 text-[17px] tracking-[0.7px]">
          Terkar Capital is a private debt funding provider, that offers
          flexible and unconventional financing solutions for businesses that
          may not fit traditional banking operations. We provide fast execution
          of funding proposals with high exposure amounts and no equity
          dilution. However, our focus is on long-term associations with
          clients, bringing industry expertise and a professional approach to
          help businesses navigate challenges and fuel growth.
        </p>
      </div>

      <div className="py-10 px-40">
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
              The debt fund can be arranged in dollars (any other foreign currency) or in rupees, as per the convenience of the borrower. However, it is suggested that if the borrower is not exposed to the foreign currency (either through income or expenses), then funding should be taken in rupees only.
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
              The rate of interest will be in sync with the Indian economy, inflation rate, and MCLR. However, funding currency will be a determining factor.
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
              As long as the project and business are good, there is no geo limit to it. The private debt funding can be arranged in Pune, Mumbai, Maharashtra, and any part of India.
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
              As the private debt funds follow the flat operational structure, there is no time taking process for the sanctions. It works way faster than normal banking channel operations.
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
              The lenders have operated in the Indian Market since 1997. The Indian market and the Indian economy are not new to them.
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
              Yes. As this funding is in debt format, collateral is required. However, there will be total flexibility on the collateral part which can be mutually decided.
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
              Yes. Very much. Private debt players follow all the rules and guidelines laid down by RBI and the Government of India.


              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default privateDebt;
