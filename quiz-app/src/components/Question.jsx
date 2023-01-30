import React from "react";

function Question(props) {
  return (
    <div className="question-container">
      <h1 className="question-count">Question {props.questionNo}/4</h1>
      <h2 className="question">{props.question}</h2>
    </div>
  );
}

export default Question;
