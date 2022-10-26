import React from "react";
import { MdOutlineOpenInNew } from "react-icons/md";
import { format } from "timeago.js";

export const ApplicationCard = ({ application }) => {
  return (
    <div className="d-flex flex-column p-2 gap-2 bg-light " type="button">
      <div className="d-flex justify-content-between ">
        <p className="fw-bold">{application.job.title}</p>
        <MdOutlineOpenInNew />
      </div>
      <div className="d-flex align-items-center gap-3 text-sm">
        <p>{application.user.username}</p>
        <p className=" text-primary">{format(application.createdAt)}</p>
        <p
          className={`py-1 px-2 rounded ${
            application.status === "new" && "bg-info bg-opacity-25 "
          } ${application.status === "review" && "bg-info"} ${
            application.status === "interview" && "bg-success bg-opacity-25"
          } ${application.status === "final" && "bg-success "} `}
        >
          {application.status}
        </p>
      </div>
    </div>
  );
};
