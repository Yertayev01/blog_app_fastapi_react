import React, { FormEvent, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { InputProps } from "../Common/Input";
import HelpModal from "./HelpModal";
import { useAuth } from "../Auth/AuthContext";
import Form, { formErrorType } from "../Common/Form";
import { ErrorMessage } from "../Common/ErrorMessage";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [error, setError] = useState<formErrorType>({ detail: null });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!username || !password) {
      setError({
        detail: "Please provide username and password",
      });
      return;
    }
    setLoading(true);

    const handleData = () => {
      const from = location.state?.from?.pathname || "/home";
      setTimeout(() => {
        setLoading(false);
        navigate(from, { replace: true });
      }, 1000);
    };
    const handleError = (error: formErrorType) => {
      if (error.detail) {
        setError({
          detail: error.detail,
        });
      }
      setLoading(false);
    };
    auth.signin({ username, password }, handleData, handleError);
  };

  const inputs: InputProps[] = [
    {
      title: "username",
      inputState: username,
      onChange: (e) => setUsername(e.target.value),
    },
    {
      title: "password",
      inputState: password,
      onChange: (e) => setPassword(e.target.value),
      type: "password",
    },
  ];

  const header = (
    <>
      <h4 className="absolute top-0 left-0 px-4 pt-4 pb-2 text-green-700 border-b ml-2 text-lg">
        Login
      </h4>
      {auth.unAuthAttempt && (
        <ErrorMessage
          display={auth.unAuthAttempt}
          setDisplay={auth.setUnAuthAttempt}
          error={{ detail: "Must be logged in" }}
          overrideClasses
          className={
            "top-6 absolute text-red-500 bg-gray-50 shadow-sm cursor-pointer rounded py-1 px-4"
          }
        />
      )}
    </>
  );

  const footer = (
    <>
      <p
        onClick={() => navigate("/signup")}
        className="absolute bottom-0 mr-4 text-green-600 hover:text-green-700 p-2 mb-4 text-xs cursor-pointer"
      >
        Dont have an account? Sign up here!
      </p>
      <span
        className="absolute -bottom-10 text-green-500 hover:text-green-800 cursor-pointer"
        onClick={() => setModalVisible(true)}
      >
        Need help?
      </span>
    </>
  );

  return (
    <div className="flex items-center flex-col p-6 justify-center">
      <Form
        onSubmit={onSubmit}
        inputs={inputs}
        loading={loading}
        button={{ value: "enter" }}
        error={error}
        header={header}
        footer={footer}
      />
      <HelpModal
        modalVisible={modalVisible}
        closeModal={() => setModalVisible(false)}
      />
    </div>
  );
};

export default Login;
