import React from "react";
import companyImage from "../../../assets/company-image.jpg";
import companyLogo from "../../../assets/company-logo.png";

export const CompanyImage = ({ company }) => {
  return (
    <div className="w-100">
      <img
        className="img-fluid w-100 d-md-block d-none"
        style={{ height: 140 }}
        src={company.image || companyImage}
        alt="companyImage"
      />
      <div className="d-flex gap-3 p-1 bg-light">
        <img
          style={{ width: 80, height: 80 }}
          src={company.logo || companyLogo}
          alt="companyLogo"
        />
        <div className="d-flex flex-column gap-2 justify-content-center ">
          <h3>{company.name}</h3>
          <h6>{company.location}</h6>
        </div>
      </div>
    </div>
  );
};
