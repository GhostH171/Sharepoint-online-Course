import * as React from "react";
import { useState } from "react";
import { FunctionComponent } from "react";
import { IHeaderProps } from "./IHeader";
import styles from "./Header.module.scss";
import * as dayjs from "dayjs";

const Header: FunctionComponent<IHeaderProps> = (props) => {
  const [toggle, setToggle] = useState(false);
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
    setToggle(!toggle);
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
            <button className={styles.btnStartSurvey} onClick={onStartHandler}>
              Start Survey
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;