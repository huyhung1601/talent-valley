import React from "react";

export const ContactReview = ({ myProfile, handleToStep }) => {
  return (
    <div className="my-3">
      <div className="d-flex justify-content-between fw-bold">
        <p className="text-secondary ">Contact Information</p>
        <p
          onClick={handleToStep}
          role="button"
          className="text-primary"
          to="contact"
        >
          Edit
        </p>
      </div>
      <div className="card">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <div>
              <p>Full Name</p>
              <p className="fw-bold">{myProfile.username}</p>
            </div>
          </li>
          <li className="list-group-item">
            <div>
              <p>Address</p>
              <p className="fw-bold">{myProfile.address}</p>
            </div>
          </li>
          <li className="list-group-item">
            <div>
              <p>Mobile</p>
              <p className="fw-bold">{myProfile.number}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
