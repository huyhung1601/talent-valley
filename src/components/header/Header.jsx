import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/app-logo.png";
import { HeaderMenu } from "./headerMenu/HeaderMenu";

export const Header = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <nav className="navbar bg-dark p-0">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <a href="/" className="navbar-brand">
          <div className="d-flex align-items-center justify-content-center gap-2 ">
            <img src={logo} style={{ height: "50px" }} alt="logo" />
            <p className="m-0 text-white">Talent Valley</p>
          </div>
        </a>
        <div className="d-flex gap-4 align-items-center me-3 text-white">
          {user ? (
            <HeaderMenu user={user} />
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
