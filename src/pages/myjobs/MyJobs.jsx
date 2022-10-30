import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { MyJobList, SlideBar, Spinner } from "../../components";
import { MY_PROFILE } from "../../graphql/queries/userQueries";

export const MyJobs = () => {
  const { loading, data } = useQuery(MY_PROFILE);
  const items = ["saved", "applied", "interview"];
  const [activeItem, setActiveItem] = useState("saved");
  // const { loading, data } = useQuery(MY_JOBS);
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  // const myJobs = data?.myJobs;

  // const totalSavedJobs = myJobs?.filter((x) => x.status === "saved");
  // const totalAppliedJobs = myJobs?.filter((x) => x.status === "applied");
  const handleSlideto = (item) => {
    setActiveItem(item);
    navigate(item);
  };

  // useEffect(() => {
  //   dispatch(getMyJobsSuccess(myJobs));
  // }, [myJobs, dispatch]);

  return (
    <div className="container pt-4 ">
      <h2 className="fw-bold">My Jobs</h2>
      <SlideBar
        totalSaved={data?.myProfile.savedJobs.length || 0}
        totalApplied={
          data?.myProfile.applications.filter((x) => x.status !== "interview")
            .length || 0
        }
        totalInterview={
          data?.myProfile.applications.filter((x) => x.status === "interview")
            .length || 0
        }
        items={items}
        activeItem={activeItem}
        handleSlideTo={handleSlideto}
      />
      {loading ? (
        <Spinner />
      ) : (
        <Routes>
          <Route
            path={`/${activeItem}`}
            element={
              <MyJobList
                savedJobs={data?.myProfile.savedJobs}
                applications={data?.myProfile.applications}
                activeItem={activeItem}
              />
            }
          />
        </Routes>
      )}
    </div>
  );
};
