import { useQuery } from "@apollo/client";
import React from "react";
import { ProfileContainer, Spinner } from "../components";
import { MY_PROFILE } from "../graphql/queries/userQueries";

const Profile = () => {
  const { loading, error, data } = useQuery(MY_PROFILE);
  const myProfile = data?.myProfile;

  console.log(error);

  return (
    <div className="d-flex justify-content-center ">
      <div className="d-flex flex-column minW-75 w-md-100 gap-3 ">
        {loading ? <Spinner /> : <ProfileContainer myProfile={myProfile} />}
      </div>
    </div>
  );
};

export default Profile;
