import React from "react";
import Typed from "react-typed";

import { Fade } from "react-reveal";

export default function Header() {
  return (
    <div
      id="header"
      className=" text-s-white  m-0 p-0 h-100v w-[100%] max-w-[100%] bg-[url('./media/happychildren.jpg')]  bg-cover  bg-center bg-no-repeat bg-fixed "
    >
      <div className="max-w-full tracking-wide h-full flex flex-col items-center justify-center bg-[#000000b3] ">
      <Fade bottom>
        <p className="md:text-5xl sm:text-4xl text-xl font-bold  text-s-pink">
          BE A PART OF
        </p>

        <h1 className="md:text-7xl sm:text-6xl text-2xl text-center  font-extrabold">
          TOGETHER WE ARE{" "}
          <Typed
            className="text-s-pink"
            strings={["ONE", "US", "FOREVER"]}
            typeSpeed={140}
            backSpeed={130}
            loop
          />{" "}
        </h1>
        <p className="md:text-5xl sm:text-4xl text-xl py-4 font-bold  text-s-pink">
          Sahay Foundation
        </p>

        <div className="p-2 px-4 text-xl rounded-full bg-s-pink  cursor-pointer hover:drop-shadow-lg hover:text-s-gray">
          JOIN US
        </div>
        </Fade>
      </div>
    </div>
  );
}
