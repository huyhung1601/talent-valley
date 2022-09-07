import { useQuery } from "@apollo/client";
import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { GET_JOB } from "../../graphql/queries/jobQueries";
import { Spinner } from "../spinner/Spinner";

export const JobDetails = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_JOB, {
    variables: { jobId: id },
  });
  const job = data?.job;

  if (loading) return <Spinner />;
  if (error) return <p>Something went wrong!</p>;
  return (
    <div className="card">
      <div className="card-hearder border-bottom shadow-sm p-3  ">
        <h5>{job.title}</h5>
        <Link
          className="text-decoration-none"
          to={`/company/${job.company.id}`}
        >
          <h6>{job.company.name}</h6>
        </Link>
        <div className=" text-sm">
          <p>{job.company.location}</p>
          <div className="d-flex flex-wrap gap-1">
            <p>{job.salary} -</p>
            <div className="d-flex flex-wrap">
              {job.jobType.map((item, index) => (
                <span key={index} className="text-capitalize">{`${
                  index !== 0 ? "," : ""
                } ${item}`}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="border-bottom">
        <div className="card-body">
          <div>
            <h6 className="fw-bold">Job details</h6>
            <p className="fw-bold text-sm">Salary</p>
            <p className="card-text text-sm">{job.salary}</p>
          </div>

          <p className="card-text"></p>
        </div>
      </div>
      <div>
        <div className="card-body">
          <div>
            <h6 className="fw-bold">Full Job Description</h6>
            <p className=" text-sm">{job.description}</p>
          </div>

          <p className="card-text"></p>
        </div>
      </div>
    </div>
  );
};
