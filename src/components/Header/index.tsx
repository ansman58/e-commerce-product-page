import clsx from "clsx";
import React from "react";
import CartIcon from "../../assets/icon-cart.svg";
import Avatar from "../../assets/image-avatar.png";
import { useClickOutside } from "../../hooks/useClickOutside";
import { OrdersContext } from "../../store/contexts";
import Cart from "../Cart";
import style from "./Header.module.scss";
import { FaBars } from "react-icons/fa";
import MobileMenu from "../MobileMenu";

const Header = () => {
  const [showCart, setShowCart] = React.useState(false);
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  const { noOfOrders, cartIsEmpty, ordersInCart } =
    React.useContext(OrdersContext);

  const onShowCart = () => {
    setShowCart((prev: boolean) => !prev);
  };

  const menuList: string[] = [
    "Collections",
    "Men",
    "Women",
    "About",
    "Contact",
  ];

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <nav className="  relative">
      <div className="flex justify-between py-5">
        <div className={clsx(style.header, "basis-[80%] flex items-center")}>
          <FaBars className={style.hamburger} onClick={toggleMobileMenu} />
          <h1
            className={clsx(
              style.title,
              "basis-[20%] font-[700] text-3xl box-content"
            )}
          >
            Sneakers
          </h1>
          <ul
            className={clsx(style.menuList, "basis-[70%] flex gap-[30px] gap")}
          >
            {menuList.map((item: string, index: number) => (
              <li
                className="my-auto cursor-pointer hover:border-b-2 hover:border-[#d57474]"
                key={index + "menuItem"}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div
          className={clsx(
            style.icon,
            "basis-[20%] flex justify-end gap-[30px] items-center"
          )}
        >
          <div className="flex relative cursor-pointer" onClick={onShowCart}>
            <img src={CartIcon} alt="cart" className="cursor-pointer" />
            {!cartIsEmpty && (
              <sup className="bg-primaryOrange rounded-[50%] p-2 absolute text-white left-[10px]">
                {ordersInCart}
              </sup>
            )}
          </div>
          <img
            src={Avatar}
            alt="user profile picture"
            className="max-w-[30px] hover:border-primaryOrange hover:border-2 rounded-full"
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
      {showMobileMenu && <MobileMenu />}
    </nav>
  );
};

export default Header;
