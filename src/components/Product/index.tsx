import React from "react";
import ShoeImage from "../../assets/image-product-1.jpg";
import ProductThumbnail1 from "../../assets/image-product-1-thumbnail.jpg";
import ProductThumbnail2 from "../../assets/image-product-2-thumbnail.jpg";
import ProductThumbnail3 from "../../assets/image-product-3-thumbnail.jpg";
import ProductThumbnail4 from "../../assets/image-product-4-thumbnail.jpg";

const Product = () => {
  const productThumbnails = [
    ProductThumbnail1,
    ProductThumbnail2,
    ProductThumbnail3,
    ProductThumbnail4,
  ];
  return (
    <div>
      <img
        src={ShoeImage}
        alt=""
        className="rounded-[10px] bg-black max-h-[80%] max-w-[100%] object-cover"
      />
      <div className="flex items-center justify-between mt-[10px]">
        {productThumbnails.map((el, index: number) => (
          <img
            key={index}
            src={el}
            alt=""
            className="max-w-100px] max-h-[100px] rounded-[5px] opacity-[0.5] border-[red] border-2 cursor-pointer"
          />
        ))}
      </div>
    </div>
  );
};

export default Product;
