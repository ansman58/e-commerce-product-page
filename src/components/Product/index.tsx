import React from "react";
import clsx from "clsx";
import Product1 from "../../assets/image-product-1.jpg";
import ProductThumbnail1 from "../../assets/image-product-1-thumbnail.jpg";
import ProductThumbnail2 from "../../assets/image-product-2-thumbnail.jpg";
import ProductThumbnail3 from "../../assets/image-product-3-thumbnail.jpg";
import ProductThumbnail4 from "../../assets/image-product-4-thumbnail.jpg";
import Product2 from "../../assets/image-product-2.jpg";
import Product3 from "../../assets/image-product-3.jpg";
import Product4 from "../../assets/image-product-4.jpg";
import { useWindowSize } from "../../hooks/useWindwSize";
import style from "./styles.module.scss";

interface ProductsProps {
  className?: string;
  productImgClassName?: string;
  showNav?: boolean;
  setClose?: React.Dispatch<boolean>;
  showSlides?: boolean;
  setShowSlides?: React.Dispatch<boolean>;
  // currentImage?: string;
  // setCurrentImage?: React.Dispatch<string>;
}

const Product: React.FC<ProductsProps> = ({
  className,
  productImgClassName,
  showNav,
  setClose,
  showSlides,
  setShowSlides,
  // currentImage,
  // setCurrentImage,
}) => {
  const [index, setIndex] = React.useState(0);
  const [active, setActive] = React.useState<boolean | number>(false);
  const [currentImage, setCurrentImage] = React.useState(Product1);
  const windowSize = useWindowSize();

  const productThumbnails = [
    { thumbnail: ProductThumbnail1, product: Product1 },
    { thumbnail: ProductThumbnail2, product: Product2 },
    { thumbnail: ProductThumbnail3, product: Product3 },
    { thumbnail: ProductThumbnail4, product: Product4 },
  ];

  const handleSlides = (indx: number, imgSrc: string) => {
    setClose?.(false);
    setCurrentImage(imgSrc);
    setShowSlides?.(true);
    setActive(indx);
  };

  const prev = () => {
    if (index === 0) {
      setIndex(productThumbnails.length - 1);
      setCurrentImage(productThumbnails?.[index].product);
      setActive(index);
    } else {
      setIndex(index - 1);
      setCurrentImage(productThumbnails?.[index].product);
      setActive(index);
    }
  };

  const next = () => {
    if (index === productThumbnails.length - 1) {
      setIndex(0);
      setCurrentImage(productThumbnails?.[index].product);
      setActive(index);
    } else {
      setIndex(index + 1);
      setCurrentImage(productThumbnails?.[index].product);
      setActive(index);
    }
  };

  return (
    <div className={className}>
      <div className="relative">
        {(showNav || windowSize.width < 768) && (
          <button
            className={clsx(
              style.prev,
              " bg-[white] outline-none aspect-square h-[40px] w-[40px] rounded-full flex items-center z-[3] justify-center cursor-pointer font-bold absolute top-[45%] left-[-1rem]  tablet:left-[1rem]"
            )}
            onClick={prev}
          >
            <span className={"text-[black]"}>❮</span>
          </button>
        )}
        <div className="tablet:mb-[10px] relative">
          <img
            src={currentImage}
            alt="Product image"
            className={clsx(
              productImgClassName,
              "rounded-md bg-black object-cover max-w-[400px] max-h-[400px] tablet:w-full tablet:max-w-full tablet:rounded-none tablet:max-h-[350px]"
            )}
          />
        </div>
        {(showNav || windowSize.width < 768) && (
          <button
            className={clsx(
              style.next,
              "bg-[white] outline-none aspect-square h-[40px] w-[40px] rounded-full flex items-center justify-center cursor-pointer font-bold absolute top-[45%] right-[-1rem] tablet:right-[1rem]"
            )}
            onClick={next}
          >
            <span className={"text-[black] "}>❯</span>
          </button>
        )}
      </div>

      <div className="flex items-center justify-between mt-[10px] tablet:hidden">
        {productThumbnails.map((el, index: number) => (
          <button
            className="outline-none"
            onClick={() => handleSlides(index, el.product)}
          >
            <img
              key={index}
              src={el.thumbnail}
              alt="product thumnail"
              className={clsx(
                {
                  ["filter opacity-[40%] border-primaryOrange border-2"]:
                    active === index,
                },
                "max-w-[70px] max-h-[70px] rounded-[5px] hover:filter hover:opacity-[50%] cursor-pointer"
              )}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Product;
