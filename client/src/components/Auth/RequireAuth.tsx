import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { isAuthenticated } from "../../utils/auth";
import { useAuth } from "./AuthContext";

export const RequireAuth: React.FC = ({ children }) => {
  let location = useLocation();
  const auth = useAuth();

  if (!isAuthenticated()) {
    auth.setUnAuthAttempt(true);
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <>{children}</>;
};
