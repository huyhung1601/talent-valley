import { VideoInterviewForm } from "./videoInterviewForm/VideoInterviewForm";
import React from "react";
import { ApplicationResume } from "./ApplicationResume";
import { ApplicationInterview } from "./ApplicationInterview";
import { ApplicationUtils } from "./ApplicationUtils";

export const ApplicationDetails = ({
  selected,
  application,
  openQuestionForm,
  questions,
  question,
  handleSelected,
  handleChangeQuestion,
  handleAddMoreQuestion,
  handleDeleteQuestion,
  handleCloseQuestionForm,
  handleSubmit,
  handleReject,
  handlePutOnReview,
  handleCreateVideoInterview,
  handleToNextQuestion,
  handleToPreviousQuestion,
}) => {
  return (
    <div
      id={`flush-${application.id}`}
      className="accordion-collapse collapse bg-light p-2"
      aria-labelledby="flush-headingOne"
      data-bs-parent="#accordionFlushExample"
    >
      <div className="accordion-body p-2 bg-white">
        {openQuestionForm ? (
          <VideoInterviewForm
            questions={questions}
            handleChangeQuestion={handleChangeQuestion}
            handleAddMoreQuestion={handleAddMoreQuestion}
            handleDeleteQuestion={handleDeleteQuestion}
            handleCloseQuestionForm={handleCloseQuestionForm}
            handleSubmit={handleSubmit}
          />
        ) : (
          <>
            <ApplicationUtils
              selected={selected}
              handleReject={handleReject}
              handleSelected={handleSelected}
              application={application}
              handlePutOnReview={handlePutOnReview}
              handleCreateVideoInterview={handleCreateVideoInterview}
            />
            <div className="w-100  p-2 ">
              {selected === "resume" && (
                <ApplicationResume application={application} />
              )}
              {selected === "interview" && (
                <ApplicationInterview
                  interview={application.interview}
                  question={question}
                  handleToNextQuestion={handleToNextQuestion}
                  handleToPreviousQuestion={handleToPreviousQuestion}
                />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
