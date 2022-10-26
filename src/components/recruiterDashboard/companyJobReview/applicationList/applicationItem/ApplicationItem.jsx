import { useMutation } from "@apollo/client";
import { useState } from "react";
import { toast } from "react-toastify";
import { format } from "timeago.js";
import {
  MOVE_APPLICATION_TO_INTERVIEW,
  MOVE_APPLICATION_TO_REVIEW,
} from "../../../../../graphql/mutations/applicationMutations";
import { GET_APPLICATIONS_BY_JOB } from "../../../../../graphql/queries/applicationQueries";
import { ApplicationDetails } from "./applicationDetails/ApplicationDetails";
const initialValues = [{ question: "" }];

export const ApplicationItem = ({ application }) => {
  const [openQuestionForm, setOpenQuestionForm] = useState(false);
  const [questions, setQuestions] = useState(initialValues);
  const [selected, setSelected] = useState("resume");
  const [question, setQuestion] = useState(0);
  const [moveApplicationToReview] = useMutation(MOVE_APPLICATION_TO_REVIEW, {
    variables: { applicationId: application.id },
    update: (cache, { data: { moveApplicationToReview } }) => {
      const { getApplicationsByJob } = cache.readQuery({
        query: GET_APPLICATIONS_BY_JOB,
        variables: { jobId: application.job.id },
      });
      cache.writeQuery({
        query: GET_APPLICATIONS_BY_JOB,
        variables: { jobId: application.job.id },
        data: {
          getApplicationsByJob: getApplicationsByJob?.map((x) =>
            x.id === application.id ? { ...x, status: "review" } : x
          ),
        },
      });
      toast(moveApplicationToReview.message);
    },
  });

  const [moveApplicationToInterview] = useMutation(
    MOVE_APPLICATION_TO_INTERVIEW,
    {
      variables: { applicationId: application.id, questions: questions },
      update: (cache, { data: { moveApplicationToInterview } }) => {
        const { getApplicationsByJob } = cache.readQuery({
          query: GET_APPLICATIONS_BY_JOB,
          variables: { jobId: application.job.id },
        });
        cache.writeQuery({
          query: GET_APPLICATIONS_BY_JOB,
          variables: { jobId: application.job.id },
          data: {
            getApplicationsByJob: getApplicationsByJob.map((x) =>
              x.id === application.id
                ? {
                    ...x,
                    status: "interview",
                    interview: moveApplicationToInterview,
                  }
                : x
            ),
          },
        });
        toast("Send interview to applicant successfully!");
        setOpenQuestionForm(false);
        setQuestions(initialValues);
      },
    }
  );

  const handleReject = () => {};

  const handlePutOnReview = () => {
    moveApplicationToReview();
  };

  const handleCreateVideoInterview = () => {
    setOpenQuestionForm(true);
  };

  const handleChangeQuestion = (e, questionIndex) => {
    setQuestions((p) =>
      p.map((item, index) =>
        index === questionIndex
          ? { ...item, question: `${e.target.value}` }
          : item
      )
    );
  };

  const handleAddMoreQuestion = () => {
    setQuestions((p) => [...p, { question: "" }]);
  };
  const handleDeleteQuestion = (questionIndex) => {
    setQuestions((p) => p.filter((x, index) => index !== questionIndex));
  };

  const handleCloseQuestionForm = () => {
    setOpenQuestionForm(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    moveApplicationToInterview();
  };

  const handleSelected = (e) => setSelected(e.target.value);

  const handleToNextQuestion = () => setQuestion((p) => p + 1);
  const handleToPreviousQuestion = () => setQuestion((p) => p - 1);

  return (
    <div className="accordion-item mb-1">
      <h2 className="accordion-header" id="flush-headingOne">
        <button
          className="accordion-button collapsed bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#flush-${application.id}`}
          aria-expanded="false"
          aria-controls={`flush-${application.id}`}
        >
          <div className="d-flex flex-wrap gap-3 gap-md-2 gap-sm-1 align-items-center">
            <p>{application.user.username}</p>
            <p className=" text-primary">{format(application.createdAt)}</p>
            <p
              className={` py-1 px-2 rounded ${
                application.status === "new" && "bg-info bg-opacity-25 "
              } ${application.status === "review" && "bg-info"} ${
                application.status === "interview" && "bg-success bg-opacity-25"
              } ${application.status === "final" && "bg-success "} `}
            >
              {application.status}
            </p>
          </div>
        </button>
      </h2>
      <ApplicationDetails
        selected={selected}
        application={application}
        openQuestionForm={openQuestionForm}
        questions={questions}
        question={question}
        handleSelected={handleSelected}
        handleReject={handleReject}
        handlePutOnReview={handlePutOnReview}
        handleCreateVideoInterview={handleCreateVideoInterview}
        handleChangeQuestion={handleChangeQuestion}
        handleAddMoreQuestion={handleAddMoreQuestion}
        handleDeleteQuestion={handleDeleteQuestion}
        handleCloseQuestionForm={handleCloseQuestionForm}
        handleSubmit={handleSubmit}
        handleToNextQuestion={handleToNextQuestion}
        handleToPreviousQuestion={handleToPreviousQuestion}
      />
    </div>
  );
};
