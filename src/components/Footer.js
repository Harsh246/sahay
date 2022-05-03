import React from 'react';
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaYoutubeSquare,
  FaLinkedin
} from 'react-icons/fa';

const Footer = () => {
  return (

    <div id="contact" className='max-w-[1240px] bg-s-blue mx-auto py-36 px-2 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-s-pink'>SAHAY.</h1>
        <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaLinkedin size={30} />
            
            <FaYoutubeSquare size={30} />
            
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-evenly mt-6 cursor-pointer'>
    
    <div>
        <h6 className='font-medium text-gray-400 '>Get in Touch</h6>
        <ul>
            <li className='py-2 text-sm'>Media</li>
            <li className='py-2 text-sm'>Documentation</li>
            <li className='py-2 text-sm'>Blogs</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Useful Info</h6>
        <ul>
            <li className='py-2 text-sm'>FAQs</li>
            <li className='py-2 text-sm'>Annual Reports</li>
            <li className='py-2 text-sm'>Safeguarding</li>
            <li className='py-2 text-sm'>Press</li>
            <li className='py-2 text-sm'>Careers</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Recent Campaigns</h6>
        <ul>
            <li className='py-2 text-sm'>Future on Tap</li>
            <li className='py-2 text-sm'>Back to School</li>
            <li className='py-2 text-sm'>Climate Change</li>
            <li className='py-2 text-sm'>Untapped</li>
            <li className='py-2 text-sm'>Empower Girls</li>
            <li className='py-2 text-sm'>Sanitation Workers</li>
            <li className='py-2 text-sm'>Sanitation Workers</li>

        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Careers</h6>
        <ul>
            <li className='py-2 text-sm'>Careers</li>
            <li className='py-2 text-sm'>Policy</li>
            <li className='py-2 text-sm'>Terms</li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;