import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Spinner } from "../UIs/spinner/Spinner";
import { CompanyTab } from "./companyTab/CompanyTab";
import { Sidebar } from "./sidebar/Sidebar";
import { MY_COMPANY } from "../../graphql/queries/userQueries";
import { JobsTab } from "./jobsTab/JobsTab";
import { useLocation } from "react-router-dom";
import { CompanyJobReview } from "./companyJobReview/CompanyJobReview";
import { ApplicationsTab } from "./applicationsTab/ApplicationsTab";

export const RecruiterDashboard = () => {
  const location = useLocation();
  const [openSidebar, setOpenSidebar] = useState(false);
  const [activeItem, setActiveItem] = useState(location.pathname.split("/")[2]);
  const items = ["home", "jobs", "applications"];
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(MY_COMPANY);

  const handleCloseSidebar = () => setOpenSidebar(false);
  const handleOpenSidebar = () => setOpenSidebar(true);
  const handleSlideTo = ({ item }) => {
    setActiveItem(item);
    navigate(item === "home" ? "home/about" : item);
  };

  if (error) return <h6>Something went wrong!</h6>;

  return (
    <div className="d-flex h-100 w-100  ">
      <Sidebar
        items={items}
        openSidebar={openSidebar}
        activeItem={activeItem}
        handleCloseSidebar={handleCloseSidebar}
        handleOpenSidebar={handleOpenSidebar}
        handleSlideTo={handleSlideTo}
        companyName={data?.myCompany.name}
      />
      {loading ? (
        <div className="d-flex justify-content-center w-100">
          <Spinner />
        </div>
      ) : (
        <div className="p-2 w-100 h-100 overflow-auto">
          <Routes>
            <Route
              path="home/*"
              element={<CompanyTab company={data?.myCompany} />}
            />
            <Route
              path="jobs"
              element={<JobsTab company={data?.myCompany} />}
            />
            <Route
              path="jobs/:jobId"
              element={<CompanyJobReview companyId={data?.myCompany.id} />}
            />
            <Route path="applications" element={<ApplicationsTab />} />
          </Routes>
        </div>
      )}
    </div>
  );
};
