import * as React from "react";
import { useState } from "react";
import { FunctionComponent } from "react";
import { IHeaderProps } from "./IHeader";
import styles from "./Header.module.scss";
import * as dayjs from "dayjs";

const Header: FunctionComponent<IHeaderProps> = (props) => {
  const [currentDate, setCurrentDate] = React.useState(
    dayjs().format(`YYYY-MM-DD HH:mm:ss`)
  );
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(dayjs().format(`YYYY-MM-DD HH:mm:ss`));
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const onStartHandler = () => {
    props.setIsSurveyStarted(true);
    props.setIsViewResponse(false);
  };

  const onViewResponse = () => {
    props.setIsSurveyStarted(false);
    props.setIsViewResponse(true);
  };

  console.log("asdsa", props.isSurveyStarted, props.userHasAnswer);
  return (
    <div className={styles.container}>
      <div className={styles.display}>
        <div className={styles.displayTop}>
          <div className={styles.infor}>
            <h2>{props.userInfor.DisplayName}</h2>
            <span style={{ marginBottom: "10px" }}>
              Email: {props.userInfor.Email}
            </span>
            <span>Date: {currentDate}</span>
          </div>
          <div className={styles.rightInfor}>
            {/* {!props.isSurveyStarted && ?( 
              <button
              className={styles.btnStartSurvey}
              onClick={onStartHandler}
            >
              Start Survey
            </button>
            )} */}

            {props.userHasAnswer ? (
              <button
                className={styles.btnStartSurvey}
                onClick={onViewResponse}
              >
                View My Response
              </button>
            ) : (
              <button
                className={styles.btnStartSurvey}
                onClick={onStartHandler}
              >
                Start Survey
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
