import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { MyJobList, SlideBar, Spinner } from "../components";
import { getMyJobsSuccess } from "../features/auth/authSlice";
import { MY_JOBS } from "../graphql/queries/userQueries";

const MyJobs = () => {
  const items = ["saved", "applied"];
  const [activeItem, setActiveItem] = useState("saved");
  const handleActiveSlide = (activeItem) => setActiveItem(activeItem);
  const { loading, data } = useQuery(MY_JOBS);
  const dispatch = useDispatch();

  const myJobs = data?.myJobs;

  const totalSavedJobs = myJobs?.filter((x) => x.status === "saved");
  const totalAppliedJobs = myJobs?.filter((x) => x.status === "applied");

  useEffect(() => {
    dispatch(getMyJobsSuccess(myJobs));
  }, [myJobs, dispatch]);

  return (
    <div className="px-1 px-md-5">
      <h2 className="fw-bold">My Jobs</h2>
      <SlideBar
        totalSavedJobs={totalSavedJobs?.length || 0}
        totalAppliedJobs={totalAppliedJobs?.length || 0}
        items={items}
        activeItem={activeItem}
        handleActiveSlide={handleActiveSlide}
      />
      {loading ? (
        <Spinner />
      ) : (
        <Routes>
          <Route
            path={`/${activeItem}`}
            element={<MyJobList myJobs={myJobs} activeItem={activeItem} />}
          />
        </Routes>
      )}
    </div>
  );
};

export default MyJobs;
