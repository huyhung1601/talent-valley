import { useMutation } from "@apollo/client";
import React from "react";
import companyLogo from "../../../assets/company-logo.png";
import {
  APPLY_JOB,
  REMOVE_FROM_MY_JOBS,
} from "../../../graphql/mutations/userMutations";
import { MY_JOBS } from "../../../graphql/queries/userQueries";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import {
  applyJobSuccess,
  removeFromMyJobsSuccess,
} from "../../../features/auth/authSlice";

export const MyJobItem = ({ myJob, appliedBtn }) => {
  const dispatch = useDispatch();
  const [removeFromMyJobs] = useMutation(REMOVE_FROM_MY_JOBS, {
    variables: { jobId: myJob.job.id },
    update: (cache, { data: { removeFromMyJobs } }) => {
      const { myJobs } = cache.readQuery({ query: MY_JOBS });
      cache.writeQuery({
        query: MY_JOBS,
        data: { myJobs: myJobs.filter((x) => x.job.id !== myJob.job.id) },
      });
      dispatch(removeFromMyJobsSuccess(myJob.job.id));
      toast(removeFromMyJobs.message);
    },
  });

  const [applyJob] = useMutation(APPLY_JOB, {
    variables: { jobId: myJob.job.id },
    update: (cache, { data: { applyJob } }) => {
      const { myJobs } = cache.readQuery({ query: MY_JOBS });
      cache.writeQuery({
        query: MY_JOBS,
        data: {
          myJobs: myJobs.map((x) =>
            x.job.id !== myJob.job.id ? x : { ...x, status: "applied" }
          ),
        },
      });
      dispatch(applyJobSuccess(myJob.job.id));
      toast(applyJob.message);
    },
  });

  const handleRemoveFromMyJobs = () => {
    removeFromMyJobs();
  };

  const handleApplyJob = () => {
    applyJob();
  };

  return (
    <div>
      <div className="row mb-3">
        <div className="col-1 d-none d-md-block">
          <img src={companyLogo} style={{ width: "68px" }} alt="companyLogo" />
        </div>
        <div className="col-12 col-md-11 position-relative ">
          <div className="d-flex flex-md-row flex-column justify-content-between">
            <div className="d-flex flex-column">
              <h5>{myJob.job.title}</h5>
              <p>{myJob.job.company.name}</p>
              <p>{myJob.job.company.location}</p>
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
            </div>
          </div>
          <button
            onClick={handleRemoveFromMyJobs}
            className="btn btn-light btn-sm fw-bold position-absolute top-0 end-0 me-2 "
          >
            X
          </button>
        </div>
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
