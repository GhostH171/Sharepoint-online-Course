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
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Question</th>
            <th>Answer</th>
          </tr>
        </thead>
        <tbody>
          {props.tabularData.map((item, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td
                  style={{
                    textAlign: "left",
                    padding: "10px",
                    width: "80%",
                  }}
                >
                  {item.Question}
                </td>
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
