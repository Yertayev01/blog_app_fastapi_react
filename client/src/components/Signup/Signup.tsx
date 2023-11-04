import React, { FormEvent, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../Auth/AuthContext";
import Form, { formErrorType } from "../Common/Form";
import { InputProps } from "../Common/Input";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<formErrorType>({ detail: null });
  const [loading, setLoading] = useState(false);
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

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
      const from = location.state?.from?.pathname || "/feed";
      setLoading(false);
      navigate(from, { replace: true });
    };
    const handleError = (error: formErrorType) => {
      if (error.detail) setError({ detail: error.detail });
      setLoading(false);
    };
    auth.signup({ username, password }, handleData, handleError);
  };

  const inputs: InputProps[] = [
    {
      title: "username *",
      inputState: username,
      onChange: (e) => setUsername(e.target.value),
    },
    {
      title: "password *",
      inputState: password,
      onChange: (e) => setPassword(e.target.value),
      type: "password",
    },
  ];

  const header = (
    <h4 className="absolute top-0 left-0 px-4 pt-4 pb-2 text-green-700 border-b ml-2 text-lg">
      Signup
    </h4>
  );

  const footer = (
    <>
      <p
        onClick={() => navigate("/login")}
        className="absolute bottom-0 mr-4 text-green-600 hover:text-green-700 p-2 mb-4 text-xs cursor-pointer"
      >
        Already have account? Login here!
      </p>
      <p className="absolute bottom-0 right-0 mr-4 text-green-600 p-5 pb-8 text-sm">
        * required
      </p>
    </>
  );

  return (
    <div className="flex items-center flex-col p-6 justify-center">
      <Form
        onSubmit={onSubmit}
        inputs={inputs}
        loading={loading}
        button={{ value: "create" }}
        error={error}
        header={header}
        footer={footer}
      />
    </div>
  );
};

export default Signup;
