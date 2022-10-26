import React from "react";

export const CompanyReviewEdit = ({
  values,
  handleChange,
  handleCancelEdit,
  handleUpdateCompanyReview,
}) => {
  return (
    <form onSubmit={handleUpdateCompanyReview}>
      <div className="input-group mb-3">
        <span className="input-group-text">Website</span>
        <input
          type="text"
          className="form-control"
          required
          name="website"
          value={values.website}
          onChange={handleChange}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Industry</span>
        <input
          type="text"
          className="form-control"
          required
          name="industry"
          value={values.industry}
          onChange={handleChange}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Location</span>
        <input
          type="text"
          className="form-control"
          required
          name="location"
          value={values.location}
          onChange={handleChange}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">About</span>
        <textarea
          type="text"
          className="form-control"
          name="about"
          value={values.about}
          onChange={handleChange}
        />
      </div>
      <div className="d-flex gap-3">
        <button className="btn btn-primary">Save</button>
        <button
          className="btn btn-secondary"
          type="button"
          onClick={handleCancelEdit}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};
