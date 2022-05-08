import React from 'react';
import TestiCard from './TestiCard';
import { useState, useEffect} from 'react';

import { BsChevronDoubleRight,BsChevronDoubleLeft } from 'react-icons/bs';

export default function Testimonials() {

    var arr = [
        {
            name:"Harsh",
            url:"https://randomuser.me/api/portraits/men/9.jpg",
            body:"“I am very pleased to say that my experience of associating with Sahay Foundation has been excellent and I feel it is a privilege too. My appreciation for the excellent work Sahay is carrying out in uplifting under- privileged children. My good wishes to Sahay to continue reaching out to children who need them the most. keep up the good work.“"
        }, 
        {
            name:"Muskan",
            url:"https://randomuser.me/api/portraits/women/76.jpg",
            body:"“It gives me immense pleasure to share my thoughts about Sahay Foundation. The idea to have a realistic NGO strike to me when I came across with underprivileged children who were deprived of basic needs like education, health care and nutrition. In short duration Sahay has done tremendous work for upliftment of underprivileged children.”"
        },
         {
            name:"Maanksh",
            url:"https://randomuser.me/api/portraits/men/51.jpg",
            body:"“A NGO that truely works for the upliftment and betterment of society with its vision of considering children as the future of the country.......Great going.......wish you best of luck.......Sahay”"
        }
    ];






  var [cIndex, setCIndex] = useState(0);
  const next = () => 
  {  
    


      if(cIndex >=2)
      {
          setCIndex(0);

        
      }
      else{
          
setCIndex((prev)=>prev+1);
      }

  }

  useEffect(()=>
  {

  var int =   setTimeout(()=>
  {
next();
  },5000);

  return ()=>
  {
      clearTimeout(int);
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[cIndex]);


  

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
    <div className="w-full min-h-50v md:min-h-70v p-8 bg-s-blue ">


<h1 className="text-2xl md:text-4xl uppercase underline underline-offset-2 font-extrabold py-4 text-center">
           Testimonials
          </h1>

            <div className="md:w-3/4 w-full md:h-[45vh] pt-3 relative transition mx-auto">

           
             {
                 arr.map((val,index)=>
                    {
                        return <>
                        <div className={cIndex===index?'w-full h-full transition mx-auto opacity-100  ease-in-out duration-[2s]  text-s-white justify-center flex flex-col items-center':"absolute left-[-1000%] opacity-0"}><TestiCard name={val.name} url={val.url} body={val.body}/></div>
                   </>
                    })
             }
           <div className="absolute top-1/2 left-[-3%] z-10">

<BsChevronDoubleLeft onClick={()=>previous()} className='text-s-white cursor-pointer ease-in duration-300 hover:text-s-gray ' size={45}/>

 </div>
 <div className="absolute top-1/2 right-[-3%] z-10">

<BsChevronDoubleRight onClick={()=>next()} className='text-s-white cursor-pointer ease-in duration-300 hover:text-s-gray ' size={45}/>

 </div>
             </div>

       

        
    </div>
  )
}
