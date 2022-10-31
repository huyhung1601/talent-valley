import { useQuery } from "@apollo/client";
import React from "react";
import { GET_COMPANY_JOBS } from "../../../graphql/queries/companyQueries";
import { Spinner } from "../../UIs";
import { CompanyJob } from "./CompanyJob";

export const CompanyJobs = ({ companyId }) => {
  const { loading, error, data } = useQuery(GET_COMPANY_JOBS, {
    variables: { companyId },
  });
  return (
    <div>
      {error && <h6>Something went wrong!</h6>}
      {loading ? (
        <Spinner />
      ) : (
        <>
          <ul className="row p-0 ">
            {data?.company?.jobs.map((job) => (
              <CompanyJob key={job.id} job={job} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
