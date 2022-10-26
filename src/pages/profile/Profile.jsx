import { useQuery } from "@apollo/client";
import React from "react";
import { ProfileContainer, Spinner } from "../../components";
import { MY_PROFILE } from "../../graphql/queries/userQueries";

export const Profile = () => {
  const { loading, error, data } = useQuery(MY_PROFILE);
  const myProfile = data?.myProfile;

  return (
    <div className="container pt-4 d-flex justify-content-center ">
      <div className="d-flex flex-column minW-75 w-md-100 gap-3 ">
        {error && <h6>Something went wrong!</h6>}
        {loading ? <Spinner /> : <ProfileContainer myProfile={myProfile} />}
      </div>
    </div>
  );
};
