import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { JobList, Spinner, JobSearch, JobDetails } from "../../components";
import { PagesContainer } from "../../components/UIs/pagesContainer/PagesContainer";
import { GET_JOBS } from "../../graphql/queries/jobQueries";

export const Home = () => {
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
    <div className="container pt-4 ">
      <div className="row mb-2 mx-5 ">
        <JobSearch />
      </div>
      <div className="row">
        {loading && <Spinner />}
        {error && <h6>Something went wrong!</h6>}
        {!loading && !error && (
          <>
            <div className="col py-2">
              <PagesContainer items={jobs}>
                <JobList />
              </PagesContainer>
            </div>
            <div className="col py-2">
              <Routes>
                <Route path=":jobId" element={<JobDetails />} />
              </Routes>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
