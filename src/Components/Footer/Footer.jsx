import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaSquarePhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[--bg-color] lg:px-20 sm:px-10 px-2 pt-5">
      <div className="grid lg:grid-cols-12 pb-5 space-y-3">
        <div className="col-span-5">
          <h1 className="text-[--main-color] text-2xl font-extrabold pb-5">
            Darshil Patel
          </h1>
<p className="text-wrap w-full text-[--text-color] text-base">Proficient in designing and developing blockchain applications on Hyperledger Fabric and Ethereum platforms. Skilled in implementing smart contracts and decentralized applications using Solidity.</p>
        </div>
        <div className="col-span-4">
          <div className="space-y-3">
            <Link to="#" target="_blank" rel="noopener noreferrer" className="flex">
              <div className="w-8 h-8 bg-black shadow-sm p-1 rounded-lg hover:bg-white transition-all duration-300 ease-in-out cursor-pointer">
                <FaInstagram className="text-pink-400 text-2xl" />
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
              <div className="w-8 h-8 bg-black p-1 rounded-lg hover:bg-white transition-all duration-300 ease-in-out cursor-pointer">
                <CiLinkedin className="text-blue-500 text-2xl" />
              </div>
              <div className="text-[--main-color]">
                <h3 className="pl-4 py-1">Linkedin</h3>
              </div>
            </Link>
          </div>
        </div>
        <div className="col-span-3">
          <div class="flex gap-5">
            <span class="w-8 mt-2">
            <IoMdMail  className="text-2xl w-10 h-10 text-[--main-color]" />
            </span>
              <Link
                class="text-lg text-[--text-color] cursor-pointer py-4"
                to="mailto: darshilpatel7056@gmail.com"
              >
                darshilpatel7056@gmail.com
              </Link>
          </div>
          <div class="flex gap-5">
            <span class="w-8 mt-2">
            <FaSquarePhone className="text-2xl w-10 h-10 text-[--main-color]" />
            </span>
              <Link
                class="text-lg text-[--text-color] cursor-pointer py-4"
                to="tel:+91 7016160435"
              >
                +91 7016160435
              </Link>
          </div>
        </div>
      </div>
      <div className="border-t-4 border-[--main-color]">
<p className="py-2 text-center text-[--text-color]">@ All Rights Reserved by Darshil Patel.</p>
      </div>
    </footer>
  );
}
export default Footer;
