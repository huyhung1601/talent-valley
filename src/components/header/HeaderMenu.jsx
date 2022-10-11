import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { AiFillHeart } from "react-icons/ai";
import { HiDocumentText } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMyJobsSuccess, logoutSuccess } from "../../features/auth/authSlice";
import { MY_JOBS } from "../../graphql/queries/userQueries";

export const HeaderMenu = () => {
  const { data } = useQuery(MY_JOBS);
  const myJobs = data?.myJobs;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutSuccess());
  };

  const handleNavigate = (to) => {
    navigate(to);
  };

  useEffect(() => {
    if (myJobs) {
      dispatch(getMyJobsSuccess(myJobs));
    }
  }, [myJobs, dispatch]);

  return (
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
  );
};
