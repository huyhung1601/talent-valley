import React from "react";
import { PdfReader } from "../../../../../UIs";

export const ApplicationResume = ({ application }) => {
  return (
    <div style={{ height: 600 }}>
      <h4 className="text-center">Resume</h4>
      <PdfReader src={application.resume} title={application.id} />
    </div>
  );
};
