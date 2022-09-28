import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { MyJobList, SlideBar } from "../components";

const MyJobs = () => {
  const items = ["saved", "applied"];
  const [activeItem, setActiveItem] = useState("saved");
  const handleActiveSlide = (activeItem) => setActiveItem(activeItem);
  return (
    <div className="px-5">
      <h2 className="fw-bold">My Jobs</h2>
      <SlideBar
        items={items}
        activeItem={activeItem}
        handleActiveSlide={handleActiveSlide}
      />
      <Routes>
        <Route
          path={`/${activeItem}`}
          element={<MyJobList activeItem={activeItem} />}
        />
      </Routes>
    </div>
  );
};

export default MyJobs;
