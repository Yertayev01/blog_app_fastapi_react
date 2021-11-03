import React, { useState, useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

const Login = ({ setUsers }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log("Submitted");
    // fetch("http://127.0.0.1:8000/users")
    //   .then((res) => {
    //     if (res.ok) return res.json();
    //     throw res;
    //   })
    //   .then((data) => {
    //     setUsers([...data]);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  const loginModal = (
    <div
      ref={modalRef}
      className="h-1/3 w-4/5 flex justify-center items-center border rounded-lg bg-green-50 relative text-lg p-3"
    >
      <button
        className="h-10 w-10 bg-white absolute top-0 right-0 rounded-md filter drop-shadow-sm"
        onClick={() => {
          setShowModal(false);
        }}
      >
        X
      </button>
      <p className="text-center text-green-800">
        Uhhh, I didn't actaully think anybody would click this ... So uhh, like,
        how is your day going?
      </p>
    </div>
  );

  return (
    <div className="flex items-center flex-col p-6 justify-center">
      <form
        className="border border-green-400 border-opacity-60 rounded-lg px-16 py-12 h-72 flex flex-col items-center justify-center shadow-md"
        onSubmit={onSubmit}
      >
        <Input
          inputState={username}
          title={"username"}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          inputState={password}
          title={"password"}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <button className="border p-1 w-24 rounded-md mt-2 bg-green-500 text-white shadow active:bg-green-700 active:shadow-none">
          enter
        </button>
      </form>
      <span
        className="mt-4 text-green-500 hover:text-green-800 cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        Need help?
      </span>
      {showModal ? (
        <Modal modalRef={modalRef} offClick={() => setShowModal(false)}>
          {loginModal}
        </Modal>
      ) : null}
    </div>
  );
};

export default Login;
