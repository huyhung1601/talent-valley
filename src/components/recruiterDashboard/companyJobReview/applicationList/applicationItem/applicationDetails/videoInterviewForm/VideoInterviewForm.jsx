export const VideoInterviewForm = ({
  values,
  questions,
  handleSubmit,
  handleChangeQuestion,
  handleDeleteQuestion,
  handleAddMoreQuestion,
  handleCloseQuestionForm,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <h5 className="text-center">Interview Questions</h5>

      {questions?.map((item, index) => (
        <div key={index}>
          <div className="input-group mb-3">
            <span className="input-group-text ">{`Question_${index + 1}`}</span>
            <input
              type="text"
              className="form-control"
              required
              name="question"
              value={item.question}
              onChange={(e) => handleChangeQuestion(e, index)}
            />
            {index + 1 === questions.length && index > 0 && (
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => handleDeleteQuestion(index)}
              >
                remove
              </button>
            )}
          </div>

          {index + 1 === questions.length && index <= 1 && (
            <button
              type="button"
              className="btn btn-secondary btn-sm w-100"
              onClick={() => handleAddMoreQuestion()}
            >
              Add question
            </button>
          )}
        </div>
      ))}
      <div className="d-flex gap-3 mt-3">
        <button className="btn btn-primary btn-sm w-50">Send</button>
        <button
          className="btn btn-danger btn-sm w-50"
          type="button"
          onClick={handleCloseQuestionForm}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};
