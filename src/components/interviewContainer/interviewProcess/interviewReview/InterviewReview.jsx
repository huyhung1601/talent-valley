import React from "react";
import { MdClose, MdDone } from "react-icons/md";

export const InterviewReview = ({ questions, handleSubmit }) => {
  return (
    <div className="bg-light w-50 w-md-100  h-100 p-2">
      <div className=" d-flex flex-column gap-3 align-items-center justify-content-between  p-3 bg-white h-100">
        <div className="w-100">
          <h4 className="mb-3 text-center">Review</h4>
          <ol>
            {questions.map((item, index) => (
              <li key={index}>
                <div className="row my-1">
                  <div className="col">
                    <p>{item?.question}</p>
                  </div>
                  <div className="col">
                    {item?.answer === "" ? (
                      <span>
                        <MdClose
                          size="16"
                          className="text-white bg-danger rounded-circle"
                        />
                      </span>
                    ) : (
                      <span>
                        <MdDone
                          size="16"
                          className="text-white bg-primary rounded-circle"
                        />
                      </span>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <button className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};
