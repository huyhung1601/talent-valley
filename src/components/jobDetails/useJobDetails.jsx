import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { removeFromMyJobsSuccess } from "../../features/auth/authSlice";
import { selectJob } from "../../features/job/jobSlice";
import { UPDATE_JOB } from "../../graphql/mutations/jobMutations";
import {
  REMOVE_FROM_MY_JOBS,
  SAVE_JOB,
} from "../../graphql/mutations/userMutations";
import { GET_JOB } from "../../graphql/queries/jobQueries";
import { MY_JOBS, MY_PROFILE } from "../../graphql/queries/userQueries";
import { useForm } from "../../hooks/useForm";

const initialValues = {
  id: "",
  title: "",
  jobType: "",
  salary: "",
  location: "",
  description: "",
};

export const useJobDetails = () => {
  const [onEdit, setOnEdit] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { jobId } = useParams();
  const { values, handleChange, resetValues, setValues } =
    useForm(initialValues);

  const { loading, error, data } = useQuery(GET_JOB, {
    variables: { jobId },
  });

  const job = data?.job;
  const isLiked =
    user?.role === "user" && user?.savedJobs?.some((x) => x.id === jobId);

  const isApplied =
    user?.role === "user" && user?.applications.some((x) => x.job.id === jobId);

  const [saveJob] = useMutation(SAVE_JOB, {
    variables: { jobId },
    update: (cache, { data: { saveJob } }) => {
      const { myProfile } = cache.readQuery({ query: MY_PROFILE });
      cache.writeQuery({
        query: MY_PROFILE,
        data: {
          myProfile: {
            ...myProfile,
            savedJobs: [
              ...myProfile.savedJobs,
              {
                id: jobId,
                title: job.title,
                location: job.location,
                description: job.description,
                company: {
                  name: job.company.name,
                },
              },
            ],
          },
        },
      });
      // dispatch(saveJobSuccess(jobId));
      toast(saveJob.message);
    },
  });

  const [removeFromMyJobs] = useMutation(REMOVE_FROM_MY_JOBS, {
    variables: { jobId },
    update: (cache) => {
      const { myJobs } = cache.readQuery({ query: MY_JOBS });
      cache({
        query: MY_JOBS,
        data: { myJobs: myJobs.filter((x) => x.id !== jobId) },
      });
      dispatch(removeFromMyJobsSuccess(jobId));
    },
  });

  const [updateJob] = useMutation(UPDATE_JOB, {
    variables: { ...values, companyId: job?.company.id },
    update: (cache, { data: { updateJob } }) => {
      const { job } = cache.readQuery({ query: GET_JOB, variables: { jobId } });
      cache.writeQuery({
        query: GET_JOB,
        variables: { jobId },
        data: { job: { ...job, ...values } },
      });
      toast(updateJob.message);
      resetValues();
      setOnEdit(false);
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
      navigate(`/apply/${jobId}/form/resume`);
    }
  };

  const handleEditJob = () => {
    setOnEdit(true);
    setValues({
      id: jobId,
      title: job.title,
      jobType: job.jobType,
      salary: job.salary,
      location: job.location,
      description: job.description,
    });
  };

  const handleCloseJobDetailsForm = () => {
    resetValues();
    setOnEdit(false);
  };

  const handlesSaveJobDetails = (e) => {
    e.preventDefault();
    updateJob();
  };

  return {
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
  };
};
