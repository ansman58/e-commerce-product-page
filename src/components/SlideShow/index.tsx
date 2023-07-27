import Product from "../Product";
import { CloseIcon } from "../SVGs";

const SlideShow = () => {
  return (
    <div className="fixed inset-0 sideShow bg-black/80">
      <div className="max-w-[400px] grid m-auto mt-[50px]">
        <div className="flex justify-end">
          <CloseIcon fillColor="white" className="mb-4" />
        </div>
        <Product
          className="max-w-[400px]"
          productImgClassName="max-w-[100%] "
          showNav
        />
      </div>
    </div>
  );
};

export default SlideShow;
