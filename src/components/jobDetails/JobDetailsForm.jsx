import React from "react";

export const JobDetailsForm = ({
  values,
  handleChange,
  handleCloseJobDetailsForm,
  handlesSaveJobDetails,
}) => {
  return (
    <form onSubmit={handlesSaveJobDetails}>
      <div className="my-3">
        <h3>Job Details Form</h3>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text"> Title</span>
        <input
          type="text"
          className="form-control"
          required
          name="title"
          onChange={handleChange}
          value={values.title}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Job Type</span>
        <input
          type="text"
          className="form-control"
          required
          name="jobType"
          onChange={handleChange}
          value={values.jobType}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Salary</span>
        <input
          type="text"
          className="form-control"
          required
          name="salary"
          onChange={handleChange}
          value={values.salary}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Location</span>
        <input
          type="text"
          className="form-control"
          required
          name="location"
          onChange={handleChange}
          value={values.location}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Description</span>
        <textarea
          type="text"
          className="form-control"
          name="description"
          onChange={handleChange}
          value={values.description}
          required
          rows="6"
        />
      </div>
      <div className="d-flex gap-3">
        <button className="btn btn-primary" type="submit">
          Save
        </button>
        <button
          className="btn btn-secondary"
          type="button"
          onClick={handleCloseJobDetailsForm}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};
