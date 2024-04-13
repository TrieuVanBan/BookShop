import React from "react";
import { FaRegClock, FaRegStar, FaStar } from "react-icons/fa";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

export default function CardItem(props) {
  const { showTime, isArrival, containerClass } = props;
  return (
    <div className={`text-[#666] ${isArrival && "flex-row flex"} ${containerClass}`}>
      <img
        src="https://demo.fieldthemes.com/bookshop/demo1/29-home_default/etiam-auctor.jpg"
        alt=""
        className={`border-b-[1px] h-auto ${isArrival ? "max-w-[100px]" : "max-w-[264px]"}`}
      />
      <div className="p-3">
        <div className="flex items-center justify-between text-[12px]">
          <a href="" className="hover:text-[#e5642f]">
            Etiam Auctor
          </a>
          <div className="flex items-center text-[#fc3] font-semibold">
            <FaRegStar className="mr-[1px]" />
            <FaRegStar className="mr-[1px]" />
            <FaRegStar className="mr-[1px]" />
            <FaRegStar className="mr-[1px]" />
            <FaRegStar className="mr-[1px]" />
          </div>
        </div>
        <div className="flex items-center justify-between my-2 pb-[9px] text-[12px]">
          <span className="line-through">€34.79</span>
          <span className="text-[#e5642f] font-semibold">€31.31</span>
        </div>
        {showTime ? (
          <div className="flex items-center border-t-[1px] border-gray-200 pt-[15px] text-[#e5642f] text-[12px] font-normal">
            <FaRegClock />
            <span className="mx-2">10 Days</span>
            <span>10:00:00</span>
          </div>
        ) : null}
      </div>
    </div>
  );
}
