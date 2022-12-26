import React from "react";
import Product from "../Product";
import "./styles.css";
import { SlideShowContext } from "../../store/contexts";
import { useClickOutside } from "../../hooks/useClickOutside";

const SlideShow = () => {
  const { showSlides, setShowSlides } = React.useContext(SlideShowContext);
  return (
    <div className="fixed inset-0 sideShow">
      <div className="max-w-[500px] grid m-auto mt-[50px]">
        <div className="flex justify-end pr-[20px] ">
          <span
            className="text-[white] font-bold cursor-pointer text-[1.5rem]"
            onClick={() => setShowSlides(false)}
          >
            X
          </span>
        </div>
        <Product
          className="grid"
          productImgClassName="max-w-[100%]"
          // slidesClassName="bg-[red] max-w-[50%] mx-auto"
        />
      </div>
    </div>
  );
};

export default SlideShow;
