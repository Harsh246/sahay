import React from "react";

export default function About() {
  return (
    <div id="about" className="w-full min-h-50v bg-s-blue">
      <div className="w-[100%] md:w-[70%] h-full md:p-16  p-8 mx-auto flex flex-col justify-start items-start text-s-white">
        <h2 className="font-bold text-2xl md:text-2xl lg:text-4xl md:py-4  py-2 m-0">
          Cultural Organizing
        </h2>
        <p className="md:text-xl text-l text-left py-2  md:py-2">
          This site offers resources, inspiration and how-to’s for everyone to
          use the culture to protect our children and remove hunger and resist
          injustice.
        </p>
        <p className="md:text-xl text-l text-left py-1   md:py-2">
          Our goal is to help massively utilize cultural, essential and integral
          resources to integrate it into the heart of our organizing, campaigns
          and mobilizations to strengthen movement-building, innovate new forms
          of resistance and to win positive change.
        </p>
      </div>
    </div>
  );
}
