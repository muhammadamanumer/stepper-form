import React from "react";
import { useNavigate } from "react-router-dom";

const Step3 = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <>
      <div className="w-screen bg-[#E5E7EB] h-2">
        <div className="w-full bg-[#019F44] h-full"></div>
      </div>
      <div className="flex flex-col gap-y-3 mx-auto text-center h-screen mt-52 items-center w-1/4 ">
        <div className="h-20 w-20 bg-gray-300"></div>
        <div className="text-2xl font-semibold">
          Request for a Proposal Has Been Submitted!
        </div>
        <div className="text-center text-[#6B7280]">
          Lorem ipsum dolor sit amet consectetur. Tincidunt ultrices dis gravida
          parturient urna tristique congue. Curabitur volutpat nulla convallis
          eget pellentesque. Luctus tellus eu ultrices.
        </div>
        <button
          onClick={handleClick}
          className="bg-[#019F44] text-white px-8 py-2 mt-6"
        >
          Return Home
        </button>
      </div>
    </>
  );
};

export default Step3;
