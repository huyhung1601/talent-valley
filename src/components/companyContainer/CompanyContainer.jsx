import React, { useState } from "react";
import { CompanySlideBar } from "./companySlideBar/CompanySlideBar";
import { Route, Routes, useNavigate } from "react-router-dom";
import { CompanyReview } from "./companyReview/CompanyReview";
import { CompanyCulture } from "./companyCulture/CompanyCulture";
import { CompanyJobs } from "./companyJobs/CompanyJobs";
import { useSelector } from "react-redux";
import { CompanyImage } from "./companyImage/CompanyImage";

export const CompanyContainer = ({ company, items }) => {
  const [activeItem, setActiveItem] = useState("about");
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const handleSlideTo = (item) => {
    setActiveItem(item);
    navigate(item);
  };

  return (
    <div className="d-flex flex-column gap-3 minW-75 w-md-100 ">
      {/* <CompanySearchBar /> */}
      <CompanyImage company={company} />
      <CompanySlideBar
        items={items}
        activeItem={activeItem}
        handleSlideTo={handleSlideTo}
      />
      <div className="bg-light p-3 ">
        <Routes>
          <Route
            path="about"
            element={<CompanyReview role={user?.role} company={company} />}
          />
          <Route
            path="culture"
            element={<CompanyCulture role={user?.role} />}
          />
          <Route path="jobs" element={<CompanyJobs companyId={company.id} />} />
        </Routes>
      </div>
    </div>
  );
};
