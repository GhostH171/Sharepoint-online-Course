import * as React from "react";
import { FunctionComponent } from "react";
import { ITaskDisplayProps } from "./ITaskDisplay";
import { FaTimes } from "react-icons/fa";
import styles from "../../../../webparts/helloWorld/components/HelloWorld.module.scss";

const TaskDisplay: FunctionComponent<ITaskDisplayProps> = (props) => {
  return (
    <div>
      <h3>Title: </h3>
    </div>
  );
};
export default TaskDisplay;
