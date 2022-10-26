import { useQuery } from "@apollo/client";
import React from "react";
import { GET_APPLICATIONS } from "../../../graphql/queries/applicationQueries";
import { Spinner } from "../../UIs/spinner/Spinner";
import { ApplicationCardList } from "./ApplicationCardList";

export const ApplicationsTab = () => {
  const { loading, error, data } = useQuery(GET_APPLICATIONS);
  const newApplications = data?.getApplications.filter(
    (x) => x.status === "new"
  );
  const onReviewApplications = data?.getApplications.filter(
    (x) => x.status === "review"
  );
  const onInterviewApplications = data?.getApplications.filter(
    (x) => x.status === "interview"
  );
  const onFinalApplications = data?.getApplications.filter(
    (x) => x.status === "final"
  );

  if (error) return <h6>Something went wrong!</h6>;
  return (
    <div className="d-flex flex-column gap-3 h-100 ">
      <div className="text-center mt-3">
        <h3>Applications</h3>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className="row m-0 h-100  ">
            <div className="col col-3 p-1 ">
              <div className="card h-100">
                <div className="card-header text-center">
                  <h6>New </h6>
                </div>
                <div className="card-body p-1">
                  <ApplicationCardList applications={newApplications} />
                </div>
              </div>
            </div>
            <div className="col col-3 p-1 ">
              <div className="card h-100">
                <div className="card-header text-center">
                  <h6>Review </h6>
                </div>
                <div className="card-body p-1">
                  <ApplicationCardList applications={onReviewApplications} />
                </div>
              </div>
            </div>
            <div className="col col-3 p-1 ">
              <div className="card h-100">
                <div className="card-header text-center">
                  <h6>Interview</h6>
                </div>
                <div className="card-body p-1">
                  <ApplicationCardList applications={onInterviewApplications} />
                </div>
              </div>
            </div>
            <div className="col col-3 p-1 ">
              <div className="card h-100">
                <div className="card-header text-center">
                  <h6>Final</h6>
                </div>
                <div className="card-body p-1">
                  <ApplicationCardList applications={onFinalApplications} />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
