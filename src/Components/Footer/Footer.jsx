import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[--bg-color] lg:px-20 sm:px-10 px-2 pt-5">
      <div className="grid lg:grid-cols-12 pb-5 space-y-3">
        <div className="col-span-5">
          <h1 className="text-[--main-color] text-2xl font-extrabold pb-5">
            Darshil Patel
          </h1>
<p className="text-wrap w-full text-[--main-color] text-base text-justify sm:pr-10">𝓐 versatile full-stack developer, adept in frontend and backend technologies like React JS and Node.js. With expertise in Python, Java, and Solidity, he leads teams effectively, delivering impactful products with a commitment to excellence and continuous learning.</p>
        </div>
        <div className="col-span-3">
          <div className="space-y-3">
            <Link to="#" target="_blank" rel="noopener noreferrer" className="flex">
              <div className="w-8 h-8 bg-black shadow-sm p-1 rounded-lg  transition-all duration-300 ease-in-out cursor-pointer">
                <FaInstagram className="text-[--bg-color] text-2xl" />
              </div>
              <div className="text-[--main-color]">
                <h3 className="pl-4 py-1">Instagram</h3>
              </div>
            </Link>
            <Link
              to="https://github.com/darshil7056"
              target="_blank"
              rel="noopener noreferrer"
              className="flex"
            >
              <div className="w-8 h-8 bg-black p-1 rounded-lg transition-all duration-300 ease-in-out cursor-pointer">
                <FaGithub className="text-white text-2xl" />
              </div>
              <div className="text-[--main-color]">
                <h3 className="pl-4 py-1">Github</h3>
              </div>
            </Link>
            <Link
              to="https://www.linkedin.com/in/darshilpatel7056/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex"
            >
              <div className="w-8 h-8 bg-black p-1 rounded-lg  transition-all duration-300 ease-in-out cursor-pointer">
                <CiLinkedin className="text-[--bg-color] text-2xl" />
              </div>
              <div className="text-[--main-color]">
                <h3 className="pl-4 py-1">Linkedin</h3>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-span-4 space-y-3">
          <div class="flex gap-5">
            <span class="w-8 h-8 bg-black p-1 rounded-lg  transition-all duration-300 ease-in-out cursor-pointer">
            <BiLogoGmail  className="text-2xl  text-[--bg-color]" />
            </span>
              <Link
                class="text-lg text-[--main-color] cursor-pointer py-2"
                to="mailto: darshilpatel7056@gmail.com"
              >
              darshilpatel7056@gmail.com
              </Link>
          </div>
          <div class="flex gap-5">
            <span class="w-8 h-8 bg-black p-1 rounded-lg  transition-all duration-300 ease-in-out cursor-pointer">
            <FaPhoneAlt  className="text-[--bg-color] text-2xl" />
            </span>
            <Link
                class="text-lg text-[--main-color] cursor-pointer py-2"
                to="tel:+91 7016160435"
              >
                +91 7016160435
              </Link>
          </div>
        </div>
      </div>
      <div className="border-t-4 border-[--main-color]">
<p className="py-2 text-center text-[--main-color]">@ All Rights Reserved by Darshil Patel.</p>
      </div>
    </footer>
  );
}
export default Footer;
