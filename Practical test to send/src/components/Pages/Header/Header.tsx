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

  const [showBtnStart, setShowBtnStart] = useState(true);

  const [showBtnView, setShowBtnView] = useState(true);

  const onStartHandler = () => {
    props.setIsSurveyStarted(true);
    props.setIsViewResponse(false);
    setShowBtnStart(false);
  };

  const onViewResponse = () => {
    props.setIsSurveyStarted(false);
    props.setIsViewResponse(true);
    setShowBtnView(false);
  };

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
            {props.userHasAnswer
              ? showBtnView && (
                  <button
                    className={styles.btnStartSurvey}
                    onClick={onViewResponse}
                  >
                    View My Response
                  </button>
                )
              : showBtnStart && (
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
