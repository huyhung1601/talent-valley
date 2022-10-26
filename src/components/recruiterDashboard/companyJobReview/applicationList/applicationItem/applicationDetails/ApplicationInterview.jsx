export const ApplicationInterview = ({
  interview,
  question,
  handleToPreviousQuestion,
  handleToNextQuestion,
}) => {
  return (
    <div>
      <h4 className="text-center">Interview</h4>
      {interview ? (
        <>
          {!interview.complete ? (
            <>
              {interview.questions.map((item, index) => (
                <div key={index} className="d-flex flex-column gap-2">
                  <div className="d-flex gap-3">
                    <p className="fw-bold " key="index">
                      {`Question_${index + 1}:`}
                    </p>
                    <span>{item.question}</span>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
              <div className="d-flex flex-column align-items-center gap-2">
                <div className="d-flex align-items-center justify-content-between gap-3">
                  <button
                    className="btn btn-sm btn-light fw-bold"
                    onClick={handleToPreviousQuestion}
                    disabled={question === 0}
                  >
                    {"<<"}
                  </button>

                  <div className="d-flex gap-2">
                    <p className="fw-bold ">{`Question ${question + 1}/${
                      interview.questions.length
                    }:`}</p>
                    <span>{interview.questions[question].question}</span>
                  </div>

                  <button
                    className="btn btn-sm btn-light fw-bold"
                    onClick={handleToNextQuestion}
                    disabled={question === interview.questions.length - 1}
                  >
                    {">>"}
                  </button>
                </div>
                <video controls src={interview.questions[question].answer} />
              </div>
            </>
          )}
        </>
      ) : (
        <div className="w-100">
          <h6>There is no interview question</h6>
        </div>
      )}
    </div>
  );
};
