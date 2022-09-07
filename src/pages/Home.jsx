import { useQuery } from "@apollo/client";
import React from "react";
import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { JobList, Spinner, JobSearch, JobDetails } from "../components";
import { GET_JOBS } from "../graphql/queries/jobQueries";

const Home = () => {
  const navigate = useNavigate();
  const { loading, error, data } = useQuery(GET_JOBS);

  const jobs = data?.jobs;

  useEffect(() => {
    if (jobs?.length > 0) {
      navigate(`/${jobs[0].id}`);
    } else {
      navigate("/");
    }
  }, [jobs]);

  return (
    <div className="container-fluid ">
      <div className="row mb-4 mx-5 ">
        <JobSearch />
      </div>
      <div className="row">
        {loading && <Spinner />}
        {error && <p>Something went wrong!</p>}
        {!loading && !error && (
          <>
            <div className="col">
              <JobList jobs={data.jobs} />
            </div>
            <div className="col">
              <Routes>
                <Route path=":id" element={<JobDetails />} />
              </Routes>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
