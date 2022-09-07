import React from "react";
import { MdWork, MdAttachMoney } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export const JobCard = ({ job }) => {
  const navigate = useNavigate();
  const hanndleOpenJobCard = () => {
    navigate(`/${job.id}`);
  };
  return (
    <div className="card" onClick={hanndleOpenJobCard}>
      <div className="card-body">
        <h5 className="card-title">{job.title}</h5>
        <h6 className="card-subtitle mb-2 ">{job.company.name}</h6>
        <p className="text-sm mb-2 ">{job.company.location}</p>
        <div className="d-flex justify-content-start align-items-center flex-wrap gap-2 ">
          <div className="bg-success bg-opacity-25  px-1 rounded text-success">
            <MdAttachMoney className="me-1 " />
            <span className="text-sm">{job.salary}</span>
          </div>
          <div className="bg-success bg-opacity-25  px-1 rounded text-success">
            <MdWork className="me-1" />
            <span className="text-sm text-capitalize">
              {job.jobType[0]}
              <sup>{` +${job.jobType.length - 1}`}</sup>
            </span>
          </div>
        </div>
        <div className="mt-2">
          <p className="card-text text-sm">
            {job.description.substring(0, 100)}...
          </p>
        </div>
      </div>
    </div>
  );
};
