import * as React from "react";
import { FunctionComponent } from "react";
import { IHeaderProps } from "./IHeader";
import styles from "./Header.module.scss";
import * as dayjs from "dayjs";

const Header: FunctionComponent<IHeaderProps> = (props) => {
  const d = new Date();

  React.useEffect(() => {
    fetch(
      "https://5jvv0n.sharepoint.com/_api/SP.UserProfiles.PeopleManager/GetMyProperties"
    ).then((res) => console.log(res));
  }, []);

  console.log(d);
  return (
    <div className={styles.container}>
      <div className={styles.display}>
        <div className={styles.infor}>
          <h1 style={{ fontSize: "40px" }}>User name</h1>
          <span>Email: </span>
          <span>Date: {dayjs().format("YYYY-MM-DD HH:mm:ss")}</span>
        </div>
        <img
          src="https://static.wikia.nocookie.net/harrypotter/images/b/b1/Gryffindor_ClearBG.png"
          alt="Gryffindor"
          className={styles.displayHouse}
        />
      </div>
    </div>
  );
};

export default Header;
