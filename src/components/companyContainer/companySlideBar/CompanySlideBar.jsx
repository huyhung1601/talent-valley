import React from "react";

export const CompanySlideBar = ({ items, activeItem, handleSlideTo }) => {
  return (
    <ul
      className="d-flex gap-5 text-capitalize border-bottom p-0 "
      style={{ height: 30 }}
    >
      {items.map((item, index) => (
        <li key={index}>
          <p
            role="button"
            className={`fw-bold h-100 border-primary border-2 m-0 ${
              activeItem === item ? "text-primary border-bottom " : ""
            }`}
            onClick={() => handleSlideTo(item)}
          >
            {item}
          </p>
        </li>
      ))}
    </ul>
  );
};
