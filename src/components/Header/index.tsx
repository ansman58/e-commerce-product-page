import React from "react";
import CartIcon from "../../assets/icon-cart.svg";
import Avatar from "../../assets/image-avatar.png";
import Cart from "../Cart";
import { FaBars } from "react-icons/fa";
import MobileMenu from "../MobileMenu";

interface IHeader {
  noOfOrders: number;
  totalPrice: number;
}

const Header: React.FC<IHeader> = ({ noOfOrders, totalPrice }) => {
  const [showCart, setShowCart] = React.useState(false);
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

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
    <nav className="relative tablet:px-6">
      <div className="flex justify-between py-5">
        <div className="basis-[80%] flex items-center tablet:basis-[60%]">
          <FaBars className="hidden tablet:block" onClick={toggleMobileMenu} role="button"/>
          <h1 className="basis-[20%] font-[700] text-3xl box-content tablet:ml-3 tablet:text-[24px]">
            sneakers
          </h1>
          <ul className="basis-[70%] flex gap-[30px] gap tablet:hidden mid900:pl-6">
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

        <div className="basis-[20%] flex justify-end gap-[30px] items-center tablet:basis-[40%]">
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
            className="max-w-[30px] hover:border-primaryOrange hover:border-2 rounded-full"
          />
        </div>
      </div>

      <hr className="text-grayishBlue" />

      {showCart && (
        <Cart
          totalPrice={totalPrice}
          noOfOrders={noOfOrders}
          className="absolute top-[60px] right-0"
        />
      )}
      {showMobileMenu && <MobileMenu setShowMobileMenu={setShowMobileMenu} />}
    </nav>
  );
};

export default Header;
