import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import emptyFolder from "../../../assets/empty-folder.svg";

export const EmptyJobList = ({ activeItem }) => {
  return (
    <div className="d-flex align-items-center flex-column mt-5 gap-2">
      <div className="w-25">
        <img src={emptyFolder} className="img-fluid " alt="emptyFolder" />
      </div>
      <p className="fw-bold">{`No jobs ${activeItem} yet`}</p>
      <Link to="/" className="btn btn-primary">
        Find jobs <AiOutlineArrowRight />
      </Link>
    </div>
  );
};
