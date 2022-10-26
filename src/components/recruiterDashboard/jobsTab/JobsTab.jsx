import React from "react";
import { JobDetailsForm } from "../../jobDetails/JobDetailsForm";
import { PagesContainer } from "../../UIs/pagesContainer/PagesContainer";
import { Spinner } from "../../UIs/spinner/Spinner";
import { JobTable } from "./jobTable/JobTable";
import { useJobsTab } from "./useJobsTab";

export const JobsTab = ({ company }) => {
  const {
    openJobForm,
    error,
    loading,
    jobs,
    values,
    search,
    handleSearch,
    handleChange,
    openJobDetailsForm,
    handleCloseJobDetailsForm,
    handleSaveJobDetails,
    handleViewJob,
  } = useJobsTab({ company });

  if (error) return <h6>Something went wrong!</h6>;

  return (
    <div className="d-flex flex-column align-items-center justify-content-center gap-3 h-100">
      <div className="d-flex gap-3 align-items-center mt-3">
        <h3>Jobs</h3>
        <button
          className="btn btn-primary btn-sm "
          onClick={openJobDetailsForm}
        >
          Add
        </button>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="row w-100 h-100 ">
          <div className="col p-1">
            <div className="card card-body h-100 overflow-auto">
              <div className="input-group mb-3 ">
                <span className="input-group-text" id="basic-addon1">
                  Search
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Job Title"
                  aria-label="Username"
                  name="search"
                  value={search}
                  onChange={handleSearch}
                />
              </div>
              <PagesContainer items={jobs}>
                <JobTable handleViewJob={handleViewJob} />
              </PagesContainer>
            </div>
          </div>

          {openJobForm && (
            <div className="col p-1">
              <div className="card card-body ">
                <JobDetailsForm
                  values={values}
                  handleChange={handleChange}
                  handleCloseJobDetailsForm={handleCloseJobDetailsForm}
                  handlesSaveJobDetails={handleSaveJobDetails}
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
