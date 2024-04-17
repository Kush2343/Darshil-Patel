// import React, { useState, useEffect } from 'react';
// import { FaBars } from "react-icons/fa6";
// import { MdHome } from "react-icons/md";
// import { FaUser } from "react-icons/fa";
// import { HiDocumentText } from "react-icons/hi";
// import { FiCodesandbox } from "react-icons/fi";
// import { FaAddressBook } from "react-icons/fa";
// import { IoClose } from "react-icons/io5";
// import { NavLink } from 'react-router-dom';

// function Header() {
//   const [menuOpen, setMenuOpen] = useState();
//   const [isScrolling, setIsScrolling] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.pageYOffset;
//       setIsScrolling(scrollTop > 0);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
// <header className={`flex justify-between items-center sticky z-50 top-0 left-0 w-full lg:sticky lg:px-10 xl:px-20 ${isScrolling ? 'backdrop-blur-lg lg:py-3 transition-all duration-500 ease-in-out' : 'lg:py-9 transition-all duration-500 ease-in-out'}`}>
// <div className=" flex justify-between w-full px-4 bg-[--bg-color] lg:bg-transparent lg:px-0 py-3 lg:py-0">
//         <div className="flex justify-between w-full items-center space-x-4">
//           <h1 className='text-3xl text-black lg:text-[--bg-color]  font-extrabold'>Darshil Patel</h1>
//           <div className="flex items-center">
//             {!menuOpen ? (
//               <span
//                 onClick={toggleMenu}
//                 className="lg:opacity-0 lg:invisible visible opacity-100 flex justify-center cursor-pointer items-center text-white dark:text-white text-3xl ml-3 "
//               >
//                 <FaBars className="text-[--main-color]" />
//               </span>
//             ) : (
//               <span
//                 onClick={toggleMenu}
//                 className="lg:opacity-0 cursor-pointer lg:invisible visible opacity-100 flex justify-center items-center text-white text-3xl ml-3 "
//               >
//              <IoClose className="text-[--main-color]" />
//               </span>
//             )}
//           </div>
//         </div>
//       </div>
//       <nav
//         className={`${
//           menuOpen ? "block  dark:bg-black   " : "hidden lg:block"
//         }`}
//       >
//         {/* Menu items start  */}

//         <ul
//           className={`${
//             menuOpen
//               ? "block lg:hidden  absolute left-0 rounded-b-[20px] top-[54px] z-[22222222222222] w-full bg-black  drop-shadow-lg py-4"
//               : "flex  nav-menu"
//           }`}
//         >
//           <li>
//             <NavLink
//               className=" lg:text-[--main-color] bg-transparent lg:bg-[--bg-color] rounded-md pl-4 text-white font-medium mx-2.5 flex text-xtiny py-2.5 md:px-4 xl:px-5 items-center hover:text-[--bg-color] hover:bg-transparent transition-all duration-300 ease-in-out"
//               to="/"
//             >
//               <span className="mr-3 text-xl">
//               <MdHome className="text-[--bg-color] lg:text-[--main-color] hover:text-[--bg-color]" />
//               </span>
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               className=" lg:text-[--main-color] bg-transparent lg:bg-[--bg-color] rounded-md pl-4 text-white font-medium mx-2.5 flex text-xtiny py-2.5 md:px-4 xl:px-5 items-center  transition-all duration-300 ease-in-out hover:text-[--bg-color] hover:bg-transparent"
//               to="/about"
//             >
//               <span className="mr-3 text-xl">
//               <FaUser  className="text-[--bg-color] lg:text-[--main-color] hover:text-[--bg-color]" />
//               </span>
//               About
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               className="lg:text-[--main-color] bg-transparent lg:bg-[--bg-color] rounded-md pl-4 text-white font-medium mx-2.5 flex text-xtiny py-2.5 md:px-4 xl:px-5 items-center  transition-all duration-300 ease-in-out hover:text-[--bg-color] hover:bg-transparent"
//               to="/resume"
//             >
//               <span className="mr-3 text-xl">
//               <HiDocumentText className="text-[--bg-color] lg:text-[--main-color] hover:text-[--bg-color]" />
//               </span>
//               Resume
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               className="lg:text-[--main-color] bg-transparent lg:bg-[--bg-color] rounded-md pl-4 text-white font-medium mx-2.5 flex text-xtiny py-2.5 md:px-4 xl:px-5 items-center  transition-all duration-300 ease-in-out hover:text-[--bg-color] hover:bg-transparent"
//               to="/projects"
//             >
//               <span className="mr-3 text-xl">
//               <FiCodesandbox className="text-[--bg-color] lg:text-[--main-color] hover:text-[--bg-color]"/>
//               </span>
//               Projects
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               className="lg:text-[--main-color] bg-transparent lg:bg-[--bg-color] rounded-md pl-4 text-white font-medium mx-2.5 flex text-xtiny py-2.5 md:px-4 xl:px-5 items-center  transition-all duration-300 ease-in-out hover:text-[--bg-color] hover:bg-transparent"
//               to="/contact"
//             >
//               <span className="mr-3 text-xl">
//               <FaAddressBook className="text-[--bg-color] lg:text-[--main-color] hover:text-[--bg-color]" />
//               </span>
//               Contact
//             </NavLink>
//           </li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// export default Header;
import React, { useState, useEffect } from 'react';
import { FaBars } from "react-icons/fa6";
import { MdHome } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";
import { FiCodesandbox } from "react-icons/fi";
import { FaAddressBook } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { NavLink, useLocation } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolling(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close menu when location changes
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      // Close menu on window resize
      setMenuOpen(false);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={`flex justify-between items-center sticky z-50 top-0 left-0 w-full lg:sticky lg:px-10 xl:px-20 ${isScrolling ? 'backdrop-blur-lg lg:py-3 transition-all duration-500 ease-in-out' : 'lg:py-9 transition-all duration-500 ease-in-out'}`}>
      <div className=" flex justify-between w-full px-4 bg-[--bg-color] lg:bg-transparent lg:px-0 py-3 lg:py-0">
        <div className="flex justify-between w-full items-center space-x-4">
          <h1 className='text-3xl text-black lg:text-[--bg-color]  font-extrabold'>Darshil Patel</h1>
          <div className="flex items-center">
            {!menuOpen ? (
              <span
                onClick={toggleMenu}
                className="lg:opacity-0 lg:invisible visible opacity-100 flex justify-center cursor-pointer items-center text-white dark:text-white text-3xl ml-3 "
              >
                <FaBars className="text-[--main-color]" />
              </span>
            ) : (
              <span
                onClick={toggleMenu}
                className="lg:opacity-0 cursor-pointer lg:invisible visible opacity-100 flex justify-center items-center text-white text-3xl ml-3 "
              >
                <IoClose className="text-[--main-color]" />
              </span>
            )}
          </div>
        </div>
      </div>
      <nav
        className={`${
          menuOpen ? "block  dark:bg-black   " : "hidden lg:block"
        }`}
      >
        {/* Menu items start  */}
        <ul
          className={`${
            menuOpen
              ? "block lg:hidden  absolute left-0 rounded-b-[20px] top-[54px] z-[22222222222222] w-full bg-black  drop-shadow-lg py-4"
              : "flex  nav-menu"
          }`}
        >
          <li>
            <NavLink
              className=" lg:text-[--main-color] bg-transparent lg:bg-[--bg-color] rounded-md pl-4 text-white font-medium mx-2.5 flex text-xtiny py-2.5 md:px-4 xl:px-5 items-center hover:text-[--bg-color] hover:bg-transparent transition-all duration-300 ease-in-out"
              to="/"
            >
              <span className="mr-3 text-xl">
                <MdHome className="text-[--bg-color] lg:text-[--main-color] hover:text-[--bg-color]" />
              </span>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className=" lg:text-[--main-color] bg-transparent lg:bg-[--bg-color] rounded-md pl-4 text-white font-medium mx-2.5 flex text-xtiny py-2.5 md:px-4 xl:px-5 items-center  transition-all duration-300 ease-in-out hover:text-[--bg-color] hover:bg-transparent"
              to="/about"
            >
              <span className="mr-3 text-xl">
                <FaUser className="text-[--bg-color] lg:text-[--main-color] hover:text-[--bg-color]" />
              </span>
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className="lg:text-[--main-color] bg-transparent lg:bg-[--bg-color] rounded-md pl-4 text-white font-medium mx-2.5 flex text-xtiny py-2.5 md:px-4 xl:px-5 items-center  transition-all duration-300 ease-in-out hover:text-[--bg-color] hover:bg-transparent"
              to="/resume"
            >
              <span className="mr-3 text-xl">
                <HiDocumentText className="text-[--bg-color] lg:text-[--main-color] hover:text-[--bg-color]" />
              </span>
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink
              className="lg:text-[--main-color] bg-transparent lg:bg-[--bg-color] rounded-md pl-4 text-white font-medium mx-2.5 flex text-xtiny py-2.5 md:px-4 xl:px-5 items-center  transition-all duration-300 ease-in-out hover:text-[--bg-color] hover:bg-transparent"
              to="/projects"
            >
              <span className="mr-3 text-xl">
                <FiCodesandbox className="text-[--bg-color] lg:text-[--main-color] hover:text-[--bg-color]" />
              </span>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              className="lg:text-[--main-color] bg-transparent lg:bg-[--bg-color] rounded-md pl-4 text-white font-medium mx-2.5 flex text-xtiny py-2.5 md:px-4 xl:px-5 items-center  transition-all duration-300 ease-in-out hover:text-[--bg-color] hover:bg-transparent"
              to="/contact"
            >
              <span className="mr-3 text-xl">
                <FaAddressBook className="text-[--bg-color] lg:text-[--main-color] hover:text-[--bg-color]" />
              </span>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
