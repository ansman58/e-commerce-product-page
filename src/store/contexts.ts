import React from "react";
import { IOrdersContext, ISlideShowContext } from "../interfaces/contexts";

const InitialSlideShowContext: ISlideShowContext = {
  showSlides: false,
  setShowSlides: () => {},
};

export const SlideShowContext = React.createContext(InitialSlideShowContext);

const initialOrdersContext: IOrdersContext = {
  name: "",
  price: 0,
};

export const OrdersContext = React.createContext(initialOrdersContext);
