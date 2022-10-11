import React from "react";
import { useSelector } from "react-redux";
import { ApplyProcess, JobModal } from "../components";

const Apply = () => {
  const { selectedJob } = useSelector((state) => state.job);
  return (
    <div className="container d-flex flex-column gap-2 mt-3 align-items-center">
      <JobModal job={selectedJob} />
      <ApplyProcess job={selectedJob} />
    </div>
  );
};

export default Apply;
