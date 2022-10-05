import React from "react";
import { EmptyJobList } from "./emptyJobList/EmptyJobList";
import { MyJobItem } from "./myJobItem/MyJobItem";

export const MyJobList = ({ activeItem, myJobs }) => {
  const filteredJobs = myJobs?.filter((myJob) => myJob.status === activeItem);

  return (
    <>
      {filteredJobs?.length === 0 ? (
        <EmptyJobList activeItem={activeItem} />
      ) : (
        filteredJobs?.map((myJob) => (
          <MyJobItem
            key={myJob.job.id}
            myJob={myJob}
            appliedBtn={activeItem === "saved"}
          />
        ))
      )}
    </>
  );
};
