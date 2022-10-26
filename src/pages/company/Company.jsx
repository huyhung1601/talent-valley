import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_COMPANY } from "../../graphql/queries/companyQueries";
import { CompanyContainer, Spinner } from "../../components";

export const Company = () => {
  const items = ["about", "culture", "jobs"];

  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_COMPANY, {
    variables: { companyId: id },
  });
  return (
    <div className="container pt-4 d-flex flex-column align-items-center">
      {error && <h6>Something went wrong!</h6>}
      {loading ? (
        <Spinner />
      ) : (
        <CompanyContainer company={data.company} items={items} />
      )}
    </div>
  );
};
