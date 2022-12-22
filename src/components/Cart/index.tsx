import React from "react";
import ProductThumbnail1 from "../../assets/image-product-1-thumbnail.jpg";
import { FaTrash } from "react-icons/fa";
import clsx from "clsx";

interface CartProps {
  className?: string;
}

const Cart: React.FC<CartProps> = ({ className }) => {
  return (
    <div className={clsx(className, "bg-white")}>
      <h2>Cart</h2>
      <hr />
      <div className="flex">
        <img src={ProductThumbnail1} alt="" className="max-w-[50px]" />
        <div>
          <p>Fall Limited Edition Sneakers</p>
          <p>
            $125.00 x 3 <span>$375.00</span>
          </p>
        </div>
        <FaTrash />
      </div>
    </div>
  );
};

export default Cart;
