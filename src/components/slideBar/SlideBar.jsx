import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const SlideBar = ({ items, activeItem, handleActiveSlide }) => {
  const navigate = useNavigate();

  const handleSlideTo = (item) => {
    handleActiveSlide(item);
    navigate(`/myjobs/${item}`);
  };
  return (
    <ul
      className="d-flex gap-5 justify-content-start align-items-start mt-3 p-0 border-bottom "
      style={{ height: "40px" }}
    >
      {items.length > 0 &&
        items.map((item, index) => (
          <li
            className={`text-capitalize border-primary border-2 m-0 bottom-100 fw-bold h-100 ${
              item === activeItem
                ? "border-bottom text-primary"
                : "text-secondary"
            }  cursor-pointer`}
            key={index}
            onClick={() => handleSlideTo(item)}
          >
            <h5>{item}</h5>
          </li>
        ))}
    </ul>
  );
};
