import React from "react";
import { useNavigate } from "react-router-dom";

const Step1 = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {
    const buttonText = e.target.textContent;
    console.log(buttonText);
    navigate("/step2");
  };

  return (
    <>
      <div className="w-screen bg-[#E5E7EB] h-2">
        <div className="w-1/3 bg-[#019F44] h-full"></div>
      </div>
      <div className="flex justify-center pt-16">
        <div className="flex flex-col w-80 items-center gap-y-10 text-center font-semibold text-2xl">
          <div>Step # 1</div>
          <div>What is your monthly digital marketing budget?</div>
          <div className="flex flex-col gap-y-4">
            <button
              onClick={handleClick}
              className="text-gray-400 hover:text-black hover:bg-gray-200 px-40 py-4 text-base bg-white"
            >
              $1,000/mo
            </button>
            <button
              onClick={handleClick}
              className="text-gray-400 hover:text-black hover:bg-gray-200 text-nowrap w-full py-4 text-base bg-white"
            >
              $1,000 - $2,000
            </button>
            <button
              onClick={handleClick}
              className="text-gray-400 hover:text-black hover:bg-gray-200 text-nowrap w-full py-4 text-base bg-white"
            >
              $2,000 - $5,000
            </button>
            <button
              onClick={handleClick}
              className="text-gray-400 hover:text-black hover:bg-gray-200 text-nowrap w-full py-4 text-base bg-white"
            >
              $5,000 - $10,000
            </button>
            <button
              onClick={handleClick}
              className="text-gray-400 hover:text-black hover:bg-gray-200 text-nowrap w-full py-4 text-base bg-white"
            >
              $10,000 - $25,000
            </button>
            <button
              onClick={handleClick}
              className="text-gray-400 hover:text-black hover:bg-gray-200 text-nowrap w-full py-4 text-base bg-white"
            >
              $25,000 +
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step1;
