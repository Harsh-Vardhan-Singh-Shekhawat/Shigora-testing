import React from "react";

const companyprofile = () => {
  return (
    <div className="px-40 py-10">
      <div className="flex gap-2">
        <div className="w-1/2 bg-gray-200 p-10 text-[#7a7a7a] text-[17px] tracking-[0.7px] shadow-lg">
          <p className="p-2">
            We are an investment banking firm with national footprints,
            specializing in assisting professionals and businesses of all sizes
            to secure funding. we offer customized solutions to match your
            management expectations and justify the end use of funds. Our
            strategies are research-driven, disciplined, and tailored to meet
            clients’ financial needs and risk tolerance.
          </p>
          <p className="p-2">
            Download our company profile here to gain insight into our expertise
            & Discover how securing the right funding can help you achieve your
            business objectives faster.
          </p>
        </div>
        <div className="w-1/2  shadow-lg">
            <form className="p-10">
                <h1 className="font-bold text-[28px] py-4">
                Terkar Capital Company Profile
                </h1>
            <div className="my-4">
                <input
                  className="bg-[#f5f5f5] text-[#4e4e4e] appearance-none  w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="my-4">
                <input
                  className="bg-[#f5f5f5] text-[#4e4e4e] appearance-none  w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="my-4">
                <input
                  className="bg-[#f5f5f5] text-[#4e4e4e] appearance-none  w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="mobile"
                  type="mobile"
                  placeholder="Enter a valid mobile number"
                  required
                />
              </div>
              <div className="py-2">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-full focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Download Here
                </button>
              </div>
            </form>
        </div>
      </div>
    </div>
  );
};

export default companyprofile;
