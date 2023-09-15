import React from "react";
import { tech, call } from "../assets/index";

const Why = () => {
  return (
    <section>
      <div className="bg-black text-white py-20">
        <div className="container flex flex-col md:flex-row items-center my-12 md:my-24 max-w-7xl mx-auto">
          <div className="flex flex-col w-full lg:w-1/2 justify-center items-start p-8">
            <h1 className="text-3xl md:text-5xl p-2 text-yellow-300 tracking-loose">
              Why Us?
            </h1>
            <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
              Bringing out new IT business solutions and ideas
            </h2>
            <p className="text-sm md:text-base text-gray-50 mb-4">
              To develop a specialized solution, we adopt a transparent
              methodology and an optimistic mindset. Our procedure assures that
              we give you the varied options as well as that you're aware of all
              the possibilities.
            </p>
            <a
              href="#"
              className="bg-transparent hover:bg-yellow-300 text-yellow-300 hover:text-black rounded shadow hover:shadow-lg py-2 px-4 border border-yellow-300 hover:border-transparent"
            >
              Explore Now
            </a>
          </div>
          <div className="justify-center w-full lg:w-1/2">
            <div className="flex flex-row content-center justify-center">
              <div className="flex flex-col ">
                <img className="h-auto w-[75%]" src={tech} alt="Image 1" />
                <p className="text-[20px] mt-4 ml-11 sm:ml-36 ">Tech Expertise</p>
              </div>
              <div className="flex flex-col text-center mr-9 md:mr-0">
                <img
                  className="h-auto w-[100%] "
                  src={call}
                  alt="Image 2"
                />
                <p className="text-[20px] mt-4">24/7 Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
