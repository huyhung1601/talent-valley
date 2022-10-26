import { useEffect, useState } from "react";

export const usePages = ({ items }) => {
  const [pages, setPages] = useState([]);
  const [rows, setRows] = useState(10);
  const [activePage, setActivePage] = useState(1);
  const [activeBtns, setActiveBtns] = useState([]);
  const [activeItems, setActiveItems] = useState([]);

  //calculate number of page
  const calculate = ({ items, rows }) => {
    const pages = [];
    const num = Math.ceil(items?.length / rows);
    for (let i = 1; i <= num; i++) {
      pages.push(i);
    }
    return pages;
  };

  useEffect(() => {
    const pages = calculate({ items, rows });
    setPages(pages);
  }, [items, rows]);

  //Active Items
  useEffect(() => {
    setActiveItems(items?.slice((activePage - 1) * rows, activePage * rows));
  }, [activePage, rows, items]);

  //Active Btns
  useEffect(() => {
    if (pages.length > 3) {
      const btns = pages.slice(
        Math.ceil(activePage / 3 - 1) * 3,
        Math.ceil(activePage / 3) * 3
      );
      setActiveBtns([...btns]);
    } else {
      setActiveBtns([...pages]);
    }
  }, [activePage, pages, rows]);

  //Handle Rows
  const handleRows = (e) => {
    setActivePage(1);
    setRows(e.target.value);
  };

  //Set active Page
  const handleOpenPage = (page) => {
    setActivePage(page);
  };

  //Move Forward to
  const handleMoveBackward = (num) => {
    if ((num === 1 && activePage > 1) || (num === 3 && activePage > 3)) {
      setActivePage((p) => p - num);
    }
  };

  const handleMoveForward = (num) => {
    if (
      (num === 1 && activePage < pages.length) ||
      (num === 3 && activePage < pages.length - 3)
    ) {
      setActivePage((p) => p + num);
    }
  };

  return {
    rows,
    activePage,
    activeItems,
    activeBtns,
    handleRows,
    handleOpenPage,
    handleMoveForward,
    handleMoveBackward,
  };
};
