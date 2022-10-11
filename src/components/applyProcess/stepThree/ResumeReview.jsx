import React from "react";
import { ResumeInfo } from "../../profileContainer/resumeCard/ResumeInfo";

export const ResumeReview = ({ resume, handleToStep }) => {
  return (
    <div className="my-3">
      <div className="d-flex justify-content-between fw-bold">
        <p className="text-secondary ">Resume</p>
        <p
          onClick={handleToStep}
          role="button"
          className="text-primary"
          to="contact"
        >
          Edit
        </p>
      </div>
      <div className="card">
        <div className="card-body">
          <ResumeInfo resume={resume} />
        </div>
      </div>
    </div>
  );
};
