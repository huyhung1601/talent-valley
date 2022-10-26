import React from "react";
import { JobDescription } from "../jobDetails/jobDescription/JobDescription";

export const JobModal = ({ job }) => {
  return (
    <>
      <div
        className="card minW-75 w-md-100 "
        data-bs-toggle="modal"
        data-bs-target="#jobDescriptionModal"
      >
        <div className="card-body" role="button">
          <h6>{job.title}</h6>
          <p className="text-sm">
            {`${job.company.name} - ${job.company.location}`}{" "}
          </p>
          <p className="text-primary text-sm ">See more details</p>
        </div>
      </div>
      <div
        className="modal fade"
        id="jobDescriptionModal"
        tabIndex="-1"
        aria-labelledby="jobDescriptionModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="jobDescriptionModalLabel">
                Full Job Description
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <JobDescription job={job} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
