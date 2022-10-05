import React from "react";
import { useCallback } from "react";
import { useForm } from "../../hooks/useForm";
import { useMutation } from "@apollo/client";
import { SEARCH_JOBS } from "../../graphql/mutations/jobMutations";
import { GET_JOBS } from "../../graphql/queries/jobQueries";
import { Spinner } from "../spinner/Spinner";

const initialValue = {
  search: "",
  location: "",
};
export const JobSearch = () => {
  const { values, handleChange } = useForm(initialValue);
  const [searchJobs, { loading, error }] = useMutation(SEARCH_JOBS, {
    variables: values,
    update(cache, { data: { searchJobs } }) {
      cache.writeQuery({
        query: GET_JOBS,
        data: { jobs: [...searchJobs] },
      });
    },
  });

  const handleSearch = useCallback(() => {
    if (values.search !== "" || values.location !== "") {
      searchJobs();
    }
  }, [values, searchJobs]);

  return (
    <>
      <div className="col-12 col-md-5">
        <div className="input-group mb-3">
          <span className="input-group-text">What</span>
          <input
            type="text"
            name="search"
            value={values.search}
            onChange={handleChange}
            className="form-control"
            placeholder="job title"
          />
        </div>
      </div>
      <div className="col-12 col-md-5">
        <div className="input-group mb-3">
          <span className="input-group-text">Where</span>
          <input
            type="text"
            name="location"
            value={values.location}
            onChange={handleChange}
            className="form-control"
            placeholder="location"
          />
        </div>
      </div>
      <div className="col-12 col-md-2">
        <button
          type="button"
          onClick={handleSearch}
          className="btn btn-primary"
        >
          Search
        </button>
      </div>
      {loading && <Spinner />}
      {error && <p>Something went wrong!</p>}
    </>
  );
};
