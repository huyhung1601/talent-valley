import React from "react";
import { useSelector } from "react-redux";
import { Route, Navigate } from "react-router-dom";

export const AuthRoute = ({ check, children }) => {
  if (!check) {
    return <Navigate to="/" replace />;
  }
  return children;
};
