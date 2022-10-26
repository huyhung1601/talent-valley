import React from "react";
import { ApplicationItem } from "./applicationItem/ApplicationItem";
import emptyFolder from "../../../../assets/empty-folder.svg";

export const ApplicationList = ({ data }) => {
  return (
    <div className=" d-flex flex-column gap-3 align-items-center h-100 overflow-auto ">
      {data?.length === 0 && (
        <div className="d-flex justify-content-center align-items-center h-100">
          <img src={emptyFolder} className="img-fluid w-50" alt="emptyFolder" />
        </div>
      )}
      <div
        className="accordion w-100 accordion-flush "
        id="accordionFlushExample"
      >
        {data?.map((application) => (
          <ApplicationItem key={application.id} application={application} />
        ))}
      </div>
    </div>
  );
};
