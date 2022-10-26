import React, { useEffect } from "react";
import { format } from "timeago.js";

export const InterviewComplete = ({
  complete,
  updatedAt,
  handleBackToIntro,
}) => {
  useEffect(() => {
    if (!complete) {
      handleBackToIntro();
    }
  }, [complete, handleBackToIntro]);
  return (
    <div className="d-flex flex-column gap-3 align-items-center justify-content-center">
      <h4>
        Congratulations! You have successfully completed the interview{" "}
        {format(updatedAt)}!
      </h4>
      <h5>We will contact you soon!</h5>
    </div>
  );
};
