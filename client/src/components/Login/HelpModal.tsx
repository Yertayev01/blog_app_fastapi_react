import React, { useRef } from "react";
import Modal from "../Common/Modal";

type HelpModalProps = {
  modalVisible: boolean;
  closeModal: () => void;
};

const HelpModal: React.FC<HelpModalProps> = ({ modalVisible, closeModal }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  return (
    <>
      {modalVisible ? (
        <Modal
          className={
            "fixed z-50 w-screen h-screen flex items-center justify-center backdrop-filter backdrop-blur-sm top-0"
          }
          modalRef={modalRef}
          offClick={closeModal}
        >
          <div
            ref={modalRef}
            className="h-1/3 w-4/5 lg:w-1/3 lg:h-1/2 flex justify-center items-center border rounded-lg bg-green-50 relative text-lg p-3 animate-wiggle-1s"
          >
            <button
              className="h-10 w-10 bg-white absolute top-0 right-0 rounded-md filter drop-shadow-sm active:bg-gray-200"
              onClick={closeModal}
            >
              X
            </button>
            <div className="text-center text-green-800">
              <h4 className="text-lg mb-3 lg:text-xl lg:mb-5">
                Welcome to my totally real and not fake blog!
              </h4>
              <p className="text-sm lg:text-base">
                Please make an account with a username and password. Don't use
                one of your real passwords! The passwords are encrypted and I
                will not be able to see them, but still, there is no reason to
                do it.
              </p>
            </div>
          </div>
        </Modal>
      ) : null}
    </>
  );
};

export default HelpModal;
