import React from "react";
import CartIcon from "../../assets/icon-cart.svg";
import Avatar from "../../assets/image-avatar.png";
import { useClickOutside } from "../../hooks/useClickOutside";
import Cart from "../Cart";

const Header = () => {
  const [showCart, setShowCart] = React.useState(false);

  const onShowCart = () => {
    setShowCart((prev: boolean) => !prev);
  };

  return (
    <>
      <nav className="  relative">
        <div className="flex justify-between py-[20px]">
          <div className="basis-[80%] flex items-center">
            <h1 className="basis-[20%] font-[700] text-[28px] box-content">
              Sneakers
            </h1>
            <ul className="basis-[70%] flex gap-[30px]">
              <li className="my-auto cursor-pointer hover:border-b-2 hover:border-[red]">
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
            <img
              src={CartIcon}
              alt="cart"
              onClick={onShowCart}
              className="cursor-pointer"
            />
            <img
              src={Avatar}
              alt="user profile picture"
              className="max-w-[30px] hober:border-[red]"
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
