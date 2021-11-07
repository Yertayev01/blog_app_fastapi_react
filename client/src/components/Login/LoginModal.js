import React, { useRef } from "react";
import Modal from "../Common/Modal";

const LoginModal = ({ showModal, closeModal }) => {
  const modalRef = useRef();
  return (
    <>
      {showModal ? (
        <Modal
          className={
            "fixed z-50 w-screen h-screen flex items-center justify-center backdrop-filter backdrop-blur-sm top-0"
          }
          modalRef={modalRef}
          offClick={closeModal}
        >
          <div
            ref={modalRef}
            className="h-1/3 w-4/5 flex justify-center items-center border rounded-lg bg-green-50 relative text-lg p-3"
          >
            <button
              className="h-10 w-10 bg-white absolute top-0 right-0 rounded-md filter drop-shadow-sm"
              onClick={closeModal}
            >
              X
            </button>
            <p className="text-center text-green-800">
              Uhhh, I didn't actaully think anybody would click this ... So uhh,
              like, how is your day going?
            </p>
          </div>
        </Modal>
      ) : null}
    </>
  );
};

export default LoginModal;
