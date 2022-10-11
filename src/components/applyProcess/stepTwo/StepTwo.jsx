import React from "react";
import { ContactCard } from "../../profileContainer/contactCard/ContactCard";

export const StepTwo = ({ myProfile }) => {
  return (
    <div>
      <h3 className="mb-3">Contact information</h3>
      <ContactCard myProfile={myProfile} />
    </div>
  );
};
