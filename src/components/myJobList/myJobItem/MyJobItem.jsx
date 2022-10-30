import React from "react";
import companyLogo from "../../../assets/company-logo.png";
import { useDispatch } from "react-redux";
import { selectJob } from "../../../features/job/jobSlice";
import { useNavigate } from "react-router-dom";

export const MyJobItem = ({ job, appliedBtn, interviewBtn, interviewId }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const [removeFromMyJobs] = useMutation(REMOVE_FROM_MY_JOBS, {
  //   variables: { jobId: job.id },
  //   // update: (cache, { data: { removeFromMyJobs } }) => {
  //   //   const { myJobs } = cache.readQuery({ query: MY_JOBS });
  //   //   cache.writeQuery({
  //   //     query: MY_JOBS,
  //   //     data: { myJobs: myJobs.filter((x) => x.job.id !== job.id) },
  //   //   });
  //   //   dispatch(removeFromMyJobsSuccess(job.id));
  //   //   toast(removeFromMyJobs.message);
  //   // },
  // });

  // const handleRemoveFromMyJobs = () => {
  //   removeFromMyJobs();
  // };

  const handleApplyJob = () => {
    dispatch(selectJob(job));
    navigate(`/apply/${job.id}/form/resume`);
  };

  const handleConductInterview = () => {
    navigate(`/interview/${interviewId}/introduction`);
  };

  const handleViewJob = () => {
    navigate(`/jobs/${job.id}`);
  };

  return (
    <div className="row mb-3 bg-light p-2 ">
      <div className="col-1 d-none d-md-block ">
        <div className="d-flex align-items-center justify-content-center ">
          <img
            src={job.company.logo || companyLogo}
            style={{ width: "80px" }}
            className="image-fluid mt-1  "
            alt="companyLogo"
          />
        </div>
      </div>
      <div className="col-12 col-md-11 position-relative ">
        <div className="d-flex flex-md-row flex-column justify-content-between">
          <div
            className="d-flex flex-column"
            type="button"
            onClick={handleViewJob}
          >
            <h5>{job.title}</h5>
            <p>{job.company.name}</p>
            <p>{job.location}</p>
          </div>
          <div className="d-flex h-25 me-md-5">
            {appliedBtn && (
              <button
                className="btn btn-primary btn-sm w-100"
                onClick={handleApplyJob}
              >
                Apply now
              </button>
            )}
            {interviewBtn && (
              <button
                className="btn btn-primary btn-sm w-100"
                onClick={handleConductInterview}
              >
                Interview
              </button>
            )}
          </div>
        </div>
        <button
          // onClick={handleRemoveFromMyJobs}
          className="btn btn-danger btn-sm position-absolute top-0 end-0 me-2 "
        >
          X
        </button>
      </div>
    </div>
    // <div className="d-flex  justify-content-between border-bottom py-2">
    //   <div className="d-flex gap-3">
    //     <img src={companyLogo} style={{ width: "10%" }} alt="companyLogo" />{" "}
    //     <div className="d-flex flex-column">
    //       <h5>{job.title}</h5>
    //       <p>{job.company.name}</p>
    //       <p>{job.company.location}</p>
    //     </div>
    //   </div>
    //   <div className="d-flex h-25 justify-content-end w-50 gap-1 ">
    //     {appliedBtn && <button className="btn btn-primary ">Apply now</button>}
    //     <button className="btn btn-light ">X</button>
    //   </div>
    // </div>
  );
};
