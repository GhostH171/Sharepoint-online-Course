import * as React from "react";
import { useState } from "react";
import { FunctionComponent } from "react";
import { ISurveyProps } from "./ISurvey";
import styles from "./Survey.module.scss";
import { FaStar } from "react-icons/fa";
import { DatePicker } from "office-ui-fabric-react";
import { SPOpertations } from "../../Services/SPServices";
import * as dayjs from "dayjs";

const Survey: FunctionComponent<ISurveyProps> = (props) => {
  const spOperations = new SPOpertations();
  const questions = [
    {
      id: 1,
      questionText:
        "If you select Answer A, your next question will be Question 2. If you select Answer B, your next question will be Question 3",
    },
    {
      id: 2,
      questionText:
        "What are your favorite programming languages? Please select 2.",
    },
    {
      id: 3,
      questionText: "When is your birthday? ",
    },
    {
      id: 4,
      questionText: "Give us a rate : ",
    },
  ];
  const question2Ans = [
    {
      title: "C#",
      id: "cSharp",
    },
    {
      title: "Java",
      id: "java",
    },
    {
      title: "PHP",
      id: "php",
    },
    {
      title: "Python",
      id: "python",
    },
    {
      title: "R",
      id: "r",
    },
  ];
  const [answer2, setAnswer2] = useState<string[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [prevQuestion, setPrevQuestion] = useState(0);
  const handleAnswer2 = (key, e) => {
    const arrCount = [key];
    const isContainAnswer = answer2.findIndex((a) => a === key) > -1;
    if (answer2.length + 1 > 2 && !isContainAnswer) {
      e.preventDefault();
      return;
    }
    if (!isContainAnswer) {
      console.log(1);
      setAnswer2((prev) => [...prev, key]);
    } else {
      console.log(2);
      setAnswer2((prev) => prev.filter((item) => item !== key));
    }
    console.log(answer2);
  };

  // Question 2
  //-----------------------------------------------------------------
  const Question2 = () => (
    <div id="checkboxes" className={styles.ques2Answer}>
      {question2Ans.map((ans) => (
        <label htmlFor={ans.id}>
          <input
            type="checkbox"
            id={ans.id}
            checked={answer2.findIndex((a) => a === ans.title) > -1}
            onChange={(e) => {
              handleAnswer2(ans.title, e);
            }}
          />
          {ans.title}
        </label>
      ))}
      <div className={styles.question2Holder}>
        <button
          className={styles.btnQuestion2}
          onClick={() => {
            setCurrentQuestion(0);
          }}
        >
          Back
        </button>
        <button
          disabled={answer2.length < 2}
          className={styles.btnQuestion2}
          onClick={() => {
            setPrevQuestion(1);
            setCurrentQuestion(2);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );

  //Question 3
  const [date, setDate] = useState(null);
  const [question3IsSelected, setQuestion3IsSelected] = useState(false);
  console.log(date);
  const [nextValidate, setNextValidate] = useState(false);
  const getAge = (date) => {
    const today = new Date();
    const birthDate = new Date(date);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return `You are ${age} years and ${Math.abs(m)} months old`;
  };

  //-----------------------------------------------------------------

  const Question3 = () => (
    <div className={styles.ques2Answer}>
      <DatePicker
        value={date}
        onSelectDate={(value) => {
          setDate(value);
          setQuestion3IsSelected(true);
        }}
      />
      {question3IsSelected ? <p>{getAge(date)}</p> : ""}
      {nextValidate ? (
        <p style={{ color: "red" }}>Please answer the question</p>
      ) : (
        ""
      )}

      <div className={styles.question2Holder}>
        <button
          className={styles.btnQuestion2}
          onClick={() => {
            setCurrentQuestion(prevQuestion);
          }}
        >
          Back
        </button>
        <button
          className={styles.btnQuestion2}
          onClick={() => {
            if (date === null) {
              setNextValidate(true);
            } else {
              setCurrentQuestion(3);
              setNextValidate(false);
            }
          }}
        >
          Next
        </button>
      </div>
    </div>
  );

  // ----------------------------------------------------------------
  const colors = {
    blue: "#4f6bed",
    grey: "#a9a9a9",
  };
  // ----------------------------------------------------------------
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = new Array(5);
  stars.fill(0);
  const handleClick = (value) => {
    setCurrentValue(value);
    console.log(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  //-----------------------------------------------------------------

  const Question4 = () => (
    <div className={styles.startsHolder}>
      <div className={styles.stars}>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              onClick={() => {
                handleClick(index + 1);
              }}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={
                (hoverValue || currentValue) > index ? colors.blue : colors.grey
              }
              style={{
                marginRight: 10,
                cursor: "pointer",
              }}
            />
          );
        })}
      </div>
      <div className={styles.question2Holder}>
        <button
          className={styles.btnQuestion2}
          onClick={() => {
            setCurrentQuestion(2);
          }}
        >
          Back
        </button>
        <button
          className={styles.btnQuestion2}
          style={{ marginLeft: "10px" }}
          onClick={() => {
            onSubmit();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );

  const onSubmit = async () => {
    const displayName = props.userInfor.DisplayName;

    const pushData = [
      {
        UserID: displayName,
        Question: questions[1].questionText,
        Answer: answer2.join(),
      },
      {
        UserID: displayName,
        Question: questions[2].questionText,
        Answer: dayjs(date).format("DD-MM-YYYY"),
      },
      {
        UserID: displayName,
        Question: questions[3].questionText,
        Answer: currentValue + " " + "Stars",
      },
    ];

    const promises = pushData.map((item) => {
      return SPOpertations.CreateListItem(
        props.context,
        item.UserID,
        item.Question,
        item.Answer
      );
    });

    await Promise.all(promises);

    await spOperations.GetExactList(props.context).then((res) => {
      props.setTabularData(res.value);
    });

    props.setUserHasAnswer(true);
  };

  return (
    <div>
      <div className={styles.display}>
        <div className={styles.question} style={{ marginBottom: "10px" }}>
          <strong>Question {currentQuestion + 1} : </strong>
          {questions[currentQuestion].questionText}
        </div>
        {currentQuestion === 0 && (
          <div className={styles.answer}>
            <button
              className={styles.btnQuestion1}
              onClick={() => setCurrentQuestion(1)}
            >
              (A) Answer A, Go to Question 2
            </button>
            <button
              className={styles.btnQuestion1}
              onClick={() => {
                setCurrentQuestion(2);
              }}
            >
              {"B"} Answer B, Go to Question 3
            </button>
          </div>
        )}
        {currentQuestion === 1 && <Question2 />}
        {currentQuestion === 2 && <Question3 />}
        {currentQuestion === 3 && <Question4 />}
      </div>
    </div>
  );
};
export default Survey;
