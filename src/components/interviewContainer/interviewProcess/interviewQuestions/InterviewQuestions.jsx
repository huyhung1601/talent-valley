import React from "react";
import { MdClose, MdDone } from "react-icons/md";
export const InterviewQuestions = ({
  question,
  questions,
  videoUrl,
  videoRef,
  isRecording,
  handleClearRecord,
  handleRecord,
  handleSave,
  handleStop,
}) => {
  console.log(question, questions);
  return (
    <div className="row bg-light p-2 w-100">
      <div className="col-12  col-lg-6 ">
        <div className="d-flex flex-column p-3 w-100 h-100 bg-white">
          <div className="border-bottom border-light border-3 mb-3">
            <h5>{`Question ${question}/${questions.length}`}</h5>
          </div>

          <div className="d-flex gap-3 align-items-center fw-bold">
            {questions[question - 1]?.answer === "" ? (
              <span>
                <MdClose className="text-white bg-danger rounded-circle" />
              </span>
            ) : (
              <span>
                <MdDone className="text-white bg-danger rounded-circle" />
              </span>
            )}
            <p>{questions[question - 1]?.question}</p>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-6">
        <div className="d-flex flex-column gap-2 ">
          <div className=" d-flex gap-3  ">
            {!videoUrl && (
              <video width="100%" height="100%" ref={videoRef}></video>
            )}
            {videoUrl && (
              <video width="100%" height="100%" controls src={videoUrl}></video>
            )}
          </div>
          <div className="d-flex align-items-center justify-content-center gap-3">
            {videoUrl && (
              <button onClick={handleClearRecord} className="btn btn-danger">
                Clear
              </button>
            )}
            {!videoUrl && (
              <button className="btn btn-danger" onClick={handleRecord}>
                {isRecording ? "Recording..." : "Record"}
              </button>
            )}
            <button
              className="btn btn-secondary"
              disabled={!isRecording}
              onClick={handleStop}
            >
              Stop
            </button>
            <button
              className="btn btn-primary"
              disabled={!videoUrl}
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
