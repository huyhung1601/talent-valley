import React from "react";
import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="container mt-4 d-flex flex-column justify-content-center align-items-center">
      <FaExclamationTriangle size="5em" />
      <h1>404</h1>
      <p className="lead">Sorry, this page does not exist</p>
      <Link to="/">Go Back</Link>
    </div>
  );
};
