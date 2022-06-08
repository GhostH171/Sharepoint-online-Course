import * as React from "react";
import { useState, useEffect } from "react";
import { FunctionComponent } from "react";
import { ITaskDisplayProps } from "./ITaskDisplay";
import { FaTimes } from "react-icons/fa";
import styles from "../../../../webparts/helloWorld/components/HelloWorld.module.scss";
import GetTodoWebpart from "../../../../webparts/helloWorld/GetTodos";
import { SPHttpClient, SPHttpClientResponse } from "@microsoft/sp-http";
import { SPOpertations } from "../../../Services/SPService";
import { FontClassNames } from "office-ui-fabric-react";

const TaskDisplay: React.FC<ITaskDisplayProps> = (props) => {
  const [task, setTask] = useState([]);

  const getTodos = () => {
    return new Promise<any>((resolve, reject) => {
      props.context.spHttpClient
        .get(
          `${props.context.pageContext.web.absoluteUrl}/_api/sp.userprofiles.peoplemanager/GetMyProperties`,
          SPHttpClient.configurations.v1,
          {
            headers: {
              Accept: "application/json;odata=nometadata",
              "odata-version": "",
            },
          }
        )
        .then((response: SPHttpClientResponse) => {
          return response.json();
        })
        .then((res) => {
          new SPOpertations().GetTodoList(props.context).then((resp) => {
            resolve(resp?.value);
          });
        });
    });
  };

  async function GetData() {
    const data: any = await getTodos();

    setTask((prev) => [...prev, ...data]);
  }

  useEffect(() => {
    GetData();
  }, []);

  return (
    <>
      {task.map((item) => (
        <>
          <div className={styles.task}>
            <h3>
              Title: {item.Title}
              <FaTimes style={{ color: "red", cursor: "pointer" }} />
            </h3>
            <p>Date: {item.DayAndTime}</p>
          </div>
        </>
      ))}
      <input
        type="submit"
        value="Logout"
        className={styles.btn}
        style={{ backgroundColor: "red" }}
      />
    </>
  );
};
export default TaskDisplay;
