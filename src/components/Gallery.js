import React from "react";
import g1 from "../media/g1.jpg";
import g2 from "../media/g2.jpg";
import g3 from "../media/g3.jpg";
import g4 from "../media/g4.jpg";
import g5 from "../media/g5.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './overwrite.css';

function Gallery() {
  return (
    <div id="gallery" className="w-full max-h-40v p-8 flex flex-col items-center justify-center bg-s-blue ">

<h1 className="text-3xl md:text-5xl text-s-white font-extrabold py-4  underline  ">
        WHAT WE DO
      </h1>
      <div className="md:w-[50%] w-[80%] max-h-[70%] flex justify-center">
        <Carousel infiniteLoop  showThumbs={false} >
          <div className="w-full h-full">
            <img

            className="w-auto h-[100%]"
              alt=""
              src={g1}
            />
          </div>
         <div className="w-full h-full">
            <img

            className="w-auto h-[100%]"
              alt=""
              src={g2}
            />
          </div>
         <div className="w-full h-full">
            <img

            className="w-auto h-[100%]"
              alt=""
              src={g3}
            />
          </div>
         <div className="w-full h-full">
            <img

            className="w-auto h-[100%]"
              alt=""
              src={g4}
            />
          </div>
         <div className="w-full h-full">
            <img

            className="w-auto h-[100%]"
              alt=""
              src={g5}
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
export default Gallery;
