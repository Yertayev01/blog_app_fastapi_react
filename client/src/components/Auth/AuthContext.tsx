import React, { useState, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { onSuccess, onFailure, userType } from "../../types";
import {
  fetchCurrentUser,
  loginUser,
  signupUser,
} from "../../utils/api/requests";
import { removeToken } from "../../utils/auth";

type AuthContextType = {
  user: any;
  signup: (user: userType, onSuccess: onSuccess, onFailure: onFailure) => void;
  signin: (user: userType, onSuccess: onSuccess, onFailure: onFailure) => void;
  signout: () => void;
};

const AuthContext = createContext<AuthContextType>(null!);

export const AuthProvider: React.FC = ({ children }) => {
  const [savedUser, setSavedUser] = useState(null);
  const navigate = useNavigate();

  const signup = async (
    user: userType,
    onSuccess: onSuccess,
    onFailure: onFailure
  ) => {
    await signupUser(user, onSuccess, onFailure);
    await loginUser(user);
    await fetchCurrentUser(
      (userType) => setSavedUser({ ...userType }),
      (error) => {
        console.error(error);
      }
    );
  };

  const signin = async (
    user: userType,
    onSuccess: onSuccess,
    onFailure: onFailure
  ) => {
    await loginUser(user, onSuccess, onFailure);
    await fetchCurrentUser(
      (userType) => setSavedUser({ ...userType }),
      (error) => {
        console.error(error);
      }
    );
  };

  const signout = () => {
    setSavedUser(null);
    removeToken();
    navigate("/");
  };

  const value = { user: savedUser, signup, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
