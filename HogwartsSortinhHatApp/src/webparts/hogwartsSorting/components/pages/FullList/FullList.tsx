import * as React from "react";
import { FunctionComponent } from "react";
import { IFullListProps } from "./IFullListProps";
import styles from "./FullList.module.scss";
import * as dayjs from "dayjs";

export interface IHogwartsSortingWebPartProps {
  description: string;
}
const FullList: FunctionComponent<IFullListProps> = (props) => {
  return (
    <div className={styles.content}>
      List of Name and House
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>House</th>
            <th>Enrolled date</th>
          </tr>
        </thead>
        <tbody>
          {props.tabularData.map((witch) => {
            return (
              <tr>
                <td>{witch.FullName}</td>
                <td>{witch.House}</td>
                <td>{dayjs(witch.Dateandtime).format("YYYY-MM-DD")}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default FullList;
