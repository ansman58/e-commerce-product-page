import React from "react";
import ProductThumbnail1 from "../../assets/image-product-1-thumbnail.jpg";
import { FaTrash } from "react-icons/fa";
import clsx from "clsx";
import { useClickOutside } from "../../hooks/useClickOutside";
import { OrdersContext } from "../../store/contexts";

type CartProps = {
  className?: string;
  showCart: boolean;
  setShowCart?: React.Dispatch<React.SetStateAction<boolean>>;
};

const Cart = ({ className, showCart, setShowCart }: CartProps) => {
  const { name, price, totalPrice, noOfOrders, cartIsEmpty, ordersInCart } =
    React.useContext(OrdersContext);
  // const { ref } = useClickOutside(
  //   showCart,
  //   setShowCart as React.Dispatch<React.SetStateAction<boolean>>
  // );

  return (
    <div
      className={clsx(
        className,
        "bg-white shadow-lg pt-[10px] grid min-w-[250px] rounded-[5px]"
      )}
      // ref={cartRef}
    >
      <h2 className="mb-[10px] pl-[20px] font-[700]">Cart</h2>
      <hr className="text-grayishBlue" />
      <div className="">
        {!cartIsEmpty ? (
          <div className="pb-[20px] px-[30px] text-grayishBlue">
            <div className="flex pb-4 pt-3 items-center gap-[20px] text-grayishBlue">
              <img src={ProductThumbnail1} alt="" className="max-w-[50px]" />
              <div>
                <p>{name}</p>
                <p>
                  ${price.toFixed(2)} x {ordersInCart}
                  <span className="text-black font-[700] ml-[10px]">
                    ${Intl.NumberFormat().format(totalPrice)}
                  </span>
                </p>
              </div>
              <FaTrash className="cursor-pointer" />
            </div>
            <button className="bg-primaryOrange text-white h-[40px] w-[100%] rounded-[5px]">
              Checkout
            </button>
          </div>
        ) : (
          <div className="min-h-[130px] grid h-[100%]">
            <p className="text-center m-auto text-grayishBlue">Cart is empty</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
