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
import FinanceForm from "./FinanceForm";

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

const lcdiscounting = () => {
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
        LC Discounting Facility

        </h1>

        <p className="py-4 text-[17px] tracking-[0.7px]">
        Every business requires working capital. However over the period, the term “Working Capital” has bifurcated into many areas. It has changed as per the convenience of the participants. In modern times, the “Working Capital Facility” bifurcates into fund-based and Non-fund-based. LC Discounting is one of the best and most convenient Non-fund-based credit facilities. The borrower can avail of this facility from the bank.


        </p>
        <p className="py-4 text-[17px] tracking-[0.7px]">
        In the Indian market, being a developing nation, small to medium to big businesses exist here. Without proper financial arrangements, small and medium businesses struggle. Thus, it can impact the overall profitability of the country’s economy. To counter this issue and exterminate the economic decline banks, lending firms, and financial institutions provide unsecured business loans. Lending the businesses without collateral causes the interest rates to go higher and the loan duration shrinks.


        </p>
      </div>


      <OtherFinancialInstrument />
      <div className="">
        <div className="flex gap-2">
          <div>
            <h1 className="text-[25px] py-4 font-bold">Steps Involved in the Discounting of LC</h1>
            <div className="">
              {/* {UBLarray.map((data, index) => ( */}
              <div className="text-[#7a7a7a] tracking-[0.7px]">
                <Tabs orientation="horizontal"  variant="enclosed">
                  <TabList
                    mb="1em"
                    className="text-black font-bold text-[20px]"
                  >
                    <Tab> Step 1 </Tab>
                    <Tab> Step 2 </Tab>
                    <Tab> Step 3 </Tab>
                    <Tab> Step 4 </Tab>
                    <Tab> Step 5 </Tab>
                    <Tab> Step 6 </Tab>
                    <Tab> Step 7 </Tab>
                  </TabList>
                  <TabPanels className="border-2 h-40">
                    <TabPanel className="">
                    The buyer has to issue the LC to the seller. So he has to approach his banker and request for the issuance of the LC. While applying for the LC the applicant has to provide all the required details for the LC issuance. That may include, the name of the seller, the swift code, amount, details of the products and shipments, etc.


                    </TabPanel>
                    <TabPanel>
                    Once all the details are received, the opening bank will issue the LC to the seller. Here the LC issuing bank or advising bank will add the name of the advising bank or where LC is expected to get discounted.


                    </TabPanel>
                    <TabPanel>
                    Once LC is issued, the advising bank will cross-check the authenticity and the given details. If advising banks that justify all the given inputs are correct then it will send the LC to the seller and if any corrections need to be done, it will again send the details to the issuing bank.


                    </TabPanel>
                    <TabPanel>
                    Receipt of the LC by the seller. At this stage, the seller receives the LC from the buyer. This is the confirmation to the seller that now his payment is confirmed. So, he starts the proceeding for the shipment of the goods.


                    </TabPanel>
                    <TabPanel>
                    Once the goods are manufactured and shipped to the buyer they will not reach immediately to the buyer. Here the seller will get the bill of lading from the port where he has shipped the goods. The seller will take this bill of lading and will submit it to the advising/ negotiating bank.


                    </TabPanel>
                    <TabPanel>
                    At this stage, the negotiating bank will take the bill of lading and confirm all the terms and conditions complied with. Once those are confirmed, the advising bank will issue the payment to the seller. This process is also known as LC discounting. At this stage, the advising bank will send the documents to the opening bank (The bank that has issued the LC) and will demand the payment.


                    </TabPanel>
                    <TabPanel>
                    Once the opening bank receives all the documents, the bank confirms everything with the buyer. Once the buyer confirms all the documents are OK, the issuing bank will take the payment from the buyer and will make the payment to the advising bank.


                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </div>
              {/* ))} */}
            </div>
          </div>
        </div>
      </div>

      <div className="text-[#7a7a7a] ">
        <h1 className="text-[25px] py-4 text-black  font-bold">
        LC Discounting Facility at Terkar Capital

        </h1>

        <p className="py-4 text-[17px] tracking-[0.7px]">
        Terkar Capital provides LC discounting, a non-fund-based credit facility that offers working capital without collateral, competitive interest rates, flexible loan terms, and a quick application process. It is a great option for businesses in India looking for a reliable and affordable source of working capital.
        </p>
      </div>
    </div>
  );
};

export default lcdiscounting;
