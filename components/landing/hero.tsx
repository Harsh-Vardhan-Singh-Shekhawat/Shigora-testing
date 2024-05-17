import React from "react";
import {
  CCarousel,
  CCarouselItem,
  CImage,
  CCarouselCaption,
} from "@coreui/react";
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
// import ReactImg from "@/public/cover-image-terkar-capital.jpg";
// import VueImg from "@/public/cover-page-banner.jpg";
import "@coreui/coreui/dist/css/coreui.min.css";
const hero = () => {
  return (
    <div className="">
      <Marquee pauseOnHover>
          <p className='text-[#7A7A7A] text-[17px] '>
              Terkar Capital is a Registered Brand of <b>Terkar Global Financial Development Private Limited.</b>
          </p>
        </Marquee>
      <CCarousel controls transition="crossfade">
        <CCarouselItem>
          <CImage
            className="d-block w-full h-[600px] object-cover"
            src="/cover-page-banner.jpg"
            alt="slide 1"
          />
          <CCarouselCaption className="d-none d-md-block">
            <h3 className="font-semibold">Invest in India's Future and Making India Great!</h3>
            <p className="text-lg">
              We consult aspiring entrepreneurs and established business to
              create, anticipate, adapt, and last for generation. We empower
              Indian Business{" "}
            </p>
          </CCarouselCaption>
        </CCarouselItem>
        <CCarouselItem>
          <CImage
            className="d-block w-full h-[600px]"
            src="/cover-image-terkar-capital.jpg"
            alt="slide 2"
          />
          <CCarouselCaption className="d-none d-md-block">
            <h3 className="font-semibold">Low Interest Rates to Achieve Economic Stability</h3>
            <p className="text-lg">
              We provide the lowest ROI and promote financial stabilty. As a
              result, companies adapt sustainable economic growth and smooth
              cash flow.{" "}
            </p>
          </CCarouselCaption>
        </CCarouselItem>
      </CCarousel>
    </div>
  );
};

export default hero;
