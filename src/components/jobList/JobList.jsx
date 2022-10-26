import React from "react";
import { JobCard } from "./JobCard";

export const JobList = ({ data }) => {
  return (
    <div className="d-flex flex-column gap-2 overflow-auto">
      {data?.length > 0 ? (
        data?.map((job) => <JobCard key={job.id} job={job} />)
      ) : (
        <p>There is no job!</p>
      )}
    </div>
  );
};
