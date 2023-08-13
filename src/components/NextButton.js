function NextButton({ dispatch, answer, index, numQuestions }) {
  if (answer === null) return null; // No answer no below code
  if (index < numQuestions - 1)
    // Stop to move to next question when it reach 15
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Next
      </button>
    );
  if (index === numQuestions - 1)
    // Stop to move to next question when it reach 15
    return (
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "finish" })}
      >
        Finish
      </button>
    );
}

export default NextButton;
