import React, { useEffect } from "react";
import Portal from "./Portal";
import { offClickHelper } from "../../utils/helpers";

type ModalProps = {
  className: string;
  modalRef: React.MutableRefObject<undefined>;
  offClick: () => void;
};

const Modal: React.FC<ModalProps> = ({
  children,
  className,
  modalRef,
  offClick,
}) => {
  useEffect(() => {
    const cleanup = offClickHelper(modalRef, offClick);
    return cleanup;
  }, [modalRef, offClick]);

  return (
    <Portal>
      <div className={className}>{children}</div>
    </Portal>
  );
};

export default Modal;
