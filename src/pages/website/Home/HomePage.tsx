import React from "react";
import { FaRegClock, FaRegStar, FaStar } from "react-icons/fa";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import CardItem from "./CardItem";

const threeItems = Array(3).fill(null); // [null, null, null]
//
const HomePage = () => {
  return (
    <div>
      <div className="container flex">
        {/* siderbar */}
        <div className="w-[30%] mr-12">
          {/* hot deal */}
          <div className="flex items-center justify-between font-bold bg-[#f2f2f2] py-3 px-6 my-5">
            <a className="text-[#444] hover:text-[#e5642f] cursor-pointer">HOT DEALS</a>
            <div className="flex">
              <GrFormPrevious className="text-xl text-[#999] hover:text-[#e5642f]" />
              <GrFormNext className="text-xl text-[#999] hover:text-[#e5642f]" />
            </div>
          </div>
          <CardItem showTime />
          {/* NEW ARRIVALS */}
          <div className="flex items-center justify-between font-bold bg-[#f2f2f2] py-3 px-6 my-5">
            <a className="text-[#444] hover:text-[#e5642f] cursor-pointer">NEW ARRIVALS</a>
            <div className="flex">
              <GrFormPrevious className="text-xl text-[#999] hover:text-[#e5642f]" />
              <GrFormNext className="text-xl text-[#999] hover:text-[#e5642f]" />
            </div>
          </div>
          <div className="border">
            {Array(4)
              .fill(null)
              .map((item, index) => (
                <div className="p-4">
                  <CardItem key={index} isArrival containerClass="border-0" />
                </div>
              ))}
          </div>
          {/* TESTIMONIALS */}
          <div className="flex items-center justify-between font-bold bg-[#f2f2f2] py-3 px-6 my-5">
            <a className="text-[#444] hover:text-[#e5642f] cursor-pointer">TESTIMONIALS</a>
            <div className="flex">
              <GrFormPrevious className="text-xl text-[#999] hover:text-[#e5642f]" />
              <GrFormNext className="text-xl text-[#999] hover:text-[#e5642f]" />
            </div>
          </div>
          <div className="border p-6 flex flex-col">
            <img
              src="https://demo.fieldthemes.com/bookshop/demo1/modules/fieldtestimonials/images/630-client-3.png"
              alt=""
              className="rounded-[100%] max-w-[70px] max-h-[70px] m-auto"
            />
            <span className="text-[13px] text-[#333] text-center pt-3">Jane Doe</span>
            <span className="text-[12px] text-[#888] text-center">Web Designer</span>
            <RiDoubleQuotesL />
            <span className="text-[10px] text-[#444] italic break-words">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took Lorem Ipsum is simply...
            </span>
            <RiDoubleQuotesR className="ml-[60%] mb-[10px]" />
          </div>
        </div>
        {/* BEST SELLER */}
        <div className="w-[100%]">
          <div className=" flex items-center justify-between font-bold bg-[#f2f2f2] py-3 px-6 my-5">
            <a className="text-[#444] hover:text-[#e5642f] cursor-pointer">BEST SELLER</a>
            <div className="flex">
              <GrFormPrevious className="text-xl text-[#999] hover:text-[#e5642f]" />
              <GrFormNext className="text-xl text-[#999] hover:text-[#e5642f]" />
            </div>
          </div>
          {/* img BEST SELLER */}
          <div className="flex justify-between flex-wrap">
            {threeItems.map((item, index) => (
              <div key={index} className="w-[30%]">
                <CardItem />
                <CardItem />
              </div>
            ))}
          </div>
          <img
            src="https://demo.fieldthemes.com/bookshop/demo1/modules/fieldhtmlblock/images/banner11.jpg"
            alt=""
          />
          <div className=" flex items-center justify-between font-bold bg-[#f2f2f2] py-3 px-6 my-5">
            <a className="text-[#444] hover:text-[#e5642f] cursor-pointer">FEATURED PRODUCTS</a>
            <div className="flex">
              <GrFormPrevious className="text-xl text-[#999] hover:text-[#e5642f]" />
              <GrFormNext className="text-xl text-[#999] hover:text-[#e5642f]" />
            </div>
          </div>
          {/* img FEATURED PRODUCTS */}
          <div className="flex justify-between flex-wrap">
            {Array(4)
              .fill(null)
              .map((item, index) => (
                <div className="w-[23%]">
                  <CardItem />
                  <CardItem />
                </div>
              ))}
          </div>
        </div>
      </div>
      {/* image */}
      <div className="container flex mb-[20px]">
        <img
          src="https://demo.fieldthemes.com/bookshop/demo1/modules/fieldhtmlblock/images/banner21.jpg"
          alt=""
          className="mr-[30px]"
        />
        <div className="flex flex-col justify-between w-[100%]">
          <img
            src="https://demo.fieldthemes.com/bookshop/demo1/modules/fieldhtmlblock/images/banner22.jpg"
            alt=""
          />
          <img
            src="https://demo.fieldthemes.com/bookshop/demo1/modules/fieldhtmlblock/images/banner23.jpg"
            alt=""
          />
        </div>
      </div>
      {/* MOSTVIEW PRODUCTS */}
      <div className="container flex items-center justify-between font-bold bg-[#f2f2f2] py-3 px-6 my-10">
        <a className="text-[#444] hover:text-[#e5642f] cursor-pointer">MOSTVIEW PRODUCTS</a>
        <div className="flex">
          <GrFormPrevious className="text-xl text-[#999] hover:text-[#e5642f]" />
          <GrFormNext className="text-xl text-[#999] hover:text-[#e5642f]" />
        </div>
      </div>
      <div className="container">
        <img
          src="https://demo.fieldthemes.com/bookshop/demo1/modules/fieldonecateproduct/views/img/banner_left.jpg"
          alt=""
        />
      </div>
      <div></div>
    </div>
  );
};

export default HomePage;
