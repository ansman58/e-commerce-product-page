import React from "react";
import Product from "../Product";
import "./styles.css";
import { SlideShowContext } from "../../store/contexts";
import { useClickOutside } from "../../hooks/useClickOutside";
import { CloseIcon } from "../SVGs";

const SlideShow = () => {
  const { showSlides, setShowSlides } = React.useContext(SlideShowContext);
  return (
    <div className="fixed inset-0 sideShow">
      <div className="max-w-[500px] grid m-auto mt-[50px]">
        <div className="flex justify-end">
          <CloseIcon
            fillColor="white"
            // height="18"
            // width="17"
            className="mb-4"
          />
        </div>
        <Product
          className=""
          productImgClassName="max-w-[100%]"
          // slidesClassName="bg-[red] max-w-[50%] mx-auto"
        />
      </div>
    </div>
  );
};

export default SlideShow;
