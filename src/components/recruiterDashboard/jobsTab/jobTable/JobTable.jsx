import React from "react";
import { AiFillDelete, AiFillEye } from "react-icons/ai";
import { format } from "timeago.js";

export const JobTable = ({ data, handleViewJob }) => {
  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Location</th>
            <th>Salary</th>
            <th>Applications</th>
            <th>Created </th>
            <th>Btns</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((job) => (
              <tr key={job.id}>
                <td>{job.title}</td>
                <td>{job.location}</td>
                <td>{job.salary}</td>
                <td>{job.applications.length}</td>
                <td>{format(job.createdAt)}</td>
                <td>
                  <div className="d-flex gap-2">
                    <button
                      className="btn p-1 btn-sm text-primary"
                      onClick={() => handleViewJob(job.id)}
                    >
                      <AiFillEye />
                    </button>
                    <button className="btn p-1 btn-sm text-danger">
                      <AiFillDelete />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};
