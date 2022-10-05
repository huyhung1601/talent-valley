import { useQuery } from "@apollo/client";
import React from "react";
import { ContactCard, Spinner } from "../components";
import { MY_PROFILE } from "../graphql/queries/userQueries";

const Profile = () => {
  const { loading, error, data } = useQuery(MY_PROFILE);
  const myProfile = data?.myProfile;

  return (
    <div className="d-flex justify-content-center ">
      <div className="d-flex flex-column minW-75 w-md-100 ">
        <div>lgo</div>
        {loading ? (
          <Spinner />
        ) : (
          <>
            <ContactCard myProfile={myProfile} />
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
