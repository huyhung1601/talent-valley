import React from "react";
import { ApplicationCard } from "./ApplicationCard";

export const ApplicationCardList = ({ applications }) => {
  return (
    <div className="d-flex flex-column gap-1">
      {applications?.map((application) => (
        <ApplicationCard application={application} key={application.id} />
      ))}
    </div>
  );
};
