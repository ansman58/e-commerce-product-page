import React from "react";
import Product from "../Product";
import "./styles.css";
import { CloseIcon } from "../SVGs";

const SlideShow = () => {
  return (
    <div className="fixed inset-0 sideShow">
      <div className="max-w-[500px] grid m-auto mt-[50px]">
        <div className="flex justify-end">
          <CloseIcon fillColor="white" className="mb-4" />
        </div>
        <Product
          className=""
          productImgClassName="max-w-[100%]"
          showNav
        />
      </div>
    </div>
  );
};

export default SlideShow;
