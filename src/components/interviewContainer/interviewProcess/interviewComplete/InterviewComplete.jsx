import { Link } from "react-router-dom";
import { format } from "timeago.js";

export const InterviewComplete = ({ updatedAt }) => {
  return (
    <div className="d-flex flex-column gap-3 align-items-center justify-content-center">
      <h4>
        Congratulations! You have successfully completed the interview{" "}
        {format(updatedAt)}!
      </h4>
      <h5>We will contact you soon!</h5>
      <Link className="btn btn-primary" to="/">
        Continue Find Job
      </Link>
    </div>
  );
};
