import React from 'react'

export default function TestiCard({name, url, body}) {
  return (
<>
<div className="w-full h-full flex flex-col justify-between items-center">

<div className='min-w-32 min-h-32 max-h-32 max-w-32 overflow-hidden ring-offset-4 ring-white ring-2  rounded-full mb-4'>
  <img className="w-full h-[100%] object-cover object-center ease-in-out duration-700 overflow-hidden hover:scale-[1.1]" alt="imf" src={url}   />
  
</div>
<div className="w-[70%] text-s-white text-l text-center">
<p> {body}</p>
</div>
<div className="text-s-pink text-xl my-4">
    <h2>{name}</h2>
</div>

</div>
</>



  )
}
