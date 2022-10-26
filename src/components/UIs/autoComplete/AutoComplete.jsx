import React from "react";
import { useMemo } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FilteredItems } from "./FilteredItems";

export const AutoComplete = ({ data }) => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredItems = useMemo(() => {
    return data?.filter((x) =>
      x.title.toLowerCase().trim().includes(search.toLowerCase().trim())
    );
  }, [data, search]);

  const handleSearch = (e) => setSearch(e.target.value);

  const handleClickItem = (id) => {
    setSearch("");
    navigate(`/recruiter/jobs/${id}`);
  };

  return (
    <div className="d-flex justify-content-center align-items-center flex-column   ">
      <div className="input-group m-3 w-75 posotion-relative">
        <span className="input-group-text">Search</span>
        <input
          type="text"
          className="form-control"
          placeholder="Job"
          name="search"
          value={search}
          onChange={handleSearch}
        />
        {search !== "" && (
          <FilteredItems
            filteredItems={filteredItems}
            handleClickItem={handleClickItem}
          />
        )}
      </div>
    </div>
  );
};
