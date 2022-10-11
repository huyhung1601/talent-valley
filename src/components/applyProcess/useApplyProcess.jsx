import { useMutation, useQuery } from "@apollo/client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { applyJobSuccess } from "../../features/auth/authSlice";
import { APPLY_JOB } from "../../graphql/mutations/userMutations";
import { MY_PROFILE, MY_JOBS } from "../../graphql/queries/userQueries";

export const useApplyProcess = ({ job }) => {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const param = useParams();
  const steps = ["resume", "contact", "review"];
  const dispatch = useDispatch();

  const [applyJob] = useMutation(APPLY_JOB, {
    variables: { jobId: job.id },
    update: (cache, { data: { applyJob } }) => {
      const { myJobs } = cache.readQuery({ query: MY_JOBS });
      cache.writeQuery({
        query: MY_JOBS,
        data: {
          myJobs: myJobs.map((x) =>
            x.job.id !== job.id ? x : { ...x, status: "applied" }
          ),
        },
      });
      dispatch(applyJobSuccess(job.id));
      toast(applyJob.message);
      navigate("/");
    },
  });

  const { loading, data } = useQuery(MY_PROFILE);
  const myProfile = data?.myProfile;

  const handleNextStep = () => {
    setStep(step + 1);
    navigate(`/apply/${param.id}/form/${steps[step + 1]}`, { state: {} });
  };

  const handleLastStep = () => {
    setStep(step - 1);
    navigate(`/apply/${param.id}/form/${steps[step - 1]}`, { state: {} });
  };

  const handleToStep = (stepTo) => {
    setStep(stepTo);
    navigate(`/apply/${param.id}/form/${steps[stepTo]}`, { state: {} });
  };

  const handleApplyJob = () => {
    applyJob();
  };
  return {
    step,
    steps,
    loading,
    myProfile,
    handleNextStep,
    handleLastStep,
    handleToStep,
    handleApplyJob,
  };
};
