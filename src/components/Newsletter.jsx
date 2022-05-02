import React from "react";

export default function Newsletter() {
  return (
    <div id="volunteer" className="w-full min-h-[25vh]  text-s-blue ">
      <div className="w-[100%]  h-full  mx-auto flex justify-center items-start flex-wrap">
        <div className="w-full px-4 md:px-20 py-10 md:w-[60%] h-full  flex flex-col justify-center items-start bg-s-pink ">
          <h1 className="text-2xl md:text-4xl font-extrabold py-4 ">
            GET INVOLVED
          </h1>
          <p className="md:text-xl text-l text-left py-2  md:py-2">
            Challenge yourself, get campaigning, volunteer with us. However you
            want to make a difference, we have the tips, ideas and resources you
            need to get started today.
          </p>
        </div>
        <div className="w-full md:w-[40%] px-4 py-4  md:py-12 flex flex-col justify-center h-full items-start bg-s-gray ">
          <div className="w-full flex justify-between items-center ">
            <input
              type="email"
              required
              placeholder="Enter Your Email"
              className="w-[70%] h-[5vh] rounded-2 text-xl bg-s-white rounded-md border-2 text-black"
            />

            <div className="max-w-[25%]  p-2 mx-2 text-l rounded-full bg-s-blue text-s-white  cursor-pointer hover:drop-shadow-lg hover:text-s-gray">
              JOIN US
            </div>
          </div>

          <p className="md:text-l text-s text-left py-4  md:py-2">
            We care about the protection of your data. Read our{" "}
            <span className="text-s-pink">Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
}
