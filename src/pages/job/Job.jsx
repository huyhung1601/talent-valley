import React from "react";
import { JobDetails } from "../../components";

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
