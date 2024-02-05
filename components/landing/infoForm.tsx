import React from "react";

const infoForm = () => {
  return (
    <div className=" p-20 ">
      <div className="bg-[url('/business-partners-handshake-international-business-concept-scaled.webp')] flex">
        <div className="w-1/2 p-20">
          <h1 className="p-2 text-[30px] font-bold">How can we help you?</h1>
          <p className="text-[#7A7A71]">
            We raise the funds from Domestic / International Fund Houses, Govt.
            Banks, Private Banks, Cooperative Banks, and NBFCs. The debt funding
            can be raised with multiple permutations and combinations. There are
            two major segments we cater to raise funds. One is Below Rs. 100
            crores and another one is above Rs. 100 crores.
          </p>
        </div>
        <div className="shadow-lg w-1/2 p-4 m-4">
          <h1 className=" text-[30px] font-bold">Leave us you info</h1>
          <p className="p-2 text-[#7A7A71]">
            Do not hesitate to reach out to Terkar Capital for investment
            banking instruments. We encourage you to contact us before your
            visit in order to get the best service possible.
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
  );
};

export default infoForm;
