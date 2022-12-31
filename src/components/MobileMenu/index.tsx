import React from "react";
import clsx from "clsx";
import style from "./MobileMenu.module.scss";

interface IMobileMenu {
  className?: string;
}

const MobileMenu: React.FC<IMobileMenu> = ({ className }) => {
  const menuList: string[] = [
    "Collections",
    "Men",
    "Women",
    "About",
    "Contact",
  ];
  return (
    <div className={clsx(style.container, "absolute z-50 min-h-screen w-full")}>
      <nav className="bg-white w-1/2 min-h-screen">
        <ul className={clsx(style.menuList)}>
          {menuList.map((item: string, index: number) => (
            <li className="my-auto cursor-pointer" key={index + "menuItem"}>
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
