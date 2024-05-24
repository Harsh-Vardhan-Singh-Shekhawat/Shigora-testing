import React from "react";
import Marquee from "react-fast-marquee";
import { Tabs, Tab, TabPanels, TabPanel, TabList } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import FinanceForm from "@/components/financialinstrument/FinanceForm";

const financeArray = [
  {
    img: "/Corporate-finance.webp",
    title: "Corporate Finance",
    desc: "Discover how corporate finance plays a vital role in maximizing your company’s value and growth. From funding strategies to resource allocation, our expert team utilizes powerful financial tools and SWOT analysis to prioritize and enhance your financial resources",
    link: "financial-instruments/corporate-finance",
  },
  {
    img: "/Unsecured-business-loans-1.webp",
    title: "Unsecured Working Capital",
    desc: "As a business decision-maker, you understand that working capital is crucial for sustained growth and meeting market demand. Whether you’re in manufacturing, services, or trading, having sufficient working capital is essential to thriving in today’s competitive landscape",
    link: "financial-instruments/project-report-for-funding",
  },
  {
    img: "/Medical-Equipment-Finance.webp",
    title: "Medical Equipment Finance",
    desc: "Expensive medical equipment can make it tough to provide quality healthcare. So, Healthcare providers can lease, finance, or partner to get the equipment they need. Hence, We at Terkar Capital offer flexible, affordable financing options for medical equipment.",
    link: "financial-instruments/medical-equipment-finance",
  },
  {
    img: "/Debt-syndication-1.webp",
    title: "Debt Syndication",
    desc: "Unlock the unlimited financial potential for your business with debt syndication funding. Expand your operations, invest in new equipment or fuel growth – whatever your goals, we’ve got you covered. Say hello to endless possibilities for your business with us.",
    link: "financial-instruments/debt-syndication",
  },
  {
    img: "/Trade-Financing-Solutions.webp",
    title: "Trade Finance",
    desc: "Expand your business internationally and overcome the challenges of working capital, payment security, and credit periods. We offer Trade financing and expert management of financial risks to ensure seamless international trade.",
    link: "financial-instruments/trade-finance-company",
  },
  {
    img: "/builder-finance.webp",
    title: "Builder Finance",
    desc: "Our expert team understands the creative vision behind every piece of land and works tirelessly to turn your ideas into reality. Trust us to handle all your financial needs ethically and efficiently, so you can focus on building the estate of tomorrow.",
    link: "financial-instruments/builder-finance",
  },
  {
    img: "/Bill-Discounting.webp",
    title: "Bill Discounting",
    desc: "Get your working capital quickly and fuel your business growth with bill discounting. Submit your invoices to financial institutions with minimal documentation and receive prompt payment. Boost your cash flow and propel your company forward.",
    link: "financial-instruments/bill-discounting",
  },
  {
    img: "/Foreign-currency.webp",
    title: "Foreign Currency Funding",
    desc: "Whether it’s US Dollars, Euros, or other global currencies, we offer flexible loan options tailored to your business needs. Secure your loan by mortgaging your property or utilizing it for export/import business, LC, BG, and more.",
    link: "financial-instruments/foreign-currency-funding",
  },
  {
    img: "/factoring-funding.webp",
    title: "Factoring Services",
    desc: "Factoring is the service where a business sells its debtors to the factoring company. Generally, factoring companies take charge of the debtors and release the funds to the company. So, gain access to working capital support without the need for collateral.",
    link: "financial-instruments/factoring-services",
  },
  {
    img: "/Sugar-pledge-funding.webp",
    title: "Sugar Pledge Loan",
    desc: "Tap into your idle sugar stock and convert it into cash with our expert assistance. We understand the complexities of securing funds against sugar pledges, so we simplify the process for you. So, benefit from minimum interest rates and a hassle-free experience",
    link: "financial-instruments/sugar-pledge-funding",
  },
  {
    img: "/LC-discounting.png",
    title: "LC Discounting",
    desc: "Discover the power of LC Discounting, a modern and hassle-free non-fund based credit facility, designed to meet your business’s working capital needs. Benefit from the flexibility and ease of LC Discounting, available through your trusted banking partner.",
    link: "financial-instruments/lc-discounting",
  },
  {
    img: "/Bank-Guarantee.webp",
    title: "Bank Guarantee",
    desc: "Our expert financial solutions are tailored to meet your business needs and foster trust between buyers and sellers. From fund-based options to non-fund-based credit facilities like Bank Guarantees, we have got you covered.",
    link: "financial-instruments/bank-guarantee",
  },
  {
    img: "/Loan-against-property.webp",
    title: "Loan Against Property",
    desc: "Overcome business hurdles effortlessly with this long-term loan secured by your valuable property. Lending institutions consider it the safest option, making it easily accessible for borrowers. Experience the freedom to conquer financial challenges with confidence.",
    link: "financial-instruments/loan-against-property-service",
  },
  {
    img: "/Working-capital-finance.webp",
    title: "Working Capital Financing",
    desc: "Manage your business effectively by securing working capital finance. Simplify your financial management and keep operations running smoothly with the difference between current assets and liabilities. Ensure seamless purchasing and operational payments with working capital finance in India.",
    link: "financial-instruments/working-capital-finance",
  },
  {
    img: "/Lease-Rental-Discounting.webp",
    title: "Lease Rental Discounting",
    desc: "Owing to the rise of businesses in the country, there are several options available for loans in the Indian Debt Market. Lease rental discounting is one such loan. So, explore the wide range of loan options available in the Indian Debt Market to fuel your growth with a steady income source.",
    link: "financial-instruments/lease-rental-discounting",
  },
  {
    img: "/CGTMSE-loan.webp",
    title: "Loan under CGTMSE",
    desc: "The government-backed scheme is designed to fuel the growth of micro and small enterprises. From boosting existing enterprises to empowering new ventures, the CGTMSE scheme has revolutionized the manufacturing sector and breathed new life into the Indian economy.",
    link: "financial-instruments/business-loan-under-cgtmse",
  },
  {
    img: "/funding-for-school.webp",
    title: "Funding for Schools",
    desc: "Recognizing the significance of education in shaping individuals’ lives, we believe that schools are the vital foundation for success. Thus, Terkar Capital offers accessible funding solutions tailored specifically for schools, enabling you to contribute to this noble cause.",
    link: "financial-instruments/funding-for-schools",
  },
  {
    img: "/MSME-Loan.webp",
    title: "Loan for MSMEs",
    desc: "We provide hassle-free loans for Micro, Small, and Medium Enterprises (MSMEs). As an expert in financial solutions, we understand the importance of supporting this vital sector, which contributes nearly one-third to India’s economy.",
    link: "financial-instruments/msme-loan",
  },
  {
    img: "/Unsecured-business-loans-1.webp",
    title: "Unsecured Business Loan",
    desc: "Overcome short-term hurdles like machinery purchases, employee payments, pending bills, and stocking up on inventory. With no collateral required, this loan option is perfect for business owners seeking financial flexibility and convenience",
    link: "financial-instruments/unsecured-business-loan",
  },
  {
    img: "/machinery-loan.webp",
    title: "Loan for Machinery",
    desc: "Getting a machinery loan is an effective way of enhancing the business as it offers a higher level of eligibility, and quick financing. We focus on providing our clients with the most beneficial machinery loan. Get a loan against the machine at ease.",
    link: "financial-instruments/machinery-loan",
  },
  {
    img: "/Private-Debt-funding.webp",
    title: "Private Debt",
    desc: "Private Debt Fund specifically addresses the substantial gap in regional financing markets to deal with the industry challenges in the best way possible. The private debt players follow all the rules and guidelines laid down by the RBI and the Govt of India.",
    link: "financial-instruments/private-debt",
  },
  {
    img: "/Project-report-for-funding.webp",
    title: "Project Report For Funding",
    desc: "Project report funding allows better management of cash flow. We at Terkar Capital understand the whole project business cash inflow, monitoring the cash-out flow. Get a detailed and full-fledged project report for funding and obtain an assured loan for your project. Contact us.",
    link: "financial-instruments/project-report-for-funding",
  },
  {
    img: "/Structured-debt-funding.webp",
    title: "Structured Debt Finance",
    desc: "In structured debt, many financial instruments are combined, and if necessary, syndication is required as well. This is 100% tailor-made – meant exclusively for company solutions. To facilitate the growth of company, Terkar Capital works with respective finance institutions and clients",
    link: "financial-instruments/structured-debt-financing",
  },
  {
    img: "/Loan-for-professionals-square2.webp",
    title: "Loan For Professionals",
    desc: "Loan for Professionals is a credit product designed for professionals. The professionals generally include – CAs, ICWA, CS, Doctors, and Architects. The purpose of professional loans is to provide credit to individuals who are working professionals in the business world.",
    link: "financial-instruments/loan-for-professionals",
  },
  {
    img: "/Loan-against-shares.webp",
    title: "Loan Against Shares",
    desc: "Unlock your business potential with LAS (Loan Against Shares / Securities). With LAS, you can leverage your bonds, shares, and mutual funds as security to secure debt funding. Empower your business with the right financial backing today",
    link: "financial-instruments/loan-against-shares",
  },
  {
    img: "/Private-Equity-funding.webp",
    title: "Private Equity Services",
    desc: "We arrange private equity instruments across India. Whether you’re venturing into private equity, venture capital, or private equity funds, we understand the challenges and the need for substantial funding",
    link: "financial-instruments/private-equity",
  },
  {
    img: "/Project-funding.webp",
    title: "Project Funding",
    desc: "Project funding unlocks the potential of new projects and propels businesses forward. Financial constraints can impede planned schedules, but project funding can help.",
    link: "financial-instruments/project-funding",
  },
];

const index = () => {
  return (
    <div className="text-center max-w-7xl m-auto p-4">
     

      <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row justify-between items-center gap-2">
        <div className="p-5 w-full md:w-1/2 text-left">
          <h1 className="text-[25px] font-bold py-4">
            Financial Instruments Services
          </h1>
          <p className="text-[#7a7a7a] text-[17px] py-2 ">
            We specialize in arranging financial instruments tailored to your
            unique business situations. Our expert team offers comprehensive
            financial consulting for a wide range of instruments, ensuring that
            you have the support you need to make informed decisions. We believe
            in supporting and creating opportunities for businesses across
            India. Let’s work together to find the perfect financial instruments
            for your business.
          </p>

          <button className="rounded-full bg-blue-500 hover:bg-blue-700 text-white p-4 mt-4 font-bold tracking-wide">
            Calculate Business Loan EMI
          </button>
        </div>

        <FinanceForm />
      </div>

      <div className="">
        <div className="py-10">
          <h1 className="text-[25px] font-bold ">Financial Instruments</h1>
          <p className="uppercase font-semibold text-[15px] text-[#7a7a7a]">
            We covered in these areas
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {financeArray.map((data) => (
            <div key={data.title} className="shadow-md p-3 text-center">
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
                <p className="text-left text-[#7a7a7a] text-base">
                  {data.desc}
                </p>
              </div>
              <div>
                <Link
                  href={data.link}
                  className="text-lg font-semibold tracking-wide uppercase bg-black hover:bg-white hover:text-black border-2 border-black duration-300 rounded-full text-white py-2 px-4"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-[#7a7a7a] py-5">
          <h1 className="text-[25px] p-4 text-black font-bold">
            Financial Instruments at Terkar Capital
          </h1>

          <p className="p-5 text-[17px] tracking-[0.7px] text-left">
            We at Terkar Capital, assist you by arranging Financial Instruments.
            The team simplifies the process of fundraising & Executes the
            operations quickly. So you don’t have to worry about complicated
            steps as you advance forward with your decisions. We offer financial
            tools that are tailored specifically for businesses right here in
            India, so don’t hesitate because of geography – get everything you
            need now.
          </p>
        </div>
      </div>
    </div>
  );
};

export default index;
