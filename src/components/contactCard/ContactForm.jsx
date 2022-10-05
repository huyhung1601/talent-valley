import React from "react";

export const ContactForm = ({
  closeEdit,
  handleUpdateContact,
  values,
  handleChange,
}) => {
  return (
    <div>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Full Name
        </label>
        <input
          type="text"
          name="username"
          value={values.username}
          onChange={handleChange}
          className="form-control"
          id="username"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="address" className="form-label">
          Address
        </label>
        <input
          type="text"
          name="address"
          value={values.address}
          onChange={handleChange}
          className="form-control"
          id="address"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Phone Number
        </label>
        <input
          type="text"
          name="number"
          value={values.number}
          onChange={handleChange}
          className="form-control"
          id="number"
        />
      </div>
      <div className="d-flex gap-3">
        <button className="btn btn-primary" onClick={handleUpdateContact}>
          Save
        </button>
        <button className="btn btn-secondary" onClick={closeEdit}>
          Close
        </button>
      </div>
    </div>
  );
};
