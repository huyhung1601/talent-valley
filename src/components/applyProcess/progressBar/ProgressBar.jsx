import React from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";

export const ProgressBar = ({ step, steps, lastStep }) => {
  return (
    <div className="mb-2 ">
      <div className="d-flex align-items-center justify-content-between fw-bold mb-2 ">
        <div>
          {step > 0 && <IoArrowBack role="button" onClick={lastStep} />}
        </div>
        <Link to="/" className="text-primary">
          Exit
        </Link>
      </div>
      <div className="progress" style={{ height: 6 }}>
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${Math.floor(((step + 1) * 100) / 3)}%` }}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <p className="fw-bold mt-3">{`Application step ${step + 1} of ${
        steps.length
      }`}</p>
    </div>
  );
};
