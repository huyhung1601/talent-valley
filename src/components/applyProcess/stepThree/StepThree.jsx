import React from "react";
import { ContactReview } from "./ContactReview";
import { ResumeReview } from "./ResumeReview";

export const StepThree = ({ handleToStep, myProfile }) => {
  return (
    <div>
      <h3 className="mb-3">Review application</h3>
      <div className="card ">
        <div className="card-body">
          <ContactReview
            handleToStep={() => handleToStep(1)}
            myProfile={myProfile}
          />
          <ResumeReview
            handleToStep={() => handleToStep(0)}
            resume={myProfile.resume}
          />
        </div>
      </div>
    </div>
  );
};
