import React from 'react';
import Typed from 'react-typed';
 

export default function Header() {
  return ( <div id="header" className=" text-s-white w-screen m-0 p-0 h-95v bg-[url('./media/happychildren.jpg')]  bg-cover  bg-center bg-no-repeat bg-fixed ">
  <div className="max-w-full tracking-wide h-full flex flex-col items-center justify-center bg-[rgba(0,0,0,0.5)] ">
  <p className='md:text-5xl sm:text-4xl text-xl font-bold  text-s-pink'>BE A PART OF US</p>
  
  
  <h1 className="md:text-7xl sm:text-6xl text-4xl text-center  font-extrabold">TOGETHER WE ARE <Typed className='text-s-gray' strings={['ONE', 'US','FOREVER']} typeSpeed={90}
                    backSpeed={80}
                   
                    loop/>   </h1>
  <p className='md:text-5xl sm:text-4xl text-xl py-4 font-bold  text-s-pink'>Sahay Foundation</p>

  <div className="p-2 px-4 text-sm rounded-full bg-s-pink hover:drop-shadow-lg cursor-pointer ">JOIN US</div>
  
  </div>
  
      </div>
  
  )
}
