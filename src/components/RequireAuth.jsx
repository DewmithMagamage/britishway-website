import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const isAuthed = typeof window !== 'undefined' && localStorage.getItem("admin_authed") === "true";
  if (!isAuthed) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;



