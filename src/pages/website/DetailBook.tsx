import React, { useEffect, useState } from "react";
import type { RootState } from '../../app/store'
import { useSelector, useDispatch } from 'react-redux'
// import { decrement, increment } from '../../features/counter/counterSlice'
import { addCart, addFavorite } from '../../features/cart/cartSlice'
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { IoIosStar, IoMdAdd } from "react-icons/io";
import {
  TiCalendarOutline,
  TiSocialFacebook,
  TiSocialGooglePlus,
  TiSocialPinterest,
  TiSocialTwitter,
} from "react-icons/ti";
import { Link, useParams } from "react-router-dom";
import ItemProduct from "../../components/ItemProduct";
import { fetchProductDetail } from "../../features/products/productsSlice";
import { fetchAddComment, fetchListUsers } from "../../features/comment/commentSlice";
import { IComment } from "../../types/comment";

const DetailBook = () => {
  const productDetail = useSelector((state: RootState) => state.allProduct.product);
  const comments = useSelector((state: RootState) => state.comment.listComments);

  const [quantityPro, setQuantityPro] = useState<number>(1);
  const [comment, setComment] = useState("");
  const [toggle, setToggle] = useState(1);
  const [cateId, setCateId] = useState<any>();
  const dispatch = useDispatch()
  const { id } = useParams();

  const handleAddFavorite = () => {
    dispatch(addFavorite(productDetail))
  }

  const updateToggle = (id: number) => {
    setToggle(id);
  };

  const increment = () => {
    setQuantityPro(quantityPro + 1);
  };

  const decrement = () => {
    setQuantityPro(quantityPro > 1 ? quantityPro - 1 : 1);
  }

  useEffect(() => {
    dispatch(fetchProductDetail(id))
  }, [id])

  useEffect(() => {
    dispatch(fetchListUsers())
  }, [comments])

  const handleComment = () => {
    const addComment = {
      email: "ban2002@gmail.com",
      comment: comment,
      productId: productDetail?.id
    }
    // console.log(addComment);
    dispatch(fetchAddComment(addComment))
    setComment("")
  }

  const listComments = comments.filter((item: IComment) => (
    item.productId === productDetail?.id
  ))
  // console.log(listComments);

  return (
    <div>
      <div className="container flex items-center text-[#444] bg-[#f2f2f2] py-3 px-6 !mt-10 !mb-5 ">
        <a className="text-[14px] hover:text-[#e5642f] cursor-pointer">Home</a>
        <GrFormNext className="m-2" />
        <a className="text-[14px] hover:text-[#e5642f] cursor-pointer">
          Apparel
        </a>
        <GrFormNext className="m-2" />
        <a className="text-[14px] hover:text-[#e5642f] cursor-pointer">
          Grateful And Give
        </a>
      </div>
      <div className="container flex">
        {/* <div className="flex w-[60%] h-[50%] bg-slate-100 p-8 m-auto"> */}
        <div className="w-[900px] pr-5">
          <div className="flex">
            <div className="w-[418px]">
              <img
                src={productDetail?.image}
                alt=""
                className="w-[418px] h-[467px] border"
              />
              <div className="flex justify-between flex-wrap w-[100%] p-8">
                <img
                  src="https://demo.fieldthemes.com/bookshop/demo1/33-large_default/the-art-city.jpg"
                  alt=""
                  className="w-[30%] h-auto border"
                />
                <img
                  src="https://demo.fieldthemes.com/bookshop/demo1/33-large_default/the-art-city.jpg"
                  alt=""
                  className="w-[30%] h-auto border"
                />
                <img
                  src="https://demo.fieldthemes.com/bookshop/demo1/33-large_default/the-art-city.jpg"
                  alt=""
                  className="w-[30%] h-auto border"
                />
              </div>
            </div>
            <div className="w-[482px] px-8">
              <p className="font-bold text-[22px] uppercase">{productDetail?.name}</p>
              <p className="text-[14px] text-[#666] mt-5">
                {productDetail?.description}
              </p>
              <p className="text-[16px] font-bold text-[#e5642f] mt-5">
                €{productDetail?.discount}
              </p>
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
                    value={quantityPro}
                    className="outline-none border w-[40px] h-auto px-2 text-[14px]"
                  />
                  <div className="flex flex-col">
                    <button onClick={increment} className="border p-[2px] text-[12px]">
                      <BsChevronUp />
                    </button>
                    <button onClick={decrement} className="border p-[2px] text-[12px]">
                      <BsChevronDown />
                    </button>
                  </div>
                </div>
                <Link to={`/cart`} onClick={() => dispatch(addCart(productDetail))} className="flex items-center text-[12px] mr-3 bg-[#444] text-white px-4 transition ease-in-out duration-200 hover:bg-[#e5642f] ">
                  <FaShoppingCart />
                  <span className="ml-2">ADD TO CART</span>
                </Link>
                <button onClick={handleAddFavorite} className="text-[14px] mr-3 bg-[#444] text-white px-4 transition ease-in-out duration-200 hover:bg-[#e5642f] ">
                  <FaRegHeart />
                </button>
                <button className="text-[14px] mr-3 bg-[#444] text-white px-4 transition ease-in-out duration-200 hover:bg-[#e5642f] ">
                  <IoMdAdd />
                </button>
              </div>
              <div className="flex mt-5">
                <a
                  href=""
                  className="flex items-center text-[#666] py-[4px] px-2 mr-3 bg-[#f1f1f1] hover:bg-blue-900 hover:text-[#fff]"
                >
                  <TiSocialFacebook className="text-[18px]" />{" "}
                  <span className="text-[13px] pl-[1px]">Share</span>
                </a>
                <a
                  href=""
                  className="flex items-center text-[#666] py-[4px] px-2 mr-3 bg-[#f1f1f1] hover:bg-blue-700 hover:text-[#fff]"
                >
                  <TiSocialTwitter className="text-[18px]" />{" "}
                  <span className="text-[13px] pl-[1px]">Twitter</span>
                </a>
                <a
                  href=""
                  className="flex items-center text-[#666] py-[4px] px-2 mr-3 bg-[#f1f1f1] hover:bg-red-700 hover:text-[#fff]"
                >
                  <TiSocialGooglePlus className="text-[18px]" />{" "}
                  <span className="text-[13px] pl-[1px]">Google</span>
                </a>
                <a
                  href=""
                  className="flex items-center text-[#666] py-[4px] px-2 mr-3 bg-[#f1f1f1] hover:bg-amber-500 hover:text-[#fff]"
                >
                  <TiSocialPinterest className="text-[18px]" />{" "}
                  <span className="text-[13px] pl-[1px]">Pinterest</span>
                </a>
              </div>
              <div
                className="flex items-center text-[#666] mt-5 hover:text-[#e5642f] w-[20%] cursor-pointer"
              >
                <TiCalendarOutline />{" "}
                <span className="text-[13px] ml-1">Size chart</span>
              </div>
            </div>
          </div>
          <div className="flex font-bold text-[#666] mb-5">
            <button
              onClick={() => updateToggle(1)}
              // className="mr-8 "
              className={`mr-8 hover:text-[#e5642f] ${toggle === 1
                ? "text-[#e5642f] border-b-[2px] border-[#e5642f]"
                : ""
                }`}
            >
              DESCRIPTION
            </button>
            <button
              onClick={() => updateToggle(2)}
              className={`mr-8 hover:text-[#e5642f] ${toggle === 2
                ? "text-[#e5642f] border-b-[2px] border-[#e5642f]"
                : ""
                }`}
            >
              PRODUCT DETAILS
            </button>
            <button
              onClick={() => updateToggle(3)}
              className={`mr-8 hover:text-[#e5642f] ${toggle === 3
                ? "text-[#e5642f] border-b-[2px] border-[#e5642f]"
                : ""
                }`}
            >
              REVIEWS
            </button>
          </div>
          {/* content tabs */}
          <div
            className={
              toggle === 1
                ? " block border p-4 text-[13px] text-[#666]"
                : "hidden"
            }
          >
            <p>
              Ut metus. Maecenas dapibus nibh eu est. Proin faucibus pharetra
              nibh. Integer aliquet tellus in felis. Quisque mi pede, imperdiet
              a, dapibus vel, bibendum rhoncus, nulla. Sed eu velit. Maecenas
              molestie, ipsum nec nonummy mattis, ipsum lectus imperdiet nibh,
              sit amet accumsan nunc nunc et lorem.Quisque at augue. Donec elit
              ligula, pellentesque id, feugiat sed, malesuada a, turpis. <br />{" "}
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              fringilla augue nec est tristique auctor. Donec non est at libero
              vulputate rutrum. Morbi ornare lectus quis justo gravida semper.
              Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id
              nulla.
            </p>
          </div>
          <div
            className={
              toggle === 2
                ? " flex justify-between border p-4 text-[13px] text-[#666] "
                : "hidden"
            }
          >
            <div className="flex">
              <span className="text-black font-bold mr-2">Reference</span>
              <span>demo_1</span>
            </div>
            <div className="flex">
              <span className="text-black font-bold mr-2">In stock</span>
              <span>18 Items</span>
            </div>
          </div>
          <div className={toggle === 3 ? " flex flex-col p-4 text-[13px] " : "hidden"}>
            <div>
              {listComments.length > 0 ? listComments.map((item: IComment, index) => {
                return (
                  <div key={index} className="mt-3">
                    <p className="font-bold">Ban Trieu</p>
                    <p className="">{item.comment}</p>
                  </div>
                )
              }) : ""}
              <p className="font-bold mt-10">Ban Trieu</p>
              <textarea onChange={(e) => setComment(e.target.value)} value={comment} className="bg-gray-100 w-[100%] outline-none p-3" placeholder="Nhập đánh giá của bạn..." cols="10" rows="3"></textarea>
              <button onClick={handleComment} className="bg-gray-400 text-white px-3 py-1 rounded-md hover:bg-[#e5642f]">Gửi</button>
            </div>
            {/* <span className="bg-[#333] inline-block p-3 w-[100%] text-white">Be the first to write your review !</span> */}
          </div>
          <div className="flex items-center justify-between font-bold bg-[#f2f2f2] py-3 px-6 my-5">
            <a className="text-[#444] hover:text-[#e5642f] cursor-pointer">
              RELATED PRODUCTS
            </a>
            <div className="flex">
              <GrFormPrevious className="text-xl text-[#999] hover:text-[#e5642f]" />
              <GrFormNext className="text-xl text-[#999] hover:text-[#e5642f]" />
            </div>
          </div>
          <div className="flex flex-wrap gap-[44px]">
            {cateId?.length >= 1 && cateId?.slice(0, 3)?.map((itemsId: any, index: number) => {
              return (
                <div key={index} className="w-[30%] mb-7 text-[#666]">
                  <ItemProduct itemProducts={itemsId} />
                </div>
              )
            })}

          </div>
        </div>
        <div className="w-[300px]">
          <div className="container font-bold bg-[#f2f2f2] py-3 px-6 !mb-5">
            <a className="text-[#444] hover:text-[#e5642f] cursor-pointer">
              CATEGORIES
            </a>
          </div>
          <div className="border">
            <a
              href=""
              className="flex justify-between items-center text-[14px] text-[#444] hover:text-[#e5642f] mx-6 my-4 font-bold border-b-[1px] border-gray-200"
            >
              <span>APPAREL</span>
              <span className="text-[18px]">+</span>
            </a>
            <a
              href=""
              className="flex justify-between items-center text-[14px] text-[#444] hover:text-[#e5642f] mx-6 my-4 font-bold border-b-[1px] border-gray-200"
            >
              <span>ELECTRONICS</span>
              <span className="text-[18px]">+</span>
            </a>
            <a
              href=""
              className="flex justify-between items-center text-[14px] text-[#444] hover:text-[#e5642f] mx-6 my-4 font-bold border-b-[1px] border-gray-200"
            >
              <span>AUTO & BIKE</span>
              <span className="text-[18px]">+</span>
            </a>
          </div>
          <div className="container font-bold bg-[#f2f2f2] py-3 px-6 !my-5">
            <a
              href=""
              className="text-[#444] hover:text-[#e5642f] cursor-pointer"
            >
              TOP RATES
            </a>
          </div>
          <div className="border p-4">
            <div className="flex mb-5">
              <div className="w-[40%]">
                <img
                  src="https://demo.fieldthemes.com/bookshop/demo1/45-small_default/the-book-of-love.jpg"
                  alt=""
                  className="border w-[100px] h-[110px]"
                />
              </div>
              <div className="w-[60%] py-[20px] flex flex-col justify-evenly ml-3">
                <a href="" className="text-[14px] hover:text-[#e5642f]">
                  The Book Of Love
                </a>
                <div className="flex text-[#ffcc33] text-[12px]">
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                </div>
                <p className="text-[#e5642f] text-[12px] font-bold">€36.43</p>
              </div>
            </div>
            <div className="flex mb-5">
              <div className="w-[40%]">
                <img
                  src="https://demo.fieldthemes.com/bookshop/demo1/45-small_default/the-book-of-love.jpg"
                  alt=""
                  className="border w-[100px] h-[110px]"
                />
              </div>
              <div className="w-[60%] py-[20px] flex flex-col justify-evenly ml-3">
                <a href="" className="text-[14px] hover:text-[#e5642f]">
                  The Book Of Love
                </a>
                <div className="flex text-[#ffcc33] text-[12px]">
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                </div>
                <p className="text-[#e5642f] text-[12px] font-bold">€36.43</p>
              </div>
            </div>
            <div className="flex">
              <div className="w-[40%]">
                <img
                  src="https://demo.fieldthemes.com/bookshop/demo1/45-small_default/the-book-of-love.jpg"
                  alt=""
                  className="border w-[100px] h-[110px]"
                />
              </div>
              <div className="w-[60%] py-[20px] flex flex-col justify-evenly ml-3">
                <a href="" className="text-[14px] hover:text-[#e5642f]">
                  The Book Of Love
                </a>
                <div className="flex text-[#ffcc33] text-[12px]">
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                </div>
                <p className="text-[#e5642f] text-[12px] font-bold">€36.43</p>
              </div>
            </div>
          </div>
          <div className="w-[100%] mt-7">
            <img
              src="https://demo.fieldthemes.com/bookshop/demo1/modules/fieldhtmlblock/images/banner-left.jpg"
              alt=""
              className="w-[100%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBook;
