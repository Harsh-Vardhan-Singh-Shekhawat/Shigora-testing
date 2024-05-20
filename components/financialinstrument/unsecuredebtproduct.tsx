import React from "react";
import Marquee from "react-fast-marquee";
import { Tabs, Tab, TabPanels, TabPanel, TabList } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const financeArray = [
//   {
//     img: "/Corporate-finance.webp",
//     title: "Corporate Finance",
//     desc: "Discover how corporate finance plays a vital role in maximizing your company’s value and growth. From funding strategies to resource allocation, our expert team utilizes powerful financial tools and SWOT analysis to prioritize and enhance your financial resources",
//     link: "financial-instruments/corporate-finance",
//   },
{
    img: "/Unsecured-business-loans-1.webp",
    title: "Unsecured Business Loan",
    desc: "Overcome short-term hurdles like machinery purchases, employee payments, pending bills, and stocking up on inventory. With no collateral required, this loan option is perfect for business owners seeking financial flexibility and convenience",
    link: "financial-instruments/unsecured-business-loans",
  },
  {
    img: "/Working-capital-finance.webp",
    title: "Working Capital Financing",
    desc: "Manage your business effectively by securing working capital finance. Simplify your financial management and keep operations running smoothly with the difference between current assets and liabilities. Ensure seamless purchasing and operational payments with working capital finance in India.",
    link: "financial-instruments/working-capital-finance",
  },
  {
    img: "/CGTMSE-loan.webp",
    title: "Loan under CGTMSE",
    desc: "The government-backed scheme is designed to fuel the growth of micro and small enterprises. From boosting existing enterprises to empowering new ventures, the CGTMSE scheme has revolutionized the manufacturing sector and breathed new life into the Indian economy.",
    link: "financial-instruments/business-loan-under-cgtmse",
  },
  {
    img: "/Trade-Financing-Solutions.webp",
    title: "Trade Finance",
    desc: "Expand your business internationally and overcome the challenges of working capital, payment security, and credit periods. We offer Trade financing and expert management of financial risks to ensure seamless international trade.",
    link: "financial-instruments/trade-finance-company",
  },
  {
    img: "/Bill-Discounting.webp",
    title: "Bill Discounting",
    desc: "Get your working capital quickly and fuel your business growth with bill discounting. Submit your invoices to financial institutions with minimal documentation and receive prompt payment. Boost your cash flow and propel your company forward.",
    link: "financial-instruments/bill-discounting",
  },
  {
    img: "/LC-discounting.png",
    title: "LC Discounting",
    desc: "Discover the power of LC Discounting, a modern and hassle-free non-fund based credit facility, designed to meet your business’s working capital needs. Benefit from the flexibility and ease of LC Discounting, available through your trusted banking partner.",
    link: "financial-instruments/lc-discounting",
  },
  {
    img: "/factoring-funding.webp",
    title: "Factoring Services",
    desc: "Factoring is the service where a business sells its debtors to the factoring company. Generally, factoring companies take charge of the debtors and release the funds to the company. So, gain access to working capital support without the need for collateral.",
    link: "financial-instruments/factoring-services",
  },
  {
    img: "/Bank-Guarantee.webp",
    title: "Bank Guarantee",
    desc: "Our expert financial solutions are tailored to meet your business needs and foster trust between buyers and sellers. From fund-based options to non-fund-based credit facilities like Bank Guarantees, we have got you covered.",
    link: "financial-instruments/bank-guarantee",
  },
  
  
  
];

const unsecureddebtproduct = () => {
  return (
    <div className="max-w-7xl m-auto">
      <div>
        <Marquee pauseOnHover>
          <p className="text-[#7a7a7a] text-[17px]">
            Harness the power of Financial Instruments & Transform your business
            landscape!!
            <b className="text-black tracking-[0.7px]">Book a call</b> with us!!
          </p>
        </Marquee>
      </div>

      <div>
        <h1 className="text-[30px] font-bold pt-4  ">
            Unsecured Debt Products
        </h1>

        <div className=" py-4 sm:py-4 md:py-8 lg:py-8">
        <p className="text-[#7a7a7a] tracking-[0.7px] px-2 py-4">
        Unsecured business loans are a popular choice for businesses in India. It addresses short-term financial needs as they advance. However, Lack of machinery, worker payments, pending bills, and buying new stock are just some of the short-term hassles that occur. So, to address these hassles, Terkar Capital facilitates unsecured debt funding products.
        </p>
        <p className="text-[#7a7a7a] tracking-[0.7px] px-2 py-4">
        The unsecured business loans are accessible to businesses of various types and sizes in India. This type of financing often presents a challenge for small and medium-sized businesses that lack adequate financial resources and arrangements.
        </p>
        </div>
      </div>

      <div className="text-center py-10">
        <div className="py-4">
          <h1 className="text-[25px] font-bold ">Unsecured Debt Products</h1>
          <p className="uppercase font-semibold text-[15px] text-[#7a7a7a]  ">
            We covered in these areas
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-3">
          {financeArray.map((data) => (
            <div key={data.title} className="shadow-md p-3">
              <Image
                width={350}
                height={350}
                src={data.img}
                alt="services-img"
              />
              <div className="py-5">
                <h3 className="text-[22px] font-bold tracking-[0.7px] py-2">
                  {data.title}
                </h3>
                <p className="p-1 text-left text-[17px] tracking-[0.7px] text-[#7a7a7a] ">
                  {data.desc}
                </p>
              </div>
              <div className=" ">
                <Link
                  href={data.link}
                  className="text-lg font-semibold tracking-wide border-2 border-black   bg-black relative bottom-0 rounded-full text-white hover:text-black py-2 px-4 hover:bg-white transition duration-300  "
                >
                  Let's Explore
                </Link>
              </div>
            </div>
          ))}
        </div>

    
      </div>
    </div>
  );
};

export default unsecureddebtproduct;
