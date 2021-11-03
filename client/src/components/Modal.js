import React, { useEffect } from "react";
import Portal from "./Portal";

// TODO: Make this easier to reuse? could be fun

const Modal = ({ children, modalRef, offClick }) => {
  useEffect(() => {
    const listener = (event) => {
      if (!modalRef.current || modalRef.current.contains(event.target)) {
        return;
      }
      offClick();
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [modalRef, offClick]);

  return (
    <Portal>
      <div
        className={
          "fixed z-50 w-screen h-screen flex items-center justify-center backdrop-filter backdrop-blur-sm top-0"
        }
      >
        {children}
      </div>
    </Portal>
  );
};

export default Modal;
