import React from "react";
import ProductThumbnail1 from "../../assets/image-product-1-thumbnail.jpg";
import { FaTrash } from "react-icons/fa";
import clsx from "clsx";

interface CartProps {
  className?: string;
}

const Cart: React.FC<CartProps> = ({ className }) => {
  const [isEmpty, setIsEmpty] = React.useState(true);
  return (
    <div className={clsx(className, "bg-white shadow-lg pt-[10px] grid min-w-[400px]")}>
      <h2 className="mb-[10px] pl-[20px] font-[700]">Cart</h2>
      <hr className="text-grayishBlue" />
      {isEmpty ? (
        <div className="w-[100%]">
          <p className="">Cart is empty</p>
        </div>
      ) : (
        <div className="p-[40px]">
          <div className="flex pb-4 pt-3 items-center gap-[20px] text-grayishBlue">
            <img src={ProductThumbnail1} alt="" className="max-w-[50px]" />
            <div>
              <p>Fall Limited Edition Sneakers</p>
              <p>
                $125.00 x 3
                <span className="text-black font-[700]">$375.00</span>
              </p>
            </div>
            <FaTrash />
          </div>
          <button className="bg-primaryOrange text-white h-[40px] w-[100%] rounded-[5px]">
            Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
