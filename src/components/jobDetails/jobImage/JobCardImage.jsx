import React from "react";

export const JobCardImage = ({ image, logo }) => {
  return (
    <div className="position-relative mb-5 ">
      <img
        src={image}
        className="card-img-top"
        style={{ height: 120 }}
        alt="companyImage"
      />
      <img
        src={logo}
        className="position-absolute shadow-sm z-index-1 top-100 ms-3 start-0 translate-middle-y"
        style={{ height: 60 }}
        alt="companyImage"
      />
    </div>
  );
};
