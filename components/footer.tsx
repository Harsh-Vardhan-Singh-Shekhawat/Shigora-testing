import Image from "next/image";
import React from "react";
import { BsLinkedin, BsInstagram,BsPinterest,BsFacebook, BsTwitter } from "react-icons/bs";
const footer = () => {
  return (
    <>
    <div className=" py-4 px-4 md:px-20 md:py-10  bg-[#303030] text-[#c1c1c1]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ">
        <div>
          <h1 className="text-[19px] text-white font-bold py-4">
            Terkar Capital
          </h1>
          <Image
            width={150}
            height={100}
            src="/tc-bull-300x225.png"
            alt="img"
          />
          <p className="">
            Terkar Capital is a registered brand of Terkar Global Financial
            Development Pvt Ltd, is an Investment Banking Firm with a national
            footprint. We work extensively with professionals and businesses of
            all sizes to arrange debt funding instruments.
          </p>
          <div >
            <b>In Association with:</b>
            <Image
            className="py-4"
              width={300}
              height={200}
              src="/Association-300x75.png"
              alt="association"
            />
          </div>
          <div>
            <b>CIN No:</b> U70200PN2023PTC224016
          </div>
        </div>

        <div className="text-white">
          <h1 className="text-[19px] text-white font-bold py-4">
            Important Links
          </h1>
          <div>
            <p className="font-semibold">Unsecured Debt Funding</p>
            <p className="font-semibold">Secured Debt Funding</p>
            <p className="font-semibold">
              Professionals (CA/CS/Doctors) Funding
            </p>
            <p className="font-semibold">Calculate BUsiness Loan EMI</p>
            <p className="font-semibold">Download Company Profile</p>
          </div>
        </div>

        <div>
          <div>
            <h1 className="text-[19px] text-white font-bold py-4">
              Our Presence
            </h1>

            <p>Head Office(Pune/PCMC)</p>
            <p>
              <b>Mail Id:</b> yes@terkarcapital.com
            </p>
            <p>
              <b>Address:</b> Castle Eleganza, 103, Bhonde Colony, Dr.Ketkar
              Road, Erandwane, Pune – 411004 [MH-India]
            </p>
            <p>
              <b>Cell:</b> +91 8308629820 | 8484921682
            </p>
          </div>

          <div>
            <h1 className="text-[19px] text-white font-bold py-4">
              Corporate Office (Mumbai){" "}
            </h1>

            <p>Head Office(Pune/PCMC)</p>
            <p>
              <b>Mail Id:</b> mumbai@terkarcapital.com
            </p>
            <p>
              <b>Address:</b> The Capital, Level 7, B-Wing, Plot C – 70, G
              Block, Bandra Kurla Complex, Bandra (East), Mumbai – 400051
              [MH-India]
            </p>
            <p>
              <b>Cell:</b>+91 7414973455
            </p>
          </div>
        </div>

        <div>
          <h1 className="text-[19px] text-white font-bold py-4">
            Recent Blog{" "}
          </h1>
          <div>
            <p>
              Empowering Medical Professionals with Terkar Capital’s Financial
              Support Loans for Medical Professionals (Doctors) In a country
              like India … Read more
            </p>

            <p>
              A Guide to Tailor-Made Financing for CAs, CSs, and Healthcare
              Professionals Tailor-made Financing for Professionals A
              professional loan is a type … Read more
            </p>

            <p>
              Professional Loan for Doctors In India: Features, Documents and
              Eligibility Professional Loan for Doctors Professional loans are a
              type of … Read more
            </p>

            <p>
              Importance of Working Capital for Sustainable Business Growth
              Working Capital for Business Growth In simple terms, working
              capital … Read more
            </p>

            <p>
              Insights on Effective Management of Working Capital Cycle Overview
              Working capital is the difference between current assets and …
              Read more
            </p>
          </div>
        </div>
      </div>
    </div>
      <footer className="bg-[#1c1c1c] text-[#c1c1c1] px-20 py-3 flex items-center gap-2">
      <div>
      Copyright © <span className="text-white">Terkar Capital</span> 2023 |
      </div>

      <div className="text-white flex gap-3">
        <BsLinkedin />
        <BsFacebook />
        <BsTwitter />
        <BsPinterest />
      </div>
      </footer>
      </>
  );
};

export default footer;
