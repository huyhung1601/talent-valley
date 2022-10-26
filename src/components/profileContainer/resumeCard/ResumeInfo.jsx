import React from "react";
import resumeLogo from "../../../assets/resume.png";

export const ResumeInfo = ({ resume }) => {
  return (
    <div>
      <img src={resumeLogo} style={{ height: "50px" }} alt="resume" />
      {resume && (
        <a className="text-primary fw-bold" href={resume} target="_black">
          {resume?.split("resume/")[1].split("/")[1]}
        </a>
      )}
    </div>
  );
};
