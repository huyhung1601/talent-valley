import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { HiDocumentText } from "react-icons/hi";

export const UserMenu = ({ handleNavigate }) => {
  return (
    <>
      <li
        className="dropdown-item fw-bold d-flex align-items-center gap-2 py-2 "
        role="button"
        onClick={() => handleNavigate("/profile")}
      >
        <HiDocumentText />
        <p>Profile</p>
      </li>
      <li
        className="dropdown-item fw-bold d-flex align-items-center gap-2 py-2"
        role="button"
        onClick={() => handleNavigate("/myjobs/saved")}
      >
        <AiFillHeart />
        <p>My Jobs</p>
      </li>
    </>
  );
};
