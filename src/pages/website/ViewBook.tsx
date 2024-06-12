import React from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

const ViewBook = () => {
  return (
    <div className="flex w-[100%] h-[50%] bg-slate-100 p-8">
    {/* <div className="flex w-[60%] h-[50%] bg-slate-100 p-8 m-auto"> */}
      <img
        src="https://demo.fieldthemes.com/bookshop/demo1/33-large_default/the-art-city.jpg"
        alt=""
        className="border mr-8"
      />
      <div>
        <p className="font-bold text-[22px] uppercase">THE ART CITY</p>
        <p className="text-[14px] text-[#666] mt-5">
          Maecenas mauris urna, semper nec dignissim vitae, molestie et magna!
          Duis pulvinar volutpat euismod.{" "}
        </p>
        <p className="text-[16px] font-bold text-[#e5642f] mt-5">€26.12 </p>
        <p className="text-[14px] mt-5">
          Size:
          <select className="outline-none border w-[50px] ml-4" id="">
            <option selected value="">
              S
            </option>
            <option value="">M</option>
          </select>
        </p>
        <p className="flex items-center text-[14px] mt-5">
          Color:
          <button className="w-5 h-5 bg-blue-500 mx-2 shadow-lg shadow-gray-400/80"></button>
          <button className="w-5 h-5 bg-green-100 mx-2 shadow-lg shadow-gray-400/80"></button>
          <button className="w-5 h-5 bg-yellow-300 mx-2 shadow-lg shadow-gray-400/80"></button>
        </p>
        <div className="flex mt-5">
          <div className="flex mr-3">
            <input
              type="text"
              className="outline-none border w-[40px] h-auto px-2 text-[14px]"
            />
            <div className="flex flex-col">
              <button className="border p-[2px] text-[12px]">
                <BsChevronUp />
              </button>
              <button className="border p-[2px] text-[12px]">
                <BsChevronDown />
              </button>
            </div>
          </div>
          <button className="flex items-center text-[12px] mr-3 bg-[#444] text-white px-4 transition ease-in-out duration-200 hover:bg-[#e5642f] ">
            <FaShoppingCart />
            <span className="ml-2">ADD TO CART</span>
          </button>
          <button className="text-[14px] mr-3 bg-[#444] text-white px-4 transition ease-in-out duration-200 hover:bg-[#e5642f] ">
            <FaRegHeart />
          </button>
          <button className="text-[14px] mr-3 bg-[#444] text-white px-4 transition ease-in-out duration-200 hover:bg-[#e5642f] ">
            <IoMdAdd />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewBook;
