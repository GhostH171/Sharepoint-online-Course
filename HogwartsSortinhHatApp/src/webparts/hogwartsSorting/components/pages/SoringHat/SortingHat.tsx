import * as React from "react";
import { FunctionComponent } from "react";
import { ISortingHatProps } from "./ISortingHat";
import styles from "./SortingHat.module.scss";
import * as dayjs from "dayjs";

export interface IHogwartsSortingWebPartProps {
  description: string;
}
const SortingHat: FunctionComponent<ISortingHatProps> = (props) => {
  return (
    <div className={styles.content}>
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>House</th>
            <th>Enrolled date</th>
          </tr>
        </thead>
        <tbody>
          {props.tabularData.value.map((witch) => {
            return (
              <tr>
                <td>{witch.FullName}</td>
                <td>{witch.House}</td>
                <td>
                  {dayjs(witch.Dateandtime).format("YYYY-MM-DD HH:mm:ss")}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SortingHat;
