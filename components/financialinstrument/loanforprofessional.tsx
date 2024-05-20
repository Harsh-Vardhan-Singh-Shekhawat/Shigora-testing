import React from "react";
import Marquee from "react-fast-marquee";
import { Tabs, Tab, TabPanels, TabPanel, TabList } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const financeArray = [

  {
    img: "/Loan-against-property.webp",
    title: "Loan Against Property",
    desc: "Overcome business hurdles effortlessly with this long-term loan secured by your valuable property. Lending institutions consider it the safest option, making it easily accessible for borrowers. Experience the freedom to conquer financial challenges with confidence.",
    link: "financial-instruments/loan-against-property-service",
  },
  {
    img: "/Lease-Rental-Discounting.webp",
    title: "Lease Rental Discounting",
    desc: "Owing to the rise of businesses in the country, there are several options available for loans in the Indian Debt Market. Lease rental discounting is one such loan. So, explore the wide range of loan options available in the Indian Debt Market to fuel your growth with a steady income source.",
    link: "financial-instruments/lease-rental-discounting",
  },
  {
    img: "/machinery-loan.webp",
    title: "Loan for Machinery",
    desc: "Getting a machinery loan is an effective way of enhancing the business as it offers a higher level of eligibility, and quick financing. We focus on providing our clients with the most beneficial machinery loan. Get a loan against the machine at ease.",
    link: "financial-instruments/machinery-loan",
  },
  {
    img: "/Loan-against-shares.webp",
    title: "Loan Against Shares",
    desc: "Unlock your business potential with LAS (Loan Against Shares / Securities). With LAS, you can leverage your bonds, shares, and mutual funds as security to secure debt funding. Empower your business with the right financial backing today",
    link: "financial-instruments/loan-against-shares",
  },
  {
    img: "/Debt-syndication-1.webp",
    title: "Debt Syndication",
    desc: "Unlock the unlimited financial potential for your business with debt syndication funding. Expand your operations, invest in new equipment or fuel growth – whatever your goals, we’ve got you covered. Say hello to endless possibilities for your business with us.",
    link: "financial-instruments/debt-syndication",
  },
  {
    img: "/Project-funding.webp",
    title: "Project Funding",
    desc: "Project funding unlocks the potential of new projects and propels businesses forward. Financial constraints can impede planned schedules, but project funding can help.",
    link: "financial-instruments/project-funding",
  },
  {
    img: "/funding-for-school.webp",
    title: "Funding for Schools",
    desc: "Recognizing the significance of education in shaping individuals’ lives, we believe that schools are the vital foundation for success. Thus, Terkar Capital offers accessible funding solutions tailored specifically for schools, enabling you to contribute to this noble cause.",
    link: "financial-instruments/funding-for-schools",
  },
  {
    img: "/Foreign-currency.webp",
    title: "Foreign Currency Funding",
    desc: "Whether it’s US Dollars, Euros, or other global currencies, we offer flexible loan options tailored to your business needs. Secure your loan by mortgaging your property or utilizing it for export/import business, LC, BG, and more.",
    link: "financial-instruments/foreign-currency-funding",
  },
  {
    img: "/Sugar-pledge-funding.webp",
    title: "Sugar Pledge Loan",
    desc: "Tap into your idle sugar stock and convert it into cash with our expert assistance. We understand the complexities of securing funds against sugar pledges, so we simplify the process for you. So, benefit from minimum interest rates and a hassle-free experience",
    link: "financial-instruments/sugar-pledge-funding",
  },
  {
    img: "/builder-finance.webp",
    title: "Builder Finance",
    desc: "Our expert team understands the creative vision behind every piece of land and works tirelessly to turn your ideas into reality. Trust us to handle all your financial needs ethically and efficiently, so you can focus on building the estate of tomorrow.",
    link: "financial-instruments/builder-finance",
  },
  
  
];

const securefundingfunds = () => {
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
            Loan for Professionals
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
          <h1 className="text-[25px] font-bold ">Secured Funding Funds</h1>
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

export default securefundingfunds;
