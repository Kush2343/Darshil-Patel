import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

function Conatct() {
  return (
    <section className="md:px-20 sm:px-5 sm:pb-20" data-aos="fade">
      <div className="bg-[--bg-color] lg:rounded-xl w-full md:rounded-none lg:px-5 px-3 sm:px-3 md:px-4">
        <div class="py-12">
          <h2 class="text-[--main-color] text-center md:text-left pb-8 text-2xl  lg:text-4xl after-effect after:left-40 after:top-5">
            Contact
          </h2>
          <div class="lg:flex gap-x-20">
            <div class="w-full lg:w-[40%] xl:w-[30%] space-y-6 rounded-none md:rounded-lg lg:h-fit lg:pt-8">
              <div class="flex flex-wrap  p-[30px] gap-2 rounded-xl bg-[--main-color] ">
                <span class="w-[40px] h-[40px] mt-3">
                  <FiPhone className="text-[--bg-color] text-4xl" />
                </span>
                <div class="space-y-2">
                  <p class="text-xl font-semibold text-[--text-color]">
                    Phone :
                  </p>
                  <a
                    class="text-gray-lite text-lg text-[--text-color] cursor-pointer"
                    href="tel:+91 7016160435"
                  >
                    +91 7016160435
                  </a>
                </div>
              </div>
              <div class="flex flex-wrap  p-[30px]  gap-2 rounded-xl bg-[--main-color] ">
                <span class="w-[40px] h-[40px] mt-3">
                  <MdOutlineMail className="text-[--bg-color] text-4xl" />
                </span>
                <div class="space-y-2">
                  <p class="text-xl font-semibold text-[--text-color]">
                    Email :
                  </p>
                  <a
                    class="text-gray-lite text-lg text-[--text-color] cursor-pointer"
                    href="mailto:darshilpatel7056@gmail.com"
                  >
                    darshilpatel7056@gmail.com
                  </a>
                </div>
              </div>
              <div class="flex flex-wrap  p-[30px]  gap-2 rounded-xl bg-[--main-color] ">
                <span class="w-[40px] h-[40px] mt-3">
                  <IoLocationOutline className="text-[--bg-color] text-4xl" />
                </span>
                <div class="space-y-2">
                  <p class="text-xl font-semibold text-[--text-color]">
                    Address :
                  </p>
                  <p class="text-gray-lite text-lg text-[--text-color]">
                    Ahmedabad
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full mt-8 lg:mt-0 lg:w-[60%] xl:w-[70%]">
              <div
                data-aos="fade"
                class="md:p-[48px] p-4 bg-color-810 rounded-xl dark:bg-[--bg-color] aos-init aos-animate"
              >
                <h3 class="text-4xl  ">
                  <span class="text-gray-lite text-[--text-color] ">
                    I'm always open to discussing product
                  </span>
                  <br />
                  <span class="font-semibold text-[--main-color]">
                    design work or partnerships.
                  </span>
                </h3>
                <form id="myForm">
                  <div class="relative  z-0 w-full mt-[40px] mb-8 group">
                    <input
                      type="text"
                      name="name"
                      class="block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none text-[--main-color] dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#FF6464] peer"
                      placeholder=" "
                      required=""
                      fdprocessedid="1bw7c"
                    />
                    <label
                      for="name"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                    >
                      Name *
                    </label>
                  </div>
                  <div class="relative z-0 w-full mb-8 group">
                    <input
                      type="email"
                      name="user_email"
                      class="block autofill:text-red-900 needed py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none text-[--main-color] dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#5185D4] peer"
                      placeholder=" "
                      id="user_email"
                      required=""
                      fdprocessedid="m8l27"
                    />
                    <label
                      for="user_email"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#5185D4] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                    >
                      Email *
                    </label>
                  </div>
                  <div class="relative z-0 w-full mb-8 group">
                    <input
                      type="text"
                      name="message"
                      class="block autofill:bg-yellow-200 py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none text-[--main-color] dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#CA56F2] peer"
                      placeholder=" "
                      id="message"
                      required=""
                      fdprocessedid="jx5z3"
                    />
                    <label
                      for="message"
                      class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#CA56F2] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
                    >
                      Message *
                    </label>
                  </div>
                  <div class="transition-all duration-300  ease-in-out inline-block hover:bg-gradient-to-r from-[--main-color] to-[--main-color] rounded-lg  mt-3">
                    <input
                      type="submit"
                      class=" transition ease-in duration-200 font-semibold cursor-pointer border-color-910   hover:border-transparent px-6  py-2 rounded-lg border-[2px]  hover:text-white   text-[--main-color] "
                      value="Submit"
                      fdprocessedid="zi3gec"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Conatct;
