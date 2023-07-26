export interface ISlideShowContext {
  showSlides: boolean;
  setShowSlides: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IOrdersContext {
  name: string;
  price: number;
}
