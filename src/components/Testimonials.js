import React from 'react';
import TestiCard from './TestiCard';
import { useState} from 'react';

import { BsChevronDoubleRight,BsChevronDoubleLeft } from 'react-icons/bs';

export default function Testimonials() {

    var arr = ["first", "Second", "Third"];


  var [cIndex, setCIndex] = useState(0);

  const next = () => 
  {  console.log(cIndex)


      if(cIndex >=2)
      {
          setCIndex(0);

        
      }
      else{
          
setCIndex((prev)=>prev+1);
      }

  }

  const previous = () => 
  {  console.log(cIndex)


      if(cIndex<=0)
      {
          setCIndex(2);

        
      }
      else{
          
setCIndex((prev)=>prev-1);
      }

  }

  return (
    <div className="w-full h-50v md:h-70v p-8 bg-s-blue">


    

            <div className="md:w-1/2 w-5/6 h-full relative transition mx-auto">

           
             {
                 arr.map((val,index)=>
                    {
                        return <>
                        <div className={cIndex===index?'w-full h-full transition mx-auto opacity-100  ease-in-out duration-[2s]  border-2 text-s-white justify-center flex flex-col items-center':"absolute left-[-1000%] opacity-0"}><TestiCard name={val}/></div>
                   </>
                    })
             }
           <div className="absolute top-1/2 left-[-5%] z-10">

<BsChevronDoubleLeft onClick={()=>previous()} className='text-s-white cursor-pointer ease-in duration-300 hover:text-s-gray ' size={60}/>

 </div>
 <div className="absolute top-1/2 right-[-5%] z-10">

<BsChevronDoubleRight onClick={()=>next()} className='text-s-white cursor-pointer ease-in duration-300 hover:text-s-gray ' size={60}/>

 </div>
             </div>

       

        
    </div>
  )
}
