import React from "react";

export const offClickHelper = (
  ref: React.MutableRefObject<HTMLElement>,
  offClick: () => void
) => {
  const listener = (event) => {
    if (!ref.current || ref.current.contains(event.target)) {
      return;
    }
    offClick();
  };
  document.addEventListener("mousedown", listener);
  return () => {
    document.removeEventListener("mousedown", listener);
  };
};
