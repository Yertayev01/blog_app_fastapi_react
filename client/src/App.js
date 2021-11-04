import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Login from "./components/Login";
import UserList from "./components/UserList";

function App() {
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
