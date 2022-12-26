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
