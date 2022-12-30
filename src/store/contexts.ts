import React from "react";
import { IOrdersContext, ISlideShowContext } from "../interfaces/contexts";

const InitialSlideShowContext: ISlideShowContext = {
  showSlides: false,
  setShowSlides: () => {},
};

export const SlideShowContext = React.createContext(InitialSlideShowContext);

const initialOrdersContext: IOrdersContext = {
  noOfOrders: 0,
  setNoOfOrders: () => {},
  name: "",
  price: 0,
  totalPrice: 0,
  cartIsEmpty: true,
  setCartIsEmpty: () => {},
  ordersInCart: 0,
  setOrdersInCart: () => {},
};

export const OrdersContext = React.createContext(initialOrdersContext);
