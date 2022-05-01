import React from 'react';
import {AiOutlineArrowUp} from 'react-icons/ai';
import { Link } from "react-scroll";
import { useEffect, useState} from 'react';







export default function () {


    const [sTop, setStop] = useState(false);
useEffect(()=>
{

    window.addEventListener('scroll',()=>
    {

        if(window.pageYOffset>800)
        {
            setStop(true);
        }
        else{
            setStop(false);
        }

    });

},[]);
  return ( <Link to="header" spy={true} smooth={true} offset={0} duration={900}>
    <div  className={sTop?"min-w-10 min-h-10 p-4 border-2 border-s-yellow fixed bottom-4 right-4 text-s-yellow flex justify-center items-center cursor-pointer": "hidden"}>

          <AiOutlineArrowUp className='font-bold' size={20}/>
       

    </div>   </Link>
  )
}
