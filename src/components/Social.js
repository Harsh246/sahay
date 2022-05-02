import React from 'react';
import {AiFillFacebook, AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram} from 'react-icons/ai'

export default function Social() {
  return (
    <div className="md:w-16 w-14 h-[25vh] md:h-30v p-1 top-20  rounded-bl-md rounded-tl-md bg-s-gray  fixed md:top-[15%] right-0 text-s-white flex justify-center items-center cursor-pointer  flex-col ">

<div className="w-[100%] bg-blue-800 h-[25%] flex justify-center items-center  social">
<AiFillFacebook size={25}/>
</div> 
<div className="w-[100%] bg-blue-400 h-[25%] flex justify-center items-center social">

<AiFillTwitterCircle size={25}/>
</div> 
<div className="w-[100%] bg-blue-600 h-[25%] flex justify-center items-center social">

<AiFillLinkedin size={25}/>
</div> 
<div className="w-[100%]  h-[25%] flex justify-center items-center bg-orange-400 social">

<AiFillInstagram size={25}/>
</div> 


    </div>
  )
}
