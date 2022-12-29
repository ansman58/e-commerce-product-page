import React from "react";
import PlusIcon from "../assets/icon-plus.svg";
import MinusIcon from "../assets/icon-minus.svg";
import Product from "../components/Product";
import SlideShow from "../components/SlideShow";
import { SlideShowContext } from "../store/contexts";
import { CartIcon } from "../components/SVGs";

const Screen = () => {
  const [showSlides, setShowSlides] = React.useState(false);

  return (
    <div className="flex gap-[60px] my-[100px]">
      <SlideShowContext.Provider value={{ showSlides, setShowSlides }}>
        <Product />
        {showSlides && <SlideShow />}
      </SlideShowContext.Provider>
      <div className="my-auto">
        <h5 className="text-primaryOrange mb-[30px] uppercase">
          Sneaker Company
        </h5>
        <h1 className="text-[1.5rem] font-[700]">
          Fall Limited Edition Sneakers
        </h1>
        <p className="text-grayishBlue mb-[30px]">
          These low-profile sneakers are your perfect casual wear companinon.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>

        <article className="mb-[30px]">
          <div className="flex gap-2 items-center mb-[10px]">
            <span className="text-lg font-bold">$125.00</span>
            <span className="bg-paleOrange py-[2px] px-[7px] text-primaryOrange">
              50%
            </span>
          </div>
          <s className="text-grayishBlue ">$250.00</s>
        </article>

        <article className="flex gap-3">
          <div className="basis-[30%] flex justify-between items-center bg-grayishBlue h-[40px] px-[10px] rounded-[5px]">
            <button className="cursor-pointer basis-[40%] justify-self-start h-full">
              <img
                src={MinusIcon}
                alt="minus icon"
                className=" max-w-[12px] max-h-[12px]"
              />
            </button>
            <span className="basis-[30%]  text-center">0</span>
            <button className="cursor-pointer basis-[40%] justify-self-end text-center h-full">
              <img
                src={PlusIcon}
                alt="plus icon"
                className=" max-w-[12px] max-h-[12px] ml-auto"
              />
            </button>
          </div>
          <button className="bg-primaryOrange basis-[70%] flex justify-center items-center rounded-[5px] gap-3">
            <CartIcon fillColor="white" />
            <span className="text-white">Add to cart</span>
          </button>
        </article>
      </div>
    </div>
  );
};

export default Screen;
