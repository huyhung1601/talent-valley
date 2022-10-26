import { Spinner } from "../UIs/spinner/Spinner";
import { JobDescription } from "./jobDescription/JobDescription";
import { JobCardImage } from "./jobImage/JobCardImage";
import { JobInfo } from "./jobInfo/JobInfo";
import { JobDetailsForm } from "./JobDetailsForm";
import { useJobDetails } from "./useJobDetails";

export const JobDetails = ({ editable }) => {
  const {
    user,
    loading,
    error,
    job,
    isLiked,
    isApplied,
    onEdit,
    values,
    handleChange,
    handleSaveJob,
    handleApplyJob,
    handleUnsaveJob,
    handleEditJob,
    handleCloseJobDetailsForm,
    handlesSaveJobDetails,
  } = useJobDetails();

  if (loading) return <Spinner />;
  if (error) return <h6>Something went wrong!</h6>;

  return (
    <div className="card h-100 ">
      <div className="card-hearder border-bottom shadow-sm p-3  ">
        <JobCardImage image={job?.company.image} logo={job.company.logo} />
        {onEdit ? (
          <JobDetailsForm
            values={values}
            handleChange={handleChange}
            handleCloseJobDetailsForm={handleCloseJobDetailsForm}
            handlesSaveJobDetails={handlesSaveJobDetails}
          />
        ) : (
          <JobInfo
            job={job}
            role={user?.role}
            isApplied={isApplied}
            isLiked={isLiked}
            editable={editable}
            handleApplyJob={handleApplyJob}
            handleSaveJob={handleSaveJob}
            handleUnsaveJob={handleUnsaveJob}
            handleEditJob={handleEditJob}
          />
        )}
      </div>
      {!onEdit && (
        <>
          <div className="border-bottom">
            {
              <div className="card-body">
                <div>
                  <h6 className="fw-bold">Job details</h6>
                  <p className="fw-bold text-sm">Salary</p>
                  <p className="card-text text-sm">{job.salary}</p>
                </div>
              </div>
            }
          </div>
          <JobDescription job={job} />
        </>
      )}
    </div>
  );
};
