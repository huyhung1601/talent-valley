import { useMutation, useQuery } from "@apollo/client";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { GET_JOB } from "../../graphql/queries/jobQueries";
import { Spinner } from "../spinner/Spinner";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  REMOVE_FROM_MY_JOBS,
  SAVE_JOB,
} from "../../graphql/mutations/userMutations";
import { toast } from "react-toastify";
import {
  removeFromMyJobsSuccess,
  saveJobSuccess,
} from "../../features/auth/authSlice";
import { JobDescription } from "./JobDescription";
import { selectJob } from "../../features/job/jobSlice";
import { MY_JOBS } from "../../graphql/queries/userQueries";

export const JobDetails = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_JOB, {
    variables: { jobId: id },
  });

  const job = data?.job;
  const isLiked = user?.myJobs
    ?.filter((x) => x.status === "saved")
    .find((x) => x.job.id === id);

  const isApplied = user?.myJobs
    ?.filter((x) => x.status === "applied")
    .find((x) => x.job.id === id);

  const [saveJob] = useMutation(SAVE_JOB, {
    variables: { jobId: id },
    update: (cache, { data: { saveJob } }) => {
      const { myJobs } = cache.readQuery({ query: MY_JOBS });
      cache.writeQuery({
        query: MY_JOBS,
        data: {
          myJobs: [
            ...myJobs,
            { status: "saved", updatedAt: new Date().toDateString(), job },
          ],
        },
      });
      dispatch(saveJobSuccess(id));
      toast(saveJob.message);
    },
  });

  const [removeFromMyJobs] = useMutation(REMOVE_FROM_MY_JOBS, {
    variables: { jobId: id },
    update: (cache) => {
      const { myJobs } = cache.readQuery({ query: MY_JOBS });
      cache({
        query: MY_JOBS,
        data: { myJobs: myJobs.filter((x) => x.id !== id) },
      });
      dispatch(removeFromMyJobsSuccess(id));
    },
  });

  const handleSaveJob = () => {
    if (!user) {
      navigate("/login");
      toast("Please login first!");
    } else {
      saveJob();
    }
  };

  const handleUnsaveJob = () => {
    removeFromMyJobs();
  };

  const handleApplyJob = () => {
    if (!user) {
      navigate("/login");
      toast("Please login first!");
    } else {
      dispatch(selectJob(job));
      navigate(`/apply/${id}/form/resume`);
    }
  };

  if (loading) return <Spinner />;
  if (error) return <p>Something went wrong!</p>;

  return (
    <div className="card">
      <div className="card-hearder border-bottom shadow-sm p-3  ">
        <h5>{job.title}</h5>
        <Link className="text-primary" to={`/company/${job.company.id}`}>
          <h6>{job.company.name}</h6>
        </Link>
        <div className=" text-sm">
          <p>{job.company.location}</p>
          <div className="d-flex flex-wrap gap-1">
            <p>{job.salary} -</p>
            <div className="d-flex flex-wrap">
              {job.jobType.map((item, index) => (
                <span key={index} className="text-capitalize">{`${
                  index !== 0 ? "," : ""
                } ${item}`}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center gap-2 mt-1">
          {isApplied ? (
            <button className="btn btn-primary btn-sm fw-bold" disabled>
              Applied
            </button>
          ) : (
            <button
              className="btn btn-primary btn-sm fw-bold"
              onClick={handleApplyJob}
            >
              Apply Now
            </button>
          )}
          {!isApplied && (
            <>
              {isLiked ? (
                <button
                  className="btn btn-secondary btn-sm btn-light "
                  onClick={handleUnsaveJob}
                >
                  <AiFillHeart className="text-primary" />
                </button>
              ) : (
                <button
                  className="btn btn-secondary btn-sm btn-light "
                  onClick={handleSaveJob}
                >
                  <AiOutlineHeart />
                </button>
              )}
            </>
          )}
        </div>
      </div>
      <div className="border-bottom">
        <div className="card-body">
          <div>
            <h6 className="fw-bold">Job details</h6>
            <p className="fw-bold text-sm">Salary</p>
            <p className="card-text text-sm">{job.salary}</p>
          </div>
        </div>
      </div>
      <JobDescription job={job} />
    </div>
  );
};
