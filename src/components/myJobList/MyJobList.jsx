import React from "react";
import { EmptyJobList } from "./emptyJobList/EmptyJobList";
import { MyJobItem } from "./myJobItem/MyJobItem";

export const MyJobList = ({ activeItem, savedJobs, applications }) => {
  // const filteredJobs = myJobs?.filter((myJob) => myJob.status === activeItem);
  const appliedJobs = applications.filter((x) => x.status !== "interview");
  const interviews = applications.filter((x) => x.status === "interview");

  return (
    <div>
      {activeItem === "saved" && (
        <>
          {savedJobs?.length === 0 ? (
            <EmptyJobList activeItem={activeItem} />
          ) : (
            <>
              {savedJobs?.map((job) => (
                <MyJobItem key={job.id} job={job} appliedBtn />
              ))}
            </>
          )}
        </>
      )}
      {activeItem === "applied" && (
        <>
          {appliedJobs?.length === 0 ? (
            <EmptyJobList activeItem={activeItem} />
          ) : (
            <>
              {appliedJobs?.map((application) => (
                <MyJobItem key={application.id} job={application.job} />
              ))}
            </>
          )}
        </>
      )}
      {activeItem === "interview" && (
        <>
          {interviews?.length === 0 ? (
            <EmptyJobList activeItem={activeItem} />
          ) : (
            <>
              {interviews?.map((application) => (
                <MyJobItem
                  interviewId={application.interview.id}
                  interviewBtn
                  key={application.id}
                  job={application.job}
                />
              ))}
            </>
          )}
        </>
      )}
    </div>
  );
};
