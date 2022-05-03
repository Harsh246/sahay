import React from "react";
import sahay from "../media/sahay.svg";
import { useEffect, useRef } from "react";


import { useState } from "react";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";



import { Link } from "react-scroll";



export default function Navbar() {
  const navb = useRef();

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

   
  useEffect(() => {


    window.addEventListener("scroll", () => {
    //   console.log(window.pageYOffset);
      if (window.pageYOffset > 700) {
        // console.log("yes");
        // console.log(navb.current);
        navb.current.style.background = "#00000080";
      } else {
        navb.current.style.background = "transparent";
      }
    });
  }, []);

  return (
    <div
      ref={navb}
      className=" flex justify-between items-center h-20 w-[100%] px-4 mx-auto text-white fixed top-0 z-50 bg-transparent ease-in-out"
    >
      <div id="btttn" className="w-16  lg:w-20 animate-pulse ">
         <img alt="logo" className="" src={sahay} />
      </div>

      <ul className="hidden uppercase md:flex text-xl box-border cursor-pointer ">
        <li className="p-4 border-b-2 border-transparent  hover:border-s-white">  
        {/* dynamic border increases height/size which doesnt look nice so instead change the color. */}
          <Link   to="header" spy={true} smooth={true} offset={0} duration={600}>
            Home
          </Link>
        </li>

        <li className="p-4 border-b-2 border-transparent  hover:border-s-white">
          <Link   to="about" spy={true} smooth={true} offset={-80} duration={600}>
            About
          </Link>
        </li>

        <li className="p-4 border-b-2 border-transparent  hover:border-s-white">
          <Link   to="work" spy={true} smooth={true} offset={-40} duration={600}>
            Work
          </Link>
        </li>
        <li className="p-4 border-b-2 border-transparent  hover:border-s-white">
          <Link   to="gallery" spy={true} smooth={true} offset={-80} duration={600}>
            Gallery
          </Link>
        </li>

        <li className="p-4 border-b-2 border-transparent  hover:border-s-white">
          <Link  
            to="contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={600}
          >
            Contact
          </Link>
        </li>
        <li className="p-4 border-b-2 border-transparent">
        <a target="_blank" href="https://rzp.io/l/wAk7DeXAO" rel="noreferrer" className="bg-s-pink rounded-lg p-4 ring-offset-2 ring-2 ring-transparent hover:ring-white hover:font-extrabold">Donate</a>
        </li>
      
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div id="hnav"
        className={
          nav
            ? "overflow-x-hidden pt-16  fixed py-4 px-4 left-0 top-0 w-[60%] border-r h-full border-r-[#DFDFDE] z-1 bg-[#06113C] ease-in-out duration-500"
            : "fixed left-[-100%] "
        }
      >
        <div className="w-16  lg:w-20">
           <img alt="logo" className="" src={sahay} />
        </div>
        <nav>
          <ul className="uppercase p-4">
            <li className="p-4 border-b border-[#DFDFDE]">
              <Link  
                to="header"
                spy={true}
                smooth={true}
                offset={50}
                duration={600}
              >
                Home
              </Link>
            </li>

            <li className="p-4 border-b border-[#DFDFDE]">
              <Link  
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={600}
              >
                About
              </Link>
            </li>

            <li className="p-4 border-b border-[#DFDFDE]">
              <Link  
                to="header"
                spy={true}
                smooth={true}
                offset={50}
                duration={600}
              >
                Home
              </Link>
            </li>

            <li className="p-4 border-b border-[#DFDFDE]">
              <Link  
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={600}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
