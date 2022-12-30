export interface ISlideShowContext {
  showSlides: boolean;
  setShowSlides: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IOrdersContext {
    noOfOrders: number;
    setNoOfOrders: React.Dispatch<React.SetStateAction<number>>;
  }
