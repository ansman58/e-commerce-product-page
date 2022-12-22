import React from "react";
import CartIcon from "../../assets/icon-cart.svg";
import Avatar from "../../assets/image-avatar.png";
import Cart from "../Cart";

const Header = () => {
  const [showCart, setShowCart] = React.useState(false);

  const onShowCart = () => {
    setShowCart((prev: boolean) => !prev);
  };

  return (
    <nav className=" flex justify-between items-baseline border-b-2 border-[red] relative">
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
        <img src={Avatar} alt="user profile picture" className="max-w-[40px]" />
      </div>

      {showCart && <Cart className="absolute top-[30px]" />}
    </nav>
  );
};

export default Header;
