import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Login from "./components/Login/Login";
import UserList from "./components/Dashboard/UserList";
import { getToken } from "./utils/auth";
import { easyFetch } from "./utils/easyFetch";

function App() {
  useEffect(() => {
    const token = getToken();

    if (token) {
      easyFetch
        .get("http://127.0.0.1:8000/token/user", {
          headers: {
            Authorization: `Bearer ${token.access_token}`,
          },
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, []);

  return (
    <div className="font-sans	min-h-screen flex flex-col justify-center">
      <Nav />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<UserList />} />
        <Route path="/about" element={<div>about</div>} />
        <Route path="/profile" element={<div>profile</div>} />
      </Routes>
    </div>
  );
}

export default App;
