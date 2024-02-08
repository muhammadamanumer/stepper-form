import React, { useState } from "react";
import { CiLock } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

const Step2 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    additionalInfo: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform any necessary actions with formData here
    console.log(formData);
    // Navigate to the next step
    navigate("/step3");
  };

  return (
    <>
      <div className="w-screen bg-[#E5E7EB] h-2">
        <div className="w-2/3 bg-[#019F44] h-full"></div>
      </div>
      <div className="text-center gap-y-9 flex flex-col">
        <div className="flex justify-center pt-16">
          <div className="flex flex-col w-1/3 items-center text-center font-semibold text-2xl">
            <div>Step # 2</div>
            <div className="mt-4">Details</div>
            <p className="text-base text-nowrap mt-2 text-[#6B7280]">
              We’re thrilled at the opportunity to help you grow your business
              online.
            </p>
            <p className="text-base text-[#6B7280]">
              Please let us know the best way to reach you.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col font-semibold text-left w-96 mt-14 text-sm">
                <label htmlFor="name">Name</label>
                <input
                  required
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="py-3 border"
                  type="text"
                />
              </div>
              <div className="flex gap-x-3">
                <div className="flex flex-col font-semibold text-left w-1/2 mt-6 text-sm">
                  <label htmlFor="email">Email</label>
                  <input
                    required
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="py-3 border"
                    type="text"
                  />
                </div>
                <div className="flex flex-col font-semibold text-left w-1/2 mt-6 text-sm">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    required
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="py-3 border"
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col font-semibold text-left w-96 mt-6 text-sm">
                <label htmlFor="additionalInfo">
                  Anything else you'd like to share?
                </label>
                <input
                  required
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  className="pb-24 border"
                  type="text"
                />
              </div>
              <div className="flex justify-center">
                <button
                  className="text-white text-base bg-green-600 font-normal mt-8 py-3 w-44"
                  type="submit"
                >
                  Send Request
                </button>
              </div>
            </form>
            <div className="flex gap-2 text-sm mt-8 font-normal text-[#6B7280]">
              <CiLock />
              We promise never to share your information or spam your inbox
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Step2;
