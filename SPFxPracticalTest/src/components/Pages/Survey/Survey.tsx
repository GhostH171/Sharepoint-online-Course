import * as React from "react";
import { useState } from "react";
import { FunctionComponent } from "react";

import { ISurveyProps } from "./ISurvey";
import styles from "./Survey.module.scss";

const Survey: FunctionComponent<ISurveyProps> = (props) => {
  const questions = [
    {
      id: 1,
      questionText:
        "If you select Answer A, your next question will be Question 2. If you select Answer B, your next question will be Question 3",
      answerOptions: [
        { answerText: "Go to Question 2", isSubmited: false },
        { answerText: "Go to Question 3", isSubmited: false },
      ],
    },
    {
      id: 2,
      questionText:
        "What are your favorite programming languages? Please select 2.",
      answerOptions: [
        { key: "A", answerText: "C#", isSubmited: false },
        { key: "B", answerText: "Java", isSubmited: false },
        { key: "C", answerText: "PHP", isSubmited: false },
        { key: "D", answerText: "Python", isSubmited: false },
        { key: "E", answerText: "R", isSubmited: false },
      ],
    },
  ];

  const Question2 = () => (
    <div>
      <div className={styles.question}>
        What are your favorite programming languages? Please select 2.
      </div>
      <div className={styles.answer}>
        <select>
          <option>Select an option</option>
        </select>
        <div className="overSelect"></div>
      </div>
      <div id="checkboxes">
        <label htmlFor="one">
          <input type="checkbox" id="one" />
          First checkbox
        </label>
        <label htmlFor="two">
          <input type="checkbox" id="two" />
          Second checkbox
        </label>
        <label htmlFor="three">
          <input type="checkbox" id="three" />
          Third checkbox
        </label>
      </div>
    </div>
  );

  const Question3 = () => <div></div>;

  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <div>
      <div className={styles.display}>
        <div className={styles.question}>
          Question
          {currentQuestion + 1} : {questions[currentQuestion]?.questionText}
        </div>
        {currentQuestion === 0 && (
          <div className={styles.answer}>
            <button
              className={styles.btnQuestion1}
              onClick={() => setCurrentQuestion(1)}
            >
              ques 2
            </button>
            <button
              className={styles.btnQuestion1}
              onClick={() => setCurrentQuestion(2)}
            >
              ques 3
            </button>
          </div>
        )}
        {currentQuestion === 1 && <Question2 />}
        {currentQuestion === 2 && <Question3 />}
      </div>
    </div>
  );
};
export default Survey;
