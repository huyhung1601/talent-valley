import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { BsArrowBarLeft, BsArrowBarRight } from "react-icons/bs";

export const Pagination = ({
  rows,
  activeBtns,
  activePage,
  handleRows,
  handleOpenPage,
  handleMoveForward,
  handleMoveBackward,
}) => {
  return (
    <div className="d-flex justify-content-center align-items-center gap-2 pt-3 ">
      <select
        className="btn btn-sm bg-light "
        value={rows}
        onChange={handleRows}
      >
        <option value="1">1</option>
        <option value="5">5</option>
        <option value="10">10</option>
      </select>
      <span
        className="btn btn-sm bg-light "
        onClick={() => handleMoveBackward(3)}
      >
        <BsArrowBarLeft />
      </span>
      <span
        className="btn btn-sm bg-light "
        onClick={() => handleMoveBackward(1)}
      >
        <AiOutlineArrowLeft />
      </span>
      {activeBtns?.map((btn, index) => (
        <span
          className={`btn btn-sm ${
            activePage - Math.ceil(activePage / 3 - 1) * 3 === index + 1
              ? "bg-primary text-white"
              : "bg-light"
          } `}
          key={index}
          onClick={() =>
            handleOpenPage(index + 1 + Math.ceil(activePage / 3 - 1) * 3)
          }
        >
          {btn}
        </span>
      ))}
      <span
        className="btn btn-sm bg-light "
        onClick={() => handleMoveForward(1)}
      >
        <AiOutlineArrowRight />
      </span>
      <span
        className="btn btn-sm bg-light "
        onClick={() => handleMoveForward(3)}
      >
        <BsArrowBarRight />
      </span>
    </div>
  );
};
