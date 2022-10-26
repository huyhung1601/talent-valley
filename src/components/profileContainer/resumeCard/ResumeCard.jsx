import React from "react";
import { FiMoreVertical } from "react-icons/fi";
import { useUpdateResume } from "../../../hooks/useUpdateResume";
import { UploadFileBtn } from "../../uploadFileBtn/UploadFileBtn";
import { ResumeInfo } from "./ResumeInfo";
export const ResumeCard = ({ resume }) => {
  const { handleUploadFile } = useUpdateResume();
  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h6>Resume</h6>
          <div className="dropdown">
            <button
              className="btn btn-light btn-sm btn-toggle"
              type="button"
              id="dropdownEditResume"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <FiMoreVertical />
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownEditResume">
              <li>
                <div className="dropdown-item p-0">
                  <UploadFileBtn
                    text="Upload"
                    accept=".pdf"
                    color="light"
                    handleUploadFile={handleUploadFile}
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>
        <ResumeInfo resume={resume} />
      </div>
    </div>
  );
};
