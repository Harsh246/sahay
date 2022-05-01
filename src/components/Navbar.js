import React from 'react';
import sahay from '../media/sahay.svg';

import { useState } from 'react';


import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

import { Link } from "react-scroll";


export default function Navbar() {

    const [nav, setNav] = useState(false);

    const handleNav = () =>
    {
        setNav(!nav);
    }



  return (
    <div className=" flex justify-between items-center h-24 w-full mx-auto px-4 text-white fixed bg-transparent">

<div className="w-16  lg:w-20">
 <img className='' src={sahay}/>
</div>
   
<ul className='hidden uppercase md:flex text-xl box-border cursor-pointer '>
    
<li className='p-4 box-border hover:border-b-2'><Link to="header" spy={true} smooth={true} offset={50} duration={900}>Home</Link></li>
   
<li className='p-4 hover:border-b-2'><Link to="card" spy={true} smooth={true} offset={50} duration={900}>Cards</Link></li>
   
<li className='p-4 hover:border-b-2'><Link to="header" spy={true} smooth={true} offset={50} duration={900}>Home</Link></li>
   
<li className='p-4 hover:border-b-2'><Link to="contact" spy={true} smooth={true} offset={50} duration={900}>Contact</Link></li>


</ul>

<div onClick={handleNav}  className="block md:hidden">

    {nav? <AiOutlineClose size={20} />:  <AiOutlineMenu size={20} />}
   
</div>

<div className={nav ? 'fixed py-4 px-4 left-0 top-0 w-[60%] border-r h-full border-r-[#DFDFDE] bg-[#8D8DAA] ease-in-out duration-500': 'fixed left-[-100%] '}>

<div className="w-16  lg:w-20">
 <img className='' src={sahay}/>
</div>
   <nav>

  
    <ul className='uppercase p-4'>

<li className='p-4 border-b border-[#DFDFDE]'><Link to="header" spy={true} smooth={true} offset={50} duration={900}>Home</Link></li>
   
<li className='p-4 border-b border-[#DFDFDE]'><Link to="card" spy={true} smooth={true} offset={50} duration={900}>Cards</Link></li>
   
<li className='p-4 border-b border-[#DFDFDE]'><Link to="header" spy={true} smooth={true} offset={50} duration={900}>Home</Link></li>
   
<li className='p-4 border-b border-[#DFDFDE]'><Link to="contact" spy={true} smooth={true} offset={50} duration={900}>Contact</Link></li>


</ul>

 </nav>
</div>


    </div>
  )
}
