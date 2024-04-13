import React from "react";
import { FaRegClock, FaRegStar, FaStar } from "react-icons/fa";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const HomePage = () => {
  return (
    <div>
      <div className="container flex">
        {/* siderbar */}
        <div className="w-[30%] mr-12">
          {/* hot deal */}
          <div className="flex items-center justify-between font-bold bg-[#f2f2f2] py-3 px-6 my-5">
            <a className="text-[#444] hover:text-[#e5642f] cursor-pointer">
              HOT DEALS
            </a>
            <div className="flex">
              <GrFormPrevious className="text-xl text-[#999] hover:text-[#e5642f]" />
              <GrFormNext className="text-xl text-[#999] hover:text-[#e5642f]" />
            </div>
          </div>
          <div className="border text-[#666]">
            <img
              src="https://demo.fieldthemes.com/bookshop/demo1/29-home_default/etiam-auctor.jpg"
              alt=""
              className="border-b-[1px] max-w-[264px] h-auto"
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
              <div className="flex items-center border-t-[1px] border-gray-200 pt-[15px] text-[#e5642f] text-[12px] font-normal">
                <FaRegClock />
                <span className="mx-2">10 Days</span>
                <span>10:00:00</span>
              </div>
            </div>
          </div>
          {/* NEW ARRIVALS */}
          <div className="flex items-center justify-between font-bold bg-[#f2f2f2] py-3 px-6 my-5">
            <a className="text-[#444] hover:text-[#e5642f] cursor-pointer">
              NEW ARRIVALS
            </a>
            <div className="flex">
              <GrFormPrevious className="text-xl text-[#999] hover:text-[#e5642f]" />
              <GrFormNext className="text-xl text-[#999] hover:text-[#e5642f]" />
            </div>
          </div>
          <div className="border p-4">
            <div className="flex pb-4">
              <a href="">
                <img
                  src="https://demo.fieldthemes.com/bookshop/demo1/51-small_default/convallis-pharetra.jpg"
                  alt=""
                  className="border max-w-[100px] h-auto"
                />
              </a>
              <div className="m-auto text-[#666]">
                <a href="" className="text-[12px] hover:text-[#e5642f]">
                  Convallis Pharetra
                </a>
                <a href="" className="flex text-[12px]">
                  <FaStar className="text-[#fc3] mr-[1px]" />
                  <FaStar className="text-[#fc3] mr-[1px]" />
                  <FaStar className="text-[#fc3] mr-[1px]" />
                  <FaStar className="text-[#fc3] mr-[1px]" />
                  <FaStar className="text-[#fc3] mr-[1px]" />
                </a>
                <div className="flex items-center justify-between my-2 pb-[9px] text-[12px]">
                  <span className="text-[#e5642f] font-semibold">€31.31</span>
                  <span className="line-through">€34.79</span>
                </div>
              </div>
            </div>
            <div className="flex border-t-[1px] pt-4 pb-4">
              <a href="">
                <img
                  src="https://demo.fieldthemes.com/bookshop/demo1/51-small_default/convallis-pharetra.jpg"
                  alt=""
                  className="border max-w-[100px] h-auto"
                />
              </a>
              <div className="m-auto text-[#666]">
                <a href="" className="text-[12px] hover:text-[#e5642f]">
                  Convallis Pharetra
                </a>
                <a href="" className="flex text-[12px]">
                  <FaStar className="text-[#fc3] mr-[1px]" />
                  <FaStar className="text-[#fc3] mr-[1px]" />
                  <FaStar className="text-[#fc3] mr-[1px]" />
                  <FaStar className="text-[#fc3] mr-[1px]" />
                  <FaStar className="text-[#fc3] mr-[1px]" />
                </a>
                <div className="flex items-center justify-between my-2 pb-[9px] text-[12px]">
                  <span className="text-[#e5642f] font-semibold">€31.31</span>
                  <span className="line-through">€34.79</span>
                </div>
              </div>
            </div>
            <div className="flex border-t-[1px] pt-4 pb-4">
              <a href="">
                <img
                  src="https://demo.fieldthemes.com/bookshop/demo1/51-small_default/convallis-pharetra.jpg"
                  alt=""
                  className="border max-w-[100px] h-auto"
                />
              </a>
              <div className="m-auto text-[#666]">
                <a href="" className="text-[12px] hover:text-[#e5642f]">
                  Convallis Pharetra
                </a>
                <a href="" className="flex text-[12px]">
                  <FaStar className="text-[#fc3] mr-[1px]" />
                  <FaStar className="text-[#fc3] mr-[1px]" />
                  <FaStar className="text-[#fc3] mr-[1px]" />
                  <FaStar className="text-[#fc3] mr-[1px]" />
                  <FaStar className="text-[#fc3] mr-[1px]" />
                </a>
                <div className="flex items-center justify-between my-2 pb-[9px] text-[12px]">
                  <span className="text-[#e5642f] font-semibold">€31.31</span>
                  <span className="line-through">€34.79</span>
                </div>
              </div>
            </div>
            <div className="flex border-t-[1px] pt-4">
              <a href="">
                <img
                  src="https://demo.fieldthemes.com/bookshop/demo1/51-small_default/convallis-pharetra.jpg"
                  alt=""
                  className="border max-w-[100px] h-auto"
                />
              </a>
              <div className="m-auto text-[#666]">
                <a href="" className="text-[12px] hover:text-[#e5642f]">
                  Convallis Pharetra
                </a>
                <a href="" className="flex text-[12px]">
                  <FaStar className="text-[#fc3] mr-[1px]" />
                  <FaStar className="text-[#fc3] mr-[1px]" />
                  <FaStar className="text-[#fc3] mr-[1px]" />
                  <FaStar className="text-[#fc3] mr-[1px]" />
                  <FaStar className="text-[#fc3] mr-[1px]" />
                </a>
                <div className="flex items-center justify-between my-2 pb-[9px] text-[12px]">
                  <span className="text-[#e5642f] font-semibold">€31.31</span>
                  <span className="line-through">€34.79</span>
                </div>
              </div>
            </div>
          </div>
          {/* NEW ARRIVALS */}
          <div className="flex items-center justify-between font-bold bg-[#f2f2f2] py-3 px-6 my-5">
            <a className="text-[#444] hover:text-[#e5642f] cursor-pointer">
              TESTIMONIALS
            </a>
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
            <span className="text-[13px] text-[#333] text-center pt-3">
              Jane Doe
            </span>
            <span className="text-[12px] text-[#888] text-center">
              Web Designer
            </span>
            <RiDoubleQuotesL />
            <span className="text-[10px] text-[#444] italic break-words">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took Lorem Ipsum is
              simply...
            </span>
            <RiDoubleQuotesR className="ml-[60%] mb-[10px]" />
          </div>
        </div>
        {/* BEST SELLER */}
        <div className="w-[100%]">
          <div className=" flex items-center justify-between font-bold bg-[#f2f2f2] py-3 px-6 my-5">
            <a className="text-[#444] hover:text-[#e5642f] cursor-pointer">
              BEST SELLER
            </a>
            <div className="flex">
              <GrFormPrevious className="text-xl text-[#999] hover:text-[#e5642f]" />
              <GrFormNext className="text-xl text-[#999] hover:text-[#e5642f]" />
            </div>
          </div>

          {/* img BEST SELLER */}
          <div className="flex justify-between flex-wrap">
            <div className="w-[30%]">
              <div className="mb-7 border text-[#666]">
                <img
                  src="https://demo.fieldthemes.com/bookshop/demo1/29-home_default/etiam-auctor.jpg"
                  alt=""
                  className="border-b-[1px] max-w-[264px] h-auto"
                />
                <div className="p-3">
                  <div className="flex items-center justify-between text-[12px]">
                    <a href="" className="hover:text-[#e5642f]">
                      Etiam Auctor
                    </a>
                    <div className="flex items-center text-[#fc3] font-semibold">
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                    </div>
                  </div>
                  <div className="flex items-center justify-between my-2 text-[12px]">
                    <span className="line-through">€34.79</span>
                    <span className="text-[#e5642f] font-semibold">€31.31</span>
                  </div>
                </div>
              </div>
              <div className="mb-7 border text-[#666]">
                <img
                  src="https://demo.fieldthemes.com/bookshop/demo1/29-home_default/etiam-auctor.jpg"
                  alt=""
                  className="border-b-[1px] max-w-[264px] h-auto"
                />
                <div className="p-3">
                  <div className="flex items-center justify-between text-[12px]">
                    <a href="" className="hover:text-[#e5642f]">
                      Etiam Auctor
                    </a>
                    <div className="flex items-center text-[#fc3] font-semibold">
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                    </div>
                  </div>
                  <div className="flex items-center justify-between my-2 text-[12px]">
                    <span className="line-through">€34.79</span>
                    <span className="text-[#e5642f] font-semibold">€31.31</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[30%]">
              <div className="mb-7 border text-[#666]">
                <img
                  src="https://demo.fieldthemes.com/bookshop/demo1/29-home_default/etiam-auctor.jpg"
                  alt=""
                  className="border-b-[1px] max-w-[264px] h-auto"
                />
                <div className="p-3">
                  <div className="flex items-center justify-between text-[12px]">
                    <a href="" className="hover:text-[#e5642f]">
                      Etiam Auctor
                    </a>
                    <div className="flex items-center text-[#fc3] font-semibold">
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                    </div>
                  </div>
                  <div className="flex items-center justify-between my-2 text-[12px]">
                    <span className="line-through">€34.79</span>
                    <span className="text-[#e5642f] font-semibold">€31.31</span>
                  </div>
                </div>
              </div>
              <div className="mb-7 border text-[#666]">
                <img
                  src="https://demo.fieldthemes.com/bookshop/demo1/29-home_default/etiam-auctor.jpg"
                  alt=""
                  className="border-b-[1px] max-w-[264px] h-auto"
                />
                <div className="p-3">
                  <div className="flex items-center justify-between text-[12px]">
                    <a href="" className="hover:text-[#e5642f]">
                      Etiam Auctor
                    </a>
                    <div className="flex items-center text-[#fc3] font-semibold">
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                    </div>
                  </div>
                  <div className="flex items-center justify-between my-2 text-[12px]">
                    <span className="line-through">€34.79</span>
                    <span className="text-[#e5642f] font-semibold">€31.31</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[30%]">
              <div className="mb-7 border text-[#666]">
                <img
                  src="https://demo.fieldthemes.com/bookshop/demo1/29-home_default/etiam-auctor.jpg"
                  alt=""
                  className="border-b-[1px] max-w-[264px] h-auto"
                />
                <div className="p-3">
                  <div className="flex items-center justify-between text-[12px]">
                    <a href="" className="hover:text-[#e5642f]">
                      Etiam Auctor
                    </a>
                    <div className="flex items-center text-[#fc3] font-semibold">
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                    </div>
                  </div>
                  <div className="flex items-center justify-between my-2 text-[12px]">
                    <span className="line-through">€34.79</span>
                    <span className="text-[#e5642f] font-semibold">€31.31</span>
                  </div>
                </div>
              </div>
              <div className="mb-7 border text-[#666]">
                <img
                  src="https://demo.fieldthemes.com/bookshop/demo1/29-home_default/etiam-auctor.jpg"
                  alt=""
                  className="border-b-[1px] max-w-[264px] h-auto"
                />
                <div className="p-3">
                  <div className="flex items-center justify-between text-[12px]">
                    <a href="" className="hover:text-[#e5642f]">
                      Etiam Auctor
                    </a>
                    <div className="flex items-center text-[#fc3] font-semibold">
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                    </div>
                  </div>
                  <div className="flex items-center justify-between my-2 text-[12px]">
                    <span className="line-through">€34.79</span>
                    <span className="text-[#e5642f] font-semibold">€31.31</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            src="https://demo.fieldthemes.com/bookshop/demo1/modules/fieldhtmlblock/images/banner11.jpg"
            alt=""
          />
          <div className=" flex items-center justify-between font-bold bg-[#f2f2f2] py-3 px-6 my-5">
            <a className="text-[#444] hover:text-[#e5642f] cursor-pointer">
              FEATURED PRODUCTS
            </a>
            <div className="flex">
              <GrFormPrevious className="text-xl text-[#999] hover:text-[#e5642f]" />
              <GrFormNext className="text-xl text-[#999] hover:text-[#e5642f]" />
            </div>
          </div>
          {/* img FEATURED PRODUCTS */}
          <div className="flex justify-between flex-wrap">
            <div className="w-[23%]">
              <div className="mb-7 border text-[#666]">
                <img
                  src="https://demo.fieldthemes.com/bookshop/demo1/29-home_default/etiam-auctor.jpg"
                  alt=""
                  className="max-w-[120px] h-auto m-auto cursor-pointer"
                />
                <div className="p-1 border-t-[1px]">
                  <div className="flex items-center justify-between text-[12px]">
                    <a href="" className="hover:text-[#e5642f]">
                      Etiam Auctor
                    </a>
                    <div className="flex items-center text-[#fc3] font-semibold">
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                    </div>
                  </div>
                  <div className="flex items-center justify-between my-1 text-[12px]">
                    <span className="line-through">€34.79</span>
                    <span className="text-[#e5642f] font-semibold">€31.31</span>
                  </div>
                </div>
              </div>
              <div className="mb-7 border text-[#666]">
                <img
                  src="https://demo.fieldthemes.com/bookshop/demo1/29-home_default/etiam-auctor.jpg"
                  alt=""
                  className="max-w-[120px] h-auto m-auto cursor-pointer"
                />
                <div className="p-1 border-t-[1px]">
                  <div className="flex items-center justify-between text-[12px]">
                    <a href="" className="hover:text-[#e5642f]">
                      Etiam Auctor
                    </a>
                    <div className="flex items-center text-[#fc3] font-semibold">
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                    </div>
                  </div>
                  <div className="flex items-center justify-between my-1 text-[12px]">
                    <span className="line-through">€34.79</span>
                    <span className="text-[#e5642f] font-semibold">€31.31</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[23%]">
              <div className="mb-7 border text-[#666]">
                <img
                  src="https://demo.fieldthemes.com/bookshop/demo1/29-home_default/etiam-auctor.jpg"
                  alt=""
                  className="max-w-[120px] h-auto m-auto cursor-pointer"
                />
                <div className="p-1 border-t-[1px]">
                  <div className="flex items-center justify-between text-[12px]">
                    <a href="" className="hover:text-[#e5642f]">
                      Etiam Auctor
                    </a>
                    <div className="flex items-center text-[#fc3] font-semibold">
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                    </div>
                  </div>
                  <div className="flex items-center justify-between my-1 text-[12px]">
                    <span className="line-through">€34.79</span>
                    <span className="text-[#e5642f] font-semibold">€31.31</span>
                  </div>
                </div>
              </div>
              <div className="mb-7 border text-[#666]">
                <img
                  src="https://demo.fieldthemes.com/bookshop/demo1/29-home_default/etiam-auctor.jpg"
                  alt=""
                  className="max-w-[120px] h-auto m-auto cursor-pointer"
                />
                <div className="p-1 border-t-[1px]">
                  <div className="flex items-center justify-between text-[12px]">
                    <a href="" className="hover:text-[#e5642f]">
                      Etiam Auctor
                    </a>
                    <div className="flex items-center text-[#fc3] font-semibold">
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                    </div>
                  </div>
                  <div className="flex items-center justify-between my-1 text-[12px]">
                    <span className="line-through">€34.79</span>
                    <span className="text-[#e5642f] font-semibold">€31.31</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[23%]">
              <div className="mb-7 border text-[#666]">
                <img
                  src="https://demo.fieldthemes.com/bookshop/demo1/29-home_default/etiam-auctor.jpg"
                  alt=""
                  className="max-w-[120px] h-auto m-auto cursor-pointer"
                />
                <div className="p-1 border-t-[1px]">
                  <div className="flex items-center justify-between text-[12px]">
                    <a href="" className="hover:text-[#e5642f]">
                      Etiam Auctor
                    </a>
                    <div className="flex items-center text-[#fc3] font-semibold">
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                    </div>
                  </div>
                  <div className="flex items-center justify-between my-1 text-[12px]">
                    <span className="line-through">€34.79</span>
                    <span className="text-[#e5642f] font-semibold">€31.31</span>
                  </div>
                </div>
              </div>
              <div className="mb-7 border text-[#666]">
                <img
                  src="https://demo.fieldthemes.com/bookshop/demo1/29-home_default/etiam-auctor.jpg"
                  alt=""
                  className="max-w-[120px] h-auto m-auto cursor-pointer"
                />
                <div className="p-1 border-t-[1px]">
                  <div className="flex items-center justify-between text-[12px]">
                    <a href="" className="hover:text-[#e5642f]">
                      Etiam Auctor
                    </a>
                    <div className="flex items-center text-[#fc3] font-semibold">
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                    </div>
                  </div>
                  <div className="flex items-center justify-between my-1 text-[12px]">
                    <span className="line-through">€34.79</span>
                    <span className="text-[#e5642f] font-semibold">€31.31</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[23%]">
              <div className="mb-7 border text-[#666]">
                <img
                  src="https://demo.fieldthemes.com/bookshop/demo1/29-home_default/etiam-auctor.jpg"
                  alt=""
                  className="max-w-[120px] h-auto m-auto cursor-pointer"
                />
                <div className="p-1 border-t-[1px]">
                  <div className="flex items-center justify-between text-[12px]">
                    <a href="" className="hover:text-[#e5642f]">
                      Etiam Auctor
                    </a>
                    <div className="flex items-center text-[#fc3] font-semibold">
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                    </div>
                  </div>
                  <div className="flex items-center justify-between my-1 text-[12px]">
                    <span className="line-through">€34.79</span>
                    <span className="text-[#e5642f] font-semibold">€31.31</span>
                  </div>
                </div>
              </div>
              <div className="mb-7 border text-[#666]">
                <img
                  src="https://demo.fieldthemes.com/bookshop/demo1/29-home_default/etiam-auctor.jpg"
                  alt=""
                  className="max-w-[120px] h-auto m-auto cursor-pointer"
                />
                <div className="p-1 border-t-[1px]">
                  <div className="flex items-center justify-between text-[12px]">
                    <a href="" className="hover:text-[#e5642f]">
                      Etiam Auctor
                    </a>
                    <div className="flex items-center text-[#fc3] font-semibold">
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                    </div>
                  </div>
                  <div className="flex items-center justify-between my-1 text-[12px]">
                    <span className="line-through">€34.79</span>
                    <span className="text-[#e5642f] font-semibold">€31.31</span>
                  </div>
                </div>
              </div>
            </div>
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
        <a className="text-[#444] hover:text-[#e5642f] cursor-pointer">
          MOSTVIEW PRODUCTS
        </a>
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
