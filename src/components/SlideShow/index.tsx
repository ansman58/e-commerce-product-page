import React from "react";
import Product from "../Product";
import { CloseIcon } from "../SVGs";

interface ISlideShow {
  close: boolean;
  setClose: React.Dispatch<boolean>;
}

const SlideShow: React.FC<ISlideShow> = ({ close, setClose }) => {
  return (
    <>
      {!close && (
        <div className="fixed inset-0 sideShow bg-black/80">
          <div className="max-w-[400px] grid m-auto mt-[50px]">
            <div className="flex justify-end">
              <CloseIcon
                fillColor="white"
                className="mb-4"
                onBtnClick={() => setClose(true)}
              />
            </div>
            <Product
              className="max-w-[400px]"
              productImgClassName="max-w-[100%] "
              showNav
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SlideShow;
