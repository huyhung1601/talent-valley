import React from "react";
import { Pagination } from "./Pagination";
import { usePages } from "./usePages";

export const PagesContainer = ({ items, children }) => {
  const {
    rows,
    activePage,
    activeItems,
    activeBtns,
    handleOpenPage,
    handleMoveForward,
    handleMoveBackward,
    handleRows,
  } = usePages({
    items,
    rows: 1,
  });

  return (
    <div className="d-flex flex-column justify-content-between w-100 h-100 autoflow-auto">
      <div className="h-100">
        {React.cloneElement(children, { data: activeItems })}
      </div>
      <Pagination
        activePage={activePage}
        activeBtns={activeBtns}
        rows={rows}
        handleRows={handleRows}
        handleOpenPage={handleOpenPage}
        handleMoveForward={handleMoveForward}
        handleMoveBackward={handleMoveBackward}
      />
    </div>
  );
};
