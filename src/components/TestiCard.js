import React from 'react'

export default function TestiCard({name}) {
  return (
    <div className='w-full h-full overflow-hidden text-slate-50' >
    <img className="w-full h-[90%] object-cover ease-in-out duration-700 overflow-hidden hover:scale-[1.1]" alt="imf" src="https://www.diocesecpa.org/blog/wp-content/uploads/2019/07/Focus.jpg"   />
    <h1>{name}</h1>
    </div>
  )
}
