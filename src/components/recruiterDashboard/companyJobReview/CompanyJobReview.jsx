import { useQuery } from "@apollo/client";
import React from "react";
import { useMemo } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { GET_APPLICATIONS_BY_JOB } from "../../../graphql/queries/applicationQueries";
import { ApplicationList } from "./applicationList/ApplicationList";
import { JobDetails } from "../../jobDetails/JobDetails";
import { PagesContainer } from "../../UIs/pagesContainer/PagesContainer";
import { Spinner } from "../../UIs/spinner/Spinner";
import { AutoComplete } from "../../UIs/autoComplete/AutoComplete";
import { GET_COMPANY_JOBS } from "../../../graphql/queries/companyQueries";

export const CompanyJobReview = ({ companyId }) => {
  const { jobId } = useParams();
  const [selected, setSelected] = useState("");
  const { loading, error, data } = useQuery(GET_APPLICATIONS_BY_JOB, {
    variables: { jobId },
  });

  const { data: companyJobData } = useQuery(GET_COMPANY_JOBS, {
    variables: { companyId },
  });

  // const { data: companyData } = useQuery(GET_COMPANY_JOBS, {
  //   variables: {
  //     companyId,
  //   },
  // });

  const handleSelect = (e) => setSelected(e.target.value);

  const selectedData = useMemo(() => {
    if (selected === "") {
      return data?.getApplicationsByJob;
    } else {
      return data?.getApplicationsByJob.filter((x) => x.status === selected);
    }
  }, [selected, data?.getApplicationsByJob]);
  if (error) return <h6>Something went wrong!</h6>;

  return (
    <div className="d-flex align-items-center">
      <div className="row w-100 m-0">
        <div className="col-12 p-1">
          <AutoComplete data={companyJobData?.company.jobs} />
        </div>
        <div className="col-12  col-lg-6 p-1">
          <JobDetails editable />
        </div>
        <div className="col-12  col-lg-6 p-1 ">
          {loading ? (
            <Spinner />
          ) : (
            <div className="card card-body h-100" style={{ maxHeight: "90vh" }}>
              <div className="d-flex gap-3 align-items-center justify-content-center p-2">
                <h4 className="text-center m-0">Applications</h4>
                <select
                  className="btn btn-sm bg-light fw-bold "
                  value={selected}
                  onChange={handleSelect}
                >
                  <option value="">All</option>
                  <option value="new">New</option>
                  <option value="review">On Review</option>
                  <option value="interview">On Interview</option>
                  <option value="final">On Final</option>
                </select>
              </div>
              <div className="d-flex w-100 h-100">
                <PagesContainer items={selectedData}>
                  <ApplicationList />
                </PagesContainer>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
