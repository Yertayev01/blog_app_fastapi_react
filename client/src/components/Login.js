import React, { useState } from "react";
import Input from "./Input";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
  };

  return (
    <div className="py-20 h-full flex justify-center">
      <form
        className="border rounded-lg px-20 py-12 h-72 flex flex-col items-center justify-center filter drop-shadow-sm"
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
        <button className="border p-1 w-24 rounded-md mt-2 bg-green-500 text-white">
          enter
        </button>
      </form>
    </div>
  );
};

export default Login;
