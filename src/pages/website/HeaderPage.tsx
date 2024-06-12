import React, { useEffect, useState } from "react";
// import Slider from "react-slick";
import type { RootState } from '../../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { searchProducts } from '../../features/cart/cartSlice'
import { AiOutlineMenu } from "react-icons/ai";
import { GiKeyLock, GiRotaryPhone } from "react-icons/gi";
import { IoMdPersonAdd } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { RiShoppingCart2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { fetchCategories } from "../../features/categories/categorySlice";
import Modal from "../website/Modal";
import Login from "./Login";
import Register from "./Register";

const HeaderPage = () => {
  const categories = useSelector((state: RootState) => state.allCategory.listCategories);
  const cartLength = useSelector((state: RootState) => state.allCart.carts);

  const dispatch = useDispatch()
  const [open, setOpen] = useState<boolean>(false);
  const [screen, setScreen] = useState("");
  const [valueSelect, setValueSelect] = useState("")
  const [valueSearch, setValueSearch] = useState("")

  const handleSelect = (event: any) => {
    setValueSelect(event.target.value)
  }

  const handleSearch = (event: any) => {
    setValueSearch(event.target.value)
  }

  const handleClickSearch = () => {
    dispatch(searchProducts(valueSearch))
  }

  const handleRegister = () => {
    setOpen(true)
    setScreen("register")
  }

  const handleLogin = () => {
    setOpen(true)
    setScreen("login")
  }

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };

  useEffect(() => {
    // const getAllCategories = async () => {
    //   const { data } = await getCategories();
    //   // console.log(data);
    //   setCategories(data);
    // }
    // getAllCategories();
    dispatch(fetchCategories())
  }, [])

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
      {screen === "login"
        ? <Modal open={open} onClose={() => setOpen(false)}>
          <Login onClose={() => setOpen(false)} />
        </Modal>
        : <Modal open={open} onClose={() => setOpen(false)}>
          <Register onClose={() => setOpen(false)} />
        </Modal>}
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
          <div className="flex items-center cursor-pointer">
            <button onClick={handleLogin} className="flex items-center hover:text-[#e5642f]">
              <GiKeyLock />
              <span className=" border-gray-300 border-r-2 pl-[5px] pr-[10px]">
                Sign in
              </span>
            </button>
            <div onClick={handleRegister} className="flex items-center hover:text-[#e5642f]">
              <IoMdPersonAdd className="ml-[10px] mr-[5px]" />
              <span className="mr-[20px]">Create an account</span>
            </div>
            <img
              src="https://demo.fieldthemes.com/bookshop/demo1/img/l/1.jpg"
              alt="English"
            />
          </div>
        </div>
      </div>
      {/* 2 */}
      <div className="container flex items-center justify-between m-auto py-[35px]">
        <Link to={`/`}>
          <img
            src="https://demo.fieldthemes.com/bookshop/demo1/img/bookshop-logo-1537150828.jpg"
            alt="Logo"
          />
        </Link>
        <div className="flex items-center">
          <div className="border border-gray-200 flex items-center">
            <div className="desktop-search border-r-2 border-gray-300 px-[20px] ">
              <select onChange={handleSelect} className="outline-none  text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full px-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                {
                  categories?.map((item, index) => {
                    // console.log(item, "index", index);
                    return (
                      <option value={index}>{item?.title}</option>
                    )
                  })
                }
              </select>
              {/* <select className="text-gray-900 text-[13px] outline-none p-[15px]">
                <option selected>ALL CATEGORIES</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select> */}
            </div>
            <div className="desktop-cart flex items-center">
              <input
                type="text"
                value={valueSearch}
                onChange={handleSearch}
                className="outline-none text-gray-400 text-[13px] p-[15px] xl:w-[300px]"
                placeholder="Enter search your key"
              />
              <button onClick={handleClickSearch} className="p-[15px]">
                <IoSearchSharp className="text-xl text-gray-600" />
              </button>
            </div>
          </div>
          <div className="desktop-cart flex items-center text-[14px] bg-[#e5642f] hover:bg-gray-500 text-white py-[15px] px-[20px] ml-2">
            <RiShoppingCart2Fill className="text-lg" />
            <div className="item-cart ml-[20px]">
              <Link to={`/favorite`}>My Favorite</Link>
            </div>
          </div>
          <div className="desktop-cart flex items-center text-[14px] bg-[#e5642f] hover:bg-gray-500 text-white py-[15px] px-[20px] ml-2">
            <RiShoppingCart2Fill className="text-lg" />
            <div className="item-cart ml-[20px]">
              <Link to={`/cart`}>My cart: {cartLength.length} item</Link>
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
    </div >
  );
};

export default HeaderPage;
