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
  const getTodos = () => {
    return new Promise((resolve, reject) => {
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
            resolve(resp);
            props.todo = resp;
            console.log(props.todo?.value);
          });
        });
    });
  };

  async function GetData() {
    const data = await getTodos();
    console.log("data", data);
    console.log("aaaa", props.todo?.value[0]?.Title);
  }
  useEffect(() => {
    GetData();
  }, []);
  return (
    <div className={styles.task}>
      <h3>Title: {props.todo?.value[0]?.Title} </h3>
    </div>
  );
};
export default TaskDisplay;
