import React from "react";
import { JobCard } from "./JobCard";

export const JobList = ({ jobs }) => {
  return (
    <div className="d-flex flex-column gap-2 overflow-auto">
      {jobs.length > 0 ? (
        jobs.map((job) => <JobCard key={job.id} job={job} />)
      ) : (
        <p>There is no job!</p>
      )}
    </div>
  );
};
