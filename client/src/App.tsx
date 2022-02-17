import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Login from './components/Login/Login';
import { RequireAuth } from './components/Auth/RequireAuth';
import { AuthProvider } from './components/Auth/AuthContext';
import Signup from './components/Signup/Signup';
import Feed from './components/Feed/Feed';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  useEffect(() => {}, []);

  return (
    <AuthProvider>
      <div className="font-sans	min-h-screen flex flex-col justify-center">
        <Nav />

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<RequireAuth children={<Feed />} />} />
          <Route path="/about" element={<div>about</div>} />
          <Route
            path="/profile"
            element={<RequireAuth children={<Dashboard />} />}
          />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
