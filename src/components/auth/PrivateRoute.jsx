import { useAuth } from "contexts";
import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  const { authToken } = useAuth();
  const location = useLocation();

  return authToken ? (
    children
  ) : (
    <Navigate to="/login" state={{ path: location.pathname }} replace />
  );
};
