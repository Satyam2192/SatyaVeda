import React from "react";
import { Link } from "react-router-dom";
import { homeImage, f1 } from "../assets";

export const Hero = () => {
  return (
    <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          alt=""
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <p className="inline-block px-3 py-2 mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-100">
            PREMIER IN IT SOLUTIONS
          </p>
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl sm:leading-none">
            Creating a better
            <br className="hidden md:block" />
            IT solutions{" "}
          </h2>
          <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg ">
            We at stoild private limited are dedicated at providing foremost IT
            solutions that would help you to stay ahead of the curve and boost
            your business digitally.
          </p>
          <div className="flex items-center">
            <a
              href="/contact"
              className="text-xl  inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-teal-400 hover:bg-pink-500 focus:shadow-outline focus:outline-none"
            >
              Shedule a call
            </a>
            <a
              href="/"
              aria-label=""
              className=" text-xl inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-pink-500"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
