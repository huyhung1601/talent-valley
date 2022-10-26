import React from "react";
import { GrOrganization } from "react-icons/gr";

export const CompanyMenu = ({ handleNavigate }) => {
  return (
    <li
      className="dropdown-item fw-bold d-flex align-items-center gap-2 py-2"
      role="button"
      onClick={() => handleNavigate(`/recruiter/home/about`)}
    >
      <GrOrganization />
      <p>Company</p>
    </li>
  );
};
