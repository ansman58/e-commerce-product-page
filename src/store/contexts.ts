import React from "react";

interface ISlideShowContext {
  showSlides: boolean;
  setShowSlides: React.Dispatch<React.SetStateAction<boolean>>;
}

const InitialSlideShowContext: ISlideShowContext = {
  showSlides: false,
  setShowSlides: () => {},
};

export const SlideShowContext = React.createContext(InitialSlideShowContext);

interface IOrdersContext {
  noOfOrders: number;
  setNoOfOrders: React.Dispatch<React.SetStateAction<number>>;
}

const initialOrdersContext: IOrdersContext = {
  noOfOrders: 0,
  setNoOfOrders: () => {},
};

export const OrdersContext = React.createContext(initialOrdersContext);
