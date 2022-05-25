import * as React from "react";
import { FunctionComponent } from "react";
import { IDisplayContentProps } from "./IDisplayContentProps";
import styles from "./DisplayContent.module.scss";

export interface IHogwartsSortingWebPartProps {
  description: string;
}
const DisplayContent: FunctionComponent<IDisplayContentProps> = (props) => {
  return (
    <div className={styles.content}>
      <h2>Survey History</h2>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Question</th>
            <th>Answer</th>
          </tr>
        </thead>
        <tbody>
          {props.tabularData.map((item) => {
            return (
              <tr>
                <td>{item.UserID}</td>
                <td>{item.Question}</td>
                <td>{item.Answer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayContent;
