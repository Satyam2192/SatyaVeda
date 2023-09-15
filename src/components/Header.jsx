import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import Info from "./info";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="">
      <div className={`hidden sm:block ${scrolled ? "hidden" : "mb-28 "} `}>
        <Info />
      </div>

      <div
        className={`${
          styles.paddingX
        } w-full flex flex-col items-center fixed top-0 z-20  ${
          scrolled ? "bg-transparent mt-2" : " bg-transparent sm:mt-16 mt-2"
        } transition-all duration-500`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto border-4 border-gray-400 bg-white p-4 pt-5 rounded-xl">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
            <p className=" text-[18px] font-bold cursor-pointer flex ">
              Satya <span className="sm:block hidden">Veda</span>
            </p>
          </Link>

          <ul className="list-none hidden sm:flex flex-row gap-10 ">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-teal-400" : "text-secondary"
                } hover:text-teal-400 text-[18px] font-medium cursor-pointer pt-1`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <li>
              <a
                href="/contact"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-teal-400 hover:bg-pink-500 focus:shadow-outline focus:outline-none"
              >
                Schedule a Call
              </a>
            </li>
          </ul>

          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[28px] object-contain cursor-pointer "
              onClick={() => setToggle(!toggle)}
            />

            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } p-6 bg-gray-200 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl animate-fadeIn`}
            >
              <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                {navLinks.map((nav) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      active === nav.title ? "text-white" : "text-secondary"
                    } animate-slideIn`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
                <li>
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-teal-400 hover:bg-pink-500 focus:shadow-outline focus:outline-none"
                  >
                    Schedule a Call
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
