import React from 'react';


import { Link } from "react-scroll";
import { BsChevronDoubleRight } from 'react-icons/bs';

export default function JoinTag() {
  return (
    <div className=" opacity-0 md:opacity-100 md:w-14 ease-in-out duration-500  w-10 h-50v md:h-60v  top-[50%] uppercase text-[15px] md:text-[16px] font-bold  bg-s-white   fixed md:top-[30%] md:left-[-4%] hover:md:left-0 right-0 text-s-white flex justify-center items-center cursor-pointer  flex-col ">

<div className="w-[100%] bg-orange-600 h-[25vh] flex justify-center relative items-center hover:text-[17px] ">



<Link to="volunteer" spy={true} smooth={true} offset={-80} duration={900}>
     <h2 className=" -rotate-90  ">volunteer</h2>
          </Link>
</div> 


<div className=" absolute text-s-gray animate-pulse top-[40%] right-[-25px] " >
<BsChevronDoubleRight size={30}/>
</div>

<div className=" absolute text-s-gray animate-pulse top-[50%] right-[-25px] " >
<BsChevronDoubleRight size={30}/>
</div>
<div className=" absolute text-s-gray animate-pulse top-[60%] right-[-25px] " >
<BsChevronDoubleRight size={30}/>
</div>
<div className="w-[100%] bg-white text-blue-600 h-[20vh] flex justify-center  items-center hover:text-[17px]">
<h2  className=" -rotate-90 ">members</h2>
</div> 

<div className="w-[100%] bg-green-600 h-[20vh]  flex justify-center items-center   hover:text-[17px]">
<h2  className="transform -rotate-90 tb-rl animate-pulse">Donate</h2>
</div> 



    </div>
  )
}
