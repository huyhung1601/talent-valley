import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";

export const JobInfo = ({
  job,
  role,
  isApplied,
  isLiked,
  editable,
  handleApplyJob,
  handleSaveJob,
  handleUnsaveJob,
  handleEditJob,
}) => {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between">
        <h5>{job.title}</h5>
        {role === "recruiter" && editable && (
          <button className="btn btn-light btn-sm" onClick={handleEditJob}>
            <MdEdit />
          </button>
        )}
      </div>
      {role === "user" ? (
        <Link className="text-primary" to={`/company/${job.company.id}/about`}>
          <h6>{job.company.name}</h6>
        </Link>
      ) : (
        <h6>{job.company.name}</h6>
      )}
      <div className=" text-sm">
        <p>{job.location}</p>
        <div className="d-flex flex-wrap gap-1">
          <p>{job.salary} -</p>
          <div className="d-flex flex-wrap">
            <span className="text-capitalize">{job.jobType}</span>
          </div>
        </div>
      </div>
      <div className="d-flex align-items-center gap-2 mt-1">
        <button
          className="btn btn-primary btn-sm fw-bold"
          onClick={handleApplyJob}
          disabled={isApplied || role === "recruiter"}
        >
          {isApplied ? "Applied" : "Apply Now"}
        </button>
        {!isApplied && (
          <>
            {isLiked ? (
              <button
                className="btn btn-secondary btn-sm btn-light "
                onClick={handleUnsaveJob}
                disabled={isApplied || role === "recruiter"}
              >
                <AiFillHeart className="text-primary" />
              </button>
            ) : (
              <button
                className="btn btn-secondary btn-sm btn-light "
                onClick={handleSaveJob}
                disabled={isApplied || role === "recruiter"}
              >
                <AiOutlineHeart />
              </button>
            )}
            {role === "recruiter" && (
              <p className="text-danger text-sm">
                Only user account can save and apply jobs!
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
};
