import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { JobDetails } from "../../components";
import { GET_JOB } from "../../graphql/queries/jobQueries";

export const Job = () => {
  // const { id } = useParams();
  // const { loading, error, data } = useQuery(GET_JOB, {
  //   variables: { jobId: id },
  // });

  return (
    <div className="container pt-4">
      <JobDetails />
    </div>
  );
};
