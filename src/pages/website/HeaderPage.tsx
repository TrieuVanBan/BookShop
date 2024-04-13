import React from "react";
// import Slider from "react-slick";
import { AiOutlineMenu } from "react-icons/ai";
import { GiKeyLock, GiRotaryPhone } from "react-icons/gi";
import { IoMdPersonAdd } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { RiShoppingCart2Fill } from "react-icons/ri";

const HeaderPage = () => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };

  return (
    <div className="slider-container">
      {/* <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
      </Slider> */}
      {/* 1 */}
      <div className="bg-gray-100 text-gray-400 text-[13px] py-[10px]">
        <div className="container flex items-center justify-between">
          <div className="flex items-center">
            <select className="outline-none bg-gray-100">
              <option selected value="">
                USD
              </option>
              <option value="">EUR</option>
            </select>
            <span className="ml-[15px]">Default welcome msg!</span>
          </div>
          <div className="flex items-center">
            <a href="" className="flex items-center hover:text-[#e5642f]">
              <GiKeyLock />
              <span className=" border-gray-300 border-r-2 pl-[5px] pr-[10px]">
                Sign in
              </span>
            </a>
            <a href="" className="flex items-center hover:text-[#e5642f]">
              <IoMdPersonAdd className="ml-[10px] mr-[5px]" />
              <span className="mr-[20px]">Create an account</span>
            </a>
            <img
              src="https://demo.fieldthemes.com/bookshop/demo1/img/l/1.jpg"
              alt="English"
            />
          </div>
        </div>
      </div>
      {/* 2 */}
      <div className="container flex items-center justify-between m-auto py-[35px]">
        <img
          src="https://demo.fieldthemes.com/bookshop/demo1/img/bookshop-logo-1537150828.jpg"
          alt="Logo"
        />
        <div className="flex items-center">
          <div className="border border-gray-200 flex items-center">
            <div className="desktop-search border-r-2 border-gray-300 px-[20px] ">
              <select className="text-gray-900 text-[13px] outline-none p-[15px]">
                <option selected>ALL CATEGORIES</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
            <form className="desktop-cart flex items-center">
              <input
                type="text"
                className="outline-none text-gray-400 text-[13px] p-[15px] xl:w-[300px]"
                placeholder="Enter search your key"
              />
              <button className="p-[15px]">
                <IoSearchSharp className="text-xl text-gray-600 " />
              </button>
            </form>
          </div>
          <div className="desktop-cart flex items-center text-[14px] bg-[#e5642f] hover:bg-gray-500 text-white py-[15px] px-[20px] ml-2">
            <RiShoppingCart2Fill className="text-lg" />
            <div className="item-cart ml-[20px]">
              <span>My cart: 0 item</span>
            </div>
          </div>
        </div>
      </div>
      {/* 3 */}
      <div className="bg-[#444] text-white">
        <div className="container flex items-center justify-between">
          <div className="flex items-center ">
            <div className="flex items-center bg-[#e5642f] font-bold h-[50px] w-[265px]">
              <AiOutlineMenu className="text-[22px] ml-[30px]" />
              <span className="ml-[15px]">CATEGORY</span>
            </div>
            <ul className="w-[400px] flex justify-between uppercase text-[12px] ml-[30px]">
              <li>
                <a href="" className="hover:text-[#e5642f]">
                  Home Page
                </a>
              </li>
              <li>
                <a href="" className="hover:text-[#e5642f]">
                  About us
                </a>
              </li>
              <li>
                <a href="" className="hover:text-[#e5642f]">
                  Contact us
                </a>
              </li>
              <li>
                <a href="" className="hover:text-[#e5642f]">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center bg-[#e5642f] h-[50px] w-[230px]">
            <GiRotaryPhone className="text-[40px] mr-[15px]" />
            <span>0934-888-888</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderPage;
