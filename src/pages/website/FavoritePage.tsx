import React, { useEffect } from "react";
import type { RootState } from '../../app/store'
import { useSelector, useDispatch } from 'react-redux'
import { removeAllFavorite, removeItemFavorite } from '../../features/cart/cartSlice'
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { FaTrashCan } from "react-icons/fa6";
import { GrFormPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";
import { ICart } from "../../types/product";

const FavoritePage = () => {
  const favorite = useSelector((state: RootState) => state.allCart.favorites)
  const { carts, totalQuantity, totalPrice } = useSelector((state: RootState) => state.allCart);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getCartTotal());
  // }, [carts]);

  const handleRemoveAll = () => {
    dispatch(removeAllFavorite())
  }

  return (
    <div className="container">
      <img
        src="https://demo.fieldthemes.com/bookshop/demo1/modules/fieldthemecustomizer/views/img/front/bg/1-1.jpg"
        alt=""
        className="w-[100%] my-[30px] hover:opacity-[0.7]"
      />
      <div className="container font-bold bg-[#f2f2f2] py-3 px-6 !mb-5">
        <a className="text-[#444] hover:text-[#e5642f] cursor-pointer">HOME</a>
      </div>
      <div className="container flex">
        <div className="w-[70%]">
          <div className=" border shadow-lg shadow-gray-400/50">
            <h1 className="font-bold text-[22px] p-3 border-b-[1px] border-gray-200">
              FAVORITE CART
            </h1>
            {favorite.length > 0 ? <button onClick={handleRemoveAll} className="ml-[700px] mt-3 px-3 py-1 text-white bg-[#e5642f] text-[14px]">Remove all</button> : <p className="text-[#e5642f] text-center">No cart...</p>}
            <div>
              {favorite?.map((itemCart: ICart, index) => {
                return (
                  <div key={index} className="flex justify-around items-center p-5">
                    <img
                      src={itemCart?.image}
                      alt=""
                      className=" w-[98px] h-[109px]"
                    />
                    <div className="min-w-[160px]">
                      <Link to="" className="text-[14px] hover:text-[#e5642f]">
                        {itemCart?.name}
                      </Link>
                      <p className="line-through text-[14px] text-[#444]">{itemCart?.price}</p>
                      <p className="text-[#e5642f] text-[12px] font-bold">{itemCart?.discount}</p>
                      <p className="text-[14px]">Size: S</p>
                      <p className="text-[14px]">Color: White</p>
                    </div>
                    <div className="text-[#e5642f] text-[12px] font-bold">
                      €{itemCart?.quantity * itemCart?.discount}
                    </div>
                    <button onClick={() => dispatch(removeItemFavorite(itemCart?.id))}>
                      <FaTrashCan />
                    </button>
                  </div>
                )
              })}
            </div>
          </div>
          <button className="flex items-center bg-[#444] text-white px-3 py-2 hover:bg-[#e5642f] mt-4">
            <GrFormPrevious className="text-[18px]" />
            <Link to={`/`} className="text-[14px]">Continue shopping</Link>
          </button>
        </div>
        <div className="w-[30%] ml-7">
          <div className="">
            <div className="border-b-[1px] border-gray-200 pb-3 mt-5">
              <span className="">
                <img
                  src="https://demo.fieldthemes.com/bookshop/demo1/modules/blockreassurance/img/ic_verified_user_black_36dp_1x.png"
                  alt=""
                  className="w-[25px] h-[25px] mr-2 inline"
                />
                <span className="text-[14px] font-bold text-[#444]">
                  Security policy (edit with Customer reassurance module)
                </span>
              </span>
            </div>
            <div className="border-b-[1px] border-gray-200 pb-3 mt-5">
              <span className="">
                <img
                  src="https://demo.fieldthemes.com/bookshop/demo1/modules/blockreassurance/img/ic_local_shipping_black_36dp_1x.png"
                  alt=""
                  className="w-[25px] h-[25px] mr-2 inline"
                />
                <span className="text-[14px] font-bold text-[#444]">
                  Delivery policy (edit with Customer reassurance module)
                </span>
              </span>
            </div>
            <div className="border-b-[1px] border-gray-200 pb-3 mt-5">
              <span className="">
                <img
                  src="https://demo.fieldthemes.com/bookshop/demo1/modules/blockreassurance/img/ic_swap_horiz_black_36dp_1x.png"
                  alt=""
                  className="w-[25px] h-[25px] mr-2 inline"
                />
                <span className="text-[14px] font-bold text-[#444]">
                  Return policy (edit with Customer reassurance module)
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FavoritePage;
