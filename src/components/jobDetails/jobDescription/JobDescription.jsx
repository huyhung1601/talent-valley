import React from "react";

export const JobDescription = ({ job }) => {
  return (
    <div className="card-body">
      <div>
        <h6 className="fw-bold">Full Job Description</h6>
        <p
          className=" text-sm"
          dangerouslySetInnerHTML={{ __html: job.description }}
        ></p>
      </div>

      <p className="card-text"></p>
    </div>
  );
};
