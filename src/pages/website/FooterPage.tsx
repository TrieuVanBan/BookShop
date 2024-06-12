import React from "react";
import {
  FaFacebookF,
  FaFacebookMessenger,
  FaGooglePlusSquare,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { GrFormNext } from "react-icons/gr";
import { IoIosMail } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";
import { RiMapPin2Line } from "react-icons/ri";

const FooterPage = () => {
  return (
    <div className="bg-[#313131] mt-[30px]">
      <div className="container flex py-10">
        {/* 1 */}
        <div className="w-[25%]">
          <img
            src="https://demo.fieldthemes.com/bookshop/demo1/modules/fieldhtmlblock/images/logof.jpg"
            alt=""
            className="pb-4"
          />
          <div className="flex items-center py-3">
            <div className="w-8 h-8 border rounded-full flex justify-center items-center">
              <RiMapPin2Line className="text-white text-[15px]" />
            </div>
            <span className="text-[12px] text-[#989898] pl-2 w-[65%]">
              123 Main Street, Anytown,CA 12345 USA
            </span>
          </div>
          <div className="flex items-center pb-3">
            <div className="w-8 h-8 border rounded-full flex justify-center items-center">
              <MdLocalPhone className="text-white text-[15px]" />
            </div>
            <span className="text-[12px] text-[#989898] pl-2 w-[65%]">
              +1 800 123 1234
            </span>
          </div>
          <div className="flex items-center">
            <div className="w-8 h-8 border rounded-full flex justify-center items-center">
              <IoIosMail className="text-white text-[15px]" />
            </div>
            <span className="text-[12px] text-[#989898] pl-2 w-[65%]">
              fieldthemes@gmail.com
            </span>
          </div>
        </div>
        {/* 2 */}
        <div className="w-[50%] flex">
          <div className="px-[30px]">
            <h5 className="my-5 text-white text-[16px]">SHOPPING GUIDE</h5>
            <ul className="text-[12px]">
              <li className="mb-[7px]">
                <a
                  className="flex items-center text-[#989898] transition ease-in-out hover:translate-x-2 hover:text-white duration-500"
                  href=""
                >
                  <GrFormNext className="mr-[4px]" /> Delivery
                </a>
              </li>
              <li className="mb-[7px]">
                <a
                  className="flex items-center text-[#989898] transition ease-in-out hover:translate-x-2 hover:text-white duration-500"
                  href=""
                >
                  <GrFormNext className="mr-[4px]" /> Legal notice
                </a>
              </li>
              <li className="mb-[7px]">
                <a
                  className="flex items-center text-[#989898] transition ease-in-out hover:translate-x-2 hover:text-white duration-500"
                  href=""
                >
                  <GrFormNext className="mr-[4px]" /> About us
                </a>
              </li>
              <li className="mb-[7px]">
                <a
                  className="flex items-center text-[#989898] transition ease-in-out hover:translate-x-2 hover:text-white duration-500"
                  href=""
                >
                  <GrFormNext className="mr-[4px]" /> Secure payment
                </a>
              </li>
              <li className="mb-[7px]">
                <a
                  className="flex items-center text-[#989898] transition ease-in-out hover:translate-x-2 hover:text-white duration-500"
                  href=""
                >
                  <GrFormNext className="mr-[4px]" />New products
                </a>
              </li>
              <li className="mb-[7px]">
                <a
                  className="flex items-center text-[#989898] transition ease-in-out hover:translate-x-2 hover:text-white duration-500"
                  href=""
                >
                  <GrFormNext className="mr-[4px]" />Sitemap
                </a>
              </li>
            </ul>
          </div>
          <div className="px-[30px]">
            <h5 className="my-5 text-white text-[16px]">INFORMATION</h5>
            <ul className="text-[12px]">
              <li className="mb-[7px]">
                <a
                  className="flex items-center text-[#989898] transition ease-in-out hover:translate-x-2 hover:text-white duration-500"
                  href=""
                >
                  <GrFormNext className="mr-[4px]" /> Delivery
                </a>
              </li>
              <li className="mb-[7px]">
                <a
                  className="flex items-center text-[#989898] transition ease-in-out hover:translate-x-2 hover:text-white duration-500"
                  href=""
                >
                  <GrFormNext className="mr-[4px]" /> Legal notice
                </a>
              </li>
              <li className="mb-[7px]">
                <a
                  className="flex items-center text-[#989898] transition ease-in-out hover:translate-x-2 hover:text-white duration-500"
                  href=""
                >
                  <GrFormNext className="mr-[4px]" /> About us
                </a>
              </li>
              <li className="mb-[7px]">
                <a
                  className="flex items-center text-[#989898] transition ease-in-out hover:translate-x-2 hover:text-white duration-500"
                  href=""
                >
                  <GrFormNext className="mr-[4px]" /> Secure payment
                </a>
              </li>
              <li className="mb-[7px]">
                <a
                  className="flex items-center text-[#989898] transition ease-in-out hover:translate-x-2 hover:text-white duration-500"
                  href=""
                >
                  <GrFormNext className="mr-[4px]" />New products
                </a>
              </li>
              <li className="mb-[7px]">
                <a
                  className="flex items-center text-[#989898] transition ease-in-out hover:translate-x-2 hover:text-white duration-500"
                  href=""
                >
                  <GrFormNext className="mr-[4px]" />Sitemap
                </a>
              </li>
            </ul>
          </div>
          <div className="px-[30px]">
            <h5 className="my-5 text-white text-[16px]">YOUR ACCOUNT</h5>
            <ul className="text-[12px]">
              <li className="mb-[7px]">
                <a
                  className="flex items-center text-[#989898] transition ease-in-out hover:translate-x-2 hover:text-white duration-500"
                  href=""
                >
                  <GrFormNext className="mr-[4px]" /> Delivery
                </a>
              </li>
              <li className="mb-[7px]">
                <a
                  className="flex items-center text-[#989898] transition ease-in-out hover:translate-x-2 hover:text-white duration-500"
                  href=""
                >
                  <GrFormNext className="mr-[4px]" /> Legal notice
                </a>
              </li>
              <li className="mb-[7px]">
                <a
                  className="flex items-center text-[#989898] transition ease-in-out hover:translate-x-2 hover:text-white duration-500"
                  href=""
                >
                  <GrFormNext className="mr-[4px]" /> About us
                </a>
              </li>
              <li className="mb-[7px]">
                <a
                  className="flex items-center text-[#989898] transition ease-in-out hover:translate-x-2 hover:text-white duration-500"
                  href=""
                >
                  <GrFormNext className="mr-[4px]" /> Secure payment
                </a>
              </li>
              <li className="mb-[7px]">
                <a
                  className="flex items-center text-[#989898] transition ease-in-out hover:translate-x-2 hover:text-white duration-500"
                  href=""
                >
                  <GrFormNext className="mr-[4px]" />New products
                </a>
              </li>
              <li className="mb-[7px]">
                <a
                  className="flex items-center text-[#989898] transition ease-in-out hover:translate-x-2 hover:text-white duration-500"
                  href=""
                >
                  <GrFormNext className="mr-[4px]" />Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* 3 */}
        <div className="w-[25%]">
          <div className="px-[30px]">
            <h5 className="my-5 text-white">FOLLOW INSTAGRAM</h5>
            <div className="flex justify-between flex-wrap gap-2">
              <img
                className="w-[30%] h-auto transition ease-in-out hover:scale-110 hover:opacity-[0.5] duration-500"
                src="https://demo.fieldthemes.com/bookshop/demo1/img/cms/insta1.jpg"
                alt=""
              />
              <img
                className="w-[30%] h-auto transition ease-in-out hover:scale-110 hover:opacity-[0.5] duration-500"
                src="https://demo.fieldthemes.com/bookshop/demo1/img/cms/insta2.jpg"
                alt=""
              />
              <img
                className="w-[30%] h-auto transition ease-in-out hover:scale-110 hover:opacity-[0.5] duration-500"
                src="https://demo.fieldthemes.com/bookshop/demo1/img/cms/insta3.jpg"
                alt=""
              />
              <img
                className="w-[30%] h-auto transition ease-in-out hover:scale-110 hover:opacity-[0.5] duration-500"
                src="https://demo.fieldthemes.com/bookshop/demo1/img/cms/insta6.jpg"
                alt=""
              />
              <img
                className="w-[30%] h-auto transition ease-in-out hover:scale-110 hover:opacity-[0.5] duration-500"
                src="https://demo.fieldthemes.com/bookshop/demo1/img/cms/insta5.jpg"
                alt=""
              />
              <img
                className="w-[30%] h-auto transition ease-in-out hover:scale-110 hover:opacity-[0.5] duration-500"
                src="https://demo.fieldthemes.com/bookshop/demo1/img/cms/insta4.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* mail */}
      <div className="bg-[#1a1a1a] py-[30px] ">
        <div className="container flex item-center justify-between">
          <div className="flex item-center">
            <input
              type="email"
              className="outline-none text-[12px] text-[#fff] bg-[#444] p-2 w-[230px]"
              placeholder="Enter your email address"
            />
            <button className="flex items-center text-white bg-[#444] ml-2 px-2 hover:bg-[#e5642f] transition ease-in-out duration-500">
              <IoIosMail className="mr-[3px]" />
              <h6 className="text-[13px] uppercase">Subscribe</h6>
            </button>
          </div>
          <span className="text-[12px] text-[#7a7a7a] mg-auto">
            Copyright © 2024 FieldThemes. All Right Reserved
          </span>
          <div className="flex text-white">
            <div className="bg-[#444] hover:bg-blue-500 w-[30px] flex justify-center items-center mr-2">
              <FaFacebookF />
            </div>
            <div className="bg-[#444] hover:bg-orange-400 w-[30px] flex justify-center items-center mr-2">
              <FaInstagram />
            </div>
            <div className="bg-[#444] hover:bg-blue-700 w-[30px] flex justify-center items-center mr-2">
              <FaTwitter />
            </div>
            <div className="bg-[#444] hover:bg-purple-500 w-[30px] flex justify-center items-center mr-2">
              <FaFacebookMessenger />
            </div>
            <div className="bg-[#444] hover:bg-red-700 w-[30px] flex justify-center items-center mr-2">
              <FaYoutube />
            </div>
            <div className="bg-[#444] hover:bg-green-500 w-[30px] flex justify-center items-center mr-2">
              <FaGooglePlusSquare />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterPage;
