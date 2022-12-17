import React from "react";
import ShoeImage from "../assets/image-product-1.jpg";
import CartIcon from "../assets/icon-cart.svg";
import PlusIcon from "../assets/icon-plus.svg";
import MinusIcon from "../assets/icon-minus.svg";

const Screen = () => {
  return (
    <div className="flex bg-red-400">
      <div > 
        <img src={ShoeImage} alt="" />
      </div>
      <div>
        <h5>Sneaker Company</h5>
        <h1>Fall Limited Edition Sneakers</h1>
        <p>
          These low-profile sneakers are your perfect casual wear companinon.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer
        </p>

        <article>
          <div>
            <span>$125.00</span>
            <span>50%</span>
          </div>
          <s>$250.00</s>
        </article>

        <article>
          <div>
            <img src={MinusIcon} alt="minus icon" />
            <span>0</span>
            <img src={PlusIcon} alt="plus icon" />
          </div>
          <button>
            <img src={CartIcon} alt="cart" />
            <span>Add to cart</span>
          </button>
        </article>
      </div>
    </div>
  );
};

export default Screen;
