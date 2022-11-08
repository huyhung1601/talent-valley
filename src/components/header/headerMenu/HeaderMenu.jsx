import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getProfileSuccess,
  logoutSuccess,
} from "../../../features/auth/authSlice";
import { MY_PROFILE } from "../../../graphql/queries/userQueries";
import { UserMenu } from "./UserMenu";
import { CompanyMenu } from "./CompanyMenu";

export const HeaderMenu = ({ user }) => {
  const { data } = useQuery(MY_PROFILE);

  // const { data } = useQuery(MY_JOBS);
  // const myJobs = data?.myJobs;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutSuccess());
    navigate("/")
  };

  const handleNavigate = (route) => {
    navigate(`${route}`);
  };

  useEffect(() => {
    if (data) {
      // dispatch(getMyJobsSuccess(myJobs));
      dispatch(getProfileSuccess(data.myProfile));
    }
  }, [data, dispatch]);

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
        {user.role === "recruiter" ? (
          <CompanyMenu handleNavigate={handleNavigate} />
        ) : (
          <UserMenu handleNavigate={handleNavigate} />
        )}
        <li
          className="dropdown-item border-top fw-bold text-center"
          role="button"
        >
          <div onClick={handleLogout}>Log out</div>
        </li>
      </ul>
    </div>
  );
};
