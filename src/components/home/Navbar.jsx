import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="hidden md:flex bg-[#F9F7F4] justify-center items-centers">
      <div className=" flex flex-1 items-center justify-centers pl-8">
        <Link to="/">
          <h1 className="text-3xl font-bold text-[#28514F]">harbor</h1>
        </Link> 
      </div>
      <div className="flex-1 flex-row items-center justify-evenly  p-8">
        <div className="flex flex-row justify-around  ">
          <Link to="/">
            <h6 className="flex justify-center items-center text-base   hover:bg-[#8999a1] w-20   rounded-3xl   ">
              Home
            </h6>
          </Link>
          <Link to="/btn">
            <h6  className="flex justify-center items-center text-base   hover:bg-[#8999a1] w-20   rounded-3xl   ">About</h6>
          </Link>
          <Link to="/btn">
            <h6 className="flex justify-center items-center text-base w-30   hover:bg-[#8999a1]    rounded-3xl   ">Know Your Risks</h6>
          </Link>
          <Link to="/btn">
            <h6 className="flex justify-center items-center text-base   hover:bg-[#8999a1] w-20   rounded-3xl   ">For Work</h6>
          </Link>
          <Link to="/btn">
            <h6  className="flex justify-center items-center text-base   hover:bg-[#8999a1] w-20   rounded-3xl   ">Journal</h6>
          </Link>
          <Link to="/btn">
            <h6  className="flex justify-center items-center text-base   hover:bg-[#8999a1] w-20   rounded-3xl   ">Shop</h6>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar