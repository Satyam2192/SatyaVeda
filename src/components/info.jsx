import React from "react";
import { FaClock, FaEnvelope, FaPhone } from "react-icons/fa";

const info = () => {
  return (
    <header className="bg-[#141d38] text-white py-4 ">
      <div className=" flex justify-between items-center w-full max-w-7xl mx-auto">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <FaClock />
            <p>Opening Hour 9:00am - 11:00pm</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope />
            
            <p>email@gmail.in</p>
          </div>
        </div>

        <div className=" flex items-center space-x-2">
          <FaPhone />
          <p>Contact No: +91000000000</p>
        </div>
      </div>
    </header>
  );
};

export default info;
