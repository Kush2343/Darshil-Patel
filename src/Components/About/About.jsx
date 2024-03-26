import React from "react";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaRegCalendarAlt } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { RiTeamLine } from "react-icons/ri";
import { FaLaptopCode } from "react-icons/fa";
import Profile from '../../Images/profile.jpeg';

function About() {
  return (
    <section className="md:px-20 sm:px-5 sm:pb-20" data-aos="fade">
      <div className="bg-[--bg-color] lg:rounded-xl w-full md:rounded-none lg:px-5 px-3 sm:px-3 md:px-4">
        <h2 className="text-[--main-color] text-center md:text-left py-5 text-2xl  lg:text-4xl after-effect after:left-48">
          About Me
        </h2>
        <div className="grid grid-cols-12 md:gap-10 pt-4 md:pt-[5px] items-center">
          <div className="col-span-12 md:col-span-4">
            <img
              className="w-full md:w-[330px] md:h-[400px] object-cover object-top overflow-hidden rounded-[35px] mb-3 md:mb-0 border-4 border-[--main-color]" src={Profile}
              alt=""
            />
          </div>
          <div className="col-span-12 md:col-span-8 space-y-2.5">
            <div className=" md:mr-12 xl:mr-16">
              <h3 className="text-4xl font-mediu text-[--main-color] mb-2.5 ">
                Who am i?
              </h3>
              <p className="text-gray-lite  text-color-910 leading-7">
              Proficient in designing and developing blockchain applications on Hyperledger Fabric and Ethereum
platforms. Skilled in implementing smart contracts and decentralized applications using Solidity.
              </p>
              <p className="text-gray-lite leading-7 mt-2.5 text-color-910">
              Led the development and maintenance of blockchain solutions, ensuring secure and efficient systems.
 Utilized React JS and Node JS to build user-friendly and secure web applications. 

              </p>
              <p className="text-gray-lite leading-7 mt-2.5 text-color-910">
              Technologically Proficient: Extensive technical skills in programming languages such as C, C++, Java,
Python, Golang, and Solidity. Skilled in working with databases like MySQL, MongoDB, and CouchDB.
Proficient in tools and frameworks including GitHub, Jira, Visual Studio, Eclipse, and PyCharm.
Experienced in Linux, OS X, UNIX, and Windows operating systems. 

              </p>
            </div>
            <div>
              <h3 className="text-4xl font-medium my-5 text-[--main-color]">
                Personal Info
              </h3>
              <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex">
                  <span className="text-[--main-color] bg-[--component-color] shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-11 h-11 text-">
                    <IoPhonePortraitOutline />
                  </span>
                  <div className="space-y-1">
                    <p className="text-xs text-gray-lite text-color-910">
                      Phone
                    </p>
                    <h6 className="font-medium text-[--text-color]">
                      <a
                        className="hover:text-[--main-color] duration-300 transition"
                        href="tel:+91 7016160435"
                      >
                        +91 7016160435
                      </a>
                    </h6>
                  </div>
                </div>
                <div className="flex">
                  <span className="text-[--main-color] bg-[--component-color] shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-11 h-11 text-">
                    <MdOutlineLocationOn />
                  </span>
                  <div className="space-y-1">
                    <p className="text-xs text-gray-lite text-color-910">
                      Location
                    </p>
                    <h6 className="font-medium text-[--text-color]">India</h6>
                  </div>
                </div>
                <div className="flex">
                  <span className="text-[--main-color] bg-[--component-color] shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-11 h-11 text-">
                    <MdOutlineEmail />
                  </span>
                  <div className="space-y-1">
                    <p className="text-xs text-gray-lite text-color-910">
                      Email
                    </p>
                    <h6 className="font-medium text-[--text-color]">
                      <a
                        className="hover:text-[--main-color] duration-300 transition"
                        href="mailto:darshilpatel7056@gmail.com"
                      >
                        darshilpatel7056@gmail.com
                      </a>
                    </h6>
                  </div>
                </div>
                <div className="flex">
                  <span className="text-[--main-color] bg-[--component-color] shadow-icon mr-2.5 flex items-center justify-center rounded-md text-2xl w-11 h-11 text-">
                    <FaRegCalendarAlt />
                  </span>
                  <div className="space-y-1">
                    <p className="text-xs text-gray-lite text-color-910">
                      Birthday
                    </p>
                    <h6 className="font-medium text-[--text-color]">
                      Jan, 01 2001
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-12 pb-8 ">
          <h3 className="text-[35px] text-[--main-color] font-medium px-">
            What I do!
          </h3>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
            <div className="about-box bg-[--component-color] p-4 rounded-xl">
            <CgWebsite className="w-10 h-10 object-contain text-[--text-color]  block"/>
              <div className="space-y-2 break-all">
                <h3 className="text-[--main-color] text-xl font-semibold hover:text-[--main-color]">
                 Web Design
                </h3>
                <p className=" leading-8 text-gray-lite text-[#7c7c7c]">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam euismod volutpat.
                </p>
              </div>
            </div>
            <div className="about-box bg-[--component-color] p-4 rounded-xl">
            <FaLaptopCode className="w-10 h-10 text-[--text-color] block pb-2"/>
              <div className="space-y-2 break-all">
                <h3 className="text-[--main-color] text-xl font-semibold hover:text-[--main-color]">
                 Web Devlopment
                </h3>
                <p className=" leading-8 text-gray-lite text-[#7c7c7c]">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam euismod volutpat.
                </p>
              </div>
            </div>
            <div className="about-box bg-[--component-color] p-4 rounded-xl">
            <RiTeamLine className="w-10 h-10 text-[--text-color] block pb-2"/>
              <div className="space-y-2 break-all">
                <h3 className="text-[--main-color] text-xl font-semibold hover:text-[--main-color]">
                  Team Work
                </h3>
                <p className=" leading-8 text-gray-lite text-[#7c7c7c]">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam euismod volutpat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
