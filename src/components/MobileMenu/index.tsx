import React from "react";
import clsx from "clsx";
import style from "./MobileMenu.module.scss";
import { CloseIcon } from "../SVGs";

interface IMobileMenu {
  className?: string;
  setShowMobileMenu?: React.Dispatch<boolean>
}

const MobileMenu: React.FC<IMobileMenu> = ({ className, setShowMobileMenu }) => {
  const menuList: string[] = [
    "Collections",
    "Men",
    "Women",
    "About",
    "Contact",
  ];
  return (
    <div
      className={clsx(
        style.container,
        "fixed z-50 min-h-screen top-0 left-0 w-full"
      )}
    >
      <nav className="bg-white w-[60%] min-h-screen p-4 font-semibold translate-x-[-100%] tablet:translate-x-0 transition-transform ease-in duration-300">
        <ul className={clsx(style.menuList)}>
          <li className="py-6">
            <CloseIcon fillColor="black" className="scale-[-1]" />
          </li>
          {menuList.map((item: string, index: number) => (
            <li
              className="my-auto cursor-pointer pb-3"
              key={index + "menuItem"}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
