import * as React from "react";
import { FunctionComponent } from "react";
import { IQuestion2Props } from "./IQuestion2";
import styles from "./Question2.module.scss";
const Question2: FunctionComponent<IQuestion2Props> = (props) => {
  return (
    <div>
      <div className={styles.question}>
        What are your favorite programming languages? Please select 2.
      </div>
      <div className={styles.answer}>
        <select>
          <option>Select an option</option>
        </select>
        <div className="overSelect"></div>
      </div>
      <div id="checkboxes">
        <label htmlFor="one">
          <input type="checkbox" id="one" />
          First checkbox
        </label>
        <label htmlFor="two">
          <input type="checkbox" id="two" />
          Second checkbox
        </label>
        <label htmlFor="three">
          <input type="checkbox" id="three" />
          Third checkbox
        </label>
      </div>
    </div>
  );
};

export default Question2;
