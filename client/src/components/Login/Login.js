import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Input from "../Common/Input";
import { setToken } from "../../utils/auth";
import LoginModal from "./LoginModal";
import { useAuth } from "../Auth/AuthContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError({
        detail: "Please provide username and password",
      });
      return;
    }
    setLoading(true);

    console.log("Anything");

    const handleData = (data) => {
      console.log(data);
      setToken(data);
      const from = location.state?.from?.pathname || "/home";
      navigate(from, { replace: true });
      setLoading(false);
    };
    const handleError = (error) => {
      console.log(error);
      if (error.detail) {
        setError({
          detail: error.detail,
        });
      }
      setLoading(false);
    };
    auth.signin({ username, password }, handleData, handleError);
  };

  return (
    <div className="flex items-center flex-col p-6 justify-center">
      <form
        className="relative border-l border-t border-green-400 border-opacity-40 rounded-lg px-16 py-12 lg:px-32 lg:py-24 flex flex-col items-center justify-center shadow-md"
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
        {error.detail && (
          <span className="bottom-2 border-l border-t border-red-200 lg:bottom-10 bg-yellow-100 py-1 px-2 rounded text-red-700 m2-62 text-sm absolute shadow">
            {error.detail}
          </span>
        )}
        <button className="border p-1 w-24 rounded-md mt-2 bg-green-500 text-white shadow active:bg-green-700 active:shadow-none">
          {loading ? "..." : "enter"}
        </button>
      </form>
      <span
        className="mt-4 text-green-500 hover:text-green-800 cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        Need help?
      </span>
      <LoginModal
        showModal={showModal}
        closeModal={() => setShowModal(false)}
      />
    </div>
  );
};

export default Login;
