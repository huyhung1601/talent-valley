import React from "react";
import logo from "../../assets/app-logo.png";
export const Header = () => {
  return (
    <nav className="navbar bg-dark mb-4 p-0">
      <div className="container-fluid">
        <a href="/" className="navbar-brand">
          <div className="d-flex align-items-center justify-content-center gap-2 ">
            <img src={logo} style={{ height: "40px" }} alt="logo" />
            <p className="m-0 text-white">Talent Hunting</p>
          </div>
        </a>
      </div>
    </nav>
  );
};
