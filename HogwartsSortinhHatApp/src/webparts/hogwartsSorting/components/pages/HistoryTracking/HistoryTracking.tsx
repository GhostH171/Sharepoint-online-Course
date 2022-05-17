import * as React from "react";
import { FunctionComponent } from "react";
import { IHistoryTrackingProps } from "./IHistoryTracking";
import styles from "./HistoryTracking.module.scss";
import * as dayjs from "dayjs";

export interface IHogwartsSortingWebPartProps {
  description: string;
}
const HistoryTracking: FunctionComponent<IHistoryTrackingProps> = (props) => {
  return (
    <div className={styles.content}>
      History Change House
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>House</th>
            <th>Enrolled date</th>
          </tr>
        </thead>
        <tbody>
          {!props.tabularData?.length && <div>No data</div>}

          {props.tabularData &&
            props.tabularData?.map((witch) => {
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

export default HistoryTracking;
