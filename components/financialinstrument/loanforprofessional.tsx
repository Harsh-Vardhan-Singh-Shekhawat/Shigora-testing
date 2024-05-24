import React from "react";
import Marquee from "react-fast-marquee";
import { Tabs, Tab, TabPanels, TabPanel, TabList } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const financeArray = [

    {
        img: "/Medical-Equipment-Finance.webp",
        title: "Medical Equipment Loans",
        desc: "Expensive medical equipment can make it tough to provide quality healthcare. So, Healthcare providers can lease, finance, or partner to get the what they need. Hence, We at Terkar Capital offer flexible, affordable financing options for medical equipment.",
        link: "/financial-instruments/medical-equipment-finance",
      },
  {
    img: "/Lease-Rental-Discounting.webp",
    title: "Doctor's Loan",
    desc: "Like white-collar workers, medical professionals or doctors need adequate loans to stay up-to-date on the most recent healthcare procedures and treatments.Terkar Capital is aware of this and provides doctors with or without collateral loans to assist them in achieving their financial objectives. ",
    link: "/financial-instruments/professional-loan-for-doctors",
  },
  {
    img: "/machinery-loan.webp",
    title: "Loan for CA/CS",
    desc: "Chartered accountants can apply for a professional loan based on the duration of their experience in the field. They must present a CoP (certificate of Practice) that was obtained at least two years before the loan application date .",
    link: "/financial-instruments/professional-loan-for-chartered-accountants",
  },
  {
    img: "/Loan-against-shares.webp",
    title: "Architect Professionals",
    desc: "Architect professionals often require funding to keep pace with the ever-evolving industry standards. Whether it’s expanding their architecture firm,",
    link: "/financial-instruments/loan-for-architect-professional",
  },
 
  
  
];

const securefundingfunds = () => {
  return (
    <div className="max-w-7xl m-auto">
      

      <div>
        <h1 className="text-[30px] font-bold pt-4 px-2 ">
            Loan for Professional
        </h1>

        <div className=" py-4 sm:py-4 md:py-8 lg:py-8">
        <p className="text-[#7a7a7a] tracking-[0.7px] px-2 py-4">
        Loan for Professionals is a tailored credit product for professionals such as Medical professionals, Doctors, CAs, ICWA, CS, and Architects. There are some parts of your personal and professional life where you need the assistance of experts. Hence, CA, CS, Doctors, ICWAs, and Architects are among the same set of professionals. These professionals put hard efforts into sharpening their skills and helping us in their areas of expertise.</p>
      
        </div>
      </div>

      <div className="text-center py-10">
        <div className="py-4">
          <h1 className="text-[25px] font-bold ">Professional Loans</h1>
          <p className="uppercase font-semibold text-[15px] text-[#7a7a7a]  ">
            We covered in these areas
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-4">
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
