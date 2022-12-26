import React from "react";

export function useClickOutside(
  state: boolean,
  setState: React.Dispatch<React.SetStateAction<boolean>>
) {
  const ref = React.useRef<any>(null);

  React.useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (e.target !== ref.current) {
        console.log(e.target);
        setState(false);
      }
    };

    window.addEventListener("click", onClickOutside);

    return () => {
      window.removeEventListener("click", onClickOutside);
    };
  }, [state]);

  return { ref };
}
