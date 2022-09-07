import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/app-logo.png";
import { logoutSuccess } from "../../features/auth/authSlice";

export const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutSuccess());
  };

  return (
    <nav className="navbar bg-dark mb-4 p-0">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <a href="/" className="navbar-brand">
          <div className="d-flex align-items-center justify-content-center gap-2 ">
            <img src={logo} style={{ height: "40px" }} alt="logo" />
            <p className="m-0 text-white">Talent Hunting</p>
          </div>
        </a>
        <div className="d-flex gap-4 align-items-center me-3 text-white">
          {user ? (
            <button
              className="btn bg-transparent text-white"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <>
              <Link className="text-white text-decoration-none btn" to="/login">
                Login
              </Link>
              <Link
                className="text-white text-decoration-none btn"
                to="/register"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
