import React from "react";

export function useClickOutside(
  state: boolean,
  setState: React.Dispatch<React.SetStateAction<boolean>>
) {
  const ref = React.useRef<any>(null);

  React.useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (state) {
        e.target === ref.current ? setState(true) : setState(false);
      }
      // if (e.target !== ref.current) {
      //   console.log({ target: e.target, ref: ref.current });
      //   setState(false);
      // }
    };
    window.addEventListener("click", onClickOutside);

    return () => {
      window.removeEventListener("click", onClickOutside);
    };
  }, [state]);

  return { ref };
}
