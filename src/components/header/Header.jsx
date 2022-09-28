import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/app-logo.png";
import { logoutSuccess } from "../../features/auth/authSlice";
import { useStorage } from "../../hooks/useStorage";
import { HiDocumentText } from "react-icons/hi";
import { AiFillHeart } from "react-icons/ai";

export const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const { removeStorageData } = useStorage();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutSuccess());
    removeStorageData("user");
  };

  const handleNavigate = (to) => {
    navigate(to);
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
            <div className="dropdown ">
              <button
                className="btn btn-light dropdown-toggle fw-bold"
                type="button"
                id="dropdownNav"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Menu
              </button>
              <ul className="dropdown-menu dropdown-menu-lg-end ">
                <li
                  className="dropdown-item fw-bold d-flex align-items-center gap-2 py-2 "
                  onClick={() => handleNavigate("/profile")}
                >
                  <HiDocumentText />
                  <p>Profile</p>
                </li>
                <li
                  className="dropdown-item fw-bold d-flex align-items-center gap-2  py-2"
                  onClick={() => handleNavigate("/myjobs/saved")}
                >
                  <AiFillHeart />
                  <p>My Jobs</p>
                </li>
                <li className="dropdown-item border-top fw-bold text-center">
                  <div onClick={handleLogout}>Log out</div>
                </li>
              </ul>
            </div>
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
