import React from "react";

export const offClickHelper = (
  ref: React.RefObject<HTMLElement>,
  offClick: () => void
) => {
  const listener = (event: MouseEvent) => {
    console.log(typeof event);
    if (!ref.current || ref.current.contains(event.target as Node)) {
      return;
    }
    offClick();
  };
  document.addEventListener("mousedown", listener);
  return () => {
    document.removeEventListener("mousedown", listener);
  };
};
