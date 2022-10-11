import React from "react";
import { ContactCard } from "./contactCard/ContactCard";
import { ResumeCard } from "./resumeCard/ResumeCard";

export const ProfileContainer = ({ myProfile }) => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-between  ">
        <h3>{myProfile.username}</h3>
        <div className="rounded-circle bg-dark text-white p-3 d-flex ">
          {myProfile.username.split(" ").map((x, index) => (
            <h3 key={index}>{x.substring(0, 1)}</h3>
          ))}
        </div>
      </div>
      <ContactCard myProfile={myProfile} />
      <ResumeCard resume={myProfile.resume} />
    </>
  );
};
