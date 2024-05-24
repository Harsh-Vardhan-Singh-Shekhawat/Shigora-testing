import React from "react";
import Marquee from "react-fast-marquee";

const careers = () => {
  return (
    <div className="text-[#7a7a7a]">
      <div className=" bg-[url('/careers-img.webp')] bg-no-repeat bg-right-top bg-opacity-75  ">
        

        <div className="w-[70%] px-10 py-40 max-w-7xl m-auto ">
          <h1 className="text-[44px] py-2 text-black font-bold">
            Become a part of Terkar Capital
          </h1>
          <p className=" text-[17px] tracking-[0.7px] w-[67%]">
            We, at Terkar Capital, are committed to investing in our team
            members’ growth. We provide access to ongoing learning and
            development opportunities to ensure you stay at the forefront of the
            finance industry. Become a part of the Terkar Capital team and take
            your career to the next level!!
          </p>
          <div className="py-2">
            <button className="rounded-full font-semibold bg-black text-white p-3 my-2 text-[18px]">
              Checkout Vacencies
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-col md:flex-row justify-between  py-10 max-w-7xl m-auto p-4">
        <div className="p-5 md:w-1/2 w-full">
          <h1 className="text-[28px] text-black font-bold py-4">
          Finance / Investment Banking JOBS

          </h1>
          <p className="py-3 text-[17px] tracking-[0.7px] ">
          Welcome to Terkar Capital!!


          </p>
          <p className=" text-[17px] tracking-[0.7px] ">
          At Terkar Capital, we believe in cultivating a dynamic and inclusive work culture that values diversity, collaboration, and innovation. Our team is composed of Investment Banking professionals who are passionate about delivering exceptional results for our clients.
          </p>

          
        </div>

        <div className="shadow-lg  ">
          <div className="w-full ">
            <h1 className="text-[25px] text-black font-bold p-2">Submit the form below</h1>
            <form className="  rounded px-4 mb-4">
              <div className="mb-4">
                <input
                  className="border-[#d7d7d7] border-[1px] text-[#4e4e4e] appearance-none  w-full py-4 px-4 text-gray-700 leading-tight shadow focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Full Name"
                />
              </div>
              <div className="flex ">
              <div className="mb-4 w-1/2">
                <input
                  className="border-[#d7d7d7] border-[1px] text-[#4e4e4e] appearance-none  w-full py-4 px-4 text-gray-700 leading-tight shadow focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email Address"
                />
              </div>
              <div className="mb-4 w-1/2">
                <input
                  className="border-[#d7d7d7] border-[1px] text-[#4e4e4e] appearance-none  w-full py-4 px-4 text-gray-700 leading-tight shadow focus:outline-none focus:shadow-outline"
                  id="mobile"
                  type="text"
                  placeholder="Cell Number"
                />
              </div>
              </div>

              <div className="flex">
                <div className="mb-4 w-1/2">
                  <input
                    className="border-[#d7d7d7] border-[1px] text-[#4e4e4e] appearance-none  w-full py-4 px-4 text-gray-700 leading-tight shadow focus:outline-none focus:shadow-outline"
                    id="location"
                    type="text"
                    placeholder="Enter Your Location"
                  />
                </div>
                <div className="mb-4 w-1/2">
                  <input
                    className="border-[#d7d7d7] border-[1px] text-[#4e4e4e] appearance-none  w-full py-4 px-4 text-gray-700 leading-tight shadow focus:outline-none focus:shadow-outline"
                    id="location"
                    type="number"
                    placeholder="Your Total Experience"
                  />
                </div>
              </div>

              
                <div className="mb-4 ">
                    <label htmlFor="photo">
                        Attach a Passport Size Photo (Less than 0.3 Mb):
                    </label>
                  <input
                    className="border-[#d7d7d7] border-[1px] text-[#4e4e4e] appearance-none  w-full py-4 px-4 text-gray-700 leading-tight shadow focus:outline-none focus:shadow-outline"
                    id="photo"
                    type="file"
                    placeholder="Amount Looking FOr"
                  />
                </div>
                <div className="mb-4 ">
                    <label htmlFor="resume">
                        Attach a resume/CV (Less than 1 Mb. Accepted format "doc/pdf" only):
                    </label>
                  <input
                    className="border-[#d7d7d7] border-[1px] text-[#4e4e4e] appearance-none  w-full py-4 px-4 text-gray-700 leading-tight shadow focus:outline-none focus:shadow-outline"
                    id="resume"
                    type="file"
                    placeholder="Company Turnover"
                  />
                </div>
              

              <div>
                <textarea
                  rows={5}
                  placeholder="Message Input Box"
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
    </div>
  );
};

export default careers;
