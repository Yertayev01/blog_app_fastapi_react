import React, { useEffect } from "react";
import Portal from "./Portal";
import { offClickHelper } from "./utils/utils";

const Modal = ({ children, modalRef, offClick }) => {
  useEffect(() => {
    const cleanup = offClickHelper(modalRef, offClick);
    return cleanup;
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
