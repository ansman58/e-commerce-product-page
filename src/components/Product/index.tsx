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
import { SlideShowContext } from "../../store/contexts";
import styles from "./Product.module.scss";

interface ProductsProps {
  className?: string;
  productImgClassName?: string;
  showNav?: true;
}

const Product: React.FC<ProductsProps> = ({
  className,
  productImgClassName,
  showNav,
}) => {
  const { showSlides, setShowSlides } = React.useContext(SlideShowContext);
  const [index, setIndex] = React.useState(0);
  const [active, setActive] = React.useState<boolean | number>(false);
  const [currentImage, setCurrentImage] = React.useState(Product1);

  const productThumbnails = [
    { thumbnail: ProductThumbnail1, product: Product1 },
    { thumbnail: ProductThumbnail2, product: Product2 },
    { thumbnail: ProductThumbnail3, product: Product3 },
    { thumbnail: ProductThumbnail4, product: Product4 },
  ];

  const handleSlides = (indx: number, imgSrc: string) => {
    setCurrentImage(imgSrc);
    setShowSlides(true);
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
        {showNav && (
          <div
            className={clsx(
              styles.controlBtnContainer,
              "bg-[white] aspect-square h-[40px] w-[40px] rounded-full flex items-center justify-center cursor-pointer top-[50%] absolute left-[-10px] font-bold"
            )}
            onClick={prev}
          >
            <span
              className={clsx(styles.btn, "text-[black] hover:text-[#CA611C]")}
            >
              ❮
            </span>
          </div>
        )}
        <div>
          <img
            src={currentImage}
            alt="Product image"
            className={clsx(
              productImgClassName,
              styles.productImg,
              "rounded-md bg-black object-cover"
            )}
          />
        </div>
        {showNav && (
          <div
            className={clsx(
              styles.controlBtnContainer,
              "bg-[white] h-[40px] w-[40px] rounded-full flex items-center justify-center cursor-pointer bottom-[50%] absolute right-[-10px] font-bold"
            )}
            onClick={next}
          >
            <span className={clsx(styles.btn, "text-[black]")}>❯</span>
          </div>
        )}
      </div>

      <div
        className={clsx(
          styles.thumbnails,
          "flex items-center justify-between mt-[10px]"
        )}
      >
        {productThumbnails.map((el, index: number) => (
          <img
            key={index}
            src={el.thumbnail}
            alt="product thumnail"
            className={clsx(
              {
                ["z-100"]: showSlides,
                ["border-2 border-[white]"]: active === index,
              },
              "max-w-[100px] max-h-[100px] rounded-[5px] hover:opacity-[0.67] hover:border-2 border-[#ca611c] cursor-pointer"
            )}
            onClick={() => handleSlides(index, el.product)}
          />
        ))}
      </div>
    </div>
  );
};

export default Product;
