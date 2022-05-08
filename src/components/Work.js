import React from "react";
import motivate from "../media/motivate.svg";
import distribute from "../media/distribute.svg";

import team from "../media/team.svg";

import Fade from 'react-reveal/Fade';
// import {CgArrowsHAlt} from 'react-icons/cg';

export default function Work() {
  return (
    <div
      id="work"
      className="w-full min-h-90v relative flex flex-col items-center justify-start text-s-blue   bg-[url('./media/kind.jpg')]  bg-cover  bg-center bg-no-repeat bg-fixed "
    >

{/* <div className="absolute w-[40px] h-[75%] bg-transparent rounded-lg left-0 right-0 ml-auto mr-auto bottom-[10%] top-[15%] ">


<CgArrowsHAlt size={40} className="sticky w-[40px] h-4  text-red-500 left-0 right-0 top-[25%]"/>

</div> */}


<div className="w-full min-h-90v font-bold   p-8 flex flex-col items-center justify-start bg-[#ffffff8d]">
<Fade top>


      <h1 className="text-3xl md:text-5xl font-extrabold py-4 underline  ">
        HOW WE WORK
      </h1>
      </Fade>
<Fade left >
      <div className="w-[90%] md:w-[70%] h-40  my-4 flex items-center justify-center">
        <div className="w-[40%] flex items-center justify-center ">
          <img alt="logo" 
            className="w-full h-auto object-scale-down object-center"
            src={motivate}
          />
        </div>
        <div className="w-[60%] flex items-center  justify-center text-xl md:text-3xl">
          WE MOTIVATE
        </div>
      </div></Fade>
      <Fade right>
      <div className="w-[90%] md:w-[70%] h-40  my-4 flex items-center justify-center">
        <div className="w-[60%] flex items-center justify-center text-xl md:text-3xl">
          WE ORGANIZE
        </div>
        <div className="w-[40%] flex items-center justify-center ">
          <img alt="logo" 
            className="w-full h-auto object-scale-down object-center"
            src={team}
          />
        </div>
      </div></Fade>
      <Fade left>
      <div className="w-[90%] md:w-[70%] h-40  my-4 flex items-center justify-center">
        <div className="w-[40%] flex items-center justify-center ">
          <img alt="logo" 
            className="w-full h-auto object-scale-down object-center"
            src={distribute}
          />
        </div>
        <div className="w-[60%] flex items-center justify-center text-xl md:text-3xl">
          WE DISTRIBUTE
        </div>
      </div></Fade>
   </div>
   
    </div>
  );
}
