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
      History of questions and answers
      <table>
        <thead>
          <tr>
            <th>Question</th>
            <th>Answer</th>
          </tr>
        </thead>
        <tbody>
          {props.tabularData.map((witch) => {
            return (
              <tr>
                <td>{witch.Question}</td>
                <td>{witch.Answer}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DisplayContent;
