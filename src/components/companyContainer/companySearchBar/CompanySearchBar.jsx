import React from "react";
import { BiSearch } from "react-icons/bi";

export const CompanySearchBar = () => {
  return (
    <div className="input-group mb-3 ">
      <span className="input-group-text">
        <BiSearch />
      </span>
      <input type="text" className="form-control" placeholder="Company" />
    </div>
  );
};
