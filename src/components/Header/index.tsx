import React from "react";
import CartIcon from "../../assets/icon-cart.svg";
import Avatar from "../../assets/image-avatar.png";
import { useClickOutside } from "../../hooks/useClickOutside";
import { OrdersContext } from "../../store/contexts";
import Cart from "../Cart";

const Header = () => {
  const [showCart, setShowCart] = React.useState(false);
  const { noOfOrders } = React.useContext(OrdersContext);

  const onShowCart = () => {
    console.log("showCart", showCart);
    setShowCart((prev: boolean) => !prev);
  };

  return (
    <>
      <nav className="  relative">
        <div className="flex justify-between py-5">
          <div className="basis-[80%] flex items-center">
            <h1 className="basis-[20%] font-[700] text-3xl box-content">
              Sneakers
            </h1>
            <ul className="basis-[70%] flex gap-[30px] gap">
              <li className="my-auto cursor-pointer hover:border-b-2 hover:border-[#d57474]">
                <span className="my-auto">Collections</span>
              </li>
              <li className="my-auto cursor-pointer">
                <span className="my-auto">Men</span>
              </li>
              <li className="my-auto cursor-pointer">Women</li>
              <li className="my-auto cursor-pointer">About</li>
              <li className="my-auto cursor-pointer">Contact</li>
            </ul>
          </div>

          <div className="basis-[20%] flex justify-end gap-[30px] items-center">
            <div className="flex relative cursor-pointer" onClick={onShowCart}>
              <img src={CartIcon} alt="cart" className="cursor-pointer" />
              {noOfOrders > 0 && (
                <sup className="bg-primaryOrange rounded-[50%] p-2 absolute text-white left-[10px]">
                  {noOfOrders}
                </sup>
              )}
            </div>
            <img
              src={Avatar}
              alt="user profile picture"
              className="max-w-[30px] hover:border-[red] hover:border-2 rounded-full"
            />
          </div>
        </div>

        <hr className="text-grayishBlue" />

        {showCart && (
          <Cart
            showCart={showCart}
            setShowCart={setShowCart}
            className="absolute top-[60px] right-0"
          />
        )}
      </nav>
    </>
  );
};

export default Header;
