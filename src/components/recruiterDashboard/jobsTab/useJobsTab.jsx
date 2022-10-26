import { useMutation, useQuery } from "@apollo/client";
import { useMemo } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CREATE_JOB } from "../../../graphql/mutations/jobMutations";
import { GET_COMPANY_JOBS } from "../../../graphql/queries/companyQueries";
import { useForm } from "../../../hooks/useForm";

const initialValues = {
  title: "",
  jobType: "",
  salary: "",
  location: "",
  description: "",
};

export const useJobsTab = ({ company }) => {
  const [openJobForm, setOpenJobForm] = useState(false);
  const [search, setSearch] = useState("");
  const companyId = company.id;
  const { values, handleChange, setValues, resetValues } =
    useForm(initialValues);
  const navigate = useNavigate();
  const handleViewJob = (jobId) => {
    navigate(`/recruiter/jobs/${jobId}`);
  };
  const { loading, error, data } = useQuery(GET_COMPANY_JOBS, {
    variables: {
      companyId,
    },
  });

  const filterdJobs = useMemo(() => {
    return data?.company.jobs.filter((x) =>
      x.title.toLowerCase().includes(search.toLowerCase().trim())
    );
  }, [search, data?.company.jobs]);

  const [createJob] = useMutation(CREATE_JOB, {
    variables: values,
    update: (cache, { data: { createJob } }) => {
      const { company } = cache.readQuery({
        query: GET_COMPANY_JOBS,
        variables: { companyId },
      });
      cache.writeQuery({
        query: GET_COMPANY_JOBS,
        variables: { companyId },
        data: {
          company: { ...company, jobs: [createJob, ...company.jobs] },
        },
      });
      toast("Created Job successfully!");
      resetValues();
    },
  });

  const openJobDetailsForm = () => {
    setOpenJobForm(true);
    setValues((p) => ({ ...p, companyId: company.id }));
  };

  const handleCloseJobDetailsForm = () => {
    setOpenJobForm(false);
  };

  const handleSaveJobDetails = (e) => {
    e.preventDefault();
    createJob();
    setOpenJobForm(false);
  };

  const handleSearch = (e) => setSearch(e.target.value);

  return {
    values,
    openJobForm,
    error,
    loading,
    jobs: filterdJobs,
    search,
    handleSearch,
    handleChange,
    openJobDetailsForm,
    handleCloseJobDetailsForm,
    handleSaveJobDetails,
    handleViewJob,
  };
};
