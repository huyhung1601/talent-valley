import React from "react";
import { AppliedJobs } from "./appliedJobs/AppliedJobs";
import { SavedJobs } from "./savedJobs/SavedJobs";

export const MyJobList = ({ activeItem }) => {
  return <>{activeItem === "saved" ? <SavedJobs /> : <AppliedJobs />}</>;
};
