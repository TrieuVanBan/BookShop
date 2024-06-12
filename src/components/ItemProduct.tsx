import { FaRegClock, FaRegStar } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/hoverImage.css"

export default function ItemProduct(props: any) {
  const { showTime, isArrival, containerClass, priceClass, itemProducts } = props;
  // console.log(itemProducts);

  const navigate = useNavigate();

  const onDetail = (id: number) => () => {
    navigate(`/detail/${id}`);
  };

  return (
    <div
      onClick={onDetail(itemProducts?.id)}
      className={`border text-[#666] mb-5 ${isArrival && "flex-row flex border-0 pb-4"
        } ${containerClass}`}
    >
      <img
        src={itemProducts?.image}
        alt=""
        loading="lazy"
        className={`border-b-[1px] w-full cursor-pointer object-contain hover:scale-[0.9] hover:opacity-[0.8] hover:transition ease-in-out  duration-500 ${isArrival ? "max-w-[100px] h-auto border" : "max-w-[264px]"
          }`}
      />
      <div className={`p-3 ${isArrival && "flex flex-col justify-center w-[50%]"}`}>
        <div
          className={`flex items-center justify-between text-[12px] ${isArrival && "flex flex-col !items-start"
            }`}
        >
          <span className={`hover:text-[#e5642f] cursor-pointer whitespace-nowrap overflow-hidden text-ellipsis w-[70%] ${isArrival && "mb-1"} ${priceClass}`}>{itemProducts?.name}</span>
          <div className="flex items-center text-[#fc3] font-semibold">
            <FaRegStar className="mr-[1px]" />
            <FaRegStar className="mr-[1px]" />
            <FaRegStar className="mr-[1px]" />
            <FaRegStar className="mr-[1px]" />
            <FaRegStar className="mr-[1px]" />
          </div>
        </div>
        <div className={`flex items-center justify-between text-[12px] ${containerClass && priceClass}`}>
          <span className="line-through">€{itemProducts?.price}</span>
          <span className="text-[#e5642f] font-semibold">€{itemProducts?.discount}</span>
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
