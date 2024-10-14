import React, { useState, useEffect } from "react";

const VerifyEmail = ({ hideModal, count }) => {

  const formatCount = (secs) => {
    const minutes = Math.floor(secs/60);
    const seconds =  secs%60;
    return `0${minutes}:${String(seconds).length == 1 ? `0${seconds}` : seconds}`;
  };

  return (
    <div className="w-full h-full absolute top-0 right-0 bg-[rgba(0,0,0,0.74)] flex items-center justify-center text-center">
      <div className="relative bg-white p-6 rounded-[8px] flex flex-col gap-[1rem] text-[#9095A0FF]">
        <span
          onClick={hideModal}
          className="absolute top-[.6rem] right-[.6rem] cursor-pointer text-xl"
        >
          &times;
        </span>
        <div>
          <h1 className="text-[38px] font-bold text-[#171A1FFF]">
            Almost Done
          </h1>
          <p className="text-sm">Please type the code sent to your email</p>
        </div>
        <div className="flex items-center w-full gap-2 justify-between">
          <input
            className="text-xl text-black font-bold text-center w-[48px] h-[48px] border border-[#9095A0FF] shadow-sm rounded-[4px]"
            type="number"
            max={"9"}
            maxLength="1"
          />
          <input
            className="text-xl text-black font-bold text-center w-[48px] h-[48px] border border-[#9095A0FF] shadow-sm rounded-[4px]"
            type="number"
            max={"9"}
            maxLength="1"
          />
          <input
            className="text-xl text-black font-bold text-center w-[48px] h-[48px] border border-[#9095A0FF] shadow-sm rounded-[4px]"
            type="number"
            max={"9"}
            maxLength="1"
          />
          <input
            className="text-xl text-black font-bold text-center w-[48px] h-[48px] border border-[#9095A0FF] shadow-sm rounded-[4px]"
            type="number"
            max={"9"}
            maxLength="1"
          />
          <input
            className="text-xl text-black font-bold text-center w-[48px] h-[48px] border border-[#9095A0FF] shadow-sm rounded-[4px]"
            type="number"
            max={"9"}
            maxLength="1"
          />
          <input
            className="text-xl text-black font-bold text-center w-[48px] h-[48px] border border-[#9095A0FF] shadow-sm rounded-[4px]"
            type="number"
            max={"9"}
            maxLength="1"
          />
        </div>
        <p className="text-[#C12126FF] text-xs mt-[-.7rem]">
          Please enter a valid code
        </p>
        <button className="bg-[#9095A0FF] px-4 py-2 text-white rounded-[8px] hover:bg-[#6E7787FF] duration-500">
          Verify
        </button>
        <p className="countdown mb-[2rem] text-sm">{formatCount(count)}</p>
        <p className="text-sm">
          Can't access your student email?{" "}
          <span className="text-gray-500 font-bold cursor-pointer">
            Contact support
          </span>
        </p>
      </div>
    </div>
  );
};

export default VerifyEmail;
