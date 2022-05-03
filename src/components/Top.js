import React from "react";
import { AiFillCaretUp } from "react-icons/ai";
import { Link } from "react-scroll";
import { useEffect, useState } from "react";

export default function Top() {
  const [sTop, setStop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 700) {
        setStop(true);
      } else {
        setStop(false);
      }
    });
  }, []);
  return (
    <Link to="header" spy={true} smooth={true} offset={0} duration={900}>
      <div
        className={
          sTop
            ? "min-w-6 min-h-6 p-2 z-1 bg-gray-100 border-2 border-s-yellow fixed bottom-4 right-4 text-s-yellow flex justify-center items-center cursor-pointer"
            : "hidden"
        }
      >
        <AiFillCaretUp className="font-bold" size={20} />
      </div>{" "}
    </Link>
  );
}
