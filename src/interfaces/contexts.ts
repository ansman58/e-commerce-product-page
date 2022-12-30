export interface ISlideShowContext {
  showSlides: boolean;
  setShowSlides: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IOrdersContext {
  noOfOrders: number;
  setNoOfOrders: React.Dispatch<React.SetStateAction<number>>;
  name: string;
  price: number;
  totalPrice: number;
  cartIsEmpty: boolean;
  setCartIsEmpty: React.Dispatch<React.SetStateAction<boolean>>;
  ordersInCart: number;
  setOrdersInCart: React.Dispatch<React.SetStateAction<number>>;
}
