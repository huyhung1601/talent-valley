import React from "react";
import {
  AiFillHome,
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
} from "react-icons/ai";
import { IoDocumentAttachSharp } from "react-icons/io5";
import { RiAdvertisementFill } from "react-icons/ri";

export const Sidebar = ({
  items,
  openSidebar,
  activeItem,
  companyName,
  handleCloseSidebar,
  handleOpenSidebar,
  handleSlideTo,
}) => {
  return (
    <div className="bg-light fw-bold text-capitalize p-2 h-100 ">
      <div
        style={{ height: "46px" }}
        className="d-flex gap-4 align-items-center justify-content-between border-bottom border-2 border-dark p-2 "
      >
        {!openSidebar ? (
          <div role="button" onClick={handleOpenSidebar} className="bg-white">
            <AiOutlineMenuUnfold />
          </div>
        ) : (
          <>
            <p>{companyName}</p>
            <div
              role="button"
              onClick={handleCloseSidebar}
              className="bg-white"
            >
              <AiOutlineMenuFold />
            </div>
          </>
        )}
      </div>
      <ul className="d-flex flex-column mt-3 p-0 gap-3 ">
        {items &&
          items.map((item, index) => (
            <li key={index}>
              <div
                role="button"
                onClick={() => handleSlideTo({ item })}
                className={`d-flex  align-items-center gap-3 fs-6 p-2 border-2 border-primary ${
                  activeItem === item ? "border-start text-primary" : ""
                } `}
                style={{ height: "24px" }}
              >
                {item === "home" && <AiFillHome />}
                {item === "jobs" && <RiAdvertisementFill />}
                {item === "applications" && <IoDocumentAttachSharp />}
                {openSidebar && <p>{item}</p>}
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};
