import * as React from "react";
import { useState, useEffect } from "react";
import { FunctionComponent } from "react";
import { ITaskDisplayProps } from "./ITaskDisplay";
import { FaTimes } from "react-icons/fa";
import styles from "../../../../webparts/helloWorld/components/HelloWorld.module.scss";
import GetTodoWebpart from "../../../../webparts/helloWorld/GetTodos";
import { SPHttpClient, SPHttpClientResponse } from "@microsoft/sp-http";
import { SPOpertations } from "../../../Services/SPService";

const TaskDisplay: FunctionComponent<ITaskDisplayProps> = (props) => {
  console.log(props.todo);
  const getTodos = () => {
    console.log("abc");
    return props.context.spHttpClient
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
          debugger;
          console.log(resp);
          return <>abc</>;
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const abc = () => {
    console.log("test");
    return <div>Hello123123</div>;
  };

  const [abcd, setAbcd] = useState(<>Hello world</>);
  return (
    <div className={styles.task}>
      <h3>Title: {abcd} 123</h3>
    </div>
  );
};
export default TaskDisplay;
