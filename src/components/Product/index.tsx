import React from "react";
import Product1 from "../../assets/image-product-1.jpg";
import ProductThumbnail1 from "../../assets/image-product-1-thumbnail.jpg";
import ProductThumbnail2 from "../../assets/image-product-2-thumbnail.jpg";
import ProductThumbnail3 from "../../assets/image-product-3-thumbnail.jpg";
import ProductThumbnail4 from "../../assets/image-product-4-thumbnail.jpg";
import Product2 from "../../assets/image-product-2.jpg";
import Product3 from "../../assets/image-product-3.jpg";
import Product4 from "../../assets/image-product-4.jpg";
import { SlideShowContext } from "../../store/contexts";
import clsx from "clsx";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

interface ProductsProps {
  className?: string;
  slidesClassName?: string;
  productImgClassName?: string;
}

const Product: React.FC<ProductsProps> = ({
  className,
  slidesClassName,
  productImgClassName,
}) => {
  const { showSlides, setShowSlides } = React.useContext(SlideShowContext);
  const [currentImage, setCurrentImage] = React.useState(Product1);
  const [previousImg, setPreviousImg] = React.useState(3);
  const [nextImg, setNextImg] = React.useState(0);

  const productThumbnails = [
    { thumbnail: ProductThumbnail1, product: Product1 },
    { thumbnail: ProductThumbnail2, product: Product2 },
    { thumbnail: ProductThumbnail3, product: Product3 },
    { thumbnail: ProductThumbnail4, product: Product4 },
  ];

  const handleSlides = (index: number, imgSrc: string) => {
    if (index > 0) {
      setShowSlides(true);
    }
    setCurrentImage(imgSrc);
  };

  const slidesSwitch = () => {
    // for (let i = 0; i < productThumbnails.length; i++) {
    //   // setCurrentImage(productThumbnails[i].product);
    //   console.log(productThumbnails[i]);
    // }
  };

  return (
    <div className={className}>
      {showSlides ? (
        <div className="relative">
          <div
            className="bg-[white] aspect-[1/1] h-[40px] w-[40px] rounded-[50%] flex items-center justify-center cursor-pointer top-[50%] absolute left-[-10px] font-bold"
            onClick={slidesSwitch}
          >
            <span className="text-[black]"> ❮ </span>
          </div>
          <div>
            <img
              src={currentImage}
              alt=""
              className={clsx(
                productImgClassName,
                "rounded-[10px] bg-black  object-cover"
              )}
            />
          </div>
          <div className="bg-[white] h-[40px] w-[40px] rounded-[50%] flex items-center justify-center cursor-pointer bottom-[50%] absolute right-[-10px] font-bold">
            <span className="text-[black]">❯</span>
          </div>
        </div>
      ) : (
        <img
          src={Product1}
          alt=""
          className={clsx(
            productImgClassName,
            "rounded-[10px] bg-black  object-cover"
          )}
        />
      )}
      <div
        className={clsx(
          slidesClassName,
          "flex items-center justify-between mt-[10px]"
        )}
      >
        {productThumbnails.map((el, index: number) => (
          <img
            key={index}
            src={el.thumbnail}
            alt=""
            className="max-w-100px] max-h-[100px] rounded-[5px] opacity-[0.5] border-2 cursor-pointer"
            onClick={() => handleSlides(index, el.product)}
          />
        ))}
      </div>
    </div>
  );
};

export default Product;
