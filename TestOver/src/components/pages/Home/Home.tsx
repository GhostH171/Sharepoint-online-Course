import * as React from "react";
import { FunctionComponent } from "react";
import { IHomeProps } from "./IHome";
import styles from "../../../webparts/helloWorld/components/HelloWorld.module.scss";
import Header from "./header/Header";
import TaskDisplay from "./taskDisplay/TaskDisplay";

const Home: FunctionComponent<IHomeProps> = (props) => {
  return (
    <div className={styles.container}>
      <Header />
      <TaskDisplay />
    </div>
  );
};

export default Home;
