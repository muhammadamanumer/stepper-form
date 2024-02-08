import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

const Nav = () => {
  return (
    <nav className="flex justify-between bg-white px-12 py-3">
      <div className="flex gap-x-3 items-center font-semibold">
        <FaArrowLeft />
        Go Back
      </div>
      <div className="flex gap-x-3 items-center font-semibold">
        Exit
        <IoCloseSharp />
      </div>
    </nav>
  );
};

export default Nav;
