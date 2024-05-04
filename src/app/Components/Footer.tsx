import React from "react";
import line from "../assets/line.png";
// import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="bg-[#080505] text-white pt-10">
      <hr />
      <div className="flex flex-col md:flex-row pb-16">
        <div className="pt-12 md:pl-16 flex justify-start pl-6">
          <h2 className="font-Montserrat font-extrabold text-4xl md:pt-16">
            Doctor
          </h2>
        </div>

        <div className="md:pt-16 pt-10 md:pl-48 pl-7">
          <div className="md:space-x-16 flex md:flex-row flex-col">
            <div>
              <h4 className="text-white mt-4 font-Montserrat font-semibold text-base">
                About Dr Website
              </h4>
              <ul className="mt-4 text-white text-xs font-Montserrat font-normal space-y-2">
                <li className="hover:text-purpell">Doctor Website.</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white mt-4 font-Montserrat font-semibold text-base">
                Information
              </h4>
              <div className="mt-4 text-white text-xs font-Montserrat font-normal space-y-2">
                <li className="hover:text-purpell">Company</li>
                <li className="hover:text-purpell">Customers</li>
                <li className="hover:text-purpell">Careers</li>
                <li className="hover:text-purpell">Careers</li>
              </div>
            </div>
            <div>
              <h4 className="text-white mt-4 font-Montserrat font-semibold text-base w-40">
                Customer Support
              </h4>
              <div className="mt-4 text-white text-xs font-Montserrat font-normal space-y-2">
                <li className="hover:text-purpell">Help Center</li>
                <li className="hover:text-purpell">Forum</li>
                <li className="hover:text-purpell">Support</li>
              </div>
            </div>
            <div>
              <h4 className="text-white mt-4 font-Montserrat font-semibold text-base w-48">
                Have a Question?
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:justify-between">
        <p className="md:pr-5 md:ml-10 pl-4 md:text-base text-sm font-Montserrat font-normal">
          © 2024-Doctor Appoint
        </p>
        <div className="flex flex-row space-x-0 md:pr-12 pb-2">
          <p className="md:pr-5 ml-10 md:text-base text-sm font-Montserrat font-normal">
            Privacy & Policy
          </p>
          <p className="md:pr-5 ml-10 md:text-base text-sm font-Montserrat font-normal">
            Terms & Condition
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
