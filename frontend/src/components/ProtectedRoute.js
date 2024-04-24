import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("User");
  if (!user) return <Navigate to={"/sign-in"} />;

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
