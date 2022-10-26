import React from "react";

export const ApplicationUtils = ({
  selected,
  handleReject,
  handleSelected,
  application,
  handlePutOnReview,
  handleCreateVideoInterview,
}) => {
  return (
    <div className="d-flex gap-3 align-items-center justify-content-center  p-1">
      <button className="btn btn-danger btn-sm" onClick={handleReject}>
        Reject
      </button>
      <select
        onChange={handleSelected}
        value={selected}
        className="btn btn-light btn-sm "
      >
        <option className="py-2" value="resume">
          Resume
        </option>
        <option className="py-1" value="interview">
          Interview
        </option>
      </select>
      {application.status === "new" && (
        <button className="btn btn-primary btn-sm" onClick={handlePutOnReview}>
          Put On Review
        </button>
      )}
      {application.status === "review" && (
        <button
          className="btn btn-primary btn-sm"
          onClick={handleCreateVideoInterview}
        >
          Put On Interview
        </button>
      )}
      {application.status === "interview" && (
        <button className="btn btn-primary btn-sm" onClick={handlePutOnReview}>
          Put On Final
        </button>
      )}
    </div>
  );
};
