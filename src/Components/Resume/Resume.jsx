import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { DiJqueryLogo } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { SiReact } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { SiSolidity } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { PiCertificateBold } from "react-icons/pi";
import { FaLaptopCode } from "react-icons/fa";

function Resume() {
  return (
    <section className="md:px-20 sm:px-5 sm:pb-20" data-aos="fade">
      <div className="bg-[--bg-color] lg:rounded-xl w-full md:rounded-none lg:px-5 px-3 sm:px-3 md:px-4">
        <h2 className="text-[--main-color] text-center md:text-left py-5 text-2xl  lg:text-4xl after-effect after:left-40">
          Resume
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 ">
          <div>
            <div className="flex items-center space-x-2 mb-4 ">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                className="text-6xl text-[--main-color]"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"></path>
              </svg>
              <h4 className="text-3xl text-[--text-color] font-medium">
                Education
              </h4>
            </div>
            <div className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg  bg-[--component-color]">
              <span className="text-tiny text-[--text-color]">2022-2023</span>
              <h3 className="text-xl text-[--main-color]">
                Master of Applied Computing
              </h3>
              <p className="dark:text-[#000000]">
                University of Windsor, Windsor, Ontario
              </p>
            </div>
            <div className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg  bg-[--component-color]">
              <span className="text-tiny text-[--text-color]">2022-2023</span>
              <h3 className="text-xl text-[--main-color]">
                Bachelor of Computer Engineering
              </h3>
              <p className="dark:text-[#000000]">
                L.D.R.P Institute of Technology and Research
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-center space-x-2 mb-4 ">
            <FaLaptopCode className="text-6xl text-[--main-color]" />
              <h4 className="text-3xl text-[--text-color] font-medium">
                Experience
              </h4>
            </div>
            <div className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg  bg-[--component-color]">
              <span className="text-tiny text-[--text-color]">2022</span>
              <h3 className="text-xl text-[--main-color]">
                Freelance Blockchain Developer
              </h3>
            </div>
            <div className="py-4 pl-5 pr-3 space-y-2 rounded-lg  mb-6 bg-[--component-color]">
              <span className="text-tiny text-[--text-color]">2021-2022</span>
              <h3 className="text-xl text-[--main-color]">
                Blockchain Developer{" "}
              </h3>
              <p className="dark:text-[#000000]">
                Inferenz Tech Private Limited, Ahmedabad, India
              </p>
            </div>
            <div className="py-4 pl-5 pr-3 space-y-2 rounded-lg  bg-[--component-color]">
              <span className="text-tiny text-[--text-color]">2020-2021</span>
              <h3 className="text-xl text-[--main-color]">React JS Intern</h3>
              <p className="dark:text-[#000000]">Ping DR, Ahmedabad, India</p>
            </div>
          </div>

          <div>
            <div className="flex items-center space-x-2 mb-4 ">
            <PiCertificateBold className="text-6xl text-[--main-color]" />
              <h4 className="text-3xl text-[--text-color] font-medium">
                Certifications
              </h4>
            </div>
            <div className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg  bg-[--component-color]">
              <span className="text-tiny text-[--text-color]">2023</span>
              <h3 className="text-xl text-[--main-color]">
                Full-Stack Web-Developer
              </h3>
              <p className="dark:text-[#000000]">by LinkedIn Learning</p>
            </div>
            <div className="py-4 pl-5 pr-3 space-y-2 rounded-lg  mb-6 bg-[--component-color]">
              <span className="text-tiny text-[--text-color]">2023</span>
              <h3 className="text-xl text-[--main-color]">
                Introduction to MongoDB
              </h3>
              <p className="dark:text-[#000000]">by LinkedIn Learning</p>
            </div>
            <div className="py-4 pl-5 pr-3 space-y-2 rounded-lg mb-6 bg-[--component-color]">
              <span className="text-tiny text-[--text-color]">2022</span>
              <h3 className="text-xl text-[--main-color]">
                Software Architecture
              </h3>
              <p className="dark:text-[#000000]">Developer to Architect</p>
            </div>
            <div className="py-4 pl-5 pr-3 space-y-2 rounded-lg  bg-[--component-color]">
              <span className="text-tiny text-[--text-color]">2022</span>
              <h3 className="text-xl text-[--main-color]">
                Software Architecture
              </h3>
              <p className="dark:text-[#000000]">Domain-Driven Design</p>
            </div>
          </div>
        </div>
        <section className="py-10">
          <div className="bg-[--component-color] py-12 px-4 sm:px-5 md:px-10 lg:px-14 rounded-none md:rounded-xl">
            <div className="grid grid-cols-1  md:grid-cols-2 gap-8">
              <div className=" col-span-1">
                <h4 className="text-3xl text-white font-medium mb-6 sm:text-3xl md:text-4xl">
                  TECHNICAL SKILLS
                </h4> 
                {/* skill bar */}
                <div class=" mb-7">
                  <div class="flex justify-between py-1">
                    <span class=" text-base font-semibold dark:text-[#A6A6A6]">
                      Web Design
                    </span>
                    <span class=" text-base font-semibold pr-5 dark:text-[#A6A6A6]">
                      100%
                    </span>
                  </div>
                  <svg
                    class="rc-progress-line"
                    viewBox="0 0 100 1"
                    preserveAspectRatio="none"
                  >
                    <path
                      class="rc-progress-line-trail"
                      d="M 0.5,0.5
 L 99.5,0.5"
                      stroke-linecap="round"
                      stroke="#EDF2F2"
                      stroke-width="1"
                      fill-opacity="0"
                    ></path>
                    <path
                      class="rc-progress-line-path"
                      d="M 0.5,0.5
 L 99.5,0.5"
                      stroke-linecap="round"
                      stroke="#f97316"
                      stroke-width="1"
                      fill-opacity="0"
                    ></path>
                  </svg>
                </div>
                {/* skill bar */}
                {/* / */}
                {/* skill bar */}
                <div class=" mb-7">
                  <div class="flex justify-between py-1">
                    <span class=" text-base font-semibold dark:text-[#A6A6A6]">
                      Web Devlopment
                    </span>
                    <span class=" text-base font-semibold pr-5 dark:text-[#A6A6A6]">
                      100%
                    </span>
                  </div>
                  <svg
                    class="rc-progress-line"
                    viewBox="0 0 100 1"
                    preserveAspectRatio="none"
                  >
                    <path
                      class="rc-progress-line-trail"
                      d="M 0.5,0.5
 L 99.5,0.5"
                      stroke-linecap="round"
                      stroke="#EDF2F2"
                      stroke-width="1"
                      fill-opacity="0"
                    ></path>
                    <path
                      class="rc-progress-line-path"
                      d="M 0.5,0.5
 L 99.5,0.5"
                      stroke-linecap="round"
                      stroke="#f97316"
                      stroke-width="1"
                      fill-opacity="0"
                    ></path>
                  </svg>
                </div>
                {/* skill bar */}
                {/* skill bar */}
                <div class=" mb-7">
                  <div class="flex justify-between py-1">
                    <span class=" text-base font-semibold dark:text-[#A6A6A6]">
                      Blockchain Devlopment
                    </span>
                    <span class=" text-base font-semibold pr-5 dark:text-[#A6A6A6]">
                      100%
                    </span>
                  </div>
                  <svg
                    class="rc-progress-line"
                    viewBox="0 0 100 1"
                    preserveAspectRatio="none"
                  >
                    <path
                      class="rc-progress-line-trail"
                      d="M 0.5,0.5
 L 99.5,0.5"
                      stroke-linecap="round"
                      stroke="#EDF2F2"
                      stroke-width="1"
                      fill-opacity="0"
                    ></path>
                    <path
                      class="rc-progress-line-path"
                      d="M 0.5,0.5
 L 99.5,0.5"
                      stroke-linecap="round"
                      stroke="#4ade80"
                      stroke-width="1"
                      fill-opacity="0"
                    ></path>
                  </svg>
                </div>
                {/* skill bar */}
                {/*  */}
                {/* skill bar */}
                <div class=" mb-7">
                  <div class="flex justify-between py-1">
                    <span class=" text-base font-semibold dark:text-[#A6A6A6]">
                      Software Devlopment
                    </span>
                    <span class=" text-base font-semibold pr-5 dark:text-[#A6A6A6]">
                      100%
                    </span>
                  </div>
                  <svg
                    class="rc-progress-line"
                    viewBox="0 0 100 1"
                    preserveAspectRatio="none"
                  >
                    <path
                      class="rc-progress-line-trail"
                      d="M 0.5,0.5
 L 99.5,0.5"
                      stroke-linecap="round"
                      stroke="#EDF2F2"
                      stroke-width="1"
                      fill-opacity="0"
                    ></path>
                    <path
                      class="rc-progress-line-path"
                      d="M 0.5,0.5
 L 99.5,0.5"
                      stroke-linecap="round"
                      stroke="#0074ff"
                      stroke-width="1"
                      fill-opacity="0"
                    ></path>
                  </svg>
                </div>
                {/* skill bar */}
                {/*  */}
                {/* skill bar */}
                <div class=" mb-7">
                  <div class="flex justify-between py-1">
                    <span class=" text-base font-semibold dark:text-[#A6A6A6]">
                      Software Design
                    </span>
                    <span class=" text-base font-semibold pr-5 dark:text-[#A6A6A6]">
                      100%
                    </span>
                  </div>
                  <svg
                    class="rc-progress-line"
                    viewBox="0 0 100 1"
                    preserveAspectRatio="none"
                  >
                    <path
                      class="rc-progress-line-trail"
                      d="M 0.5,0.5
 L 99.5,0.5"
                      stroke-linecap="round"
                      stroke="#EDF2F2"
                      stroke-width="1"
                      fill-opacity="0"
                    ></path>
                    <path
                      class="rc-progress-line-path"
                      d="M 0.5,0.5
 L 99.5,0.5"
                      stroke-linecap="round"
                      stroke="#0074ff"
                      stroke-width="1"
                      fill-opacity="0"
                    ></path>
                  </svg>
                </div>
                {/* skill bar */}
              </div>
              <div className=" col-span-1">
                <h4 className="text-3xl text-white font-medium mb-6 sm:text-3xl md:text-4xl">
                  Knowledges
                </h4>
                <div className="bg-[--bg-color] py-5 rounded-xl gap-2 grid col-span-1">
  <div className="px-5">
    <h5 className="text-[--main-color]">Full Stack</h5>
    <div className="grid grid-cols-2 gap-2 lg:grid-cols-3">
                  <div class="bg-[--bg-color] flex items-center w-28 lg:w-36 text-xs lg:text-base px-1 py-2 rounded-lg">
                    <FaHtml5 className="mr-1 text-orange-500" />
                    HTML
                  </div>

                  <div class="bg-[--bg-color] flex items-center w-28 lg:w-36 text-xs lg:text-base px-1 py-2 rounded-lg">
                    <FaCss3 className="mr-1 text-blue-500" />
                    CSS
                  </div>

                  <div class="bg-[--bg-color] flex items-center w-28 lg:w-36 text-xs lg:text-base px-1 py-2 rounded-lg">
                    <DiJavascript className="mr-1 text-yellow-400" />
                    JAVA SCRIPT
                  </div>

                  <div class="bg-[--bg-color] flex items-center w-28 lg:w-36 text-xs lg:text-base px-1 py-2 rounded-lg">
                    <SiReact className="mr-1 text-blue-500" />
                    REACT JS
                  </div>

                  <div class="bg-[--bg-color] flex items-center w-28 lg:w-36 text-xs lg:text-base px-1 py-2 rounded-lg">
                    <FaNodeJs className="mr-1 text-green-400" />
                    NODE JS
                  </div>

                  <div class="bg-[--bg-color] flex items-center w-28 lg:w-36 text-xs lg:text-base px-1 py-2 rounded-lg">
                    <FaPython className="mr-1 text-blue-500" />
                    Python
                  </div>
                </div>
    </div>
    <div className="px-5">
    <h5 className="text-[--main-color]">Full Stack</h5>
    <div className="grid grid-cols-2 gap-2 lg:grid-cols-3">
    <div class="bg-[--bg-color] flex items-center w-28 lg:w-36 text-xs lg:text-base px-1 py-2 rounded-lg">
                    <FaGolang className="mr-1 text-cyan-400" />
                    Golang
                  </div>

                  <div class="bg-[--bg-color] flex items-center w-28 lg:w-36 text-xs lg:text-base px-1 py-2 rounded-lg">
                    <SiSolidity className="mr-1 text-blue-700" />
                    Solidity
                  </div>

                  <div class="bg-[--bg-color] flex items-center w-28 lg:w-36 text-xs lg:text-base px-1 py-2 rounded-lg">
                    <FaDatabase className="mr-1 text-gray-400" />
                    MYSQL
                  </div>

                  <div class="bg-[--bg-color] flex items-center w-28 lg:w-36 text-xs lg:text-base px-1 py-2 rounded-lg">
                    <DiMongodb className="mr-1 text-green-400" />
                    MongoDB
                  </div>

                  <div class="bg-[--bg-color] flex items-center w-28 lg:w-36 text-xs lg:text-base px-1 py-2 rounded-lg">
                    <FaDatabase className="mr-1 text-gray-400" />
                    CouchDB
                  </div>
                  </div>
    </div>
</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
export default Resume;
