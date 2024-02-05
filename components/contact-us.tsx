import React from "react";
import Marquee from "react-fast-marquee";
import Image from 'next/image'
import { MdEmail, MdPhone,MdLocationOn } from "react-icons/md";

const operationalArray = [
  {
    id: 1,
    city: "Delhi",
    mail: "Rajdhani@terkarcapital.com",
    phone: "+91 7420998830",
  },
  {
    id: 2,
    city: "Bengaluru",
    mail: "Bengaluru@terkarcapital.com",
    phone: "+91 7420999070",
  },
  {
    id: 3,
    city: "Hyderabad",
    mail: "Hyd@terkarcapital.com",
    phone: "+91 7420998300",
  },
  {
    id: 4,
    city: "Chennai",
    mail: "Marina@terkarcapital.com",
    phone: "+91 7420995400",
  },
  {
    id: 5,
    city: "Kolkata",
    mail: "yes@terkarcapital.com",
    phone: "+91 7414973455",
  },
  {
    id: 6,
    city: "Surat",
    mail: "yes@terkarcapital.com",
    phone: "+91 7414973455",
  },
  {
    id: 7,
    city: "Ahmedabad",
    mail: "yes@terkarcapital.com",
    phone: "+91 7414973455",
  },
  {
    id: 8,
    city: "Kohlapur",
    mail: "mh@terkarcapital.com",
    phone: "+91 8308629820",
  },
];

const officeArray = [
  {
    id:1,
    city:"Nagpur",
    address:" 87, Terkar Capital, Near NIT Garden, Khamala Road, Chatrapati Square, Nagpur – 440015 [MH – India]",
    mail:"mh@terkarcapital.com",
    phone:"+91 8956072175"
  },
  {
    id:2,
    city:"Nashik",
    address:"3rd Floor, Nexus Point, College Rd, Rambhoomi, Veer Sawarkar Nagar, Nashik – 422005 [MH – India]",
    mail:"mh@terkarcapital.com",
    phone:"+91 8956072175"
  },
  {
    id:3,
    city:"Chh. Sambhaji Nagar",
    address:"213, Terkar Capital, Second Floor, Golden City Center, Near Prozone Mall, Chh. Sambhaji Nagar – 431001 [MH-India]",
    mail:"mh@terkarcapital.com",
    phone:"+91 8956072175"
  },
]

const contactus = () => {
  return (
    <div>
      <div className=" bg-[url('/careers-img.webp')] bg-no-repeat bg-left-top opacity-[85%]  ">
        <div>
          <Marquee pauseOnHover>
            <p className="p-5 ">
              We do not charge any upfront fees when applying for a job with us.
              Be careful of fraudulent Calls / Emails claiming to be from Terkar
              Capital.
            </p>
          </Marquee>
        </div>

        <div className=" p-40 flex justify-end ">
          <div className="w-[70%]">
            <h3 className="text-[24px] text-black font-bold">Contact Us</h3>
            <h1 className="text-[44px] pb-2 text-black font-bold">
              How can we Help?
            </h1>
            <p className=" text-[17px] tracking-[0.7px] w-[80%]">
              We at Terkar Capital are committed to serving the growing hunger
              for funding for corporate. We offer many conventional and
              non-conventional Financial Instruments, specially designed to keep
              in view the growing capital need of the corporate.
            </p>
            <div className="py-2">
              <button className="rounded-full font-semibold bg-black text-white p-3 my-2 text-[18px]">
                Checkout Vacencies
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center px-10 py-5">
        <div>
          <h1 className="text-[24px] font-bold">Our Presence</h1>
          <p>Financial Services</p>
        </div>
        <div className="flex gap-2 w-full justify-center">
          <div className="shadow-lg p-5 ">
            <h2 className="text-[24px] font-bold">Head Office</h2>
            <h5>Pune & Pimpri Chinchwad</h5>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12038.94967373808!2d72.62475240351267!3d23.19101348435253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1700586000775!5m2!1sen!2sin"
              width="500"
              height="450"
              allowfullscreen="allowfullscreen"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="shadow-lg p-5 ">
            <h2 className="text-[24px] font-bold">Corporate Office</h2>
            <h5>Mumbai</h5>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12038.94967373808!2d72.62475240351267!3d23.19101348435253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1700586000775!5m2!1sen!2sin"
              width="500"
              height="450"
              allowfullscreen="allowfullscreen"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="px-20 py-5 text-center">
        <h1 className="text-[24px] font-bold p-4">
          Operational Presence across India
        </h1>
        <div className="grid grid-cols-4 gap-2 ">
          {operationalArray.map((data) => (
            <div className="shadow-lg p-4 ">
              <h3 className="font-semibold text-[20px] p-4">{data.city}</h3>
              <div className="flex items-center gap-2 py-2">
                <MdEmail />
                <span>{data.mail}</span>
              </div>
              <div className="flex items-center gap-2 py-2">
                <MdPhone />
                <span>{data.phone}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-20 text-center">
        <h1 className="text-[24px] font-bold p-4">
          Branch Offices
        </h1>
        <div className="flex justify-center">
          {
            officeArray.map((data) => (
              <div className="shadow-lg p-4 ">
              <h3 className="font-semibold text-[20px] p-4">{data.city}</h3>
              <div className="flex items-center gap-2 py-2">
                <span><MdLocationOn /></span>
                <span>
                  {data.address}
                </span>
              </div>
              <div className="flex items-center gap-2 py-2">
                <MdEmail />
                <span>{data.mail}</span>
              </div>
              <div className="flex items-center gap-2 py-2">
                <MdPhone />
                <span>{data.phone}</span>
              </div>
            </div>
            ))
          }
        </div>
      </div>

      <div className="text-center px-40 py-10">
        <h1 className="text-[28px] font-bold p-4">
          We are Located at
        </h1>
        <div className="flex justify-center gap-1">
          <div className="shadow-lg text-left p-4">
            <h1 className="text-[20px] font-bold p-4">PAN India Locations</h1>
            <p className="text-[#7a7a7a] tracking-[0.7px] p-4">We are pleased to announce our presence in major cities in India. Head Office at Pune & Pimpri Chinchwad and a Corporate Office in Mumbai & Branch offices at Delhi, Bengaluru, Hyderabad, and Chennai.</p>
            <Image width={600} height={500} src="/terkar-capital-location-india-map--1536x1408.webp" alt="india-img" />
          </div>
          <div className="shadow-lg  p-4 m-4">
          <div >
          <h1 className=" text-[20px] font-bold">Leave us you info</h1>
          <p className="p-2 text-[#7A7A71]">
          Do reach out to avail of Financial Services at Terkar Capital. To ensure that you get the best service, please contact us before visiting.


          </p>
          <div className="w-full  ">
            <form className="  rounded px-4 mb-4">
              <div className="flex justify-between ">
              <div className="mb-4">
                <input
                  className="bg-[#f5f5f5] text-[#4e4e4e] appearance-none  w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Full Name"
                />
              </div>
              <div className="mb-4">
                <input
                  className="bg-[#f5f5f5] text-[#4e4e4e] appearance-none  w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email Address"
                />
              </div>
              </div>
              <div className="flex justify-between">
              <div className="mb-4">
                <input
                  className="bg-[#f5f5f5] text-[#4e4e4e] appearance-none  w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="location"
                  type="text"
                  placeholder="Business Location"
                />
              </div>
              <div className="mb-4">
                <input
                  className="bg-[#f5f5f5] text-[#4e4e4e] appearance-none  w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="mobile"
                  type="text"
                  placeholder="Cell Number"
                />
              </div>
              </div>
              <div className="mb-4">
                <input
                  className="bg-[#f5f5f5] text-[#4e4e4e] appearance-none  w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="subject"
                  type="text"
                  placeholder="Subject"
                />
              </div>
              <div className="mb-4 ">
                <textarea
                  className="bg-[#f5f5f5] text-[#4e4e4e] appearance-none  w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-full focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Submit Now
                </button>
              </div>
            </form>
          </div>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contactus;
