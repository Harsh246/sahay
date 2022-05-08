import React from 'react';
import { useEffect } from "react";
import done2 from "../media/done2.gif";

import './fade.css';


export default function Thanks({setShow}) {
 
useEffect(() => {
    document.body.style.overflowY = "hidden";

    let timer = setTimeout(()=>
    {

        setShow(false);

      
    },4000);



    return ()=>
    {
        document.body.style.overflowY = "scroll";
        clearTimeout(timer);
    } 
    
    // eslint-disable-next-line
  }, []);
 return (
    <div className='w-screen h-screen fixed top-0 left-0 z-50 bg-[#00000080]  flex justify-center animate  items-center   '>

<div id="box" className='w-[80%] h-[30%] md:w-[40%] md:h-[40%] p-2  bg-[#fff] rounded-md transition ease-in-out duration-500 flex   flex-col justify-evenly  items-center'>
<h2 className="text-xl md:text-xxl text-blue-600 mg-auto font-extrabold ">Thank you</h2>
<img alt="logo"   className="w-auto h-[50%]" src={done2} />

<h3 className="text-l text-gray-800 mg-auto  ">Thanks for subscribing to our newsletter.</h3>
<h2 className="text-l text-gray-800 mg-auto font-bold  ">Enjoy Reading our Articles.</h2>

</div>
    </div>
  )
}
