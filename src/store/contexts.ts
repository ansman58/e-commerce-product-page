import React from "react";
import {
  IOrderDetailsContext,
  IOrdersContext,
  ISlideShowContext,
} from "../interfaces/contexts";

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
};

export const OrdersContext = React.createContext(initialOrdersContext);

const initialOrderDetailsContext: IOrderDetailsContext = {
  name: "",
  price: 0,
};

export const OrderDetailsContext = React.createContext(
  initialOrderDetailsContext
);
