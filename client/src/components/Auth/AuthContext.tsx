import React, { useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { handleData, handleError, user } from "../../types";
import { fetchCurrentUser, loginUser } from "../../utils/api/requests";
import { removeToken } from "../../utils/auth";

type AuthContextType = {
  user: any;
  signin: (
    newUser: user,
    handleData: handleData,
    handleError: handleError
  ) => void;
  signout: () => void;
};

const AuthContext = createContext<AuthContextType>(null!);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const signin = async (
    newUser: user,
    handleData: handleData,
    handleError: handleError
  ) => {
    await loginUser(newUser, handleData, handleError);
    await fetchCurrentUser(
      (user) => setUser({ ...user }),
      (error) => {
        console.error(error);
      }
    );
  };

  const signout = () => {
    setUser(null);
    removeToken();
    navigate("/");
  };

  const value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
