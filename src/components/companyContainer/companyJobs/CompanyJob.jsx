import { GoLocation } from "react-icons/go";
import { Link } from "react-router-dom";
export const CompanyJob = ({ job }) => {
  return (
    <div className="col-12 col-md-6 p-2">
      <div className="card ">
        <div className="card-body d-flex flex-column gap-2">
          <div className="d-flex justify-content-between">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              to={`/job/${job.id}`}
            >
              <h6 roll="button" className="text-primary">
                {job.title}
              </h6>
            </Link>
            <p>a day ago</p>
          </div>
          <div className="d-flex align-items-center gap-2">
            <GoLocation />
            {job.location}
          </div>
          <div>
            <p
              className="text-sm"
              dangerouslySetInnerHTML={{
                __html: `${job.description.substring(0, 240)}...`,
              }}
            ></p>
          </div>
        </div>
      </div>
    </div>
  );
};
